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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chart.js */ \"./node_modules/chart.js/dist/Chart.js\");\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chartjs-plugin-annotation */ \"./node_modules/chartjs-plugin-annotation/src/index.js\");\n/* harmony import */ var chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ttest_chart_data_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ttest-chart-data.js */ \"./src/ttest-chart-data.js\");\n/* harmony import */ var _welchs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/welchs */ \"./src/welchs.js\");\n/* harmony import */ var _components_HypothesisComponent_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/HypothesisComponent.vue */ \"./src/components/HypothesisComponent.vue\");\n/* harmony import */ var _components_PPVComponent_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/PPVComponent.vue */ \"./src/components/PPVComponent.vue\");\n/* harmony import */ var _components_ROCComponent_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/ROCComponent.vue */ \"./src/components/ROCComponent.vue\");\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./store/store */ \"./src/store/store.js\");\n// import slider from 'jquery-ui-slider';\n// import $ from \"jquery\";\n\n // npm install chart.js@2.9.4, then tried 2.9.3. so,e say 2.9.4 doesn't work.\n // npm install chartjs-plugin-annotation@0.5.7 --save    <<< used this. necessary?\n// import * as math from 'mathjs';\n\n\n\n\n\n\n\n// store.commit('increment');\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  store: _store_store__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n  name: 'App',\n  components: {\n    HypothesisComponent: _components_HypothesisComponent_vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    PPVComponent: _components_PPVComponent_vue__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n    ROCComponent: _components_ROCComponent_vue__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n  },\n  data() {\n    return {\n      store: _store_store__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n      ttestChartData: _ttest_chart_data_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n      storecount: _store_store__WEBPACK_IMPORTED_MODULE_7__[\"default\"].state.count,\n      ttestChart: null,\n      thumb: null,\n      sliderValue: null,\n      sliderElem: null\n    };\n  },\n  methods: {\n    myFunction: function () {\n      if (this.store.state.crit_t_value > this.store.state.t_value) {\n        this.store.state.crit_t_value = -3.2155;\n        console.log(\"SMALLER\");\n      } else {\n        this.store.state.crit_t_value = 3.2155;\n        console.log(\"BIGGER\");\n      }\n      _store_store__WEBPACK_IMPORTED_MODULE_7__[\"default\"].commit('decrement');\n      _store_store__WEBPACK_IMPORTED_MODULE_7__[\"default\"].commit('updateState');\n      this.storecount++;\n      document.getElementById(\"demo\").innerHTML = \"I have changed!\";\n    },\n    drawAlphaCurve: function (group1, crit_t_value) {\n      let alpha_curve = _welchs__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getAlphaCurve(group1, crit_t_value);\n      this.ttestChartData.data.datasets[3].data = alpha_curve; // was [3]['data']\n      this.ttestChart.update();\n    },\n    drawBetaCurve: function (group2, crit_t_value, ncp) {\n      let beta_curve = _welchs__WEBPACK_IMPORTED_MODULE_3__[\"default\"].drawBetaCurve(group2, crit_t_value, ncp);\n      this.ttestChartData.data.datasets[4].data = beta_curve;\n      this.ttestChart.update();\n    },\n    convertChartXToScreenX: function (x, chart_x_min, chart_x_max, x1, x2, offset) {\n      //return math.round((((x - chart_x_min)/(chart_x_max - chart_x_min))*(x2-x1)) - offset,0);\n      return (x - chart_x_min) / (chart_x_max - chart_x_min) * (x2 - x1) - offset;\n    },\n    convertScreenXToChartX: function (x, x1, x2, chart_x1, chart_x2, thumbOffsetWidth) {\n      return (x + thumbOffsetWidth / 2) / (x2 - x1) * (chart_x2 - chart_x1) + chart_x1;\n    },\n    convertRangeSliderXToChartX: function (rs_x, rs_x1, rs_x2, px_x1, px_x2, chart_x1, chart_x2, thumbWidth) {\n      let rs_prop = rs_x / (rs_x2 - rs_x1);\n      console.log(\"rs_prop\", rs_prop);\n      let px_offset = -(rs_prop - 0.5) * Number(thumbWidth);\n      console.log(\"px_offset\", px_offset);\n      // let px_prop = (rs_prop*(px_x2 - px_x1) + px_offset)/(px_x2 - px_x1);\n      let px_prop = rs_prop + px_offset / (px_x2 - px_x1);\n      console.log(\"px_prop\", px_prop);\n      return px_prop * (chart_x2 - chart_x1) + chart_x1;\n    },\n    slidefunc() {\n      console.log(\"SLIDEFUNC\", this.store.state.axes.x_min, this.store.state.axes.x_max);\n      console.log(Number(this.slideValue));\n      var points = this.ttestChart.chart.getDatasetMeta(0).data;\n      var x1 = Number(points[0]._model.x);\n      var x2 = Number(points[1]._model.x);\n      let slideval = Number(this.slideValue);\n      let thumbWidth = 15;\n      let new_crit_t = this.convertRangeSliderXToChartX(slideval, 0, 100, x1, x2, this.store.state.axes.x_min, this.store.state.axes.x_max, thumbWidth);\n      console.log(\"CONVERT:\", new_crit_t);\n      this.ttestChartData.options.annotation.annotations[1].value = new_crit_t;\n      this.ttestChart.update();\n    },\n    updateState: function () {\n      //updateState: function(crit_t_value, df, ncp)\n      // calculations\n      crit_t_value_beta = crit_t_value - ncp; // ncp: non-centrality parameter\n      alpha = getAlpha(crit_t_value, df);\n      beta = getBeta(crit_t_value_beta, df);\n\n      // // update display\n      // elem('crit_t_value').innerText = crit_t_value;\n      // elem('sig-level').innerText = round(alpha);\n\n      lineChart.options.annotation.annotations[1]['value'] = crit_t_value;\n      lineChart.update();\n\n      // drawAlphaCurve(group1, crit_t_value);\n      // drawBetaCurve(group2, crit_t_value);\n      this.drawAlphaCurve(this.store.state.group1, this.store.state.crit_t_value);\n      this.drawBetaCurve(this.store.state.group2, this.store.state.crit_t_value, this.store.state.ncp);\n      updateConfusionMatrix(alpha, beta);\n      showRejectOrNotReject(crit_t_value, t_value);\n      updateProbabilityTree();\n    },\n    initThumb() {\n      var points = this.ttestChart.chart.getDatasetMeta(0).data;\n      var x1 = points[0]._model.x;\n      var x2 = points[1]._model.x;\n      this.sliderElem.style.left = x1 + \"px\";\n      this.sliderElem.style.width = x2 - x1 + \"px\";\n    }\n  },\n  computed: {\n    computedLeft: function () {\n      return \"51px\";\n    }\n  },\n  mounted() {\n    chart_js__WEBPACK_IMPORTED_MODULE_0___default().plugins.register((chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_1___default()));\n    this.ttestChart = new (chart_js__WEBPACK_IMPORTED_MODULE_0___default())(document.getElementById('ttest-chart'), this.ttestChartData);\n    this.ttestChartData.data.datasets[0].data = [{\n      x: -4.753,\n      y: 0\n    }, {\n      x: 7.232,\n      y: 0\n    }];\n    this.ttestChartData.options.scales.xAxes[0].ticks.min = this.store.state.axes.min;\n    this.ttestChartData.options.scales.xAxes[0].ticks.max = this.store.state.axes.max;\n    this.ttestChartData.options.scales.yAxes[0].ticks.max = 0.5;\n    this.ttestChartData.options.annotation.annotations[0].label.content = 'p = ' + this.store.state.p_value;\n    this.ttestChartData.options.annotation.annotations[0].value = this.store.state.t_value;\n    this.ttestChartData.options.annotation.annotations[1].content = '\\u03B1' + this.store.state.alpha;\n    this.ttestChartData.options.annotation.annotations[1].value = this.store.state.crit_t_value;\n    this.ttestChartData.data.datasets[1].data = this.store.state.group1.dist;\n    this.ttestChartData.data.datasets[2].data = this.store.state.group2.dist;\n    this.ttestChart.update();\n    this.drawAlphaCurve(this.store.state.group1, this.store.state.crit_t_value);\n    this.drawBetaCurve(this.store.state.group2, this.store.state.crit_t_value, this.store.state.ncp);\n    this.sliderElem = document.getElementById('myRange');\n    this.initThumb();\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvQHZ1ZS92dWUtbG9hZGVyLXYxNS9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NyYy9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQTRMQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdnVlYXBwL3NyYy9BcHAudnVlPzExYzQiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IGlkPVwiYXBwXCI+XG4gXG5cbiAgPGRpdiBjbGFzcz1cImhlcm8taW1hZ2VcIiBpZD1cIk9yYW5nZVdpbmRvd1wiPlxuICAgIDxkaXYgaWQ9XCJ0aXRsZW5hbWVcIj5XZWxjaCdzIDxpPnQ8L2k+LXRlc3Q8L2Rpdj5cbiAgICA8ZGl2IGlkPVwidGl0bGVuYW1lLXN1YlwiPmNhbGN1bGF0b3I8L2Rpdj5cbiAgPC9kaXY+XG5cbiAgPGRpdiBpZD1cIkJsYWNrV2luZG93XCI+XG4gICAgPGRpdiBzdHlsZT1cInRleHQtYWxpZ246anVzdGlmeVwiPlxuICAgICAgSXMgdGhlcmUgYSBzdGF0aXN0aWNhbGx5IHNpZ25pZmljYW50IGRpZmZlcmVuY2UgYmV0d2VlbiB0d28gZGF0YXNldHM/PHA+PC9wPlxuICAgICAgTW92ZSB0aGUgc2xpZGVyIGFuZCBvYnNlcnZlIHRoZSBpbXBhY3Qgb2YgdGhlIHNpZ25pZmljYW5jZSBsZXZlbCBvbiB0aGUgcHJvYmFiaWxpdHkgb2YgbWFraW5nIHRoZSB3cm9uZyBkZWNpc2lvbi4gSW5wdXQgYW5kIGV4cGxvcmUgeW91ciBkYXRhc2V0cy5cbiAgICAgIFRoaXMgY2FsY3VsYXRvciBpcyBmb3Igb25lLXRhaWxlZCBXZWxjaCdzIDxpPnQ8L2k+LXRlc3RzLiBUaGUgZGF0YSBhcmUgYXNzdW1lZCB0byBiZSBub3JtYWxseSBkaXN0cmlidXRlZC5cbiAgICAgIDxhIGhyZWY9JyNtb3JlLWluZm8nPkZpbmQgbW9yZSBpbmZvcm1hdGlvbi48L2E+XG4gICAgPC9kaXY+XG4gICAgPHA+PC9wPlxuICA8L2Rpdj5cblxuXG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIiBpZD1cIkNvbnRhaW5lcldpbmRvd1wiPlxuXG4gICAgPHA+PGJyPjxwPjxicj48cD48YnI+PHA+XG5cbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5cblxuICAgICAgICA8IS0tIHslIGlmIHRlc3RfcmVzdWx0cyAlfSAtLT5cbiAgICAgICAgPCEtLSA8ZGl2IGlkPVwic2xpZGVyXCIgY2xhc3M9XCJzbGlkZXJcIj5cbiAgICAgICAgICA8ZGl2IGlkPVwidGh1bWJcIiBjbGFzcz1cInRodW1iXCIgb250b3VjaG1vdmU9XCJtb3ZlVGh1bWJNb2JpbGUoZXZlbnQpXCI+PC9kaXY+XG4gICAgICAgICAgPGRpdiBpZD1cInRodW1iXCIgY2xhc3M9XCJ0aHVtYlwiPjwvZGl2PlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFuZ2VcIiBpZD1cInRodW1iXCIgY2xhc3M9XCJ0aHVtYlwiIC8+XG4gICAgICAgIDwvZGl2PiAgLS0+XG4gICAgICBcbiAgICAgICAgPGRpdiBjbGFzcz1cInNsaWRlY29udGFpbmVyXCIgaWQ9XCJzbGlkZWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFuZ2VcIiBtaW49XCIwXCIgbWF4PVwiMTAwXCIgdmFsdWU9XCI1MFwiIGNsYXNzPVwic2xpZGVyXCIgaWQ9XCJteVJhbmdlXCIgdi1tb2RlbD1cInNsaWRlVmFsdWVcIiB2LW9uOmlucHV0PVwic2xpZGVmdW5jXCIgdi1iaW5kOnN0eWxlPVwieyBsZWZ0OiBjb21wdXRlZExlZnQgfVwiPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxjYW52YXMgaWQ9XCJ0dGVzdC1jaGFydFwiIHdpZHRoPVwiMTAwMFwiIGhlaWdodD1cIjgwMFwiPjwvY2FudmFzPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHA+PGJyPjxwPjxicj5cbiAgICAgICAgPCEtLSB7JSBlbmRpZiAlfSAtLT5cblxuICAgICAgICA8Yj48c3BhbiBpZD1cIm1lc3NhZ2VcIj48L3NwYW4+PC9iPlxuICAgICAgICA8YnI+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImVudGVyLWRhdGFcIj5cbiAgICAgICAgICA8Zm9ybSBpZD1cImRhdGEtZm9ybVwiIGFjdGlvbj1cInslIHVybCAnY29yZTp0dGVzdCcgJX1cIiBtZXRob2Q9J3Bvc3QnIGNsYXNzPVwiZm9ybVwiPlxuICAgICAgICAgIDwhLS0geyUgY3NyZl90b2tlbiAlfSAtLT5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy02IGNvbC1zbS00XCI+XG4gICAgICAgICAgICAgICAgPCEtLSB7eyBmb3JtLmRhdGFzZXQxfGFzX2NyaXNweV9maWVsZCB9fSAtLT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtNiBjb2wtc20tNFwiPlxuICAgICAgICAgICAgICAgIDwhLS0ge3sgZm9ybS5kYXRhc2V0Mnxhc19jcmlzcHlfZmllbGQgfX0gLS0+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1zbS00XCI+XG4gICAgICAgICAgICAgICAgPGI+U1RBVElTVElDUzwvYj48YnI+PGJyPlxuICAgICAgICAgICAgICAgIDxiPmNyaXRpY2FsIHQ6PC9iPiA8c3BhbiBpZD1cImNyaXRfdF92YWx1ZVwiPnt7IHRoaXMuc3RvcmUuc3RhdGUuY3JpdF90X3ZhbHVlIH19PC9zcGFuPjxicj5cbiAgICAgICAgICAgICAgICA8Yj5zaWcgbGV2ZWwgKCYjOTQ1Oyk6PC9iPiA8c3BhbiBpZD1cInNpZy1sZXZlbFwiPnt7IHRoaXMuc3RvcmUuc3RhdGUuYWxwaGEgfX08L3NwYW4+PGJyPlxuICAgICAgICAgICAgICAgIDxicj5cblxuICAgICAgICAgICAgICAgIDxiPnQtdmFsdWU6PC9iPiA8c3BhbiBpZD1cInRfdmFsdWVcIj57eyB0aGlzLnN0b3JlLnN0YXRlLnRfdmFsdWUgfX08L3NwYW4+PGJyPlxuICAgICAgICAgICAgICAgIDxiPnAtdmFsdWU6PC9iPiB7eyB0aGlzLnN0b3JlLnN0YXRlLnBfdmFsdWUgfX08YnI+XG4gICAgICAgICAgICAgICAgPGJyPlxuXG4gICAgICAgICAgICAgICAgPCEtLSA8Yj5kZjo8L2I+IHt7IHRlc3RfcmVzdWx0cy5kZiB9fTxicj4gLS0+XG4gICAgICAgICAgICAgICAgPCEtLSA8Yj5lZmZlY3Qgc2l6ZTo8L2I+IHt7IHRlc3RfcmVzdWx0cy5lZmZlY3Rfc2l6ZSB9fTxicj4gLS0+XG4gICAgICAgICAgICAgICAgPGI+bmNwOjwvYj4gPHNwYW4gaWQ9XCJuY3BcIj57eyB0aGlzLnN0b3JlLnN0YXRlLm5jcCB9fTwvc3Bhbj48YnI+XG4gICAgICAgICAgICAgICAgPGJyPjxicj5cblxuICAgICAgICAgICAgICAgIDxidXR0b24gbmFtZT1cInN1Ym1pdFwiIHN0eWxlPVwibWFyZ2luLWJvdHRvbTo1cHhcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiPkFuYWx5emU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBzdHlsZT1cIm1hcmdpbi1ib3R0b206NXB4XCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIiBvbmNsaWNrPVwiY2xlYXJGb3JtKClcIj5DbGVhcjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxicj48YnI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Zvcm0+XG5cbiAgICAgICAgICA8ZGl2IHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogI2U4ZThlODsgcGFkZGluZzoxMHB4OyBtaW4td2lkdGg6MzAwcHg7XCIgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtNFwiPlxuICAgICAgICAgICAgICA8c3BhbiBpZD1cIlNtYWxsU2NyZWVuXCI+PGI+R3JvdXAgMTwvYj48YnI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIHt7IHRoaXMuc3RvcmUuc3RhdGUuZ3JvdXAxLm1lYW4gfX08YnI+XG4gICAgICAgICAgICAgICAge3sgdGhpcy5zdG9yZS5zdGF0ZS5ncm91cDEuc2QgfX08YnI+XG4gICAgICAgICAgICAgICAge3sgdGhpcy5zdG9yZS5zdGF0ZS5ncm91cDEubiB9fTxicj5cbiAgICAgICAgICAgICAgPCEtLSB7eyBkYXRhMS5tZWFuIH19PGJyPlxuICAgICAgICAgICAgICB7eyBkYXRhMS5zZCB9fTxicj5cbiAgICAgICAgICAgICAge3sgZGF0YTEubiB9fTxicj4gLS0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtNFwiPlxuICAgICAgICAgICAgICA8c3BhbiBpZD1cIlNtYWxsU2NyZWVuXCI+PGI+R3JvdXAgMjwvYj48YnI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIHt7IHRoaXMuc3RvcmUuc3RhdGUuZ3JvdXAyLm1lYW4gfX08YnI+XG4gICAgICAgICAgICAgICAge3sgdGhpcy5zdG9yZS5zdGF0ZS5ncm91cDIuc2QgfX08YnI+XG4gICAgICAgICAgICAgICAge3sgdGhpcy5zdG9yZS5zdGF0ZS5ncm91cDIubiB9fTxicj5cbiAgICAgICAgICAgICAgPCEtLSB7eyBkYXRhMi5tZWFuIH19PGJyPlxuICAgICAgICAgICAgICB7eyBkYXRhMi5zZCB9fTxicj5cbiAgICAgICAgICAgICAge3sgZGF0YTIubiB9fTxicj4gLS0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtNFwiPlxuICAgICAgICAgICAgICA8c3BhbiBpZD1cIlNtYWxsU2NyZWVuXCI+PGJyPjwvc3Bhbj5cbiAgICAgICAgICAgICAgPGI+TWVhbjwvYj48YnI+XG4gICAgICAgICAgICAgIDxiPlNEPC9iPjxicj5cbiAgICAgICAgICAgICAgPGI+TjwvYj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj48IS0tIGNsb3NlIGVudGVyLWRhdGEgZGl2IC0tPlxuICAgICAgICA8cD48L3A+PGJyPlxuICAgICAgPC9kaXY+IDwhLS0gY29sdW1uIGVuZCAtLT5cblxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xXCI+XG4gICAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNVwiPlxuXG4gICAgICA8IS0tIHslIGlmIHRlc3RfcmVzdWx0cyAlfSAtLT5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0YWJiZWRcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJ0YWJzXCIgaWQ9XCJ0YWItbmF2LTFcIiBjaGVja2VkPlxuICAgICAgICA8bGFiZWwgZm9yPVwidGFiLW5hdi0xXCI+SHlwb3RoZXNpcyBUZXN0aW5nPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJ0YWJzXCIgaWQ9XCJ0YWItbmF2LTJcIj5cbiAgICAgICAgPGxhYmVsIGZvcj1cInRhYi1uYXYtMlwiPlBQVjwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwidGFic1wiIGlkPVwidGFiLW5hdi0zXCI+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJ0YWItbmF2LTNcIj5ST0M8L2xhYmVsPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJzXCI+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFiXCI+XG4gICAgICAgICAgICA8SHlwb3RoZXNpc0NvbXBvbmVudCAvPiBcbiAgICAgICAgICA8L2Rpdj4gPCEtLSBlbmQgaHlwb3RoZXNpcyB0ZXN0aW5nIC0tPlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRhYlwiPlxuICAgICAgICAgICAgPFBQVkNvbXBvbmVudCAvPlxuICAgICAgICAgIDwvZGl2PiA8IS0tIGVuZCBQUFYgLS0+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFiXCI+XG4gICAgICAgICAgICA8Uk9DQ29tcG9uZW50IC8+XG4gICAgICAgICAgPC9kaXY+IDwhLS0gZW5kIFJPQyAtLT5cblxuICAgICAgICA8L2Rpdj4gPCEtLSBlbmQgdGFicyAtLT5cbiAgICAgIDwvZGl2PiAgPCEtLSBlbmQgdGFiYmVkIC0tPlxuICAgICAgICBcbiAgICAgIDwhLS0geyUgZW5kaWYgJX0gLS0+XG4gICAgPC9kaXY+IDwhLS0gZW5kIGNvbHVtbiAtLT5cbiAgPC9kaXY+IDwhLS0gZW5kIHJvdyAtLT5cblxuXG4gICAgPGRpdiBpZD1cIlNtYWxsU2NyZWVuXCIgc3R5bGU9XCJoZWlnaHQ6IDEyMDBweDtcIj4gIDwhLS0gYnVmZmVyIHNwYWNlIGZvciBzbWFsbCBzY3JlZW5zIC0tPlxuICAgIDwvZGl2PlxuICAgIDxicj48YnI+PGJyPlxuICA8L2Rpdj5cblxuXG5cbiAgPGRpdiBpZD1cIkJsYWNrV2luZG93XCI+XG5cbiAgICA8YSBuYW1lPVwibW9yZS1pbmZvXCI+PC9hPlxuICAgIDxkaXYgY2xhc3M9XCJtb3JlLWluZm9cIj5cbiAgICAgIDxoND5Nb3JlIGluZm9ybWF0aW9uPC9oND5cblxuICAgICAgVGhlIFdlbGNoJ3MgPGk+dDwvaT4tdGVzdCwgb3IgdW5lcXVhbCB2YXJpYW5jZXMgPGk+dDwvaT4tdGVzdCwgY2FuIHRlc3QgaHlwb3RoZXNlcyBzdWNoIGFzIHdoZXRoZXIgdGhlIG1lYW5zIG9mIHR3byBpbmRlcGVuZGVudCBub3JtYWxseS1kaXN0cmlidXRlZCBwb3B1bGF0aW9ucyBhcmUgZXF1YWwuIFdoaWxlIHRoZSBjb21tb25seS11c2VkIFN0dWRlbnQgPGk+dDwvaT4tdGVzdCByZXF1aXJlcyB0aGF0IHRoZSB0d28gc2FtcGxlcyBzaGFyZSBlcXVhbCB2YXJpYW5jZXMgYW5kIGVxdWFsIHNhbXBsZSBzaXplcywgdGhlIFdlbGNoJ3MgPGk+dDwvaT4tdGVzdCBkb2VzIG5vdCBoYXZlIHRoaXMgcmVxdWlyZW1lbnQuIFJlc2VhcmNoZXJzIGFyZ3VlIHRoYXQgdGhlIFdlbGNoJ3MgPGk+dDwvaT4tdGVzdCBpcyBtb3JlIHZlcnNhdGlsZSBhbmQgc2hvdWxkIGluc3RlYWQgYmUgdXNlZCBieSBkZWZhdWx0LjxzdXA+MSwyPC9zdXA+XG4gICAgICA8YnI+PGJyPlxuICAgICAgU3RhdGlzdGljYWwgcmlnb3IgY2FuIGJlIGFjaGlldmVkIHdpdGggPGk+dDwvaT4tdGVzdHMsIHlldCB0aGUgc2lnbmlmaWNhbmNlIGxldmVsIGlzIHNldCBhcmJpdHJhcmlseS4gV2hpbGUgbG93ZXJpbmcgc2lnbmlmaWNhbmNlIGxldmVscyBtaXRpZ2F0ZXMgZmFsc2UgcG9zaXRpdmVzICgmIzk0NTspLCB0aGUgcHJvYmFiaWxpdHkgb2YgZmFsc2UgbmVnYXRpdmVzICgmIzk0NjspIGluY3JlYXNlcywgYW5kIHRlc3RzIG1heSBmYWlsIHRvIGRldGVjdCBleGlzdGluZyBlZmZlY3RzLjxzdXA+Mzwvc3VwPlxuICAgIDwvZGl2PlxuICAgIDxicj5cblxuXG4gIDwvZGl2PlxuICA8ZGl2IGlkPVwiV2hpdGVXaW5kb3dcIj5cblxuICAgICAgPGg0PlJlZmVyZW5jZXM8L2g0PlxuXG4gICAgICAxLiBEYWhpcnUsIFQuIFAtdmFsdWUsIGEgdHJ1ZSB0ZXN0IG9mIHN0YXRpc3RpY2FsIHNpZ25pZmljYW5jZT8gQSBjYXV0aW9uYXJ5IG5vdGUuIDxpPkFubmFscyBvZiBJYmFkYW4gUG9zdGdyYWR1YXRlIE1lZGljaW5lLjwvaT4gMjAwOCwgPGk+NjwvaT4oMSk6IDIx4oCTMjYuXG4gICAgICA8YnI+XG4gICAgICAyLiBEZWxhY3JlLCBNLjsgTGFrZW5zLCBELjsgTGV5cywgQy4gV2h5IFBzeWNob2xvZ2lzdHMgU2hvdWxkIGJ5IERlZmF1bHQgVXNlIFdlbGNoJ3MgdC10ZXN0IEluc3RlYWQgb2YgU3R1ZGVudCdzIHQtdGVzdC4gPGk+SW50ZXJuYXRpb25hbCBSZXZpZXcgb2YgU29jaWFsIFBzeWNob2xvZ3kuPC9pPiAyMDE3LCA8aT4zMDwvaT4oMSksIDky4oCTMTAxLlxuICAgICAgPGJyPlxuICAgICAgMy4gQmVuamFtaW4sIEQuSi47IEJlcmdlciwgSi5PLjsgSm9oYW5uZXNzb24sIE0uIGV0IGFsLiBSZWRlZmluZSBzdGF0aXN0aWNhbCBzaWduaWZpY2FuY2UuIDxpPk5hdHVyZSBIdW1hbiBCZWhhdmlvdXIuPC9pPiAyMDE4LCA8aT4yPC9pPiwgNuKAkzEwLlxuICAgICAgPGJyPlxuICAgICAgNC4gQ29scXVob3VuLCBELiBBbiBpbnZlc3RpZ2F0aW9uIG9mIHRoZSBmYWxzZSBkaXNjb3ZlcnkgcmF0ZSBhbmQgdGhlIG1pc2ludGVycHJldGF0aW9uIG9mIHAtdmFsdWVzLiA8aT5Sb3lhbCBTb2NpZXR5IE9wZW4gU2NpZW5jZS48L2k+IDIwMTQsIDxpPjE8L2k+KDMpOiAxNDAyMTYuXG5cbiAgPC9kaXY+ICA8IS0tIGNvbnRhaW5lciAtLT4gICBcblxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cblxuXG48c2NyaXB0PlxuLy8gaW1wb3J0IHNsaWRlciBmcm9tICdqcXVlcnktdWktc2xpZGVyJztcbi8vIGltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcblxuaW1wb3J0IENoYXJ0IGZyb20gJ2NoYXJ0LmpzJyAgLy8gbnBtIGluc3RhbGwgY2hhcnQuanNAMi45LjQsIHRoZW4gdHJpZWQgMi45LjMuIHNvLGUgc2F5IDIuOS40IGRvZXNuJ3Qgd29yay5cbmltcG9ydCBjaGFydGpzUGx1Z2luQW5ub3RhdGlvbiBmcm9tIFwiY2hhcnRqcy1wbHVnaW4tYW5ub3RhdGlvblwiOyAvLyBucG0gaW5zdGFsbCBjaGFydGpzLXBsdWdpbi1hbm5vdGF0aW9uQDAuNS43IC0tc2F2ZSAgICA8PDwgdXNlZCB0aGlzLiBuZWNlc3Nhcnk/XG4vLyBpbXBvcnQgKiBhcyBtYXRoIGZyb20gJ21hdGhqcyc7XG5pbXBvcnQgdHRlc3RDaGFydERhdGEgZnJvbSAnLi90dGVzdC1jaGFydC1kYXRhLmpzJ1xuaW1wb3J0IHdlbGNocyBmcm9tICdAL3dlbGNocyc7XG5cblxuaW1wb3J0IEh5cG90aGVzaXNDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnRzL0h5cG90aGVzaXNDb21wb25lbnQudnVlJ1xuaW1wb3J0IFBQVkNvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvUFBWQ29tcG9uZW50LnZ1ZSdcbmltcG9ydCBST0NDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnRzL1JPQ0NvbXBvbmVudC52dWUnXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zdG9yZS9zdG9yZScgXG5cbi8vIHN0b3JlLmNvbW1pdCgnaW5jcmVtZW50Jyk7XG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBzdG9yZSxcbiAgbmFtZTogJ0FwcCcsXG4gIGNvbXBvbmVudHM6IHtcbiAgICBIeXBvdGhlc2lzQ29tcG9uZW50LFxuICAgIFBQVkNvbXBvbmVudCxcbiAgICBST0NDb21wb25lbnQsXG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0b3JlLFxuICAgICAgdHRlc3RDaGFydERhdGE6IHR0ZXN0Q2hhcnREYXRhLFxuICAgICAgc3RvcmVjb3VudDogc3RvcmUuc3RhdGUuY291bnQsXG4gICAgICB0dGVzdENoYXJ0OiBudWxsLFxuICAgICAgdGh1bWI6IG51bGwsXG4gICAgICBzbGlkZXJWYWx1ZTogbnVsbCxcbiAgICAgIHNsaWRlckVsZW06IG51bGwsXG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgbXlGdW5jdGlvbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICh0aGlzLnN0b3JlLnN0YXRlLmNyaXRfdF92YWx1ZSA+IHRoaXMuc3RvcmUuc3RhdGUudF92YWx1ZSkge1xuICAgICAgICAgICAgICB0aGlzLnN0b3JlLnN0YXRlLmNyaXRfdF92YWx1ZSA9IC0zLjIxNTU7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU01BTExFUlwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuc3RvcmUuc3RhdGUuY3JpdF90X3ZhbHVlID0gMy4yMTU1O1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkJJR0dFUlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBzdG9yZS5jb21taXQoJ2RlY3JlbWVudCcpO1xuICAgICAgICAgIHN0b3JlLmNvbW1pdCgndXBkYXRlU3RhdGUnKTtcbiAgICAgICAgICB0aGlzLnN0b3JlY291bnQrKztcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlbW9cIikuaW5uZXJIVE1MID0gXCJJIGhhdmUgY2hhbmdlZCFcIjtcbiAgICB9LFxuICAgIGRyYXdBbHBoYUN1cnZlOiBmdW5jdGlvbihncm91cDEsIGNyaXRfdF92YWx1ZSl7ICBcbiAgICAgIGxldCBhbHBoYV9jdXJ2ZSA9IHdlbGNocy5nZXRBbHBoYUN1cnZlKGdyb3VwMSwgY3JpdF90X3ZhbHVlKTtcbiAgICAgIHRoaXMudHRlc3RDaGFydERhdGEuZGF0YS5kYXRhc2V0c1szXS5kYXRhID0gYWxwaGFfY3VydmU7ICAvLyB3YXMgWzNdWydkYXRhJ11cbiAgICAgIHRoaXMudHRlc3RDaGFydC51cGRhdGUoKTtcbiAgICB9LFxuICAgIGRyYXdCZXRhQ3VydmU6IGZ1bmN0aW9uIChncm91cDIsIGNyaXRfdF92YWx1ZSwgbmNwKXsgIFxuICAgICAgbGV0IGJldGFfY3VydmUgPSB3ZWxjaHMuZHJhd0JldGFDdXJ2ZSAoZ3JvdXAyLCBjcml0X3RfdmFsdWUsIG5jcCk7XG4gICAgICB0aGlzLnR0ZXN0Q2hhcnREYXRhLmRhdGEuZGF0YXNldHNbNF0uZGF0YSA9IGJldGFfY3VydmU7XG4gICAgICB0aGlzLnR0ZXN0Q2hhcnQudXBkYXRlKCk7XG4gICAgfSxcblxuICAgIGNvbnZlcnRDaGFydFhUb1NjcmVlblg6IGZ1bmN0aW9uICh4LCBjaGFydF94X21pbiwgY2hhcnRfeF9tYXgsIHgxLCB4Miwgb2Zmc2V0KXtcbiAgICAvL3JldHVybiBtYXRoLnJvdW5kKCgoKHggLSBjaGFydF94X21pbikvKGNoYXJ0X3hfbWF4IC0gY2hhcnRfeF9taW4pKSooeDIteDEpKSAtIG9mZnNldCwwKTtcbiAgICByZXR1cm4gKCgoeCAtIGNoYXJ0X3hfbWluKS8oY2hhcnRfeF9tYXggLSBjaGFydF94X21pbikpKih4Mi14MSkpIC0gb2Zmc2V0O1xuICAgIH0sXG5cbiAgICBjb252ZXJ0U2NyZWVuWFRvQ2hhcnRYOiBmdW5jdGlvbiAoeCwgeDEsIHgyLCBjaGFydF94MSwgY2hhcnRfeDIsIHRodW1iT2Zmc2V0V2lkdGgpe1xuICAgICAgcmV0dXJuICh4ICsgKHRodW1iT2Zmc2V0V2lkdGgvMikpLyh4MiAtIHgxKSooY2hhcnRfeDItY2hhcnRfeDEpICsgY2hhcnRfeDE7XG4gICAgfSxcblxuICAgIGNvbnZlcnRSYW5nZVNsaWRlclhUb0NoYXJ0WDogZnVuY3Rpb24gKHJzX3gsIHJzX3gxLCByc194MiwgcHhfeDEsIHB4X3gyLCBjaGFydF94MSwgY2hhcnRfeDIsIHRodW1iV2lkdGgpe1xuICAgICAgbGV0IHJzX3Byb3AgPSByc194Lyhyc194Mi1yc194MSk7XG4gICAgICBjb25zb2xlLmxvZyhcInJzX3Byb3BcIiwgcnNfcHJvcCk7XG4gICAgICBsZXQgcHhfb2Zmc2V0ID0gLShyc19wcm9wLTAuNSkqTnVtYmVyKHRodW1iV2lkdGgpOyBcbiAgICAgIGNvbnNvbGUubG9nKFwicHhfb2Zmc2V0XCIsIHB4X29mZnNldCk7XG4gICAgICAvLyBsZXQgcHhfcHJvcCA9IChyc19wcm9wKihweF94MiAtIHB4X3gxKSArIHB4X29mZnNldCkvKHB4X3gyIC0gcHhfeDEpO1xuICAgICAgbGV0IHB4X3Byb3AgPSByc19wcm9wICsgcHhfb2Zmc2V0LyhweF94Mi1weF94MSk7XG4gICAgICBjb25zb2xlLmxvZyhcInB4X3Byb3BcIiwgcHhfcHJvcCk7XG4gICAgICByZXR1cm4gIHB4X3Byb3AqKGNoYXJ0X3gyLWNoYXJ0X3gxKSArIGNoYXJ0X3gxO1xuICAgIH0sXG5cblxuICAgIHNsaWRlZnVuYygpe1xuICAgICAgY29uc29sZS5sb2coXCJTTElERUZVTkNcIiwgdGhpcy5zdG9yZS5zdGF0ZS5heGVzLnhfbWluLCB0aGlzLnN0b3JlLnN0YXRlLmF4ZXMueF9tYXgpO1xuICAgICAgY29uc29sZS5sb2coTnVtYmVyKHRoaXMuc2xpZGVWYWx1ZSkpO1xuICAgICAgdmFyIHBvaW50cyA9IHRoaXMudHRlc3RDaGFydC5jaGFydC5nZXREYXRhc2V0TWV0YSgwKS5kYXRhO1xuICAgICAgdmFyIHgxID0gTnVtYmVyKHBvaW50c1swXS5fbW9kZWwueCk7XG4gICAgICB2YXIgeDIgPSBOdW1iZXIocG9pbnRzWzFdLl9tb2RlbC54KTtcbiAgICAgIGxldCBzbGlkZXZhbCA9IE51bWJlcih0aGlzLnNsaWRlVmFsdWUpO1xuICAgICAgbGV0IHRodW1iV2lkdGggPSAxNTtcbiAgICAgIGxldCBuZXdfY3JpdF90ID0gdGhpcy5jb252ZXJ0UmFuZ2VTbGlkZXJYVG9DaGFydFgoc2xpZGV2YWwsIDAsIDEwMCwgeDEsIHgyLCB0aGlzLnN0b3JlLnN0YXRlLmF4ZXMueF9taW4sIHRoaXMuc3RvcmUuc3RhdGUuYXhlcy54X21heCwgdGh1bWJXaWR0aCk7IFxuICAgICAgY29uc29sZS5sb2coXCJDT05WRVJUOlwiLCBuZXdfY3JpdF90KTtcbiAgICAgIHRoaXMudHRlc3RDaGFydERhdGEub3B0aW9ucy5hbm5vdGF0aW9uLmFubm90YXRpb25zWzFdLnZhbHVlID0gbmV3X2NyaXRfdDtcbiAgICAgIHRoaXMudHRlc3RDaGFydC51cGRhdGUoKTtcbiAgICB9LFxuICAgIFxuICAgIHVwZGF0ZVN0YXRlOiBmdW5jdGlvbigpeyAgLy91cGRhdGVTdGF0ZTogZnVuY3Rpb24oY3JpdF90X3ZhbHVlLCBkZiwgbmNwKVxuICAgICAgLy8gY2FsY3VsYXRpb25zXG4gICAgICBjcml0X3RfdmFsdWVfYmV0YSA9IGNyaXRfdF92YWx1ZSAtIG5jcDsgIC8vIG5jcDogbm9uLWNlbnRyYWxpdHkgcGFyYW1ldGVyXG4gICAgICBhbHBoYSA9IGdldEFscGhhKGNyaXRfdF92YWx1ZSwgZGYpO1xuICAgICAgYmV0YSA9IGdldEJldGEoY3JpdF90X3ZhbHVlX2JldGEsIGRmKTtcblxuICAgICAgLy8gLy8gdXBkYXRlIGRpc3BsYXlcbiAgICAgIC8vIGVsZW0oJ2NyaXRfdF92YWx1ZScpLmlubmVyVGV4dCA9IGNyaXRfdF92YWx1ZTtcbiAgICAgIC8vIGVsZW0oJ3NpZy1sZXZlbCcpLmlubmVyVGV4dCA9IHJvdW5kKGFscGhhKTtcblxuICAgICAgbGluZUNoYXJ0Lm9wdGlvbnMuYW5ub3RhdGlvbi5hbm5vdGF0aW9uc1sxXVsndmFsdWUnXSA9IGNyaXRfdF92YWx1ZTtcbiAgICAgIGxpbmVDaGFydC51cGRhdGUoKTtcblxuICAgICAgLy8gZHJhd0FscGhhQ3VydmUoZ3JvdXAxLCBjcml0X3RfdmFsdWUpO1xuICAgICAgLy8gZHJhd0JldGFDdXJ2ZShncm91cDIsIGNyaXRfdF92YWx1ZSk7XG4gICAgICB0aGlzLmRyYXdBbHBoYUN1cnZlKHRoaXMuc3RvcmUuc3RhdGUuZ3JvdXAxLCB0aGlzLnN0b3JlLnN0YXRlLmNyaXRfdF92YWx1ZSk7XG4gICAgICB0aGlzLmRyYXdCZXRhQ3VydmUodGhpcy5zdG9yZS5zdGF0ZS5ncm91cDIsIHRoaXMuc3RvcmUuc3RhdGUuY3JpdF90X3ZhbHVlLHRoaXMuc3RvcmUuc3RhdGUubmNwKTtcblxuXG4gICAgICB1cGRhdGVDb25mdXNpb25NYXRyaXgoYWxwaGEsIGJldGEpO1xuICAgICAgc2hvd1JlamVjdE9yTm90UmVqZWN0KGNyaXRfdF92YWx1ZSwgdF92YWx1ZSk7XG4gICAgICB1cGRhdGVQcm9iYWJpbGl0eVRyZWUoKTtcbiAgICB9LFxuXG4gICAgaW5pdFRodW1iKCl7XG4gICAgICB2YXIgcG9pbnRzID0gdGhpcy50dGVzdENoYXJ0LmNoYXJ0LmdldERhdGFzZXRNZXRhKDApLmRhdGE7XG4gICAgICB2YXIgeDEgPSBwb2ludHNbMF0uX21vZGVsLng7XG4gICAgICB2YXIgeDIgPSBwb2ludHNbMV0uX21vZGVsLng7XG4gICAgICB0aGlzLnNsaWRlckVsZW0uc3R5bGUubGVmdCA9IHgxICsgXCJweFwiO1xuICAgICAgdGhpcy5zbGlkZXJFbGVtLnN0eWxlLndpZHRoID0geDIgLSB4MSArIFwicHhcIjtcbiAgICB9LFxuXG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgY29tcHV0ZWRMZWZ0OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gXCI1MXB4XCI7XG4gICAgfSxcbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICBDaGFydC5wbHVnaW5zLnJlZ2lzdGVyKGNoYXJ0anNQbHVnaW5Bbm5vdGF0aW9uKVxuICAgIHRoaXMudHRlc3RDaGFydCA9IG5ldyBDaGFydChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHRlc3QtY2hhcnQnKSwgdGhpcy50dGVzdENoYXJ0RGF0YSk7XG4gICAgdGhpcy50dGVzdENoYXJ0RGF0YS5kYXRhLmRhdGFzZXRzWzBdLmRhdGEgPSBbe3g6IC00Ljc1MywgeTogMH0sIHt4OiA3LjIzMiwgeTogMH1dO1xuICAgIHRoaXMudHRlc3RDaGFydERhdGEub3B0aW9ucy5zY2FsZXMueEF4ZXNbMF0udGlja3MubWluID0gdGhpcy5zdG9yZS5zdGF0ZS5heGVzLm1pbjtcbiAgICB0aGlzLnR0ZXN0Q2hhcnREYXRhLm9wdGlvbnMuc2NhbGVzLnhBeGVzWzBdLnRpY2tzLm1heCA9IHRoaXMuc3RvcmUuc3RhdGUuYXhlcy5tYXg7IFxuICAgIHRoaXMudHRlc3RDaGFydERhdGEub3B0aW9ucy5zY2FsZXMueUF4ZXNbMF0udGlja3MubWF4ID0gMC41O1xuXG5cbiAgICB0aGlzLnR0ZXN0Q2hhcnREYXRhLm9wdGlvbnMuYW5ub3RhdGlvbi5hbm5vdGF0aW9uc1swXS5sYWJlbC5jb250ZW50ID0gJ3AgPSAnICsgdGhpcy5zdG9yZS5zdGF0ZS5wX3ZhbHVlO1xuICAgIHRoaXMudHRlc3RDaGFydERhdGEub3B0aW9ucy5hbm5vdGF0aW9uLmFubm90YXRpb25zWzBdLnZhbHVlID0gdGhpcy5zdG9yZS5zdGF0ZS50X3ZhbHVlO1xuICAgIHRoaXMudHRlc3RDaGFydERhdGEub3B0aW9ucy5hbm5vdGF0aW9uLmFubm90YXRpb25zWzFdLmNvbnRlbnQgPSAnXFx1MDNCMScgKyB0aGlzLnN0b3JlLnN0YXRlLmFscGhhOyBcbiAgICB0aGlzLnR0ZXN0Q2hhcnREYXRhLm9wdGlvbnMuYW5ub3RhdGlvbi5hbm5vdGF0aW9uc1sxXS52YWx1ZSA9IHRoaXMuc3RvcmUuc3RhdGUuY3JpdF90X3ZhbHVlO1xuICAgIFxuXG4gICAgdGhpcy50dGVzdENoYXJ0RGF0YS5kYXRhLmRhdGFzZXRzWzFdLmRhdGEgPSB0aGlzLnN0b3JlLnN0YXRlLmdyb3VwMS5kaXN0O1xuICAgIHRoaXMudHRlc3RDaGFydERhdGEuZGF0YS5kYXRhc2V0c1syXS5kYXRhID0gdGhpcy5zdG9yZS5zdGF0ZS5ncm91cDIuZGlzdDtcbiAgICB0aGlzLnR0ZXN0Q2hhcnQudXBkYXRlKCk7XG5cbiAgICB0aGlzLmRyYXdBbHBoYUN1cnZlKHRoaXMuc3RvcmUuc3RhdGUuZ3JvdXAxLCB0aGlzLnN0b3JlLnN0YXRlLmNyaXRfdF92YWx1ZSk7XG4gICAgdGhpcy5kcmF3QmV0YUN1cnZlKHRoaXMuc3RvcmUuc3RhdGUuZ3JvdXAyLCB0aGlzLnN0b3JlLnN0YXRlLmNyaXRfdF92YWx1ZSx0aGlzLnN0b3JlLnN0YXRlLm5jcCk7XG5cblxuICAgIHRoaXMuc2xpZGVyRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteVJhbmdlJyk7XG4gICAgdGhpcy5pbml0VGh1bWIoKTtcblxuICB9LFxuXG59XG5cblxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cblxuLnNsaWRlY29udGFpbmVyIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLyogVGhlIHNsaWRlciBpdHNlbGYgKi9cbi5zbGlkZXIge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7ICAvKiBPdmVycmlkZSBkZWZhdWx0IENTUyBzdHlsZXMgKi9cbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwtd2lkdGggKi9cbiAgaGVpZ2h0OiAxNXB4OyAvKiBTcGVjaWZpZWQgaGVpZ2h0ICovXG4gIGJhY2tncm91bmQ6ICNkM2QzZDM7IC8qIEdyZXkgYmFja2dyb3VuZCAqL1xuICBvdXRsaW5lOiBub25lOyAvKiBSZW1vdmUgb3V0bGluZSAqL1xuICAvKm9wYWNpdHk6IDAuNzsqLyAvKiBTZXQgdHJhbnNwYXJlbmN5IChmb3IgbW91c2Utb3ZlciBlZmZlY3RzIG9uIGhvdmVyKSAqL1xuICAtd2Via2l0LXRyYW5zaXRpb246IC4yczsgLyogMC4yIHNlY29uZHMgdHJhbnNpdGlvbiBvbiBob3ZlciAqL1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4ycztcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIHRvcDogKzVweDtcblxufVxuLyogLnNsaWRlciB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZDogI0UwRTBFMDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KGxlZnQgdG9wLCAjRTBFMEUwLCAjRUVFRUVFKTtcbiAgaGVpZ2h0OiAxNXB4O1xuICBtYXJnaW46IDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufSAqL1xuXG5cbi8qIE1vdXNlLW92ZXIgZWZmZWN0cyAqL1xuLnNsaWRlcjpob3ZlciB7XG4gIG9wYWNpdHk6IDE7IC8qIEZ1bGx5IHNob3duIG9uIG1vdXNlLW92ZXIgKi9cbn1cblxuLyogVGhlIHNsaWRlciBoYW5kbGUgKHVzZSAtd2Via2l0LSAoQ2hyb21lLCBPcGVyYSwgU2FmYXJpLCBFZGdlKSBhbmQgLW1vei0gKEZpcmVmb3gpIHRvIG92ZXJyaWRlIGRlZmF1bHQgbG9vaykgKi9cbi5zbGlkZXI6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lOyAvKiBPdmVycmlkZSBkZWZhdWx0IGxvb2sgKi9cbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgd2lkdGg6IDE1cHg7IC8qIFNldCBhIHNwZWNpZmljIHNsaWRlciBoYW5kbGUgd2lkdGggKi9cbiAgaGVpZ2h0OiAyNXB4OyAvKjI1cHggICBTbGlkZXIgaGFuZGxlIGhlaWdodCAqL1xuICBjdXJzb3I6IHBvaW50ZXI7IC8qIEN1cnNvciBvbiBob3ZlciAqL1xuICBvcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kOiAjZmYzZTAwO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIC8qIHRvcDogLTVweDsgKi9cbiAgLyogYm90dG9tOiAtMnB4OyAqL1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIGxlZnQ6IDBweDtcblxufVxuXG4uc2xpZGVyOjotbW96LXJhbmdlLXRodW1iIHtcbiAgd2lkdGg6IDE1cHg7IC8qIFNldCBhIHNwZWNpZmljIHNsaWRlciBoYW5kbGUgd2lkdGggKi9cbiAgaGVpZ2h0OiAyNXB4OyAvKiBTbGlkZXIgaGFuZGxlIGhlaWdodCAqL1xuICBjdXJzb3I6IHBvaW50ZXI7IC8qIEN1cnNvciBvbiBob3ZlciAqL1xuXG4gIGJhY2tncm91bmQ6ICNmZjNlMDA7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuXG5cbi50aHVtYiB7XG4gIHdpZHRoOiAxNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAwcHg7XG4gIHRvcDogLTVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiAjZmYzZTAwO1xufVxuXG4vKiAjYXBwIHtcbiAgZm9udC1mYW1pbHk6IEF2ZW5pciwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMyYzNlNTA7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG59ICovXG5cbmh0bWwge1xuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cblxuYm9keSB7XG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICNmZjNlMDA7ICovXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MzQzNDM7XG4gIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuYTpsaW5rLCBhOnZpc2l0ZWQge1xuICBjb2xvcjogZ3JleTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4vKiBtb3VzZSBvdmVyIGxpbmsgKi9cbmE6aG92ZXIge1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLyogc2VsZWN0ZWQgbGluayAqL1xuYTphY3RpdmUge1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuXG5oNCB7XG4gIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG59XG5cblxuXG4jQ29udGFpbmVyV2luZG93e1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAyMHB4IDcwcHg7XG59XG5cbiNXaGl0ZVdpbmRvd3tcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgY29sb3I6ICMwMDA7XG4gIHBhZGRpbmc6IDgwcHggNTBweDtcbiAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuXG4jQmxhY2tXaW5kb3d7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA4MHB4IDUwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cblxuI09yYW5nZVdpbmRvd3tcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi9hc3NldHMvd2VsY2hzLnBuZ1wiKTtcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYzsgKi9cbiAgLyogaGVpZ2h0OiA1MDBweDsgKi9cblxuICAvKiBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cblxuICAvKiBDcmVhdGUgdGhlIHBhcmFsbGF4IHNjcm9sbGluZyBlZmZlY3QgKi9cbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICNmZjNlMDA7ICovXG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxMjBweCA1MHB4IDEyMHB4IDUwcHg7XG4gIC8qIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7ICovXG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cblxuXG4jdGl0bGVuYW1le1xuICBmb250LWZhbWlseTogJ1RyZWJ1Y2hldCBNUycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogODBweDtcbiAgLyogcGFkZGluZzogMHB4IDBweCAwcHggMTAwcHg7ICovXG4gIC8qIG1hcmdpbi1ib3R0b206LTEyMHB4ICovXG59XG4jdGl0bGVuYW1lLXN1YntcbiAgZm9udC1mYW1pbHk6ICdUcmVidWNoZXQgTVMnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDcwcHg7XG4gIC8qIHBhZGRpbmc6IDBweCAwcHggMHB4IDEwMHB4OyAqL1xuICAvKiBtYXJnaW4tYm90dG9tOi0xMjBweCAqL1xufVxuXG4ubW9yZS1pbmZvIHtcbiAgcGFkZGluZzogMTBweCAyMHB4IDIwcHggMjBweDtcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmM2UwMDsgIC8qIHByZXZpb3VzbHkgZmY3MDQzICovXG59XG5cblxuLmJveCB7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2U4ZThlODtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIH1cbiAgXG4uYXN0ZXJpc2tGaWVsZCB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuXG4ucmVzcG9uc2l2ZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi8qIC5zbGlkZXIge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQ6ICNFMEUwRTA7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChsZWZ0IHRvcCwgI0UwRTBFMCwgI0VFRUVFRSk7XG4gIGhlaWdodDogMTVweDtcbiAgbWFyZ2luOiAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn0gKi9cbi8qIHdpZHRoOiA1MjVweDsgKi9cblxuXG4udGh1bWIge1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMHB4O1xuICB0b3A6IC01cHg7XG4gIGJhY2tncm91bmQ6ICNmZjNlMDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuXG4uZXJyb3JfYm94IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZThlODtcbn1cblxuLyogQGltcG9ydCBcImNvbXBhc3MvY3NzM1wiOyAqL1xuXG5cbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5cbjo6c2VsZWN0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRFQzZERTtcbn1cblxuLnRhYmJlZCB7XG4vKiAgd2lkdGg6IDcwMHB4O1xuICBtYXJnaW46IDUwcHggYXV0bzsgICovXG59XG5cbi50YWJiZWQgPiBpbnB1dCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi50YWJiZWQgPiBsYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZzogMTJweCAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjNzO1xufVxuXG4udGFiYmVkID4gbGFiZWw6aG92ZXIsXG4udGFiYmVkID4gaW5wdXQ6Y2hlY2tlZCArIGxhYmVsIHtcbiAgYmFja2dyb3VuZDogI2ZmM2UwMDtcbn1cblxuLnRhYnMge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICBjbGVhcjogYm90aDtcbiAgcGVyc3BlY3RpdmU6IDYwMHB4O1xufVxuXG4udGFicyA+IGRpdiB7XG4gIC8qIHdpZHRoOiA3MDBweDsgKi9cbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmYzZTAwO1xuICBwYWRkaW5nOiAxMHB4IDMwcHggNDBweDtcbiAgbGluZS1oZWlnaHQ6IDEuNGVtO1xuICBvcGFjaXR5OiAwO1xuICB6LWluZGV4OiAwO1xufVxuXG5cbiN0YWItbmF2LTE6Y2hlY2tlZCB+IC50YWJzID4gZGl2Om50aC1vZi10eXBlKDEpLFxuI3RhYi1uYXYtMjpjaGVja2VkIH4gLnRhYnMgPiBkaXY6bnRoLW9mLXR5cGUoMil7XG4gIG9wYWNpdHk6IDE7XG4gIHotaW5kZXg6IDE7XG59XG4jdGFiLW5hdi0zOmNoZWNrZWQgfiAudGFicyA+IGRpdjpudGgtb2YtdHlwZSgzKXtcbiAgb3BhY2l0eTogMTtcbiAgei1pbmRleDogMTtcbn1cblxuLmdyaWQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogMHB4O1xufVxuLmdyaWQtaXRlbSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2M4YzhjODsgIC8qcmdiYSgwLCAwLCAwLCAwLjgpOyovXG4gIHBhZGRpbmc6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuXG4uZGlhZ3JhbS1ib3gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjOGM4Yzg7XG59XG5cbi5lbnRlci1kYXRhe1xuICBib3JkZXI6IDJweCBzb2xpZCAjYzhjOGM4O1xuICBwYWRkaW5nOiAzMHB4O1xufVxuXG4vKiBoaWRlIGZvciBsYXJnZXIgc2NyZWVucyAqL1xuI1NtYWxsU2NyZWVuIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG5cbi8qIHNob3cgZm9yIHNtYWxsIHNjcmVlbnMgKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAgICNTbWFsbFNjcmVlbiB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbn1cblxuLyogcmVtb3ZlIHBhZGRpbmcgb24gc21hbGxlciBzY3JlZW5zICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAjQ29udGFpbmVyV2luZG93e1xuICAgIHBhZGRpbmc6IDUwcHggNXB4IDUwcHggNXB4O1xuICB9XG59XG5cbjwvc3R5bGU+XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App.vue?vue&type=script&lang=js&\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "b2d0f72723b9a6ba"; }
/******/ }();
/******/ 
/******/ }
);
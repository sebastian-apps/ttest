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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/SliderChartComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/SliderChartComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/store */ \"./src/store/store.js\");\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js */ \"./node_modules/chart.js/dist/Chart.js\");\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chartjs-plugin-annotation */ \"./node_modules/chartjs-plugin-annotation/src/index.js\");\n/* harmony import */ var chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var mathjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mathjs */ \"./node_modules/mathjs/lib/esm/entry/pureFunctionsAny.generated.js\");\n/* harmony import */ var _ttest_chart_data_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ttest-chart-data.js */ \"./src/ttest-chart-data.js\");\n/* harmony import */ var _welchs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/welchs */ \"./src/welchs.js\");\n\n // npm install chart.js@2.9.4, then tried 2.9.3. so,e say 2.9.4 doesn't work.\n // npm install chartjs-plugin-annotation@0.5.7 --save    <<< used this. necessary?\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'SliderChart',\n  data() {\n    return {\n      store: _store_store__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n      ttestChartData: _ttest_chart_data_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n      storecount: _store_store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].state.count,\n      ttestChart: null,\n      thumb: null,\n      sliderValue: null,\n      sliderElem: null\n    };\n  },\n  methods: {\n    drawAlphaCurve: function (group1, crit_t_value) {\n      let alpha_curve = _welchs__WEBPACK_IMPORTED_MODULE_4__[\"default\"].getAlphaCurve(group1, crit_t_value);\n      this.ttestChartData.data.datasets[3].data = alpha_curve; // was [3]['data']\n      // this.ttestChart.update();\n    },\n\n    drawBetaCurve: function (group2, crit_t_value, ncp) {\n      let beta_curve = _welchs__WEBPACK_IMPORTED_MODULE_4__[\"default\"].getBetaCurve(group2, crit_t_value, ncp);\n      this.ttestChartData.data.datasets[4].data = beta_curve;\n      // this.ttestChart.update();\n    },\n\n    convertChartXToScreenX: function (x, chart_x_min, chart_x_max, x1, x2, offset) {\n      //return math.round((((x - chart_x_min)/(chart_x_max - chart_x_min))*(x2-x1)) - offset,0);\n      return (x - chart_x_min) / (chart_x_max - chart_x_min) * (x2 - x1) - offset;\n    },\n    convertScreenXToChartX: function (x, x1, x2, chart_x1, chart_x2, thumbOffsetWidth) {\n      return (x + thumbOffsetWidth / 2) / (x2 - x1) * (chart_x2 - chart_x1) + chart_x1;\n    },\n    convertRangeSliderXToChartX: function (rs_x, rs_x1, rs_x2, px_x1, px_x2, chart_x1, chart_x2, thumbWidth) {\n      let rs_prop = rs_x / (rs_x2 - rs_x1);\n      console.log(\"rs_prop\", rs_prop);\n      let px_offset = -(rs_prop - 0.5) * Number(thumbWidth);\n      console.log(\"px_offset\", px_offset);\n      let px_prop = rs_prop + px_offset / (px_x2 - px_x1);\n      console.log(\"px_prop\", px_prop);\n      return px_prop * (chart_x2 - chart_x1) + chart_x1;\n    },\n    slidefunc() {\n      console.log(\"SLIDEFUNC\", this.store.state.axes.x_min, this.store.state.axes.x_max);\n      console.log(\"this.slideValue:\", Number(this.slideValue));\n      var points = this.ttestChart.chart.getDatasetMeta(0).data;\n      var x1 = Number(points[0]._model.x);\n      var x2 = Number(points[1]._model.x);\n      let slideval = Number(this.slideValue);\n      let thumbWidth = 21;\n      this.store.state.crit_t_value = this.convertRangeSliderXToChartX(slideval, 0, 100, x1, x2, this.store.state.axes.x_min, this.store.state.axes.x_max, thumbWidth);\n      console.log(\"CONVERT:\", this.store.state.crit_t_value);\n      // this.ttestChartData.options.annotation.annotations[1].value = this.store.state.crit_t_value;\n      this.updateState();\n      // this.ttestChart.update();\n    },\n\n    updateState: function () {\n      //updateState: function(crit_t_value, df, ncp)\n      // calculations\n      // crit_t_value_beta = crit_t_value - ncp;  // ncp: non-centrality parameter\n      this.store.state.crit_t_value_beta = this.store.state.crit_t_value - this.store.state.ncp; // ncp: non-centrality parameter\n      // alpha = getAlpha(crit_t_value, df);\n      // beta = getBeta(crit_t_value_beta, df);\n\n      // UPDATE STATE IN STORE\n\n      this.store.state.alpha = mathjs__WEBPACK_IMPORTED_MODULE_5__.round(_welchs__WEBPACK_IMPORTED_MODULE_4__[\"default\"].getAlpha(this.store.state.crit_t_value, this.store.state.df), 4);\n      this.store.state.beta = mathjs__WEBPACK_IMPORTED_MODULE_5__.round(_welchs__WEBPACK_IMPORTED_MODULE_4__[\"default\"].getBeta(this.store.state.crit_t_value_beta, this.store.state.df), 4);\n      console.log(\"crit_t_value:\", this.store.state.crit_t_value);\n      console.log(\"crit_t_value_beta:\", this.store.state.crit_t_value_beta);\n      console.log(\"df:\", this.store.state.df);\n      console.log(\"alpha:\", this.store.state.alpha);\n      console.log(\"beta:\", this.store.state.beta);\n\n      // // update display\n      // elem('crit_t_value').innerText = crit_t_value;\n      // elem('sig-level').innerText = round(alpha);\n\n      this.ttestChartData.options.annotation.annotations[1].value = this.store.state.crit_t_value;\n      // lineChart.options.annotation.annotations[1]['value'] = crit_t_value;\n      // lineChart.update();\n\n      // drawAlphaCurve(group1, crit_t_value);\n      // drawBetaCurve(group2, crit_t_value);\n      this.drawAlphaCurve(this.store.state.group1, this.store.state.crit_t_value);\n      this.drawBetaCurve(this.store.state.group2, this.store.state.crit_t_value, this.store.state.ncp);\n\n      // updateConfusionMatrix(alpha, beta);\n      // showRejectOrNotReject(crit_t_value, t_value);\n      // updateProbabilityTree();\n      this.ttestChart.update();\n      // store.commit('updateState');\n    },\n\n    initThumb() {\n      var points = this.ttestChart.chart.getDatasetMeta(0).data;\n      var x1 = points[0]._model.x;\n      var x2 = points[1]._model.x;\n      this.sliderElem.style.left = x1 + \"px\";\n      this.sliderElem.style.width = x2 - x1 + \"px\";\n    }\n  },\n  // computed: {\n  //   computedLeft: function () {\n  //     return \"51px\";\n  //   },\n  // },\n  mounted() {\n    chart_js__WEBPACK_IMPORTED_MODULE_1___default().plugins.register((chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_2___default()));\n    this.ttestChart = new (chart_js__WEBPACK_IMPORTED_MODULE_1___default())(document.getElementById('ttest-chart'), this.ttestChartData);\n    this.ttestChartData.data.datasets[0].data = [{\n      x: -4.753,\n      y: 0\n    }, {\n      x: 7.232,\n      y: 0\n    }];\n    this.ttestChartData.options.scales.xAxes[0].ticks.min = this.store.state.axes.min;\n    this.ttestChartData.options.scales.xAxes[0].ticks.max = this.store.state.axes.max;\n    this.ttestChartData.options.scales.yAxes[0].ticks.max = 0.5;\n    this.ttestChartData.options.annotation.annotations[0].label.content = 'p = ' + this.store.state.p_value;\n    this.ttestChartData.options.annotation.annotations[0].value = this.store.state.t_value;\n    this.ttestChartData.options.annotation.annotations[1].content = '\\u03B1' + this.store.state.alpha;\n    this.ttestChartData.options.annotation.annotations[1].value = this.store.state.crit_t_value;\n    this.ttestChartData.data.datasets[1].data = this.store.state.group1.dist;\n    this.ttestChartData.data.datasets[2].data = this.store.state.group2.dist;\n    this.updateState();\n    this.sliderElem = document.getElementById('myRange');\n    this.initThumb();\n\n    // init range slider annotation position\n    this.slideValue = 50;\n    this.slidefunc();\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvQHZ1ZS92dWUtbG9hZGVyLXYxNS9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NyYy9jb21wb25lbnRzL1NsaWRlckNoYXJ0Q29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyYuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBbUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFJQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Z1ZWFwcC9zcmMvY29tcG9uZW50cy9TbGlkZXJDaGFydENvbXBvbmVudC52dWU/NTQ0OCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbjx0ZW1wbGF0ZT5cbiAgPGRpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJzbGlkZWNvbnRhaW5lclwiIGlkPVwic2xpZGVjb250YWluZXJcIj5cbiAgICAgIDxpbnB1dCB0eXBlPVwicmFuZ2VcIiBtaW49XCIwXCIgbWF4PVwiMTAwXCIgdmFsdWU9XCI1MFwiIGNsYXNzPVwic2xpZGVyXCIgaWQ9XCJteVJhbmdlXCIgdi1tb2RlbD1cInNsaWRlVmFsdWVcIiB2LW9uOmlucHV0PVwic2xpZGVmdW5jXCI+XG4gICAgICA8IS0tIDxpbnB1dCB0eXBlPVwicmFuZ2VcIiBtaW49XCIwXCIgbWF4PVwiMTAwXCIgdmFsdWU9XCI1MFwiIGNsYXNzPVwic2xpZGVyXCIgaWQ9XCJteVJhbmdlXCIgdi1tb2RlbD1cInNsaWRlVmFsdWVcIiB2LW9uOmlucHV0PVwic2xpZGVmdW5jXCIgdi1iaW5kOnN0eWxlPVwieyBsZWZ0OiBjb21wdXRlZExlZnQgfVwiPiAtLT5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXY+XG4gICAgICA8Y2FudmFzIGlkPVwidHRlc3QtY2hhcnRcIiB3aWR0aD1cIjEwMDBcIiBoZWlnaHQ9XCI4MDBcIj48L2NhbnZhcz5cbiAgICA8L2Rpdj5cblxuXG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuXG48c2NyaXB0PlxuaW1wb3J0IHN0b3JlIGZyb20gJy4uL3N0b3JlL3N0b3JlJyBcbmltcG9ydCBDaGFydCBmcm9tICdjaGFydC5qcycgIC8vIG5wbSBpbnN0YWxsIGNoYXJ0LmpzQDIuOS40LCB0aGVuIHRyaWVkIDIuOS4zLiBzbyxlIHNheSAyLjkuNCBkb2Vzbid0IHdvcmsuXG5pbXBvcnQgY2hhcnRqc1BsdWdpbkFubm90YXRpb24gZnJvbSBcImNoYXJ0anMtcGx1Z2luLWFubm90YXRpb25cIjsgLy8gbnBtIGluc3RhbGwgY2hhcnRqcy1wbHVnaW4tYW5ub3RhdGlvbkAwLjUuNyAtLXNhdmUgICAgPDw8IHVzZWQgdGhpcy4gbmVjZXNzYXJ5P1xuaW1wb3J0ICogYXMgbWF0aCBmcm9tICdtYXRoanMnO1xuaW1wb3J0IHR0ZXN0Q2hhcnREYXRhIGZyb20gJy4uL3R0ZXN0LWNoYXJ0LWRhdGEuanMnXG5pbXBvcnQgd2VsY2hzIGZyb20gJ0Avd2VsY2hzJztcblxuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ1NsaWRlckNoYXJ0JyxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3RvcmUsXG4gICAgICB0dGVzdENoYXJ0RGF0YTogdHRlc3RDaGFydERhdGEsXG4gICAgICBzdG9yZWNvdW50OiBzdG9yZS5zdGF0ZS5jb3VudCxcbiAgICAgIHR0ZXN0Q2hhcnQ6IG51bGwsXG4gICAgICB0aHVtYjogbnVsbCxcbiAgICAgIHNsaWRlclZhbHVlOiBudWxsLFxuICAgICAgc2xpZGVyRWxlbTogbnVsbCxcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBkcmF3QWxwaGFDdXJ2ZTogZnVuY3Rpb24oZ3JvdXAxLCBjcml0X3RfdmFsdWUpeyAgXG4gICAgICBsZXQgYWxwaGFfY3VydmUgPSB3ZWxjaHMuZ2V0QWxwaGFDdXJ2ZShncm91cDEsIGNyaXRfdF92YWx1ZSk7XG4gICAgICB0aGlzLnR0ZXN0Q2hhcnREYXRhLmRhdGEuZGF0YXNldHNbM10uZGF0YSA9IGFscGhhX2N1cnZlOyAgLy8gd2FzIFszXVsnZGF0YSddXG4gICAgICAvLyB0aGlzLnR0ZXN0Q2hhcnQudXBkYXRlKCk7XG4gICAgfSxcbiAgICBkcmF3QmV0YUN1cnZlOiBmdW5jdGlvbiAoZ3JvdXAyLCBjcml0X3RfdmFsdWUsIG5jcCl7ICBcbiAgICAgIGxldCBiZXRhX2N1cnZlID0gd2VsY2hzLmdldEJldGFDdXJ2ZSAoZ3JvdXAyLCBjcml0X3RfdmFsdWUsIG5jcCk7XG4gICAgICB0aGlzLnR0ZXN0Q2hhcnREYXRhLmRhdGEuZGF0YXNldHNbNF0uZGF0YSA9IGJldGFfY3VydmU7XG4gICAgICAvLyB0aGlzLnR0ZXN0Q2hhcnQudXBkYXRlKCk7XG4gICAgfSxcblxuICAgIGNvbnZlcnRDaGFydFhUb1NjcmVlblg6IGZ1bmN0aW9uICh4LCBjaGFydF94X21pbiwgY2hhcnRfeF9tYXgsIHgxLCB4Miwgb2Zmc2V0KXtcbiAgICAvL3JldHVybiBtYXRoLnJvdW5kKCgoKHggLSBjaGFydF94X21pbikvKGNoYXJ0X3hfbWF4IC0gY2hhcnRfeF9taW4pKSooeDIteDEpKSAtIG9mZnNldCwwKTtcbiAgICByZXR1cm4gKCgoeCAtIGNoYXJ0X3hfbWluKS8oY2hhcnRfeF9tYXggLSBjaGFydF94X21pbikpKih4Mi14MSkpIC0gb2Zmc2V0O1xuICAgIH0sXG5cbiAgICBjb252ZXJ0U2NyZWVuWFRvQ2hhcnRYOiBmdW5jdGlvbiAoeCwgeDEsIHgyLCBjaGFydF94MSwgY2hhcnRfeDIsIHRodW1iT2Zmc2V0V2lkdGgpe1xuICAgICAgcmV0dXJuICh4ICsgKHRodW1iT2Zmc2V0V2lkdGgvMikpLyh4MiAtIHgxKSooY2hhcnRfeDItY2hhcnRfeDEpICsgY2hhcnRfeDE7XG4gICAgfSxcblxuICAgIGNvbnZlcnRSYW5nZVNsaWRlclhUb0NoYXJ0WDogZnVuY3Rpb24gKHJzX3gsIHJzX3gxLCByc194MiwgcHhfeDEsIHB4X3gyLCBjaGFydF94MSwgY2hhcnRfeDIsIHRodW1iV2lkdGgpe1xuICAgICAgbGV0IHJzX3Byb3AgPSByc194Lyhyc194Mi1yc194MSk7XG4gICAgICBjb25zb2xlLmxvZyhcInJzX3Byb3BcIiwgcnNfcHJvcCk7XG4gICAgICBsZXQgcHhfb2Zmc2V0ID0gLShyc19wcm9wLTAuNSkqTnVtYmVyKHRodW1iV2lkdGgpOyBcbiAgICAgIGNvbnNvbGUubG9nKFwicHhfb2Zmc2V0XCIsIHB4X29mZnNldCk7XG4gICAgICBsZXQgcHhfcHJvcCA9IHJzX3Byb3AgKyBweF9vZmZzZXQvKHB4X3gyLXB4X3gxKTtcbiAgICAgIGNvbnNvbGUubG9nKFwicHhfcHJvcFwiLCBweF9wcm9wKTtcbiAgICAgIHJldHVybiAgcHhfcHJvcCooY2hhcnRfeDItY2hhcnRfeDEpICsgY2hhcnRfeDE7XG4gICAgfSxcblxuXG4gICAgc2xpZGVmdW5jKCl7XG4gICAgICBjb25zb2xlLmxvZyhcIlNMSURFRlVOQ1wiLCB0aGlzLnN0b3JlLnN0YXRlLmF4ZXMueF9taW4sIHRoaXMuc3RvcmUuc3RhdGUuYXhlcy54X21heCk7XG4gICAgICBjb25zb2xlLmxvZyhcInRoaXMuc2xpZGVWYWx1ZTpcIiwgTnVtYmVyKHRoaXMuc2xpZGVWYWx1ZSkpO1xuICAgICAgdmFyIHBvaW50cyA9IHRoaXMudHRlc3RDaGFydC5jaGFydC5nZXREYXRhc2V0TWV0YSgwKS5kYXRhO1xuICAgICAgdmFyIHgxID0gTnVtYmVyKHBvaW50c1swXS5fbW9kZWwueCk7XG4gICAgICB2YXIgeDIgPSBOdW1iZXIocG9pbnRzWzFdLl9tb2RlbC54KTtcbiAgICAgIGxldCBzbGlkZXZhbCA9IE51bWJlcih0aGlzLnNsaWRlVmFsdWUpO1xuICAgICAgbGV0IHRodW1iV2lkdGggPSAyMTtcbiAgICAgIHRoaXMuc3RvcmUuc3RhdGUuY3JpdF90X3ZhbHVlID0gdGhpcy5jb252ZXJ0UmFuZ2VTbGlkZXJYVG9DaGFydFgoc2xpZGV2YWwsIDAsIDEwMCwgeDEsIHgyLCB0aGlzLnN0b3JlLnN0YXRlLmF4ZXMueF9taW4sIHRoaXMuc3RvcmUuc3RhdGUuYXhlcy54X21heCwgdGh1bWJXaWR0aCk7IFxuICAgICAgY29uc29sZS5sb2coXCJDT05WRVJUOlwiLCB0aGlzLnN0b3JlLnN0YXRlLmNyaXRfdF92YWx1ZSk7XG4gICAgICAvLyB0aGlzLnR0ZXN0Q2hhcnREYXRhLm9wdGlvbnMuYW5ub3RhdGlvbi5hbm5vdGF0aW9uc1sxXS52YWx1ZSA9IHRoaXMuc3RvcmUuc3RhdGUuY3JpdF90X3ZhbHVlO1xuICAgICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xuICAgICAgLy8gdGhpcy50dGVzdENoYXJ0LnVwZGF0ZSgpO1xuICAgIH0sXG4gICAgXG4gICAgdXBkYXRlU3RhdGU6IGZ1bmN0aW9uKCl7ICAvL3VwZGF0ZVN0YXRlOiBmdW5jdGlvbihjcml0X3RfdmFsdWUsIGRmLCBuY3ApXG4gICAgICAvLyBjYWxjdWxhdGlvbnNcbiAgICAgIC8vIGNyaXRfdF92YWx1ZV9iZXRhID0gY3JpdF90X3ZhbHVlIC0gbmNwOyAgLy8gbmNwOiBub24tY2VudHJhbGl0eSBwYXJhbWV0ZXJcbiAgICAgIHRoaXMuc3RvcmUuc3RhdGUuY3JpdF90X3ZhbHVlX2JldGEgPSB0aGlzLnN0b3JlLnN0YXRlLmNyaXRfdF92YWx1ZSAtIHRoaXMuc3RvcmUuc3RhdGUubmNwOyAgLy8gbmNwOiBub24tY2VudHJhbGl0eSBwYXJhbWV0ZXJcbiAgICAgIC8vIGFscGhhID0gZ2V0QWxwaGEoY3JpdF90X3ZhbHVlLCBkZik7XG4gICAgICAvLyBiZXRhID0gZ2V0QmV0YShjcml0X3RfdmFsdWVfYmV0YSwgZGYpO1xuXG4gICAgICAvLyBVUERBVEUgU1RBVEUgSU4gU1RPUkVcblxuICAgICAgdGhpcy5zdG9yZS5zdGF0ZS5hbHBoYSA9IG1hdGgucm91bmQod2VsY2hzLmdldEFscGhhKHRoaXMuc3RvcmUuc3RhdGUuY3JpdF90X3ZhbHVlLCB0aGlzLnN0b3JlLnN0YXRlLmRmKSwgNCk7XG4gICAgICB0aGlzLnN0b3JlLnN0YXRlLmJldGEgPSBtYXRoLnJvdW5kKHdlbGNocy5nZXRCZXRhKHRoaXMuc3RvcmUuc3RhdGUuY3JpdF90X3ZhbHVlX2JldGEsIHRoaXMuc3RvcmUuc3RhdGUuZGYpLCA0KTtcblxuICAgICAgY29uc29sZS5sb2coXCJjcml0X3RfdmFsdWU6XCIsIHRoaXMuc3RvcmUuc3RhdGUuY3JpdF90X3ZhbHVlKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiY3JpdF90X3ZhbHVlX2JldGE6XCIsIHRoaXMuc3RvcmUuc3RhdGUuY3JpdF90X3ZhbHVlX2JldGEpO1xuICAgICAgY29uc29sZS5sb2coXCJkZjpcIiwgdGhpcy5zdG9yZS5zdGF0ZS5kZik7XG4gICAgICBjb25zb2xlLmxvZyhcImFscGhhOlwiLCB0aGlzLnN0b3JlLnN0YXRlLmFscGhhKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiYmV0YTpcIiwgdGhpcy5zdG9yZS5zdGF0ZS5iZXRhKTtcblxuICAgICAgLy8gLy8gdXBkYXRlIGRpc3BsYXlcbiAgICAgIC8vIGVsZW0oJ2NyaXRfdF92YWx1ZScpLmlubmVyVGV4dCA9IGNyaXRfdF92YWx1ZTtcbiAgICAgIC8vIGVsZW0oJ3NpZy1sZXZlbCcpLmlubmVyVGV4dCA9IHJvdW5kKGFscGhhKTtcblxuICAgICAgdGhpcy50dGVzdENoYXJ0RGF0YS5vcHRpb25zLmFubm90YXRpb24uYW5ub3RhdGlvbnNbMV0udmFsdWUgPSB0aGlzLnN0b3JlLnN0YXRlLmNyaXRfdF92YWx1ZTtcbiAgICAgIC8vIGxpbmVDaGFydC5vcHRpb25zLmFubm90YXRpb24uYW5ub3RhdGlvbnNbMV1bJ3ZhbHVlJ10gPSBjcml0X3RfdmFsdWU7XG4gICAgICAvLyBsaW5lQ2hhcnQudXBkYXRlKCk7XG5cbiAgICAgIC8vIGRyYXdBbHBoYUN1cnZlKGdyb3VwMSwgY3JpdF90X3ZhbHVlKTtcbiAgICAgIC8vIGRyYXdCZXRhQ3VydmUoZ3JvdXAyLCBjcml0X3RfdmFsdWUpO1xuICAgICAgdGhpcy5kcmF3QWxwaGFDdXJ2ZSh0aGlzLnN0b3JlLnN0YXRlLmdyb3VwMSwgdGhpcy5zdG9yZS5zdGF0ZS5jcml0X3RfdmFsdWUpO1xuICAgICAgdGhpcy5kcmF3QmV0YUN1cnZlKHRoaXMuc3RvcmUuc3RhdGUuZ3JvdXAyLCB0aGlzLnN0b3JlLnN0YXRlLmNyaXRfdF92YWx1ZSx0aGlzLnN0b3JlLnN0YXRlLm5jcCk7XG4gICAgICBcbiAgICAgIC8vIHVwZGF0ZUNvbmZ1c2lvbk1hdHJpeChhbHBoYSwgYmV0YSk7XG4gICAgICAvLyBzaG93UmVqZWN0T3JOb3RSZWplY3QoY3JpdF90X3ZhbHVlLCB0X3ZhbHVlKTtcbiAgICAgIC8vIHVwZGF0ZVByb2JhYmlsaXR5VHJlZSgpO1xuICAgICAgdGhpcy50dGVzdENoYXJ0LnVwZGF0ZSgpO1xuICAgICAgLy8gc3RvcmUuY29tbWl0KCd1cGRhdGVTdGF0ZScpO1xuXG4gICAgfSxcblxuICAgIGluaXRUaHVtYigpe1xuICAgICAgdmFyIHBvaW50cyA9IHRoaXMudHRlc3RDaGFydC5jaGFydC5nZXREYXRhc2V0TWV0YSgwKS5kYXRhO1xuICAgICAgdmFyIHgxID0gcG9pbnRzWzBdLl9tb2RlbC54O1xuICAgICAgdmFyIHgyID0gcG9pbnRzWzFdLl9tb2RlbC54O1xuICAgICAgdGhpcy5zbGlkZXJFbGVtLnN0eWxlLmxlZnQgPSB4MSArIFwicHhcIjtcbiAgICAgIHRoaXMuc2xpZGVyRWxlbS5zdHlsZS53aWR0aCA9IHgyIC0geDEgKyBcInB4XCI7XG4gICAgfSxcblxuICB9LFxuICAvLyBjb21wdXRlZDoge1xuICAvLyAgIGNvbXB1dGVkTGVmdDogZnVuY3Rpb24gKCkge1xuICAvLyAgICAgcmV0dXJuIFwiNTFweFwiO1xuICAvLyAgIH0sXG4gIC8vIH0sXG4gIG1vdW50ZWQoKSB7XG4gICAgQ2hhcnQucGx1Z2lucy5yZWdpc3RlcihjaGFydGpzUGx1Z2luQW5ub3RhdGlvbilcbiAgICB0aGlzLnR0ZXN0Q2hhcnQgPSBuZXcgQ2hhcnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3R0ZXN0LWNoYXJ0JyksIHRoaXMudHRlc3RDaGFydERhdGEpO1xuICAgIHRoaXMudHRlc3RDaGFydERhdGEuZGF0YS5kYXRhc2V0c1swXS5kYXRhID0gW3t4OiAtNC43NTMsIHk6IDB9LCB7eDogNy4yMzIsIHk6IDB9XTtcbiAgICB0aGlzLnR0ZXN0Q2hhcnREYXRhLm9wdGlvbnMuc2NhbGVzLnhBeGVzWzBdLnRpY2tzLm1pbiA9IHRoaXMuc3RvcmUuc3RhdGUuYXhlcy5taW47XG4gICAgdGhpcy50dGVzdENoYXJ0RGF0YS5vcHRpb25zLnNjYWxlcy54QXhlc1swXS50aWNrcy5tYXggPSB0aGlzLnN0b3JlLnN0YXRlLmF4ZXMubWF4OyBcbiAgICB0aGlzLnR0ZXN0Q2hhcnREYXRhLm9wdGlvbnMuc2NhbGVzLnlBeGVzWzBdLnRpY2tzLm1heCA9IDAuNTtcblxuICAgIHRoaXMudHRlc3RDaGFydERhdGEub3B0aW9ucy5hbm5vdGF0aW9uLmFubm90YXRpb25zWzBdLmxhYmVsLmNvbnRlbnQgPSAncCA9ICcgKyB0aGlzLnN0b3JlLnN0YXRlLnBfdmFsdWU7XG4gICAgdGhpcy50dGVzdENoYXJ0RGF0YS5vcHRpb25zLmFubm90YXRpb24uYW5ub3RhdGlvbnNbMF0udmFsdWUgPSB0aGlzLnN0b3JlLnN0YXRlLnRfdmFsdWU7XG4gICAgdGhpcy50dGVzdENoYXJ0RGF0YS5vcHRpb25zLmFubm90YXRpb24uYW5ub3RhdGlvbnNbMV0uY29udGVudCA9ICdcXHUwM0IxJyArIHRoaXMuc3RvcmUuc3RhdGUuYWxwaGE7IFxuICAgIHRoaXMudHRlc3RDaGFydERhdGEub3B0aW9ucy5hbm5vdGF0aW9uLmFubm90YXRpb25zWzFdLnZhbHVlID0gdGhpcy5zdG9yZS5zdGF0ZS5jcml0X3RfdmFsdWU7XG4gICAgXG4gICAgdGhpcy50dGVzdENoYXJ0RGF0YS5kYXRhLmRhdGFzZXRzWzFdLmRhdGEgPSB0aGlzLnN0b3JlLnN0YXRlLmdyb3VwMS5kaXN0O1xuICAgIHRoaXMudHRlc3RDaGFydERhdGEuZGF0YS5kYXRhc2V0c1syXS5kYXRhID0gdGhpcy5zdG9yZS5zdGF0ZS5ncm91cDIuZGlzdDtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XG4gICAgXG4gICAgXG4gICAgdGhpcy5zbGlkZXJFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215UmFuZ2UnKTtcbiAgICB0aGlzLmluaXRUaHVtYigpO1xuXG4gICAgLy8gaW5pdCByYW5nZSBzbGlkZXIgYW5ub3RhdGlvbiBwb3NpdGlvblxuICAgIHRoaXMuc2xpZGVWYWx1ZT01MDtcbiAgICB0aGlzLnNsaWRlZnVuYygpO1xuXG4gIH0sXG5cblxuXG59XG48L3NjcmlwdD5cblxuXG5cblxuPHN0eWxlIHNjb3BlZD5cblxuICAuc2xpZGVjb250YWluZXIge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHBhZGRpbmc6IDBweDtcbiAgfVxuXG4gIC8qIFRoZSBzbGlkZXIgaXRzZWxmICovXG4gIC5zbGlkZXIge1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTsgIC8qIE92ZXJyaWRlIGRlZmF1bHQgQ1NTIHN0eWxlcyAqL1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwtd2lkdGggKi9cbiAgICBoZWlnaHQ6IDE1cHg7IC8qIFNwZWNpZmllZCBoZWlnaHQgKi9cbiAgICBiYWNrZ3JvdW5kOiAjZDNkM2QzOyAvKiBHcmV5IGJhY2tncm91bmQgKi9cbiAgICBvdXRsaW5lOiBub25lOyAvKiBSZW1vdmUgb3V0bGluZSAqL1xuICAgIC8qb3BhY2l0eTogMC43OyovIC8qIFNldCB0cmFuc3BhcmVuY3kgKGZvciBtb3VzZS1vdmVyIGVmZmVjdHMgb24gaG92ZXIpICovXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuMnM7IC8qIDAuMiBzZWNvbmRzIHRyYW5zaXRpb24gb24gaG92ZXIgKi9cbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4ycztcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICB0b3A6ICs1cHg7XG5cbiAgfVxuICAvKiAuc2xpZGVyIHtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZDogI0UwRTBFMDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQobGVmdCB0b3AsICNFMEUwRTAsICNFRUVFRUUpO1xuICAgIGhlaWdodDogMTVweDtcbiAgICBtYXJnaW46IDBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH0gKi9cblxuXG4gIC8qIE1vdXNlLW92ZXIgZWZmZWN0cyAqL1xuICAuc2xpZGVyOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAxOyAvKiBGdWxseSBzaG93biBvbiBtb3VzZS1vdmVyICovXG4gIH1cblxuICAvKiBUaGUgc2xpZGVyIGhhbmRsZSAodXNlIC13ZWJraXQtIChDaHJvbWUsIE9wZXJhLCBTYWZhcmksIEVkZ2UpIGFuZCAtbW96LSAoRmlyZWZveCkgdG8gb3ZlcnJpZGUgZGVmYXVsdCBsb29rKSAqL1xuICAuc2xpZGVyOjotd2Via2l0LXNsaWRlci10aHVtYiB7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lOyAvKiBPdmVycmlkZSBkZWZhdWx0IGxvb2sgKi9cbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIHdpZHRoOiAyMXB4OyAvKiBTZXQgYSBzcGVjaWZpYyBzbGlkZXIgaGFuZGxlIHdpZHRoICovXG4gICAgaGVpZ2h0OiAyNXB4OyAvKjI1cHggICBTbGlkZXIgaGFuZGxlIGhlaWdodCAqL1xuICAgIGN1cnNvcjogcG9pbnRlcjsgLyogQ3Vyc29yIG9uIGhvdmVyICovXG4gICAgb3BhY2l0eTogMTtcbiAgICBiYWNrZ3JvdW5kOiAjZmYzZTAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAvKiB0b3A6IC01cHg7ICovXG4gICAgLyogYm90dG9tOiAtMnB4OyAqL1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IDBweDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgbGVmdDogMHB4O1xuXG4gIH1cblxuICAuc2xpZGVyOjotbW96LXJhbmdlLXRodW1iIHtcbiAgICB3aWR0aDogMTVweDsgLyogU2V0IGEgc3BlY2lmaWMgc2xpZGVyIGhhbmRsZSB3aWR0aCAqL1xuICAgIGhlaWdodDogMjVweDsgLyogU2xpZGVyIGhhbmRsZSBoZWlnaHQgKi9cbiAgICBjdXJzb3I6IHBvaW50ZXI7IC8qIEN1cnNvciBvbiBob3ZlciAqL1xuXG4gICAgYmFja2dyb3VuZDogI2ZmM2UwMDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIH1cblxuXG5cbiAgLnRodW1iIHtcbiAgICB3aWR0aDogMTVweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiAwcHg7XG4gICAgdG9wOiAtNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAjZmYzZTAwO1xuICB9XG5cbiAgLyogI2FwcCB7XG4gICAgZm9udC1mYW1pbHk6IEF2ZW5pciwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzJjM2U1MDtcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xuICB9ICovXG5cbiAgaHRtbCB7XG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG4gIH1cblxuICBib2R5IHtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYzZTAwOyAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MzQzNDM7XG4gICAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cblxuICBhOmxpbmssIGE6dmlzaXRlZCB7XG4gICAgY29sb3I6IGdyZXk7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG5cbiAgLyogbW91c2Ugb3ZlciBsaW5rICovXG4gIGE6aG92ZXIge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cblxuICAvKiBzZWxlY3RlZCBsaW5rICovXG4gIGE6YWN0aXZlIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG5cblxuICBoNCB7XG4gICAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgfVxuXG5cbiAgLnJlc3BvbnNpdmUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuXG4gIC8qIC5zbGlkZXIge1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBiYWNrZ3JvdW5kOiAjRTBFMEUwO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChsZWZ0IHRvcCwgI0UwRTBFMCwgI0VFRUVFRSk7XG4gICAgaGVpZ2h0OiAxNXB4O1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfSAqL1xuICAvKiB3aWR0aDogNTI1cHg7ICovXG5cblxuICAudGh1bWIge1xuICAgIHdpZHRoOiAxNXB4O1xuICAgIGhlaWdodDogMjVweDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IDBweDtcbiAgICB0b3A6IC01cHg7XG4gICAgYmFja2dyb3VuZDogI2ZmM2UwMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuXG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/SliderChartComponent.vue?vue&type=script&lang=js&\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "5bda1ea6c7c407ba"; }
/******/ }();
/******/ 
/******/ }
);
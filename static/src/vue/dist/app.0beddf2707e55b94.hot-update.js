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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/store */ \"./src/store/store.js\");\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js */ \"./node_modules/chart.js/dist/Chart.js\");\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chartjs-plugin-annotation */ \"./node_modules/chartjs-plugin-annotation/src/index.js\");\n/* harmony import */ var chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var mathjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mathjs */ \"./node_modules/mathjs/lib/esm/entry/pureFunctionsAny.generated.js\");\n/* harmony import */ var _ttest_chart_data_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ttest-chart-data.js */ \"./src/ttest-chart-data.js\");\n/* harmony import */ var _welchs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/welchs */ \"./src/welchs.js\");\n\n // npm install chart.js@2.9.4, then tried 2.9.3. so,e say 2.9.4 doesn't work.\n // npm install chartjs-plugin-annotation@0.5.7 --save    <<< used this. necessary?\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'SliderChart',\n  data() {\n    return {\n      store: _store_store__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n      ttestChartData: _ttest_chart_data_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n      storecount: _store_store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].state.count,\n      ttestChart: null,\n      thumb: null,\n      sliderValue: null,\n      sliderElem: null\n    };\n  },\n  methods: {\n    myFunction: function () {\n      if (this.store.state.crit_t_value > this.store.state.t_value) {\n        this.store.state.crit_t_value = -3.2155;\n        console.log(\"SMALLER\");\n      } else {\n        this.store.state.crit_t_value = 3.2155;\n        console.log(\"BIGGER\");\n      }\n      _store_store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].commit('decrement');\n      _store_store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].commit('updateState');\n      this.storecount++;\n      document.getElementById(\"demo\").innerHTML = \"I have changed!\";\n    },\n    drawAlphaCurve: function (group1, crit_t_value) {\n      let alpha_curve = _welchs__WEBPACK_IMPORTED_MODULE_4__[\"default\"].getAlphaCurve(group1, crit_t_value);\n      this.ttestChartData.data.datasets[3].data = alpha_curve; // was [3]['data']\n      // this.ttestChart.update();\n    },\n\n    drawBetaCurve: function (group2, crit_t_value, ncp) {\n      let beta_curve = _welchs__WEBPACK_IMPORTED_MODULE_4__[\"default\"].getBetaCurve(group2, crit_t_value, ncp);\n      this.ttestChartData.data.datasets[4].data = beta_curve;\n      // this.ttestChart.update();\n    },\n\n    convertChartXToScreenX: function (x, chart_x_min, chart_x_max, x1, x2, offset) {\n      //return math.round((((x - chart_x_min)/(chart_x_max - chart_x_min))*(x2-x1)) - offset,0);\n      return (x - chart_x_min) / (chart_x_max - chart_x_min) * (x2 - x1) - offset;\n    },\n    convertScreenXToChartX: function (x, x1, x2, chart_x1, chart_x2, thumbOffsetWidth) {\n      return (x + thumbOffsetWidth / 2) / (x2 - x1) * (chart_x2 - chart_x1) + chart_x1;\n    },\n    convertRangeSliderXToChartX: function (rs_x, rs_x1, rs_x2, px_x1, px_x2, chart_x1, chart_x2, thumbWidth) {\n      let rs_prop = rs_x / (rs_x2 - rs_x1);\n      console.log(\"rs_prop\", rs_prop);\n      let px_offset = -(rs_prop - 0.5) * Number(thumbWidth);\n      console.log(\"px_offset\", px_offset);\n      let px_prop = rs_prop + px_offset / (px_x2 - px_x1);\n      console.log(\"px_prop\", px_prop);\n      return px_prop * (chart_x2 - chart_x1) + chart_x1;\n    },\n    slidefunc() {\n      console.log(\"SLIDEFUNC\", this.store.state.axes.x_min, this.store.state.axes.x_max);\n      console.log(Number(this.slideValue));\n      var points = this.ttestChart.chart.getDatasetMeta(0).data;\n      var x1 = Number(points[0]._model.x);\n      var x2 = Number(points[1]._model.x);\n      let slideval = Number(this.slideValue);\n      let thumbWidth = 21;\n      this.store.state.crit_t_value = this.convertRangeSliderXToChartX(slideval, 0, 100, x1, x2, this.store.state.axes.x_min, this.store.state.axes.x_max, thumbWidth);\n      console.log(\"CONVERT:\", this.store.state.crit_t_value);\n      // this.ttestChartData.options.annotation.annotations[1].value = this.store.state.crit_t_value;\n      this.updateState();\n      // this.ttestChart.update();\n    },\n\n    updateState: function () {\n      //updateState: function(crit_t_value, df, ncp)\n      // calculations\n      // crit_t_value_beta = crit_t_value - ncp;  // ncp: non-centrality parameter\n      // alpha = getAlpha(crit_t_value, df);\n      // beta = getBeta(crit_t_value_beta, df);\n\n      // UPDATE STATE IN STORE\n\n      this.store.state.alpha = mathjs__WEBPACK_IMPORTED_MODULE_5__.round(_welchs__WEBPACK_IMPORTED_MODULE_4__[\"default\"].getAlpha(this.store.state.crit_t_value, this.store.state.df), 4);\n      this.store.state.beta = mathjs__WEBPACK_IMPORTED_MODULE_5__.round(_welchs__WEBPACK_IMPORTED_MODULE_4__[\"default\"].getBeta(this.store.state.crit_t_value_beta, this.store.state.df), 4);\n      console.log(\"crit_t_value:\", this.store.state.crit_t_value);\n      console.log(\"crit_t_value_beta:\", this.store.state.crit_t_value_beta);\n      console.log(\"df:\", this.store.state.df);\n      console.log(\"alpha:\", this.store.state.alpha);\n      console.log(\"beta:\", this.store.state.beta);\n\n      // // update display\n      // elem('crit_t_value').innerText = crit_t_value;\n      // elem('sig-level').innerText = round(alpha);\n\n      this.ttestChartData.options.annotation.annotations[1].value = this.store.state.crit_t_value;\n      // lineChart.options.annotation.annotations[1]['value'] = crit_t_value;\n      // lineChart.update();\n\n      // drawAlphaCurve(group1, crit_t_value);\n      // drawBetaCurve(group2, crit_t_value);\n      this.drawAlphaCurve(this.store.state.group1, this.store.state.crit_t_value);\n      this.drawBetaCurve(this.store.state.group2, this.store.state.crit_t_value, this.store.state.ncp);\n\n      // updateConfusionMatrix(alpha, beta);\n      // showRejectOrNotReject(crit_t_value, t_value);\n      // updateProbabilityTree();\n      this.ttestChart.update();\n      _store_store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].commit('updateState');\n    },\n    initThumb() {\n      var points = this.ttestChart.chart.getDatasetMeta(0).data;\n      var x1 = points[0]._model.x;\n      var x2 = points[1]._model.x;\n      this.sliderElem.style.left = x1 + \"px\";\n      this.sliderElem.style.width = x2 - x1 + \"px\";\n    }\n  },\n  computed: {\n    computedLeft: function () {\n      return \"51px\";\n    }\n  },\n  mounted() {\n    chart_js__WEBPACK_IMPORTED_MODULE_1___default().plugins.register((chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_2___default()));\n    this.ttestChart = new (chart_js__WEBPACK_IMPORTED_MODULE_1___default())(document.getElementById('ttest-chart'), this.ttestChartData);\n    this.ttestChartData.data.datasets[0].data = [{\n      x: -4.753,\n      y: 0\n    }, {\n      x: 7.232,\n      y: 0\n    }];\n    this.ttestChartData.options.scales.xAxes[0].ticks.min = this.store.state.axes.min;\n    this.ttestChartData.options.scales.xAxes[0].ticks.max = this.store.state.axes.max;\n    this.ttestChartData.options.scales.yAxes[0].ticks.max = 0.5;\n    this.ttestChartData.options.annotation.annotations[0].label.content = 'p = ' + this.store.state.p_value;\n    this.ttestChartData.options.annotation.annotations[0].value = this.store.state.t_value;\n    this.ttestChartData.options.annotation.annotations[1].content = '\\u03B1' + this.store.state.alpha;\n    this.ttestChartData.options.annotation.annotations[1].value = this.store.state.crit_t_value;\n    this.ttestChartData.data.datasets[1].data = this.store.state.group1.dist;\n    this.ttestChartData.data.datasets[2].data = this.store.state.group2.dist;\n    // this.ttestChart.update();\n\n    // this.drawAlphaCurve(this.store.state.group1, this.store.state.crit_t_value);\n    // this.drawBetaCurve(this.store.state.group2, this.store.state.crit_t_value,this.store.state.ncp);\n    this.updateState();\n    this.sliderElem = document.getElementById('myRange');\n    this.initThumb();\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvQHZ1ZS92dWUtbG9hZGVyLXYxNS9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NyYy9jb21wb25lbnRzL1NsaWRlckNoYXJ0Q29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyYuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBa0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUlBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdnVlYXBwL3NyYy9jb21wb25lbnRzL1NsaWRlckNoYXJ0Q29tcG9uZW50LnZ1ZT81NDQ4Il0sInNvdXJjZXNDb250ZW50IjpbIlxuPHRlbXBsYXRlPlxuICA8ZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cInNsaWRlY29udGFpbmVyXCIgaWQ9XCJzbGlkZWNvbnRhaW5lclwiPlxuICAgICAgPGlucHV0IHR5cGU9XCJyYW5nZVwiIG1pbj1cIjBcIiBtYXg9XCIxMDBcIiB2YWx1ZT1cIjUwXCIgY2xhc3M9XCJzbGlkZXJcIiBpZD1cIm15UmFuZ2VcIiB2LW1vZGVsPVwic2xpZGVWYWx1ZVwiIHYtb246aW5wdXQ9XCJzbGlkZWZ1bmNcIiB2LWJpbmQ6c3R5bGU9XCJ7IGxlZnQ6IGNvbXB1dGVkTGVmdCB9XCI+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2PlxuICAgICAgPGNhbnZhcyBpZD1cInR0ZXN0LWNoYXJ0XCIgd2lkdGg9XCIxMDAwXCIgaGVpZ2h0PVwiODAwXCI+PC9jYW52YXM+XG4gICAgPC9kaXY+XG5cblxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cblxuPHNjcmlwdD5cbmltcG9ydCBzdG9yZSBmcm9tICcuLi9zdG9yZS9zdG9yZScgXG5pbXBvcnQgQ2hhcnQgZnJvbSAnY2hhcnQuanMnICAvLyBucG0gaW5zdGFsbCBjaGFydC5qc0AyLjkuNCwgdGhlbiB0cmllZCAyLjkuMy4gc28sZSBzYXkgMi45LjQgZG9lc24ndCB3b3JrLlxuaW1wb3J0IGNoYXJ0anNQbHVnaW5Bbm5vdGF0aW9uIGZyb20gXCJjaGFydGpzLXBsdWdpbi1hbm5vdGF0aW9uXCI7IC8vIG5wbSBpbnN0YWxsIGNoYXJ0anMtcGx1Z2luLWFubm90YXRpb25AMC41LjcgLS1zYXZlICAgIDw8PCB1c2VkIHRoaXMuIG5lY2Vzc2FyeT9cbmltcG9ydCAqIGFzIG1hdGggZnJvbSAnbWF0aGpzJztcbmltcG9ydCB0dGVzdENoYXJ0RGF0YSBmcm9tICcuLi90dGVzdC1jaGFydC1kYXRhLmpzJ1xuaW1wb3J0IHdlbGNocyBmcm9tICdAL3dlbGNocyc7XG5cblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdTbGlkZXJDaGFydCcsXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0b3JlLFxuICAgICAgdHRlc3RDaGFydERhdGE6IHR0ZXN0Q2hhcnREYXRhLFxuICAgICAgc3RvcmVjb3VudDogc3RvcmUuc3RhdGUuY291bnQsXG4gICAgICB0dGVzdENoYXJ0OiBudWxsLFxuICAgICAgdGh1bWI6IG51bGwsXG4gICAgICBzbGlkZXJWYWx1ZTogbnVsbCxcbiAgICAgIHNsaWRlckVsZW06IG51bGwsXG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgbXlGdW5jdGlvbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICh0aGlzLnN0b3JlLnN0YXRlLmNyaXRfdF92YWx1ZSA+IHRoaXMuc3RvcmUuc3RhdGUudF92YWx1ZSkge1xuICAgICAgICAgICAgICB0aGlzLnN0b3JlLnN0YXRlLmNyaXRfdF92YWx1ZSA9IC0zLjIxNTU7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU01BTExFUlwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuc3RvcmUuc3RhdGUuY3JpdF90X3ZhbHVlID0gMy4yMTU1O1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkJJR0dFUlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBzdG9yZS5jb21taXQoJ2RlY3JlbWVudCcpO1xuICAgICAgICAgIHN0b3JlLmNvbW1pdCgndXBkYXRlU3RhdGUnKTtcbiAgICAgICAgICB0aGlzLnN0b3JlY291bnQrKztcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlbW9cIikuaW5uZXJIVE1MID0gXCJJIGhhdmUgY2hhbmdlZCFcIjtcbiAgICB9LFxuICAgIGRyYXdBbHBoYUN1cnZlOiBmdW5jdGlvbihncm91cDEsIGNyaXRfdF92YWx1ZSl7ICBcbiAgICAgIGxldCBhbHBoYV9jdXJ2ZSA9IHdlbGNocy5nZXRBbHBoYUN1cnZlKGdyb3VwMSwgY3JpdF90X3ZhbHVlKTtcbiAgICAgIHRoaXMudHRlc3RDaGFydERhdGEuZGF0YS5kYXRhc2V0c1szXS5kYXRhID0gYWxwaGFfY3VydmU7ICAvLyB3YXMgWzNdWydkYXRhJ11cbiAgICAgIC8vIHRoaXMudHRlc3RDaGFydC51cGRhdGUoKTtcbiAgICB9LFxuICAgIGRyYXdCZXRhQ3VydmU6IGZ1bmN0aW9uIChncm91cDIsIGNyaXRfdF92YWx1ZSwgbmNwKXsgIFxuICAgICAgbGV0IGJldGFfY3VydmUgPSB3ZWxjaHMuZ2V0QmV0YUN1cnZlIChncm91cDIsIGNyaXRfdF92YWx1ZSwgbmNwKTtcbiAgICAgIHRoaXMudHRlc3RDaGFydERhdGEuZGF0YS5kYXRhc2V0c1s0XS5kYXRhID0gYmV0YV9jdXJ2ZTtcbiAgICAgIC8vIHRoaXMudHRlc3RDaGFydC51cGRhdGUoKTtcbiAgICB9LFxuXG4gICAgY29udmVydENoYXJ0WFRvU2NyZWVuWDogZnVuY3Rpb24gKHgsIGNoYXJ0X3hfbWluLCBjaGFydF94X21heCwgeDEsIHgyLCBvZmZzZXQpe1xuICAgIC8vcmV0dXJuIG1hdGgucm91bmQoKCgoeCAtIGNoYXJ0X3hfbWluKS8oY2hhcnRfeF9tYXggLSBjaGFydF94X21pbikpKih4Mi14MSkpIC0gb2Zmc2V0LDApO1xuICAgIHJldHVybiAoKCh4IC0gY2hhcnRfeF9taW4pLyhjaGFydF94X21heCAtIGNoYXJ0X3hfbWluKSkqKHgyLXgxKSkgLSBvZmZzZXQ7XG4gICAgfSxcblxuICAgIGNvbnZlcnRTY3JlZW5YVG9DaGFydFg6IGZ1bmN0aW9uICh4LCB4MSwgeDIsIGNoYXJ0X3gxLCBjaGFydF94MiwgdGh1bWJPZmZzZXRXaWR0aCl7XG4gICAgICByZXR1cm4gKHggKyAodGh1bWJPZmZzZXRXaWR0aC8yKSkvKHgyIC0geDEpKihjaGFydF94Mi1jaGFydF94MSkgKyBjaGFydF94MTtcbiAgICB9LFxuXG4gICAgY29udmVydFJhbmdlU2xpZGVyWFRvQ2hhcnRYOiBmdW5jdGlvbiAocnNfeCwgcnNfeDEsIHJzX3gyLCBweF94MSwgcHhfeDIsIGNoYXJ0X3gxLCBjaGFydF94MiwgdGh1bWJXaWR0aCl7XG4gICAgICBsZXQgcnNfcHJvcCA9IHJzX3gvKHJzX3gyLXJzX3gxKTtcbiAgICAgIGNvbnNvbGUubG9nKFwicnNfcHJvcFwiLCByc19wcm9wKTtcbiAgICAgIGxldCBweF9vZmZzZXQgPSAtKHJzX3Byb3AtMC41KSpOdW1iZXIodGh1bWJXaWR0aCk7IFxuICAgICAgY29uc29sZS5sb2coXCJweF9vZmZzZXRcIiwgcHhfb2Zmc2V0KTtcbiAgICAgIGxldCBweF9wcm9wID0gcnNfcHJvcCArIHB4X29mZnNldC8ocHhfeDItcHhfeDEpO1xuICAgICAgY29uc29sZS5sb2coXCJweF9wcm9wXCIsIHB4X3Byb3ApO1xuICAgICAgcmV0dXJuICBweF9wcm9wKihjaGFydF94Mi1jaGFydF94MSkgKyBjaGFydF94MTtcbiAgICB9LFxuXG5cbiAgICBzbGlkZWZ1bmMoKXtcbiAgICAgIGNvbnNvbGUubG9nKFwiU0xJREVGVU5DXCIsIHRoaXMuc3RvcmUuc3RhdGUuYXhlcy54X21pbiwgdGhpcy5zdG9yZS5zdGF0ZS5heGVzLnhfbWF4KTtcbiAgICAgIGNvbnNvbGUubG9nKE51bWJlcih0aGlzLnNsaWRlVmFsdWUpKTtcbiAgICAgIHZhciBwb2ludHMgPSB0aGlzLnR0ZXN0Q2hhcnQuY2hhcnQuZ2V0RGF0YXNldE1ldGEoMCkuZGF0YTtcbiAgICAgIHZhciB4MSA9IE51bWJlcihwb2ludHNbMF0uX21vZGVsLngpO1xuICAgICAgdmFyIHgyID0gTnVtYmVyKHBvaW50c1sxXS5fbW9kZWwueCk7XG4gICAgICBsZXQgc2xpZGV2YWwgPSBOdW1iZXIodGhpcy5zbGlkZVZhbHVlKTtcbiAgICAgIGxldCB0aHVtYldpZHRoID0gMjE7XG4gICAgICB0aGlzLnN0b3JlLnN0YXRlLmNyaXRfdF92YWx1ZSA9IHRoaXMuY29udmVydFJhbmdlU2xpZGVyWFRvQ2hhcnRYKHNsaWRldmFsLCAwLCAxMDAsIHgxLCB4MiwgdGhpcy5zdG9yZS5zdGF0ZS5heGVzLnhfbWluLCB0aGlzLnN0b3JlLnN0YXRlLmF4ZXMueF9tYXgsIHRodW1iV2lkdGgpOyBcbiAgICAgIGNvbnNvbGUubG9nKFwiQ09OVkVSVDpcIiwgdGhpcy5zdG9yZS5zdGF0ZS5jcml0X3RfdmFsdWUpO1xuICAgICAgLy8gdGhpcy50dGVzdENoYXJ0RGF0YS5vcHRpb25zLmFubm90YXRpb24uYW5ub3RhdGlvbnNbMV0udmFsdWUgPSB0aGlzLnN0b3JlLnN0YXRlLmNyaXRfdF92YWx1ZTtcbiAgICAgIHRoaXMudXBkYXRlU3RhdGUoKTtcbiAgICAgIC8vIHRoaXMudHRlc3RDaGFydC51cGRhdGUoKTtcbiAgICB9LFxuICAgIFxuICAgIHVwZGF0ZVN0YXRlOiBmdW5jdGlvbigpeyAgLy91cGRhdGVTdGF0ZTogZnVuY3Rpb24oY3JpdF90X3ZhbHVlLCBkZiwgbmNwKVxuICAgICAgLy8gY2FsY3VsYXRpb25zXG4gICAgICAvLyBjcml0X3RfdmFsdWVfYmV0YSA9IGNyaXRfdF92YWx1ZSAtIG5jcDsgIC8vIG5jcDogbm9uLWNlbnRyYWxpdHkgcGFyYW1ldGVyXG4gICAgICAvLyBhbHBoYSA9IGdldEFscGhhKGNyaXRfdF92YWx1ZSwgZGYpO1xuICAgICAgLy8gYmV0YSA9IGdldEJldGEoY3JpdF90X3ZhbHVlX2JldGEsIGRmKTtcblxuICAgICAgLy8gVVBEQVRFIFNUQVRFIElOIFNUT1JFXG5cbiAgICAgIHRoaXMuc3RvcmUuc3RhdGUuYWxwaGEgPSBtYXRoLnJvdW5kKHdlbGNocy5nZXRBbHBoYSh0aGlzLnN0b3JlLnN0YXRlLmNyaXRfdF92YWx1ZSwgdGhpcy5zdG9yZS5zdGF0ZS5kZiksIDQpO1xuICAgICAgdGhpcy5zdG9yZS5zdGF0ZS5iZXRhID0gbWF0aC5yb3VuZCh3ZWxjaHMuZ2V0QmV0YSh0aGlzLnN0b3JlLnN0YXRlLmNyaXRfdF92YWx1ZV9iZXRhLCB0aGlzLnN0b3JlLnN0YXRlLmRmKSwgNCk7XG5cbiAgICAgIGNvbnNvbGUubG9nKFwiY3JpdF90X3ZhbHVlOlwiLCB0aGlzLnN0b3JlLnN0YXRlLmNyaXRfdF92YWx1ZSk7XG4gICAgICBjb25zb2xlLmxvZyhcImNyaXRfdF92YWx1ZV9iZXRhOlwiLCB0aGlzLnN0b3JlLnN0YXRlLmNyaXRfdF92YWx1ZV9iZXRhKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiZGY6XCIsIHRoaXMuc3RvcmUuc3RhdGUuZGYpO1xuICAgICAgY29uc29sZS5sb2coXCJhbHBoYTpcIiwgdGhpcy5zdG9yZS5zdGF0ZS5hbHBoYSk7XG4gICAgICBjb25zb2xlLmxvZyhcImJldGE6XCIsIHRoaXMuc3RvcmUuc3RhdGUuYmV0YSk7XG5cbiAgICAgIC8vIC8vIHVwZGF0ZSBkaXNwbGF5XG4gICAgICAvLyBlbGVtKCdjcml0X3RfdmFsdWUnKS5pbm5lclRleHQgPSBjcml0X3RfdmFsdWU7XG4gICAgICAvLyBlbGVtKCdzaWctbGV2ZWwnKS5pbm5lclRleHQgPSByb3VuZChhbHBoYSk7XG5cbiAgICAgIHRoaXMudHRlc3RDaGFydERhdGEub3B0aW9ucy5hbm5vdGF0aW9uLmFubm90YXRpb25zWzFdLnZhbHVlID0gdGhpcy5zdG9yZS5zdGF0ZS5jcml0X3RfdmFsdWU7XG4gICAgICAvLyBsaW5lQ2hhcnQub3B0aW9ucy5hbm5vdGF0aW9uLmFubm90YXRpb25zWzFdWyd2YWx1ZSddID0gY3JpdF90X3ZhbHVlO1xuICAgICAgLy8gbGluZUNoYXJ0LnVwZGF0ZSgpO1xuXG4gICAgICAvLyBkcmF3QWxwaGFDdXJ2ZShncm91cDEsIGNyaXRfdF92YWx1ZSk7XG4gICAgICAvLyBkcmF3QmV0YUN1cnZlKGdyb3VwMiwgY3JpdF90X3ZhbHVlKTtcbiAgICAgIHRoaXMuZHJhd0FscGhhQ3VydmUodGhpcy5zdG9yZS5zdGF0ZS5ncm91cDEsIHRoaXMuc3RvcmUuc3RhdGUuY3JpdF90X3ZhbHVlKTtcbiAgICAgIHRoaXMuZHJhd0JldGFDdXJ2ZSh0aGlzLnN0b3JlLnN0YXRlLmdyb3VwMiwgdGhpcy5zdG9yZS5zdGF0ZS5jcml0X3RfdmFsdWUsdGhpcy5zdG9yZS5zdGF0ZS5uY3ApO1xuICAgICAgXG4gICAgICAvLyB1cGRhdGVDb25mdXNpb25NYXRyaXgoYWxwaGEsIGJldGEpO1xuICAgICAgLy8gc2hvd1JlamVjdE9yTm90UmVqZWN0KGNyaXRfdF92YWx1ZSwgdF92YWx1ZSk7XG4gICAgICAvLyB1cGRhdGVQcm9iYWJpbGl0eVRyZWUoKTtcbiAgICAgIHRoaXMudHRlc3RDaGFydC51cGRhdGUoKTtcbiAgICAgIHN0b3JlLmNvbW1pdCgndXBkYXRlU3RhdGUnKTtcblxuICAgIH0sXG5cbiAgICBpbml0VGh1bWIoKXtcbiAgICAgIHZhciBwb2ludHMgPSB0aGlzLnR0ZXN0Q2hhcnQuY2hhcnQuZ2V0RGF0YXNldE1ldGEoMCkuZGF0YTtcbiAgICAgIHZhciB4MSA9IHBvaW50c1swXS5fbW9kZWwueDtcbiAgICAgIHZhciB4MiA9IHBvaW50c1sxXS5fbW9kZWwueDtcbiAgICAgIHRoaXMuc2xpZGVyRWxlbS5zdHlsZS5sZWZ0ID0geDEgKyBcInB4XCI7XG4gICAgICB0aGlzLnNsaWRlckVsZW0uc3R5bGUud2lkdGggPSB4MiAtIHgxICsgXCJweFwiO1xuICAgIH0sXG5cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBjb21wdXRlZExlZnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBcIjUxcHhcIjtcbiAgICB9LFxuICB9LFxuICBtb3VudGVkKCkge1xuICAgIENoYXJ0LnBsdWdpbnMucmVnaXN0ZXIoY2hhcnRqc1BsdWdpbkFubm90YXRpb24pXG4gICAgdGhpcy50dGVzdENoYXJ0ID0gbmV3IENoYXJ0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0dGVzdC1jaGFydCcpLCB0aGlzLnR0ZXN0Q2hhcnREYXRhKTtcbiAgICB0aGlzLnR0ZXN0Q2hhcnREYXRhLmRhdGEuZGF0YXNldHNbMF0uZGF0YSA9IFt7eDogLTQuNzUzLCB5OiAwfSwge3g6IDcuMjMyLCB5OiAwfV07XG4gICAgdGhpcy50dGVzdENoYXJ0RGF0YS5vcHRpb25zLnNjYWxlcy54QXhlc1swXS50aWNrcy5taW4gPSB0aGlzLnN0b3JlLnN0YXRlLmF4ZXMubWluO1xuICAgIHRoaXMudHRlc3RDaGFydERhdGEub3B0aW9ucy5zY2FsZXMueEF4ZXNbMF0udGlja3MubWF4ID0gdGhpcy5zdG9yZS5zdGF0ZS5heGVzLm1heDsgXG4gICAgdGhpcy50dGVzdENoYXJ0RGF0YS5vcHRpb25zLnNjYWxlcy55QXhlc1swXS50aWNrcy5tYXggPSAwLjU7XG5cbiAgICB0aGlzLnR0ZXN0Q2hhcnREYXRhLm9wdGlvbnMuYW5ub3RhdGlvbi5hbm5vdGF0aW9uc1swXS5sYWJlbC5jb250ZW50ID0gJ3AgPSAnICsgdGhpcy5zdG9yZS5zdGF0ZS5wX3ZhbHVlO1xuICAgIHRoaXMudHRlc3RDaGFydERhdGEub3B0aW9ucy5hbm5vdGF0aW9uLmFubm90YXRpb25zWzBdLnZhbHVlID0gdGhpcy5zdG9yZS5zdGF0ZS50X3ZhbHVlO1xuICAgIHRoaXMudHRlc3RDaGFydERhdGEub3B0aW9ucy5hbm5vdGF0aW9uLmFubm90YXRpb25zWzFdLmNvbnRlbnQgPSAnXFx1MDNCMScgKyB0aGlzLnN0b3JlLnN0YXRlLmFscGhhOyBcbiAgICB0aGlzLnR0ZXN0Q2hhcnREYXRhLm9wdGlvbnMuYW5ub3RhdGlvbi5hbm5vdGF0aW9uc1sxXS52YWx1ZSA9IHRoaXMuc3RvcmUuc3RhdGUuY3JpdF90X3ZhbHVlO1xuICAgIFxuXG4gICAgdGhpcy50dGVzdENoYXJ0RGF0YS5kYXRhLmRhdGFzZXRzWzFdLmRhdGEgPSB0aGlzLnN0b3JlLnN0YXRlLmdyb3VwMS5kaXN0O1xuICAgIHRoaXMudHRlc3RDaGFydERhdGEuZGF0YS5kYXRhc2V0c1syXS5kYXRhID0gdGhpcy5zdG9yZS5zdGF0ZS5ncm91cDIuZGlzdDtcbiAgICAvLyB0aGlzLnR0ZXN0Q2hhcnQudXBkYXRlKCk7XG5cbiAgICAvLyB0aGlzLmRyYXdBbHBoYUN1cnZlKHRoaXMuc3RvcmUuc3RhdGUuZ3JvdXAxLCB0aGlzLnN0b3JlLnN0YXRlLmNyaXRfdF92YWx1ZSk7XG4gICAgLy8gdGhpcy5kcmF3QmV0YUN1cnZlKHRoaXMuc3RvcmUuc3RhdGUuZ3JvdXAyLCB0aGlzLnN0b3JlLnN0YXRlLmNyaXRfdF92YWx1ZSx0aGlzLnN0b3JlLnN0YXRlLm5jcCk7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xuXG4gICAgdGhpcy5zbGlkZXJFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215UmFuZ2UnKTtcbiAgICB0aGlzLmluaXRUaHVtYigpO1xuXG4gIH0sXG5cblxuXG59XG48L3NjcmlwdD5cblxuXG5cblxuPHN0eWxlIHNjb3BlZD5cblxuICAuc2xpZGVjb250YWluZXIge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHBhZGRpbmc6IDBweDtcbiAgfVxuXG4gIC8qIFRoZSBzbGlkZXIgaXRzZWxmICovXG4gIC5zbGlkZXIge1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTsgIC8qIE92ZXJyaWRlIGRlZmF1bHQgQ1NTIHN0eWxlcyAqL1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwtd2lkdGggKi9cbiAgICBoZWlnaHQ6IDE1cHg7IC8qIFNwZWNpZmllZCBoZWlnaHQgKi9cbiAgICBiYWNrZ3JvdW5kOiAjZDNkM2QzOyAvKiBHcmV5IGJhY2tncm91bmQgKi9cbiAgICBvdXRsaW5lOiBub25lOyAvKiBSZW1vdmUgb3V0bGluZSAqL1xuICAgIC8qb3BhY2l0eTogMC43OyovIC8qIFNldCB0cmFuc3BhcmVuY3kgKGZvciBtb3VzZS1vdmVyIGVmZmVjdHMgb24gaG92ZXIpICovXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuMnM7IC8qIDAuMiBzZWNvbmRzIHRyYW5zaXRpb24gb24gaG92ZXIgKi9cbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4ycztcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICB0b3A6ICs1cHg7XG5cbiAgfVxuICAvKiAuc2xpZGVyIHtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZDogI0UwRTBFMDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQobGVmdCB0b3AsICNFMEUwRTAsICNFRUVFRUUpO1xuICAgIGhlaWdodDogMTVweDtcbiAgICBtYXJnaW46IDBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH0gKi9cblxuXG4gIC8qIE1vdXNlLW92ZXIgZWZmZWN0cyAqL1xuICAuc2xpZGVyOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAxOyAvKiBGdWxseSBzaG93biBvbiBtb3VzZS1vdmVyICovXG4gIH1cblxuICAvKiBUaGUgc2xpZGVyIGhhbmRsZSAodXNlIC13ZWJraXQtIChDaHJvbWUsIE9wZXJhLCBTYWZhcmksIEVkZ2UpIGFuZCAtbW96LSAoRmlyZWZveCkgdG8gb3ZlcnJpZGUgZGVmYXVsdCBsb29rKSAqL1xuICAuc2xpZGVyOjotd2Via2l0LXNsaWRlci10aHVtYiB7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lOyAvKiBPdmVycmlkZSBkZWZhdWx0IGxvb2sgKi9cbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIHdpZHRoOiAyMXB4OyAvKiBTZXQgYSBzcGVjaWZpYyBzbGlkZXIgaGFuZGxlIHdpZHRoICovXG4gICAgaGVpZ2h0OiAyNXB4OyAvKjI1cHggICBTbGlkZXIgaGFuZGxlIGhlaWdodCAqL1xuICAgIGN1cnNvcjogcG9pbnRlcjsgLyogQ3Vyc29yIG9uIGhvdmVyICovXG4gICAgb3BhY2l0eTogMTtcbiAgICBiYWNrZ3JvdW5kOiAjZmYzZTAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAvKiB0b3A6IC01cHg7ICovXG4gICAgLyogYm90dG9tOiAtMnB4OyAqL1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IDBweDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgbGVmdDogMHB4O1xuXG4gIH1cblxuICAuc2xpZGVyOjotbW96LXJhbmdlLXRodW1iIHtcbiAgICB3aWR0aDogMTVweDsgLyogU2V0IGEgc3BlY2lmaWMgc2xpZGVyIGhhbmRsZSB3aWR0aCAqL1xuICAgIGhlaWdodDogMjVweDsgLyogU2xpZGVyIGhhbmRsZSBoZWlnaHQgKi9cbiAgICBjdXJzb3I6IHBvaW50ZXI7IC8qIEN1cnNvciBvbiBob3ZlciAqL1xuXG4gICAgYmFja2dyb3VuZDogI2ZmM2UwMDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIH1cblxuXG5cbiAgLnRodW1iIHtcbiAgICB3aWR0aDogMTVweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiAwcHg7XG4gICAgdG9wOiAtNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAjZmYzZTAwO1xuICB9XG5cbiAgLyogI2FwcCB7XG4gICAgZm9udC1mYW1pbHk6IEF2ZW5pciwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzJjM2U1MDtcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xuICB9ICovXG5cbiAgaHRtbCB7XG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG4gIH1cblxuICBib2R5IHtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYzZTAwOyAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MzQzNDM7XG4gICAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cblxuICBhOmxpbmssIGE6dmlzaXRlZCB7XG4gICAgY29sb3I6IGdyZXk7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG5cbiAgLyogbW91c2Ugb3ZlciBsaW5rICovXG4gIGE6aG92ZXIge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cblxuICAvKiBzZWxlY3RlZCBsaW5rICovXG4gIGE6YWN0aXZlIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG5cblxuICBoNCB7XG4gICAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgfVxuXG5cbiAgLnJlc3BvbnNpdmUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuXG4gIC8qIC5zbGlkZXIge1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBiYWNrZ3JvdW5kOiAjRTBFMEUwO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChsZWZ0IHRvcCwgI0UwRTBFMCwgI0VFRUVFRSk7XG4gICAgaGVpZ2h0OiAxNXB4O1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfSAqL1xuICAvKiB3aWR0aDogNTI1cHg7ICovXG5cblxuICAudGh1bWIge1xuICAgIHdpZHRoOiAxNXB4O1xuICAgIGhlaWdodDogMjVweDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IDBweDtcbiAgICB0b3A6IC01cHg7XG4gICAgYmFja2dyb3VuZDogI2ZmM2UwMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuXG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/SliderChartComponent.vue?vue&type=script&lang=js&\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "4d8881ce2006c62e"; }
/******/ }();
/******/ 
/******/ }
);
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ \"./node_modules/core-js/modules/es.array.push.js\");\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'jquery-ui-slider'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ \"./node_modules/chart.js/dist/Chart.js\");\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chartjs-plugin-annotation */ \"./node_modules/chartjs-plugin-annotation/src/index.js\");\n/* harmony import */ var chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var mathjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! mathjs */ \"./node_modules/mathjs/lib/esm/entry/pureFunctionsAny.generated.js\");\n/* harmony import */ var _ttest_chart_data_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ttest-chart-data.js */ \"./src/ttest-chart-data.js\");\n/* harmony import */ var _components_HypothesisComponent_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/HypothesisComponent.vue */ \"./src/components/HypothesisComponent.vue\");\n/* harmony import */ var _components_PPVComponent_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/PPVComponent.vue */ \"./src/components/PPVComponent.vue\");\n/* harmony import */ var _components_ROCComponent_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/ROCComponent.vue */ \"./src/components/ROCComponent.vue\");\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./store/store */ \"./src/store/store.js\");\n\n\n // npm install chart.js@2.9.4, then tried 2.9.3. so,e say 2.9.4 doesn't work.\n// npm install chartjs-plugin-annotation@0.5.7 --save    <<< used this. necessary?\n\n\n\n\n\n\n\n\n// store.commit('increment');\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  store: _store_store__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n  name: 'App',\n  components: {\n    HypothesisComponent: _components_HypothesisComponent_vue__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n    PPVComponent: _components_PPVComponent_vue__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n    ROCComponent: _components_ROCComponent_vue__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n  },\n  data() {\n    return {\n      store: _store_store__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n      ttestChartData: _ttest_chart_data_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n      storecount: _store_store__WEBPACK_IMPORTED_MODULE_8__[\"default\"].state.count,\n      ttestChart: null,\n      thumb: null\n    };\n  },\n  methods: {\n    myFunction: function () {\n      if (this.store.state.crit_t_value > this.store.state.t_value) {\n        this.store.state.crit_t_value = -3.2155;\n        console.log(\"SMALLER\");\n      } else {\n        this.store.state.crit_t_value = 3.2155;\n        console.log(\"BIGGER\");\n      }\n      _store_store__WEBPACK_IMPORTED_MODULE_8__[\"default\"].commit('decrement');\n      _store_store__WEBPACK_IMPORTED_MODULE_8__[\"default\"].commit('updateState');\n      this.storecount++;\n      document.getElementById(\"demo\").innerHTML = \"I have changed!\";\n    },\n    drawAlphaCurve: function (group1, crit_t_value) {\n      // Fill the area under the curve representing alpha.\n      let alpha_curve = [];\n      // this datapoint connects with the critical t vertical line\n      alpha_curve.push({\n        x: crit_t_value,\n        y: this.t_Distrib(crit_t_value, group1.df)\n      });\n      for (var i = 0; i < group1.dist.length; i++) {\n        if (group1.dist[i]['x'] > crit_t_value) {\n          alpha_curve.push({\n            x: group1.dist[i]['x'],\n            y: group1.dist[i]['y']\n          });\n        }\n      }\n      this.ttestChartData.data.datasets[3].data = alpha_curve; // was [3]['data']\n      this.ttestChart.update();\n    },\n    drawBetaCurve: function (group2, crit_t_value, ncp) {\n      // Fill the area under the curve representing beta.\n      let beta_curve = [];\n      for (var i = 0; i < group2.dist.length; i++) {\n        if (group2.dist[i]['x'] < crit_t_value) {\n          beta_curve.push({\n            x: group2.dist[i]['x'],\n            y: group2.dist[i]['y']\n          });\n        }\n      }\n      console.log(\"beta_curve:\", beta_curve);\n\n      // this datapoint connects with the critical t vertical line\n      beta_curve.push({\n        x: crit_t_value,\n        y: this.t_Distrib(crit_t_value - ncp, group2.df)\n      }); // ncp acts as offset\n      this.ttestChartData.data.datasets[4].data = beta_curve;\n      this.ttestChart.update();\n    },\n    t_Distrib: function (t, dof) {\n      // For a given x, return the t distribution y value.\n      let y = mathjs__WEBPACK_IMPORTED_MODULE_9__.gamma((dof + 1) / 2) / (mathjs__WEBPACK_IMPORTED_MODULE_9__.sqrt(dof * mathjs__WEBPACK_IMPORTED_MODULE_9__.pi) * mathjs__WEBPACK_IMPORTED_MODULE_9__.gamma(dof / 2)) * (1 + t ** 2 / dof) ** (-(dof + 1) / 2);\n      return mathjs__WEBPACK_IMPORTED_MODULE_9__.round(y, 6);\n    }\n  },\n  convertChartXToScreenX: function (x, chart_x_min, chart_x_max, x1, x2, offset) {\n    //return math.round((((x - chart_x_min)/(chart_x_max - chart_x_min))*(x2-x1)) - offset,0);\n    return (x - chart_x_min) / (chart_x_max - chart_x_min) * (x2 - x1) - offset;\n  },\n  convertScreenXToChartX: function (x, x1, x2, chart_x1, chart_x2, thumbOffsetWidth) {\n    return (x + thumbOffsetWidth / 2) / (x2 - x1) * (chart_x2 - chart_x1) + chart_x1;\n  },\n  initThumb: function (chart_x_min, chart_x_max, thumbOffsetWidth, crit_t_init) {\n    // Initial position of the slider thumb.\n    console.log(\"crit_t_init:\", crit_t_init);\n    var points = this.ttestChart.chart.getDatasetMeta(0).data;\n    var x1 = points[0]._model.x;\n    var x2 = points[1]._model.x;\n\n    // convert chart x value to the x screen position for the slider thumb\n    // var offset = thumb.offsetWidth/2; //.59;  // previously: offset=3\n    var offset = thumbOffsetWidth / 2; //.59;  // previously: offset=3\n    var new_thumb = this.convertChartXToScreenX(crit_t_init, chart_x_min, chart_x_max, x1, x2, offset);\n    // elem(\"thumb\").style.left = new_thumb + \"px\";\n\n    // BELOW IS NEW\n    // adjust the slider\n    // elem(\"slider\").style.left = x1 + \"px\";\n    // elem(\"slider\").style.width = x2 - x1 + \"px\";\n\n    // updateState(crit_t_init, df, ncp);\n    return new_thumb;\n  },\n  mounted() {\n    this.thumb = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'jquery-ui-slider'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('.thumb');\n    chart_js__WEBPACK_IMPORTED_MODULE_2___default().plugins.register((chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_3___default()));\n    this.ttestChart = new (chart_js__WEBPACK_IMPORTED_MODULE_2___default())(document.getElementById('ttest-chart'), this.ttestChartData);\n    this.ttestChartData.data.datasets[1].data = this.store.state.group1.dist;\n    this.ttestChart.update();\n    this.drawAlphaCurve(this.store.state.group1, this.store.state.crit_t_value);\n    this.drawBetaCurve(this.store.state.group2, this.store.state.crit_t_value, this.store.state.ncp);\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvQHZ1ZS92dWUtbG9hZGVyLXYxNS9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NyYy9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFxTEE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Z1ZWFwcC9zcmMvQXBwLnZ1ZT8xMWM0Il0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdiBpZD1cImFwcFwiPlxuIFxuXG4gIDxkaXYgY2xhc3M9XCJoZXJvLWltYWdlXCIgaWQ9XCJPcmFuZ2VXaW5kb3dcIj5cbiAgICA8ZGl2IGlkPVwidGl0bGVuYW1lXCI+V2VsY2gncyA8aT50PC9pPi10ZXN0PC9kaXY+XG4gICAgPGRpdiBpZD1cInRpdGxlbmFtZS1zdWJcIj5jYWxjdWxhdG9yPC9kaXY+XG4gIDwvZGl2PlxuXG4gIDxkaXYgaWQ9XCJCbGFja1dpbmRvd1wiPlxuICAgIDxkaXYgc3R5bGU9XCJ0ZXh0LWFsaWduOmp1c3RpZnlcIj5cbiAgICAgIElzIHRoZXJlIGEgc3RhdGlzdGljYWxseSBzaWduaWZpY2FudCBkaWZmZXJlbmNlIGJldHdlZW4gdHdvIGRhdGFzZXRzPzxwPjwvcD5cbiAgICAgIE1vdmUgdGhlIHNsaWRlciBhbmQgb2JzZXJ2ZSB0aGUgaW1wYWN0IG9mIHRoZSBzaWduaWZpY2FuY2UgbGV2ZWwgb24gdGhlIHByb2JhYmlsaXR5IG9mIG1ha2luZyB0aGUgd3JvbmcgZGVjaXNpb24uIElucHV0IGFuZCBleHBsb3JlIHlvdXIgZGF0YXNldHMuXG4gICAgICBUaGlzIGNhbGN1bGF0b3IgaXMgZm9yIG9uZS10YWlsZWQgV2VsY2jigJlzIDxpPnQ8L2k+LXRlc3RzLiBUaGUgZGF0YSBhcmUgYXNzdW1lZCB0byBiZSBub3JtYWxseSBkaXN0cmlidXRlZC5cbiAgICAgIDxhIGhyZWY9JyNtb3JlLWluZm8nPkZpbmQgbW9yZSBpbmZvcm1hdGlvbi48L2E+XG4gICAgPC9kaXY+XG4gICAgPHA+PC9wPlxuICA8L2Rpdj5cblxuXG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIiBpZD1cIkNvbnRhaW5lcldpbmRvd1wiPlxuXG4gICAgPHA+PGJyPjxwPjxicj48cD48YnI+PHA+XG5cbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5cblxuICAgICAgICA8IS0tIHslIGlmIHRlc3RfcmVzdWx0cyAlfSAtLT5cbiAgICAgICAgPGRpdiBpZD1cInNsaWRlclwiIGNsYXNzPVwic2xpZGVyXCI+XG4gICAgICAgICAgPGRpdiBpZD1cInRodW1iXCIgY2xhc3M9XCJ0aHVtYlwiIG9udG91Y2htb3ZlPVwibW92ZVRodW1iTW9iaWxlKGV2ZW50KVwiPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8Y2FudmFzIGlkPVwidHRlc3QtY2hhcnRcIiB3aWR0aD1cIjEwMDBcIiBoZWlnaHQ9XCI4MDBcIj48L2NhbnZhcz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxwPjxicj48cD48YnI+XG4gICAgICAgIDwhLS0geyUgZW5kaWYgJX0gLS0+XG5cbiAgICAgICAgPGI+PHNwYW4gaWQ9XCJtZXNzYWdlXCI+PC9zcGFuPjwvYj5cbiAgICAgICAgPGJyPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJlbnRlci1kYXRhXCI+XG4gICAgICAgICAgPGZvcm0gaWQ9XCJkYXRhLWZvcm1cIiBhY3Rpb249XCJ7JSB1cmwgJ2NvcmU6dHRlc3QnICV9XCIgbWV0aG9kPSdwb3N0JyBjbGFzcz1cImZvcm1cIj5cbiAgICAgICAgICA8IS0tIHslIGNzcmZfdG9rZW4gJX0gLS0+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtNiBjb2wtc20tNFwiPlxuICAgICAgICAgICAgICAgIDwhLS0ge3sgZm9ybS5kYXRhc2V0MXxhc19jcmlzcHlfZmllbGQgfX0gLS0+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTYgY29sLXNtLTRcIj5cbiAgICAgICAgICAgICAgICA8IS0tIHt7IGZvcm0uZGF0YXNldDJ8YXNfY3Jpc3B5X2ZpZWxkIH19IC0tPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtc20tNFwiPlxuICAgICAgICAgICAgICAgIDxiPlNUQVRJU1RJQ1M8L2I+PGJyPjxicj5cbiAgICAgICAgICAgICAgICA8Yj5jcml0aWNhbCB0OjwvYj4gPHNwYW4gaWQ9XCJjcml0X3RfdmFsdWVcIj57eyB0aGlzLnN0b3JlLnN0YXRlLmNyaXRfdF92YWx1ZSB9fTwvc3Bhbj48YnI+XG4gICAgICAgICAgICAgICAgPGI+c2lnIGxldmVsICgmIzk0NTspOjwvYj4gPHNwYW4gaWQ9XCJzaWctbGV2ZWxcIj57eyB0aGlzLnN0b3JlLnN0YXRlLmFscGhhIH19PC9zcGFuPjxicj5cbiAgICAgICAgICAgICAgICA8YnI+XG5cbiAgICAgICAgICAgICAgICA8Yj50LXZhbHVlOjwvYj4gPHNwYW4gaWQ9XCJ0X3ZhbHVlXCI+e3sgdGhpcy5zdG9yZS5zdGF0ZS50X3ZhbHVlIH19PC9zcGFuPjxicj5cbiAgICAgICAgICAgICAgICA8Yj5wLXZhbHVlOjwvYj4ge3sgdGhpcy5zdG9yZS5zdGF0ZS5wX3ZhbHVlIH19PGJyPlxuICAgICAgICAgICAgICAgIDxicj5cblxuICAgICAgICAgICAgICAgIDwhLS0gPGI+ZGY6PC9iPiB7eyB0ZXN0X3Jlc3VsdHMuZGYgfX08YnI+IC0tPlxuICAgICAgICAgICAgICAgIDwhLS0gPGI+ZWZmZWN0IHNpemU6PC9iPiB7eyB0ZXN0X3Jlc3VsdHMuZWZmZWN0X3NpemUgfX08YnI+IC0tPlxuICAgICAgICAgICAgICAgIDxiPm5jcDo8L2I+IDxzcGFuIGlkPVwibmNwXCI+e3sgdGhpcy5zdG9yZS5zdGF0ZS5uY3AgfX08L3NwYW4+PGJyPlxuICAgICAgICAgICAgICAgIDxicj48YnI+XG5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG5hbWU9XCJzdWJtaXRcIiBzdHlsZT1cIm1hcmdpbi1ib3R0b206NXB4XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIj5BbmFseXplPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgc3R5bGU9XCJtYXJnaW4tYm90dG9tOjVweFwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgb25jbGljaz1cImNsZWFyRm9ybSgpXCI+Q2xlYXI8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnI+PGJyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9mb3JtPlxuXG4gICAgICAgICAgPGRpdiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTg7IHBhZGRpbmc6MTBweDsgbWluLXdpZHRoOjMwMHB4O1wiIGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTRcIj5cbiAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJTbWFsbFNjcmVlblwiPjxiPkdyb3VwIDE8L2I+PGJyPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICB7eyB0aGlzLnN0b3JlLnN0YXRlLmdyb3VwMS5tZWFuIH19PGJyPlxuICAgICAgICAgICAgICAgIHt7IHRoaXMuc3RvcmUuc3RhdGUuZ3JvdXAxLnNkIH19PGJyPlxuICAgICAgICAgICAgICAgIHt7IHRoaXMuc3RvcmUuc3RhdGUuZ3JvdXAxLm4gfX08YnI+XG4gICAgICAgICAgICAgIDwhLS0ge3sgZGF0YTEubWVhbiB9fTxicj5cbiAgICAgICAgICAgICAge3sgZGF0YTEuc2QgfX08YnI+XG4gICAgICAgICAgICAgIHt7IGRhdGExLm4gfX08YnI+IC0tPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTRcIj5cbiAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJTbWFsbFNjcmVlblwiPjxiPkdyb3VwIDI8L2I+PGJyPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICB7eyB0aGlzLnN0b3JlLnN0YXRlLmdyb3VwMi5tZWFuIH19PGJyPlxuICAgICAgICAgICAgICAgIHt7IHRoaXMuc3RvcmUuc3RhdGUuZ3JvdXAyLnNkIH19PGJyPlxuICAgICAgICAgICAgICAgIHt7IHRoaXMuc3RvcmUuc3RhdGUuZ3JvdXAyLm4gfX08YnI+XG4gICAgICAgICAgICAgIDwhLS0ge3sgZGF0YTIubWVhbiB9fTxicj5cbiAgICAgICAgICAgICAge3sgZGF0YTIuc2QgfX08YnI+XG4gICAgICAgICAgICAgIHt7IGRhdGEyLm4gfX08YnI+IC0tPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTRcIj5cbiAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJTbWFsbFNjcmVlblwiPjxicj48L3NwYW4+XG4gICAgICAgICAgICAgIDxiPk1lYW48L2I+PGJyPlxuICAgICAgICAgICAgICA8Yj5TRDwvYj48YnI+XG4gICAgICAgICAgICAgIDxiPk48L2I+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+PCEtLSBjbG9zZSBlbnRlci1kYXRhIGRpdiAtLT5cbiAgICAgICAgPHA+PC9wPjxicj5cbiAgICAgIDwvZGl2PiA8IS0tIGNvbHVtbiBlbmQgLS0+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMVwiPlxuICAgICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTVcIj5cblxuICAgICAgPCEtLSB7JSBpZiB0ZXN0X3Jlc3VsdHMgJX0gLS0+XG4gICAgICA8ZGl2IGNsYXNzPVwidGFiYmVkXCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwidGFic1wiIGlkPVwidGFiLW5hdi0xXCIgY2hlY2tlZD5cbiAgICAgICAgPGxhYmVsIGZvcj1cInRhYi1uYXYtMVwiPkh5cG90aGVzaXMgVGVzdGluZzwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwidGFic1wiIGlkPVwidGFiLW5hdi0yXCI+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJ0YWItbmF2LTJcIj5QUFY8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInRhYnNcIiBpZD1cInRhYi1uYXYtM1wiPlxuICAgICAgICA8bGFiZWwgZm9yPVwidGFiLW5hdi0zXCI+Uk9DPC9sYWJlbD5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFic1wiPlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRhYlwiPlxuICAgICAgICAgICAgPEh5cG90aGVzaXNDb21wb25lbnQgLz4gXG4gICAgICAgICAgPC9kaXY+IDwhLS0gZW5kIGh5cG90aGVzaXMgdGVzdGluZyAtLT5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJcIj5cbiAgICAgICAgICAgIDxQUFZDb21wb25lbnQgLz5cbiAgICAgICAgICA8L2Rpdj4gPCEtLSBlbmQgUFBWIC0tPlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRhYlwiPlxuICAgICAgICAgICAgPFJPQ0NvbXBvbmVudCAvPlxuICAgICAgICAgIDwvZGl2PiA8IS0tIGVuZCBST0MgLS0+XG5cbiAgICAgICAgPC9kaXY+IDwhLS0gZW5kIHRhYnMgLS0+XG4gICAgICA8L2Rpdj4gIDwhLS0gZW5kIHRhYmJlZCAtLT5cbiAgICAgICAgXG4gICAgICA8IS0tIHslIGVuZGlmICV9IC0tPlxuICAgIDwvZGl2PiA8IS0tIGVuZCBjb2x1bW4gLS0+XG4gIDwvZGl2PiA8IS0tIGVuZCByb3cgLS0+XG5cblxuICAgIDxkaXYgaWQ9XCJTbWFsbFNjcmVlblwiIHN0eWxlPVwiaGVpZ2h0OiAxMjAwcHg7XCI+ICA8IS0tIGJ1ZmZlciBzcGFjZSBmb3Igc21hbGwgc2NyZWVucyAtLT5cbiAgICA8L2Rpdj5cbiAgICA8YnI+PGJyPjxicj5cbiAgPC9kaXY+XG5cblxuXG4gIDxkaXYgaWQ9XCJCbGFja1dpbmRvd1wiPlxuXG4gICAgPGEgbmFtZT1cIm1vcmUtaW5mb1wiPjwvYT5cbiAgICA8ZGl2IGNsYXNzPVwibW9yZS1pbmZvXCI+XG4gICAgICA8aDQ+TW9yZSBpbmZvcm1hdGlvbjwvaDQ+XG5cbiAgICAgIFRoZSBXZWxjaOKAmXMgPGk+dDwvaT4tdGVzdCwgb3IgdW5lcXVhbCB2YXJpYW5jZXMgPGk+dDwvaT4tdGVzdCwgY2FuIHRlc3QgaHlwb3RoZXNlcyBzdWNoIGFzIHdoZXRoZXIgdGhlIG1lYW5zIG9mIHR3byBpbmRlcGVuZGVudCBub3JtYWxseS1kaXN0cmlidXRlZCBwb3B1bGF0aW9ucyBhcmUgZXF1YWwuIFdoaWxlIHRoZSBjb21tb25seS11c2VkIFN0dWRlbnQgPGk+dDwvaT4tdGVzdCByZXF1aXJlcyB0aGF0IHRoZSB0d28gc2FtcGxlcyBzaGFyZSBlcXVhbCB2YXJpYW5jZXMgYW5kIGVxdWFsIHNhbXBsZSBzaXplcywgdGhlIFdlbGNo4oCZcyA8aT50PC9pPi10ZXN0IGRvZXMgbm90IGhhdmUgdGhpcyByZXF1aXJlbWVudC4gUmVzZWFyY2hlcnMgYXJndWUgdGhhdCB0aGUgV2VsY2jigJlzIDxpPnQ8L2k+LXRlc3QgaXMgbW9yZSB2ZXJzYXRpbGUgYW5kIHNob3VsZCBpbnN0ZWFkIGJlIHVzZWQgYnkgZGVmYXVsdC48c3VwPjEsMjwvc3VwPlxuICAgICAgPGJyPjxicj5cbiAgICAgIFN0YXRpc3RpY2FsIHJpZ29yIGNhbiBiZSBhY2hpZXZlZCB3aXRoIDxpPnQ8L2k+LXRlc3RzLCB5ZXQgdGhlIHNpZ25pZmljYW5jZSBsZXZlbCBpcyBzZXQgYXJiaXRyYXJpbHkuIFdoaWxlIGxvd2VyaW5nIHNpZ25pZmljYW5jZSBsZXZlbHMgbWl0aWdhdGVzIGZhbHNlIHBvc2l0aXZlcyAoJiM5NDU7KSwgdGhlIHByb2JhYmlsaXR5IG9mIGZhbHNlIG5lZ2F0aXZlcyAoJiM5NDY7KSBpbmNyZWFzZXMsIGFuZCB0ZXN0cyBtYXkgZmFpbCB0byBkZXRlY3QgZXhpc3RpbmcgZWZmZWN0cy48c3VwPjM8L3N1cD5cbiAgICA8L2Rpdj5cbiAgICA8YnI+XG5cblxuICA8L2Rpdj5cbiAgPGRpdiBpZD1cIldoaXRlV2luZG93XCI+XG5cbiAgICAgIDxoND5SZWZlcmVuY2VzPC9oND5cblxuICAgICAgMS4gRGFoaXJ1LCBULiBQLXZhbHVlLCBhIHRydWUgdGVzdCBvZiBzdGF0aXN0aWNhbCBzaWduaWZpY2FuY2U/IEEgY2F1dGlvbmFyeSBub3RlLiA8aT5Bbm5hbHMgb2YgSWJhZGFuIFBvc3RncmFkdWF0ZSBNZWRpY2luZS48L2k+IDIwMDgsIDxpPjY8L2k+KDEpOiAyMeKAkzI2LlxuICAgICAgPGJyPlxuICAgICAgMi4gRGVsYWNyZSwgTS47IExha2VucywgRC47IExleXMsIEMuIFdoeSBQc3ljaG9sb2dpc3RzIFNob3VsZCBieSBEZWZhdWx0IFVzZSBXZWxjaOKAmXMgdC10ZXN0IEluc3RlYWQgb2YgU3R1ZGVudOKAmXMgdC10ZXN0LiA8aT5JbnRlcm5hdGlvbmFsIFJldmlldyBvZiBTb2NpYWwgUHN5Y2hvbG9neS48L2k+IDIwMTcsIDxpPjMwPC9pPigxKSwgOTLigJMxMDEuXG4gICAgICA8YnI+XG4gICAgICAzLiBCZW5qYW1pbiwgRC5KLjsgQmVyZ2VyLCBKLk8uOyBKb2hhbm5lc3NvbiwgTS4gZXQgYWwuIFJlZGVmaW5lIHN0YXRpc3RpY2FsIHNpZ25pZmljYW5jZS4gPGk+TmF0dXJlIEh1bWFuIEJlaGF2aW91ci48L2k+IDIwMTgsIDxpPjI8L2k+LCA24oCTMTAuXG4gICAgICA8YnI+XG4gICAgICA0LiBDb2xxdWhvdW4sIEQuIEFuIGludmVzdGlnYXRpb24gb2YgdGhlIGZhbHNlIGRpc2NvdmVyeSByYXRlIGFuZCB0aGUgbWlzaW50ZXJwcmV0YXRpb24gb2YgcC12YWx1ZXMuIDxpPlJveWFsIFNvY2lldHkgT3BlbiBTY2llbmNlLjwvaT4gMjAxNCwgPGk+MTwvaT4oMyk6IDE0MDIxNi5cblxuICA8L2Rpdj4gIDwhLS0gY29udGFpbmVyIC0tPiAgIFxuXG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuXG5cbjxzY3JpcHQ+XG5pbXBvcnQgc2xpZGVyIGZyb20gJ2pxdWVyeS11aS1zbGlkZXInO1xuXG5pbXBvcnQgQ2hhcnQgZnJvbSAnY2hhcnQuanMnICAvLyBucG0gaW5zdGFsbCBjaGFydC5qc0AyLjkuNCwgdGhlbiB0cmllZCAyLjkuMy4gc28sZSBzYXkgMi45LjQgZG9lc24ndCB3b3JrLlxuLy8gbnBtIGluc3RhbGwgY2hhcnRqcy1wbHVnaW4tYW5ub3RhdGlvbkAwLjUuNyAtLXNhdmUgICAgPDw8IHVzZWQgdGhpcy4gbmVjZXNzYXJ5P1xuaW1wb3J0IGNoYXJ0anNQbHVnaW5Bbm5vdGF0aW9uIGZyb20gXCJjaGFydGpzLXBsdWdpbi1hbm5vdGF0aW9uXCI7XG5pbXBvcnQgKiBhcyBtYXRoIGZyb20gJ21hdGhqcyc7XG5pbXBvcnQgdHRlc3RDaGFydERhdGEgZnJvbSAnLi90dGVzdC1jaGFydC1kYXRhLmpzJ1xuXG5pbXBvcnQgSHlwb3RoZXNpc0NvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvSHlwb3RoZXNpc0NvbXBvbmVudC52dWUnXG5pbXBvcnQgUFBWQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50cy9QUFZDb21wb25lbnQudnVlJ1xuaW1wb3J0IFJPQ0NvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvUk9DQ29tcG9uZW50LnZ1ZSdcbmltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlL3N0b3JlJyBcblxuLy8gc3RvcmUuY29tbWl0KCdpbmNyZW1lbnQnKTtcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHN0b3JlLFxuICBuYW1lOiAnQXBwJyxcbiAgY29tcG9uZW50czoge1xuICAgIEh5cG90aGVzaXNDb21wb25lbnQsXG4gICAgUFBWQ29tcG9uZW50LFxuICAgIFJPQ0NvbXBvbmVudCxcbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3RvcmUsXG4gICAgICB0dGVzdENoYXJ0RGF0YTogdHRlc3RDaGFydERhdGEsXG4gICAgICBzdG9yZWNvdW50OiBzdG9yZS5zdGF0ZS5jb3VudCxcbiAgICAgIHR0ZXN0Q2hhcnQ6IG51bGwsXG4gICAgICB0aHVtYjogbnVsbFxuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIG15RnVuY3Rpb246IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAodGhpcy5zdG9yZS5zdGF0ZS5jcml0X3RfdmFsdWUgPiB0aGlzLnN0b3JlLnN0YXRlLnRfdmFsdWUpIHtcbiAgICAgICAgICAgICAgdGhpcy5zdG9yZS5zdGF0ZS5jcml0X3RfdmFsdWUgPSAtMy4yMTU1O1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNNQUxMRVJcIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLnN0b3JlLnN0YXRlLmNyaXRfdF92YWx1ZSA9IDMuMjE1NTtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJCSUdHRVJcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgc3RvcmUuY29tbWl0KCdkZWNyZW1lbnQnKTtcbiAgICAgICAgICBzdG9yZS5jb21taXQoJ3VwZGF0ZVN0YXRlJyk7XG4gICAgICAgICAgdGhpcy5zdG9yZWNvdW50Kys7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZW1vXCIpLmlubmVySFRNTCA9IFwiSSBoYXZlIGNoYW5nZWQhXCI7XG4gICAgfSxcbiAgICBkcmF3QWxwaGFDdXJ2ZTogZnVuY3Rpb24oZ3JvdXAxLCBjcml0X3RfdmFsdWUpeyAgXG5cbiAgICAgIC8vIEZpbGwgdGhlIGFyZWEgdW5kZXIgdGhlIGN1cnZlIHJlcHJlc2VudGluZyBhbHBoYS5cbiAgICAgIGxldCBhbHBoYV9jdXJ2ZSA9IFtdO1xuICAgICAgLy8gdGhpcyBkYXRhcG9pbnQgY29ubmVjdHMgd2l0aCB0aGUgY3JpdGljYWwgdCB2ZXJ0aWNhbCBsaW5lXG4gICAgICBhbHBoYV9jdXJ2ZS5wdXNoKHt4OiBjcml0X3RfdmFsdWUsIHk6IHRoaXMudF9EaXN0cmliKGNyaXRfdF92YWx1ZSwgZ3JvdXAxLmRmKX0pO1xuICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGdyb3VwMS5kaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChncm91cDEuZGlzdFtpXVsneCddID4gY3JpdF90X3ZhbHVlKXtcbiAgICAgICAgICBhbHBoYV9jdXJ2ZS5wdXNoKHt4OiBncm91cDEuZGlzdFtpXVsneCddLCB5OiBncm91cDEuZGlzdFtpXVsneSddfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMudHRlc3RDaGFydERhdGEuZGF0YS5kYXRhc2V0c1szXS5kYXRhID0gYWxwaGFfY3VydmU7ICAvLyB3YXMgWzNdWydkYXRhJ11cbiAgICAgIHRoaXMudHRlc3RDaGFydC51cGRhdGUoKTtcbiAgICB9LFxuICAgIGRyYXdCZXRhQ3VydmU6IGZ1bmN0aW9uIChncm91cDIsIGNyaXRfdF92YWx1ZSwgbmNwKXsgIFxuXG4gICAgICAvLyBGaWxsIHRoZSBhcmVhIHVuZGVyIHRoZSBjdXJ2ZSByZXByZXNlbnRpbmcgYmV0YS5cbiAgICAgIGxldCBiZXRhX2N1cnZlID0gW107XG4gICAgICBmb3IodmFyIGkgPSAwOyBpIDwgZ3JvdXAyLmRpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGdyb3VwMi5kaXN0W2ldWyd4J10gPCBjcml0X3RfdmFsdWUpe1xuICAgICAgICAgIGJldGFfY3VydmUucHVzaCh7eDogZ3JvdXAyLmRpc3RbaV1bJ3gnXSwgeTogZ3JvdXAyLmRpc3RbaV1bJ3knXX0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZyhcImJldGFfY3VydmU6XCIsIGJldGFfY3VydmUpO1xuXG4gICAgICAvLyB0aGlzIGRhdGFwb2ludCBjb25uZWN0cyB3aXRoIHRoZSBjcml0aWNhbCB0IHZlcnRpY2FsIGxpbmVcbiAgICAgIGJldGFfY3VydmUucHVzaCh7eDogY3JpdF90X3ZhbHVlLCB5OiB0aGlzLnRfRGlzdHJpYihjcml0X3RfdmFsdWUtbmNwLCBncm91cDIuZGYpfSk7IC8vIG5jcCBhY3RzIGFzIG9mZnNldFxuICAgICAgdGhpcy50dGVzdENoYXJ0RGF0YS5kYXRhLmRhdGFzZXRzWzRdLmRhdGEgPSBiZXRhX2N1cnZlO1xuICAgICAgdGhpcy50dGVzdENoYXJ0LnVwZGF0ZSgpO1xuICAgIH0sXG5cbiAgICB0X0Rpc3RyaWI6IGZ1bmN0aW9uICh0LCBkb2Ype1xuICAgICAgLy8gRm9yIGEgZ2l2ZW4geCwgcmV0dXJuIHRoZSB0IGRpc3RyaWJ1dGlvbiB5IHZhbHVlLlxuICAgICAgbGV0IHkgPSAobWF0aC5nYW1tYSgoZG9mKzEpLzIpLyhtYXRoLnNxcnQoZG9mKm1hdGgucGkpKm1hdGguZ2FtbWEoZG9mLzIpKSkgKiAoMSsoKHQqKjIpL2RvZikpKiooLShkb2YrMSkvMik7XG4gICAgICByZXR1cm4gbWF0aC5yb3VuZCh5LCA2KTtcbiAgICB9LFxuICB9LFxuICBjb252ZXJ0Q2hhcnRYVG9TY3JlZW5YOiBmdW5jdGlvbiAoeCwgY2hhcnRfeF9taW4sIGNoYXJ0X3hfbWF4LCB4MSwgeDIsIG9mZnNldCl7XG4gICAgLy9yZXR1cm4gbWF0aC5yb3VuZCgoKCh4IC0gY2hhcnRfeF9taW4pLyhjaGFydF94X21heCAtIGNoYXJ0X3hfbWluKSkqKHgyLXgxKSkgLSBvZmZzZXQsMCk7XG4gICAgcmV0dXJuICgoKHggLSBjaGFydF94X21pbikvKGNoYXJ0X3hfbWF4IC0gY2hhcnRfeF9taW4pKSooeDIteDEpKSAtIG9mZnNldDtcbiAgfSxcbiAgY29udmVydFNjcmVlblhUb0NoYXJ0WDogZnVuY3Rpb24gKHgsIHgxLCB4MiwgY2hhcnRfeDEsIGNoYXJ0X3gyLCB0aHVtYk9mZnNldFdpZHRoKXtcbiAgICByZXR1cm4gKHggKyAodGh1bWJPZmZzZXRXaWR0aC8yKSkvKHgyIC0geDEpKihjaGFydF94Mi1jaGFydF94MSkgKyBjaGFydF94MTtcbiAgfSxcblxuICBcbiAgaW5pdFRodW1iOiBmdW5jdGlvbiAoY2hhcnRfeF9taW4sIGNoYXJ0X3hfbWF4LCB0aHVtYk9mZnNldFdpZHRoLCBjcml0X3RfaW5pdCl7XG4gICAgLy8gSW5pdGlhbCBwb3NpdGlvbiBvZiB0aGUgc2xpZGVyIHRodW1iLlxuICAgIGNvbnNvbGUubG9nKFwiY3JpdF90X2luaXQ6XCIsIGNyaXRfdF9pbml0KTtcbiAgICB2YXIgcG9pbnRzID0gdGhpcy50dGVzdENoYXJ0LmNoYXJ0LmdldERhdGFzZXRNZXRhKDApLmRhdGE7XG4gICAgdmFyIHgxID0gcG9pbnRzWzBdLl9tb2RlbC54O1xuICAgIHZhciB4MiA9IHBvaW50c1sxXS5fbW9kZWwueDtcblxuICAgIC8vIGNvbnZlcnQgY2hhcnQgeCB2YWx1ZSB0byB0aGUgeCBzY3JlZW4gcG9zaXRpb24gZm9yIHRoZSBzbGlkZXIgdGh1bWJcbiAgICAvLyB2YXIgb2Zmc2V0ID0gdGh1bWIub2Zmc2V0V2lkdGgvMjsgLy8uNTk7ICAvLyBwcmV2aW91c2x5OiBvZmZzZXQ9M1xuICAgIHZhciBvZmZzZXQgPSB0aHVtYk9mZnNldFdpZHRoLzI7IC8vLjU5OyAgLy8gcHJldmlvdXNseTogb2Zmc2V0PTNcbiAgICB2YXIgbmV3X3RodW1iID0gdGhpcy5jb252ZXJ0Q2hhcnRYVG9TY3JlZW5YKGNyaXRfdF9pbml0LCBjaGFydF94X21pbiwgY2hhcnRfeF9tYXgsIHgxLCB4Miwgb2Zmc2V0KTtcbiAgICAvLyBlbGVtKFwidGh1bWJcIikuc3R5bGUubGVmdCA9IG5ld190aHVtYiArIFwicHhcIjtcblxuICAgIC8vIEJFTE9XIElTIE5FV1xuICAgIC8vIGFkanVzdCB0aGUgc2xpZGVyXG4gICAgLy8gZWxlbShcInNsaWRlclwiKS5zdHlsZS5sZWZ0ID0geDEgKyBcInB4XCI7XG4gICAgLy8gZWxlbShcInNsaWRlclwiKS5zdHlsZS53aWR0aCA9IHgyIC0geDEgKyBcInB4XCI7XG4gICAgXG4gICAgLy8gdXBkYXRlU3RhdGUoY3JpdF90X2luaXQsIGRmLCBuY3ApO1xuICAgIHJldHVybiBuZXdfdGh1bWI7XG4gIH0sXG5cblxuICBtb3VudGVkKCkge1xuICAgIHRoaXMudGh1bWIgPSBzbGlkZXIucXVlcnlTZWxlY3RvcignLnRodW1iJyk7XG5cblxuXG4gICAgQ2hhcnQucGx1Z2lucy5yZWdpc3RlcihjaGFydGpzUGx1Z2luQW5ub3RhdGlvbilcbiAgICB0aGlzLnR0ZXN0Q2hhcnQgPSBuZXcgQ2hhcnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3R0ZXN0LWNoYXJ0JyksIHRoaXMudHRlc3RDaGFydERhdGEpO1xuICAgIHRoaXMudHRlc3RDaGFydERhdGEuZGF0YS5kYXRhc2V0c1sxXS5kYXRhID0gdGhpcy5zdG9yZS5zdGF0ZS5ncm91cDEuZGlzdDtcbiAgICB0aGlzLnR0ZXN0Q2hhcnQudXBkYXRlKCk7XG5cbiAgICB0aGlzLmRyYXdBbHBoYUN1cnZlKHRoaXMuc3RvcmUuc3RhdGUuZ3JvdXAxLCB0aGlzLnN0b3JlLnN0YXRlLmNyaXRfdF92YWx1ZSk7XG4gICAgdGhpcy5kcmF3QmV0YUN1cnZlKHRoaXMuc3RvcmUuc3RhdGUuZ3JvdXAyLCB0aGlzLnN0b3JlLnN0YXRlLmNyaXRfdF92YWx1ZSx0aGlzLnN0b3JlLnN0YXRlLm5jcCk7XG4gIH0sXG59XG5cblxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbi8qICNhcHAge1xuICBmb250LWZhbWlseTogQXZlbmlyLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzJjM2U1MDtcbiAgbWFyZ2luLXRvcDogNjBweDtcbn0gKi9cblxuaHRtbCB7XG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xufVxuXG5ib2R5IHtcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogI2ZmM2UwMDsgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogIzQzNDM0MztcbiAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG5hOmxpbmssIGE6dmlzaXRlZCB7XG4gIGNvbG9yOiBncmV5O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi8qIG1vdXNlIG92ZXIgbGluayAqL1xuYTpob3ZlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4vKiBzZWxlY3RlZCBsaW5rICovXG5hOmFjdGl2ZSB7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5cbmg0IHtcbiAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn1cblxuXG5cbiNDb250YWluZXJXaW5kb3d7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDIwcHggNzBweDtcbn1cblxuI1doaXRlV2luZG93e1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBjb2xvcjogIzAwMDtcbiAgcGFkZGluZzogODBweCA1MHB4O1xuICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE3cHg7XG59XG5cbiNCbGFja1dpbmRvd3tcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDgwcHggNTBweDtcbiAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuXG4jT3JhbmdlV2luZG93e1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuL2Fzc2V0cy93ZWxjaHMucG5nXCIpO1xuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjOyAqL1xuICAvKiBoZWlnaHQ6IDUwMHB4OyAqL1xuXG4gIC8qIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyAqL1xuXG4gIC8qIENyZWF0ZSB0aGUgcGFyYWxsYXggc2Nyb2xsaW5nIGVmZmVjdCAqL1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cbiAgLyogYmFja2dyb3VuZC1jb2xvcjogI2ZmM2UwMDsgKi9cbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDEyMHB4IDUwcHggMTIwcHggNTBweDtcbiAgLyogZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjsgKi9cbiAgZm9udC1zaXplOiAxN3B4O1xufVxuXG5cbiN0aXRsZW5hbWV7XG4gIGZvbnQtZmFtaWx5OiAnVHJlYnVjaGV0IE1TJywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiA4MHB4O1xuICAvKiBwYWRkaW5nOiAwcHggMHB4IDBweCAxMDBweDsgKi9cbiAgLyogbWFyZ2luLWJvdHRvbTotMTIwcHggKi9cbn1cbiN0aXRsZW5hbWUtc3Vie1xuICBmb250LWZhbWlseTogJ1RyZWJ1Y2hldCBNUycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogNzBweDtcbiAgLyogcGFkZGluZzogMHB4IDBweCAwcHggMTAwcHg7ICovXG4gIC8qIG1hcmdpbi1ib3R0b206LTEyMHB4ICovXG59XG5cbi5tb3JlLWluZm8ge1xuICBwYWRkaW5nOiAxMHB4IDIwcHggMjBweCAyMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmYzZTAwOyAgLyogcHJldmlvdXNseSBmZjcwNDMgKi9cbn1cblxuXG4uYm94IHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZThlOGU4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgfVxuICBcbi5hc3Rlcmlza0ZpZWxkIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG5cbi5yZXNwb25zaXZlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLnNsaWRlciB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZDogI0UwRTBFMDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KGxlZnQgdG9wLCAjRTBFMEUwLCAjRUVFRUVFKTtcbiAgLyogd2lkdGg6IDUyNXB4OyAqL1xuICBoZWlnaHQ6IDE1cHg7XG4gIG1hcmdpbjogMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cblxuLnRodW1iIHtcbiAgd2lkdGg6IDE1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiAtNXB4O1xuICBiYWNrZ3JvdW5kOiAjZmYzZTAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cblxuLmVycm9yX2JveCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTg7XG59XG5cbi8qIEBpbXBvcnQgXCJjb21wYXNzL2NzczNcIjsgKi9cblxuXG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuXG46OnNlbGVjdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0RUM2REU7XG59XG5cbi50YWJiZWQge1xuLyogIHdpZHRoOiA3MDBweDtcbiAgbWFyZ2luOiA1MHB4IGF1dG87ICAqL1xufVxuXG4udGFiYmVkID4gaW5wdXQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4udGFiYmVkID4gbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmc6IDEycHggMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4zcztcbn1cblxuLnRhYmJlZCA+IGxhYmVsOmhvdmVyLFxuLnRhYmJlZCA+IGlucHV0OmNoZWNrZWQgKyBsYWJlbCB7XG4gIGJhY2tncm91bmQ6ICNmZjNlMDA7XG59XG5cbi50YWJzIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgY2xlYXI6IGJvdGg7XG4gIHBlcnNwZWN0aXZlOiA2MDBweDtcbn1cblxuLnRhYnMgPiBkaXYge1xuICAvKiB3aWR0aDogNzAwcHg7ICovXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmM2UwMDtcbiAgcGFkZGluZzogMTBweCAzMHB4IDQwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjRlbTtcbiAgb3BhY2l0eTogMDtcbiAgei1pbmRleDogMDtcbn1cblxuXG4jdGFiLW5hdi0xOmNoZWNrZWQgfiAudGFicyA+IGRpdjpudGgtb2YtdHlwZSgxKSxcbiN0YWItbmF2LTI6Y2hlY2tlZCB+IC50YWJzID4gZGl2Om50aC1vZi10eXBlKDIpe1xuICBvcGFjaXR5OiAxO1xuICB6LWluZGV4OiAxO1xufVxuI3RhYi1uYXYtMzpjaGVja2VkIH4gLnRhYnMgPiBkaXY6bnRoLW9mLXR5cGUoMyl7XG4gIG9wYWNpdHk6IDE7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5ncmlkLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDBweDtcbn1cbi5ncmlkLWl0ZW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjOGM4Yzg7ICAvKnJnYmEoMCwgMCwgMCwgMC44KTsqL1xuICBwYWRkaW5nOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cblxuLmRpYWdyYW0tYm94IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYzhjOGM4O1xufVxuXG4uZW50ZXItZGF0YXtcbiAgYm9yZGVyOiAycHggc29saWQgI2M4YzhjODtcbiAgcGFkZGluZzogMzBweDtcbn1cblxuLyogaGlkZSBmb3IgbGFyZ2VyIHNjcmVlbnMgKi9cbiNTbWFsbFNjcmVlbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuXG4vKiBzaG93IGZvciBzbWFsbCBzY3JlZW5zICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgICAjU21hbGxTY3JlZW4ge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG59XG5cbi8qIHJlbW92ZSBwYWRkaW5nIG9uIHNtYWxsZXIgc2NyZWVucyAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgI0NvbnRhaW5lcldpbmRvd3tcbiAgICBwYWRkaW5nOiA1MHB4IDVweCA1MHB4IDVweDtcbiAgfVxufVxuXG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App.vue?vue&type=script&lang=js&\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "d3a2ebda207099fc"; }
/******/ }();
/******/ 
/******/ }
);
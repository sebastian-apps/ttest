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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chart.js */ \"./node_modules/chart.js/dist/Chart.js\");\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chartjs-plugin-annotation */ \"./node_modules/chartjs-plugin-annotation/src/index.js\");\n/* harmony import */ var chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ttest_chart_data_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ttest-chart-data.js */ \"./src/ttest-chart-data.js\");\n/* harmony import */ var _welchs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/welchs */ \"./src/welchs.js\");\n/* harmony import */ var _components_HypothesisComponent_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/HypothesisComponent.vue */ \"./src/components/HypothesisComponent.vue\");\n/* harmony import */ var _components_PPVComponent_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/PPVComponent.vue */ \"./src/components/PPVComponent.vue\");\n/* harmony import */ var _components_ROCComponent_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/ROCComponent.vue */ \"./src/components/ROCComponent.vue\");\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./store/store */ \"./src/store/store.js\");\n// import slider from 'jquery-ui-slider';\n// import $ from \"jquery\";\n\n // npm install chart.js@2.9.4, then tried 2.9.3. so,e say 2.9.4 doesn't work.\n // npm install chartjs-plugin-annotation@0.5.7 --save    <<< used this. necessary?\n// import * as math from 'mathjs';\n\n\n\n\n\n\n\n// store.commit('increment');\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  store: _store_store__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n  name: 'App',\n  components: {\n    HypothesisComponent: _components_HypothesisComponent_vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    PPVComponent: _components_PPVComponent_vue__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n    ROCComponent: _components_ROCComponent_vue__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n  },\n  data() {\n    return {\n      store: _store_store__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n      ttestChartData: _ttest_chart_data_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n      storecount: _store_store__WEBPACK_IMPORTED_MODULE_7__[\"default\"].state.count,\n      ttestChart: null,\n      thumb: null\n    };\n  },\n  methods: {\n    myFunction: function () {\n      if (this.store.state.crit_t_value > this.store.state.t_value) {\n        this.store.state.crit_t_value = -3.2155;\n        console.log(\"SMALLER\");\n      } else {\n        this.store.state.crit_t_value = 3.2155;\n        console.log(\"BIGGER\");\n      }\n      _store_store__WEBPACK_IMPORTED_MODULE_7__[\"default\"].commit('decrement');\n      _store_store__WEBPACK_IMPORTED_MODULE_7__[\"default\"].commit('updateState');\n      this.storecount++;\n      document.getElementById(\"demo\").innerHTML = \"I have changed!\";\n    },\n    drawAlphaCurve: function (group1, crit_t_value) {\n      let alpha_curve = _welchs__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getAlphaCurve(group1, crit_t_value);\n      this.ttestChartData.data.datasets[3].data = alpha_curve; // was [3]['data']\n      this.ttestChart.update();\n    },\n    drawBetaCurve: function (group2, crit_t_value, ncp) {\n      let beta_curve = _welchs__WEBPACK_IMPORTED_MODULE_3__[\"default\"].drawBetaCurve(group2, crit_t_value, ncp);\n      this.ttestChartData.data.datasets[4].data = beta_curve;\n      this.ttestChart.update();\n    }\n  },\n  convertChartXToScreenX: function (x, chart_x_min, chart_x_max, x1, x2, offset) {\n    //return math.round((((x - chart_x_min)/(chart_x_max - chart_x_min))*(x2-x1)) - offset,0);\n    return (x - chart_x_min) / (chart_x_max - chart_x_min) * (x2 - x1) - offset;\n  },\n  convertScreenXToChartX: function (x, x1, x2, chart_x1, chart_x2, thumbOffsetWidth) {\n    return (x + thumbOffsetWidth / 2) / (x2 - x1) * (chart_x2 - chart_x1) + chart_x1;\n  },\n  // initThumb: function (chart_x_min, chart_x_max, thumbOffsetWidth, crit_t_init){\n  //   // Initial position of the slider thumb.\n  //   console.log(\"crit_t_init:\", crit_t_init);\n  //   var points = this.ttestChart.chart.getDatasetMeta(0).data;\n  //   var x1 = points[0]._model.x;\n  //   var x2 = points[1]._model.x;\n\n  //   // convert chart x value to the x screen position for the slider thumb\n  //   // var offset = thumb.offsetWidth/2; //.59;  // previously: offset=3\n  //   var offset = thumbOffsetWidth/2; //.59;  // previously: offset=3\n  //   var new_thumb = this.convertChartXToScreenX(crit_t_init, chart_x_min, chart_x_max, x1, x2, offset);\n  //   // elem(\"thumb\").style.left = new_thumb + \"px\";\n\n  //   // BELOW IS NEW\n  //   // adjust the slider\n  //   // elem(\"slider\").style.left = x1 + \"px\";\n  //   // elem(\"slider\").style.width = x2 - x1 + \"px\";\n\n  //   // updateState(crit_t_init, df, ncp);\n  //   return new_thumb;\n  // },\n\n  mounted() {\n    let volume = document.querySelector(\"#volume-control\");\n    volume.addEventListener(\"change\", function (e) {\n      console.log(\"e:\", e.currentTarget.value / 100);\n    });\n    // this.thumb = slider.querySelector('.thumb');\n    // this.thumb = this.$refs.thumb;\n    // $( function() {\n    // $( \".thumb\" ).slider();\n    // } );\n    // var slider = new Slider('#thumb', {});\n    // $(\"#thumb\").slider({});\n    // $(\".thumb\").slider(this.options.slider).on('slide', function (e) {\n    //   console.log(e);\n    //                 // let min = e.value[0],\n    //                 //     max = e.value[1];\n    //             });\n\n    chart_js__WEBPACK_IMPORTED_MODULE_0___default().plugins.register((chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_1___default()));\n    this.ttestChart = new (chart_js__WEBPACK_IMPORTED_MODULE_0___default())(document.getElementById('ttest-chart'), this.ttestChartData);\n    this.ttestChartData.data.datasets[0].data = [{\n      x: -4.753,\n      y: 0\n    }, {\n      x: 7.232,\n      y: 0\n    }];\n    this.ttestChartData.options.scales.xAxes[0].ticks.min = -4.753;\n    this.ttestChartData.options.scales.xAxes[0].ticks.max = 7.232;\n    this.ttestChartData.options.scales.yAxes[0].ticks.max = 0.5;\n    this.ttestChartData.options.annotation.annotations[0].label.content = 'p = ' + this.store.state.p_value;\n    this.ttestChartData.options.annotation.annotations[0].value = this.store.state.t_value;\n    this.ttestChartData.options.annotation.annotations[1].content = '\\u03B1' + this.store.state.alpha;\n    this.ttestChartData.options.annotation.annotations[1].value = this.store.state.crit_t_value;\n    this.ttestChartData.data.datasets[1].data = this.store.state.group1.dist;\n    this.ttestChartData.data.datasets[2].data = this.store.state.group2.dist;\n    this.ttestChart.update();\n    this.drawAlphaCurve(this.store.state.group1, this.store.state.crit_t_value);\n    this.drawBetaCurve(this.store.state.group2, this.store.state.crit_t_value, this.store.state.ncp);\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvQHZ1ZS92dWUtbG9hZGVyLXYxNS9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NyYy9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQXNMQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFHQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92dWVhcHAvc3JjL0FwcC52dWU/MTFjNCJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXYgaWQ9XCJhcHBcIj5cbiBcblxuICA8ZGl2IGNsYXNzPVwiaGVyby1pbWFnZVwiIGlkPVwiT3JhbmdlV2luZG93XCI+XG4gICAgPGRpdiBpZD1cInRpdGxlbmFtZVwiPldlbGNoJ3MgPGk+dDwvaT4tdGVzdDwvZGl2PlxuICAgIDxkaXYgaWQ9XCJ0aXRsZW5hbWUtc3ViXCI+Y2FsY3VsYXRvcjwvZGl2PlxuICA8L2Rpdj5cblxuICA8ZGl2IGlkPVwiQmxhY2tXaW5kb3dcIj5cbiAgICA8ZGl2IHN0eWxlPVwidGV4dC1hbGlnbjpqdXN0aWZ5XCI+XG4gICAgICBJcyB0aGVyZSBhIHN0YXRpc3RpY2FsbHkgc2lnbmlmaWNhbnQgZGlmZmVyZW5jZSBiZXR3ZWVuIHR3byBkYXRhc2V0cz88cD48L3A+XG4gICAgICBNb3ZlIHRoZSBzbGlkZXIgYW5kIG9ic2VydmUgdGhlIGltcGFjdCBvZiB0aGUgc2lnbmlmaWNhbmNlIGxldmVsIG9uIHRoZSBwcm9iYWJpbGl0eSBvZiBtYWtpbmcgdGhlIHdyb25nIGRlY2lzaW9uLiBJbnB1dCBhbmQgZXhwbG9yZSB5b3VyIGRhdGFzZXRzLlxuICAgICAgVGhpcyBjYWxjdWxhdG9yIGlzIGZvciBvbmUtdGFpbGVkIFdlbGNo4oCZcyA8aT50PC9pPi10ZXN0cy4gVGhlIGRhdGEgYXJlIGFzc3VtZWQgdG8gYmUgbm9ybWFsbHkgZGlzdHJpYnV0ZWQuXG4gICAgICA8YSBocmVmPScjbW9yZS1pbmZvJz5GaW5kIG1vcmUgaW5mb3JtYXRpb24uPC9hPlxuICAgIDwvZGl2PlxuICAgIDxwPjwvcD5cbiAgPC9kaXY+XG5cblxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCIgaWQ9XCJDb250YWluZXJXaW5kb3dcIj5cblxuICAgIDxwPjxicj48cD48YnI+PHA+PGJyPjxwPlxuXG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+XG5cbiAgICAgICAgPCEtLSB7JSBpZiB0ZXN0X3Jlc3VsdHMgJX0gLS0+XG4gICAgICAgIDxkaXYgaWQ9XCJzbGlkZXJcIiBjbGFzcz1cInNsaWRlclwiPlxuICAgICAgICAgIDwhLS0gPGRpdiBpZD1cInRodW1iXCIgY2xhc3M9XCJ0aHVtYlwiIG9udG91Y2htb3ZlPVwibW92ZVRodW1iTW9iaWxlKGV2ZW50KVwiPjwvZGl2PiAtLT5cbiAgICAgICAgICA8ZGl2IGlkPVwidGh1bWJcIiBjbGFzcz1cInRodW1iXCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxjYW52YXMgaWQ9XCJ0dGVzdC1jaGFydFwiIHdpZHRoPVwiMTAwMFwiIGhlaWdodD1cIjgwMFwiPjwvY2FudmFzPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHA+PGJyPjxwPjxicj5cbiAgICAgICAgPCEtLSB7JSBlbmRpZiAlfSAtLT5cblxuICAgICAgICA8Yj48c3BhbiBpZD1cIm1lc3NhZ2VcIj48L3NwYW4+PC9iPlxuICAgICAgICA8YnI+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImVudGVyLWRhdGFcIj5cbiAgICAgICAgICA8Zm9ybSBpZD1cImRhdGEtZm9ybVwiIGFjdGlvbj1cInslIHVybCAnY29yZTp0dGVzdCcgJX1cIiBtZXRob2Q9J3Bvc3QnIGNsYXNzPVwiZm9ybVwiPlxuICAgICAgICAgIDwhLS0geyUgY3NyZl90b2tlbiAlfSAtLT5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy02IGNvbC1zbS00XCI+XG4gICAgICAgICAgICAgICAgPCEtLSB7eyBmb3JtLmRhdGFzZXQxfGFzX2NyaXNweV9maWVsZCB9fSAtLT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtNiBjb2wtc20tNFwiPlxuICAgICAgICAgICAgICAgIDwhLS0ge3sgZm9ybS5kYXRhc2V0Mnxhc19jcmlzcHlfZmllbGQgfX0gLS0+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1zbS00XCI+XG4gICAgICAgICAgICAgICAgPGI+U1RBVElTVElDUzwvYj48YnI+PGJyPlxuICAgICAgICAgICAgICAgIDxiPmNyaXRpY2FsIHQ6PC9iPiA8c3BhbiBpZD1cImNyaXRfdF92YWx1ZVwiPnt7IHRoaXMuc3RvcmUuc3RhdGUuY3JpdF90X3ZhbHVlIH19PC9zcGFuPjxicj5cbiAgICAgICAgICAgICAgICA8Yj5zaWcgbGV2ZWwgKCYjOTQ1Oyk6PC9iPiA8c3BhbiBpZD1cInNpZy1sZXZlbFwiPnt7IHRoaXMuc3RvcmUuc3RhdGUuYWxwaGEgfX08L3NwYW4+PGJyPlxuICAgICAgICAgICAgICAgIDxicj5cblxuICAgICAgICAgICAgICAgIDxiPnQtdmFsdWU6PC9iPiA8c3BhbiBpZD1cInRfdmFsdWVcIj57eyB0aGlzLnN0b3JlLnN0YXRlLnRfdmFsdWUgfX08L3NwYW4+PGJyPlxuICAgICAgICAgICAgICAgIDxiPnAtdmFsdWU6PC9iPiB7eyB0aGlzLnN0b3JlLnN0YXRlLnBfdmFsdWUgfX08YnI+XG4gICAgICAgICAgICAgICAgPGJyPlxuXG4gICAgICAgICAgICAgICAgPCEtLSA8Yj5kZjo8L2I+IHt7IHRlc3RfcmVzdWx0cy5kZiB9fTxicj4gLS0+XG4gICAgICAgICAgICAgICAgPCEtLSA8Yj5lZmZlY3Qgc2l6ZTo8L2I+IHt7IHRlc3RfcmVzdWx0cy5lZmZlY3Rfc2l6ZSB9fTxicj4gLS0+XG4gICAgICAgICAgICAgICAgPGI+bmNwOjwvYj4gPHNwYW4gaWQ9XCJuY3BcIj57eyB0aGlzLnN0b3JlLnN0YXRlLm5jcCB9fTwvc3Bhbj48YnI+XG4gICAgICAgICAgICAgICAgPGJyPjxicj5cblxuICAgICAgICAgICAgICAgIDxidXR0b24gbmFtZT1cInN1Ym1pdFwiIHN0eWxlPVwibWFyZ2luLWJvdHRvbTo1cHhcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiPkFuYWx5emU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBzdHlsZT1cIm1hcmdpbi1ib3R0b206NXB4XCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIiBvbmNsaWNrPVwiY2xlYXJGb3JtKClcIj5DbGVhcjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxicj48YnI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Zvcm0+XG5cbiAgICAgICAgICA8ZGl2IHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogI2U4ZThlODsgcGFkZGluZzoxMHB4OyBtaW4td2lkdGg6MzAwcHg7XCIgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtNFwiPlxuICAgICAgICAgICAgICA8c3BhbiBpZD1cIlNtYWxsU2NyZWVuXCI+PGI+R3JvdXAgMTwvYj48YnI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIHt7IHRoaXMuc3RvcmUuc3RhdGUuZ3JvdXAxLm1lYW4gfX08YnI+XG4gICAgICAgICAgICAgICAge3sgdGhpcy5zdG9yZS5zdGF0ZS5ncm91cDEuc2QgfX08YnI+XG4gICAgICAgICAgICAgICAge3sgdGhpcy5zdG9yZS5zdGF0ZS5ncm91cDEubiB9fTxicj5cbiAgICAgICAgICAgICAgPCEtLSB7eyBkYXRhMS5tZWFuIH19PGJyPlxuICAgICAgICAgICAgICB7eyBkYXRhMS5zZCB9fTxicj5cbiAgICAgICAgICAgICAge3sgZGF0YTEubiB9fTxicj4gLS0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtNFwiPlxuICAgICAgICAgICAgICA8c3BhbiBpZD1cIlNtYWxsU2NyZWVuXCI+PGI+R3JvdXAgMjwvYj48YnI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIHt7IHRoaXMuc3RvcmUuc3RhdGUuZ3JvdXAyLm1lYW4gfX08YnI+XG4gICAgICAgICAgICAgICAge3sgdGhpcy5zdG9yZS5zdGF0ZS5ncm91cDIuc2QgfX08YnI+XG4gICAgICAgICAgICAgICAge3sgdGhpcy5zdG9yZS5zdGF0ZS5ncm91cDIubiB9fTxicj5cbiAgICAgICAgICAgICAgPCEtLSB7eyBkYXRhMi5tZWFuIH19PGJyPlxuICAgICAgICAgICAgICB7eyBkYXRhMi5zZCB9fTxicj5cbiAgICAgICAgICAgICAge3sgZGF0YTIubiB9fTxicj4gLS0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtNFwiPlxuICAgICAgICAgICAgICA8c3BhbiBpZD1cIlNtYWxsU2NyZWVuXCI+PGJyPjwvc3Bhbj5cbiAgICAgICAgICAgICAgPGI+TWVhbjwvYj48YnI+XG4gICAgICAgICAgICAgIDxiPlNEPC9iPjxicj5cbiAgICAgICAgICAgICAgPGI+TjwvYj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj48IS0tIGNsb3NlIGVudGVyLWRhdGEgZGl2IC0tPlxuICAgICAgICA8cD48L3A+PGJyPlxuICAgICAgPC9kaXY+IDwhLS0gY29sdW1uIGVuZCAtLT5cblxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xXCI+XG4gICAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNVwiPlxuXG4gICAgICA8IS0tIHslIGlmIHRlc3RfcmVzdWx0cyAlfSAtLT5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0YWJiZWRcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJ0YWJzXCIgaWQ9XCJ0YWItbmF2LTFcIiBjaGVja2VkPlxuICAgICAgICA8bGFiZWwgZm9yPVwidGFiLW5hdi0xXCI+SHlwb3RoZXNpcyBUZXN0aW5nPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJ0YWJzXCIgaWQ9XCJ0YWItbmF2LTJcIj5cbiAgICAgICAgPGxhYmVsIGZvcj1cInRhYi1uYXYtMlwiPlBQVjwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwidGFic1wiIGlkPVwidGFiLW5hdi0zXCI+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJ0YWItbmF2LTNcIj5ST0M8L2xhYmVsPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJzXCI+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFiXCI+XG4gICAgICAgICAgICA8SHlwb3RoZXNpc0NvbXBvbmVudCAvPiBcbiAgICAgICAgICA8L2Rpdj4gPCEtLSBlbmQgaHlwb3RoZXNpcyB0ZXN0aW5nIC0tPlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRhYlwiPlxuICAgICAgICAgICAgPFBQVkNvbXBvbmVudCAvPlxuICAgICAgICAgIDwvZGl2PiA8IS0tIGVuZCBQUFYgLS0+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFiXCI+XG4gICAgICAgICAgICA8Uk9DQ29tcG9uZW50IC8+XG4gICAgICAgICAgPC9kaXY+IDwhLS0gZW5kIFJPQyAtLT5cblxuICAgICAgICA8L2Rpdj4gPCEtLSBlbmQgdGFicyAtLT5cbiAgICAgIDwvZGl2PiAgPCEtLSBlbmQgdGFiYmVkIC0tPlxuICAgICAgICBcbiAgICAgIDwhLS0geyUgZW5kaWYgJX0gLS0+XG4gICAgPC9kaXY+IDwhLS0gZW5kIGNvbHVtbiAtLT5cbiAgPC9kaXY+IDwhLS0gZW5kIHJvdyAtLT5cblxuXG4gICAgPGRpdiBpZD1cIlNtYWxsU2NyZWVuXCIgc3R5bGU9XCJoZWlnaHQ6IDEyMDBweDtcIj4gIDwhLS0gYnVmZmVyIHNwYWNlIGZvciBzbWFsbCBzY3JlZW5zIC0tPlxuICAgIDwvZGl2PlxuICAgIDxicj48YnI+PGJyPlxuICA8L2Rpdj5cblxuXG5cbiAgPGRpdiBpZD1cIkJsYWNrV2luZG93XCI+XG5cbiAgICA8YSBuYW1lPVwibW9yZS1pbmZvXCI+PC9hPlxuICAgIDxkaXYgY2xhc3M9XCJtb3JlLWluZm9cIj5cbiAgICAgIDxoND5Nb3JlIGluZm9ybWF0aW9uPC9oND5cblxuICAgICAgVGhlIFdlbGNoJ3MgPGk+dDwvaT4tdGVzdCwgb3IgdW5lcXVhbCB2YXJpYW5jZXMgPGk+dDwvaT4tdGVzdCwgY2FuIHRlc3QgaHlwb3RoZXNlcyBzdWNoIGFzIHdoZXRoZXIgdGhlIG1lYW5zIG9mIHR3byBpbmRlcGVuZGVudCBub3JtYWxseS1kaXN0cmlidXRlZCBwb3B1bGF0aW9ucyBhcmUgZXF1YWwuIFdoaWxlIHRoZSBjb21tb25seS11c2VkIFN0dWRlbnQgPGk+dDwvaT4tdGVzdCByZXF1aXJlcyB0aGF0IHRoZSB0d28gc2FtcGxlcyBzaGFyZSBlcXVhbCB2YXJpYW5jZXMgYW5kIGVxdWFsIHNhbXBsZSBzaXplcywgdGhlIFdlbGNo4oCZcyA8aT50PC9pPi10ZXN0IGRvZXMgbm90IGhhdmUgdGhpcyByZXF1aXJlbWVudC4gUmVzZWFyY2hlcnMgYXJndWUgdGhhdCB0aGUgV2VsY2jigJlzIDxpPnQ8L2k+LXRlc3QgaXMgbW9yZSB2ZXJzYXRpbGUgYW5kIHNob3VsZCBpbnN0ZWFkIGJlIHVzZWQgYnkgZGVmYXVsdC48c3VwPjEsMjwvc3VwPlxuICAgICAgPGJyPjxicj5cbiAgICAgIFN0YXRpc3RpY2FsIHJpZ29yIGNhbiBiZSBhY2hpZXZlZCB3aXRoIDxpPnQ8L2k+LXRlc3RzLCB5ZXQgdGhlIHNpZ25pZmljYW5jZSBsZXZlbCBpcyBzZXQgYXJiaXRyYXJpbHkuIFdoaWxlIGxvd2VyaW5nIHNpZ25pZmljYW5jZSBsZXZlbHMgbWl0aWdhdGVzIGZhbHNlIHBvc2l0aXZlcyAoJiM5NDU7KSwgdGhlIHByb2JhYmlsaXR5IG9mIGZhbHNlIG5lZ2F0aXZlcyAoJiM5NDY7KSBpbmNyZWFzZXMsIGFuZCB0ZXN0cyBtYXkgZmFpbCB0byBkZXRlY3QgZXhpc3RpbmcgZWZmZWN0cy48c3VwPjM8L3N1cD5cbiAgICA8L2Rpdj5cbiAgICA8YnI+XG5cblxuICA8L2Rpdj5cbiAgPGRpdiBpZD1cIldoaXRlV2luZG93XCI+XG5cbiAgICAgIDxoND5SZWZlcmVuY2VzPC9oND5cblxuICAgICAgMS4gRGFoaXJ1LCBULiBQLXZhbHVlLCBhIHRydWUgdGVzdCBvZiBzdGF0aXN0aWNhbCBzaWduaWZpY2FuY2U/IEEgY2F1dGlvbmFyeSBub3RlLiA8aT5Bbm5hbHMgb2YgSWJhZGFuIFBvc3RncmFkdWF0ZSBNZWRpY2luZS48L2k+IDIwMDgsIDxpPjY8L2k+KDEpOiAyMeKAkzI2LlxuICAgICAgPGJyPlxuICAgICAgMi4gRGVsYWNyZSwgTS47IExha2VucywgRC47IExleXMsIEMuIFdoeSBQc3ljaG9sb2dpc3RzIFNob3VsZCBieSBEZWZhdWx0IFVzZSBXZWxjaOKAmXMgdC10ZXN0IEluc3RlYWQgb2YgU3R1ZGVudOKAmXMgdC10ZXN0LiA8aT5JbnRlcm5hdGlvbmFsIFJldmlldyBvZiBTb2NpYWwgUHN5Y2hvbG9neS48L2k+IDIwMTcsIDxpPjMwPC9pPigxKSwgOTLigJMxMDEuXG4gICAgICA8YnI+XG4gICAgICAzLiBCZW5qYW1pbiwgRC5KLjsgQmVyZ2VyLCBKLk8uOyBKb2hhbm5lc3NvbiwgTS4gZXQgYWwuIFJlZGVmaW5lIHN0YXRpc3RpY2FsIHNpZ25pZmljYW5jZS4gPGk+TmF0dXJlIEh1bWFuIEJlaGF2aW91ci48L2k+IDIwMTgsIDxpPjI8L2k+LCA24oCTMTAuXG4gICAgICA8YnI+XG4gICAgICA0LiBDb2xxdWhvdW4sIEQuIEFuIGludmVzdGlnYXRpb24gb2YgdGhlIGZhbHNlIGRpc2NvdmVyeSByYXRlIGFuZCB0aGUgbWlzaW50ZXJwcmV0YXRpb24gb2YgcC12YWx1ZXMuIDxpPlJveWFsIFNvY2lldHkgT3BlbiBTY2llbmNlLjwvaT4gMjAxNCwgPGk+MTwvaT4oMyk6IDE0MDIxNi5cblxuICA8L2Rpdj4gIDwhLS0gY29udGFpbmVyIC0tPiAgIFxuXG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuXG5cbjxzY3JpcHQ+XG4vLyBpbXBvcnQgc2xpZGVyIGZyb20gJ2pxdWVyeS11aS1zbGlkZXInO1xuLy8gaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xuXG5pbXBvcnQgQ2hhcnQgZnJvbSAnY2hhcnQuanMnICAvLyBucG0gaW5zdGFsbCBjaGFydC5qc0AyLjkuNCwgdGhlbiB0cmllZCAyLjkuMy4gc28sZSBzYXkgMi45LjQgZG9lc24ndCB3b3JrLlxuaW1wb3J0IGNoYXJ0anNQbHVnaW5Bbm5vdGF0aW9uIGZyb20gXCJjaGFydGpzLXBsdWdpbi1hbm5vdGF0aW9uXCI7IC8vIG5wbSBpbnN0YWxsIGNoYXJ0anMtcGx1Z2luLWFubm90YXRpb25AMC41LjcgLS1zYXZlICAgIDw8PCB1c2VkIHRoaXMuIG5lY2Vzc2FyeT9cbi8vIGltcG9ydCAqIGFzIG1hdGggZnJvbSAnbWF0aGpzJztcbmltcG9ydCB0dGVzdENoYXJ0RGF0YSBmcm9tICcuL3R0ZXN0LWNoYXJ0LWRhdGEuanMnXG5pbXBvcnQgd2VsY2hzIGZyb20gJ0Avd2VsY2hzJztcblxuXG5pbXBvcnQgSHlwb3RoZXNpc0NvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvSHlwb3RoZXNpc0NvbXBvbmVudC52dWUnXG5pbXBvcnQgUFBWQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50cy9QUFZDb21wb25lbnQudnVlJ1xuaW1wb3J0IFJPQ0NvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvUk9DQ29tcG9uZW50LnZ1ZSdcbmltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlL3N0b3JlJyBcblxuLy8gc3RvcmUuY29tbWl0KCdpbmNyZW1lbnQnKTtcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHN0b3JlLFxuICBuYW1lOiAnQXBwJyxcbiAgY29tcG9uZW50czoge1xuICAgIEh5cG90aGVzaXNDb21wb25lbnQsXG4gICAgUFBWQ29tcG9uZW50LFxuICAgIFJPQ0NvbXBvbmVudCxcbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3RvcmUsXG4gICAgICB0dGVzdENoYXJ0RGF0YTogdHRlc3RDaGFydERhdGEsXG4gICAgICBzdG9yZWNvdW50OiBzdG9yZS5zdGF0ZS5jb3VudCxcbiAgICAgIHR0ZXN0Q2hhcnQ6IG51bGwsXG4gICAgICB0aHVtYjogbnVsbFxuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIG15RnVuY3Rpb246IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAodGhpcy5zdG9yZS5zdGF0ZS5jcml0X3RfdmFsdWUgPiB0aGlzLnN0b3JlLnN0YXRlLnRfdmFsdWUpIHtcbiAgICAgICAgICAgICAgdGhpcy5zdG9yZS5zdGF0ZS5jcml0X3RfdmFsdWUgPSAtMy4yMTU1O1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNNQUxMRVJcIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLnN0b3JlLnN0YXRlLmNyaXRfdF92YWx1ZSA9IDMuMjE1NTtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJCSUdHRVJcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgc3RvcmUuY29tbWl0KCdkZWNyZW1lbnQnKTtcbiAgICAgICAgICBzdG9yZS5jb21taXQoJ3VwZGF0ZVN0YXRlJyk7XG4gICAgICAgICAgdGhpcy5zdG9yZWNvdW50Kys7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZW1vXCIpLmlubmVySFRNTCA9IFwiSSBoYXZlIGNoYW5nZWQhXCI7XG4gICAgfSxcbiAgICBkcmF3QWxwaGFDdXJ2ZTogZnVuY3Rpb24oZ3JvdXAxLCBjcml0X3RfdmFsdWUpeyAgXG4gICAgICBsZXQgYWxwaGFfY3VydmUgPSB3ZWxjaHMuZ2V0QWxwaGFDdXJ2ZShncm91cDEsIGNyaXRfdF92YWx1ZSk7XG4gICAgICB0aGlzLnR0ZXN0Q2hhcnREYXRhLmRhdGEuZGF0YXNldHNbM10uZGF0YSA9IGFscGhhX2N1cnZlOyAgLy8gd2FzIFszXVsnZGF0YSddXG4gICAgICB0aGlzLnR0ZXN0Q2hhcnQudXBkYXRlKCk7XG4gICAgfSxcbiAgICBkcmF3QmV0YUN1cnZlOiBmdW5jdGlvbiAoZ3JvdXAyLCBjcml0X3RfdmFsdWUsIG5jcCl7ICBcbiAgICAgIGxldCBiZXRhX2N1cnZlID0gd2VsY2hzLmRyYXdCZXRhQ3VydmUgKGdyb3VwMiwgY3JpdF90X3ZhbHVlLCBuY3ApO1xuICAgICAgdGhpcy50dGVzdENoYXJ0RGF0YS5kYXRhLmRhdGFzZXRzWzRdLmRhdGEgPSBiZXRhX2N1cnZlO1xuICAgICAgdGhpcy50dGVzdENoYXJ0LnVwZGF0ZSgpO1xuICAgIH0sXG4gIH0sXG4gIGNvbnZlcnRDaGFydFhUb1NjcmVlblg6IGZ1bmN0aW9uICh4LCBjaGFydF94X21pbiwgY2hhcnRfeF9tYXgsIHgxLCB4Miwgb2Zmc2V0KXtcbiAgICAvL3JldHVybiBtYXRoLnJvdW5kKCgoKHggLSBjaGFydF94X21pbikvKGNoYXJ0X3hfbWF4IC0gY2hhcnRfeF9taW4pKSooeDIteDEpKSAtIG9mZnNldCwwKTtcbiAgICByZXR1cm4gKCgoeCAtIGNoYXJ0X3hfbWluKS8oY2hhcnRfeF9tYXggLSBjaGFydF94X21pbikpKih4Mi14MSkpIC0gb2Zmc2V0O1xuICB9LFxuICBjb252ZXJ0U2NyZWVuWFRvQ2hhcnRYOiBmdW5jdGlvbiAoeCwgeDEsIHgyLCBjaGFydF94MSwgY2hhcnRfeDIsIHRodW1iT2Zmc2V0V2lkdGgpe1xuICAgIHJldHVybiAoeCArICh0aHVtYk9mZnNldFdpZHRoLzIpKS8oeDIgLSB4MSkqKGNoYXJ0X3gyLWNoYXJ0X3gxKSArIGNoYXJ0X3gxO1xuICB9LFxuXG4gIFxuICAvLyBpbml0VGh1bWI6IGZ1bmN0aW9uIChjaGFydF94X21pbiwgY2hhcnRfeF9tYXgsIHRodW1iT2Zmc2V0V2lkdGgsIGNyaXRfdF9pbml0KXtcbiAgLy8gICAvLyBJbml0aWFsIHBvc2l0aW9uIG9mIHRoZSBzbGlkZXIgdGh1bWIuXG4gIC8vICAgY29uc29sZS5sb2coXCJjcml0X3RfaW5pdDpcIiwgY3JpdF90X2luaXQpO1xuICAvLyAgIHZhciBwb2ludHMgPSB0aGlzLnR0ZXN0Q2hhcnQuY2hhcnQuZ2V0RGF0YXNldE1ldGEoMCkuZGF0YTtcbiAgLy8gICB2YXIgeDEgPSBwb2ludHNbMF0uX21vZGVsLng7XG4gIC8vICAgdmFyIHgyID0gcG9pbnRzWzFdLl9tb2RlbC54O1xuXG4gIC8vICAgLy8gY29udmVydCBjaGFydCB4IHZhbHVlIHRvIHRoZSB4IHNjcmVlbiBwb3NpdGlvbiBmb3IgdGhlIHNsaWRlciB0aHVtYlxuICAvLyAgIC8vIHZhciBvZmZzZXQgPSB0aHVtYi5vZmZzZXRXaWR0aC8yOyAvLy41OTsgIC8vIHByZXZpb3VzbHk6IG9mZnNldD0zXG4gIC8vICAgdmFyIG9mZnNldCA9IHRodW1iT2Zmc2V0V2lkdGgvMjsgLy8uNTk7ICAvLyBwcmV2aW91c2x5OiBvZmZzZXQ9M1xuICAvLyAgIHZhciBuZXdfdGh1bWIgPSB0aGlzLmNvbnZlcnRDaGFydFhUb1NjcmVlblgoY3JpdF90X2luaXQsIGNoYXJ0X3hfbWluLCBjaGFydF94X21heCwgeDEsIHgyLCBvZmZzZXQpO1xuICAvLyAgIC8vIGVsZW0oXCJ0aHVtYlwiKS5zdHlsZS5sZWZ0ID0gbmV3X3RodW1iICsgXCJweFwiO1xuXG4gIC8vICAgLy8gQkVMT1cgSVMgTkVXXG4gIC8vICAgLy8gYWRqdXN0IHRoZSBzbGlkZXJcbiAgLy8gICAvLyBlbGVtKFwic2xpZGVyXCIpLnN0eWxlLmxlZnQgPSB4MSArIFwicHhcIjtcbiAgLy8gICAvLyBlbGVtKFwic2xpZGVyXCIpLnN0eWxlLndpZHRoID0geDIgLSB4MSArIFwicHhcIjtcbiAgICBcbiAgLy8gICAvLyB1cGRhdGVTdGF0ZShjcml0X3RfaW5pdCwgZGYsIG5jcCk7XG4gIC8vICAgcmV0dXJuIG5ld190aHVtYjtcbiAgLy8gfSxcblxuXG4gIG1vdW50ZWQoKSB7XG5cbiAgICBcbiAgICBsZXQgdm9sdW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN2b2x1bWUtY29udHJvbFwiKTtcbiAgICB2b2x1bWUuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbihlKSB7XG4gICAgY29uc29sZS5sb2coXCJlOlwiLCBlLmN1cnJlbnRUYXJnZXQudmFsdWUgLyAxMDApO1xuICAgIH0pO1xuICAgIC8vIHRoaXMudGh1bWIgPSBzbGlkZXIucXVlcnlTZWxlY3RvcignLnRodW1iJyk7XG4gICAgLy8gdGhpcy50aHVtYiA9IHRoaXMuJHJlZnMudGh1bWI7XG4gICAgLy8gJCggZnVuY3Rpb24oKSB7XG4gICAgLy8gJCggXCIudGh1bWJcIiApLnNsaWRlcigpO1xuICAvLyB9ICk7XG4gICAgLy8gdmFyIHNsaWRlciA9IG5ldyBTbGlkZXIoJyN0aHVtYicsIHt9KTtcbiAgICAvLyAkKFwiI3RodW1iXCIpLnNsaWRlcih7fSk7XG4gICAgLy8gJChcIi50aHVtYlwiKS5zbGlkZXIodGhpcy5vcHRpb25zLnNsaWRlcikub24oJ3NsaWRlJywgZnVuY3Rpb24gKGUpIHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKGUpO1xuICAgIC8vICAgICAgICAgICAgICAgICAvLyBsZXQgbWluID0gZS52YWx1ZVswXSxcbiAgICAvLyAgICAgICAgICAgICAgICAgLy8gICAgIG1heCA9IGUudmFsdWVbMV07XG4gICAgLy8gICAgICAgICAgICAgfSk7XG5cbiAgICBDaGFydC5wbHVnaW5zLnJlZ2lzdGVyKGNoYXJ0anNQbHVnaW5Bbm5vdGF0aW9uKVxuICAgIHRoaXMudHRlc3RDaGFydCA9IG5ldyBDaGFydChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHRlc3QtY2hhcnQnKSwgdGhpcy50dGVzdENoYXJ0RGF0YSk7XG4gICAgdGhpcy50dGVzdENoYXJ0RGF0YS5kYXRhLmRhdGFzZXRzWzBdLmRhdGEgPSBbe3g6IC00Ljc1MywgeTogMH0sIHt4OiA3LjIzMiwgeTogMH1dO1xuICAgIHRoaXMudHRlc3RDaGFydERhdGEub3B0aW9ucy5zY2FsZXMueEF4ZXNbMF0udGlja3MubWluID0gLTQuNzUzO1xuICAgIHRoaXMudHRlc3RDaGFydERhdGEub3B0aW9ucy5zY2FsZXMueEF4ZXNbMF0udGlja3MubWF4ID0gNy4yMzI7IFxuICAgIHRoaXMudHRlc3RDaGFydERhdGEub3B0aW9ucy5zY2FsZXMueUF4ZXNbMF0udGlja3MubWF4ID0gMC41O1xuXG5cbiAgICB0aGlzLnR0ZXN0Q2hhcnREYXRhLm9wdGlvbnMuYW5ub3RhdGlvbi5hbm5vdGF0aW9uc1swXS5sYWJlbC5jb250ZW50ID0gJ3AgPSAnICsgdGhpcy5zdG9yZS5zdGF0ZS5wX3ZhbHVlO1xuICAgIHRoaXMudHRlc3RDaGFydERhdGEub3B0aW9ucy5hbm5vdGF0aW9uLmFubm90YXRpb25zWzBdLnZhbHVlID0gdGhpcy5zdG9yZS5zdGF0ZS50X3ZhbHVlO1xuICAgIHRoaXMudHRlc3RDaGFydERhdGEub3B0aW9ucy5hbm5vdGF0aW9uLmFubm90YXRpb25zWzFdLmNvbnRlbnQgPSAnXFx1MDNCMScgKyB0aGlzLnN0b3JlLnN0YXRlLmFscGhhOyBcbiAgICB0aGlzLnR0ZXN0Q2hhcnREYXRhLm9wdGlvbnMuYW5ub3RhdGlvbi5hbm5vdGF0aW9uc1sxXS52YWx1ZSA9IHRoaXMuc3RvcmUuc3RhdGUuY3JpdF90X3ZhbHVlO1xuICAgIFxuXG4gICAgdGhpcy50dGVzdENoYXJ0RGF0YS5kYXRhLmRhdGFzZXRzWzFdLmRhdGEgPSB0aGlzLnN0b3JlLnN0YXRlLmdyb3VwMS5kaXN0O1xuICAgIHRoaXMudHRlc3RDaGFydERhdGEuZGF0YS5kYXRhc2V0c1syXS5kYXRhID0gdGhpcy5zdG9yZS5zdGF0ZS5ncm91cDIuZGlzdDtcbiAgICB0aGlzLnR0ZXN0Q2hhcnQudXBkYXRlKCk7XG5cbiAgICB0aGlzLmRyYXdBbHBoYUN1cnZlKHRoaXMuc3RvcmUuc3RhdGUuZ3JvdXAxLCB0aGlzLnN0b3JlLnN0YXRlLmNyaXRfdF92YWx1ZSk7XG4gICAgdGhpcy5kcmF3QmV0YUN1cnZlKHRoaXMuc3RvcmUuc3RhdGUuZ3JvdXAyLCB0aGlzLnN0b3JlLnN0YXRlLmNyaXRfdF92YWx1ZSx0aGlzLnN0b3JlLnN0YXRlLm5jcCk7XG4gIH0sXG59XG5cblxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbi8qICNhcHAge1xuICBmb250LWZhbWlseTogQXZlbmlyLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzJjM2U1MDtcbiAgbWFyZ2luLXRvcDogNjBweDtcbn0gKi9cblxuaHRtbCB7XG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xufVxuXG5ib2R5IHtcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogI2ZmM2UwMDsgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogIzQzNDM0MztcbiAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG5hOmxpbmssIGE6dmlzaXRlZCB7XG4gIGNvbG9yOiBncmV5O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi8qIG1vdXNlIG92ZXIgbGluayAqL1xuYTpob3ZlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4vKiBzZWxlY3RlZCBsaW5rICovXG5hOmFjdGl2ZSB7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5cbmg0IHtcbiAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn1cblxuXG5cbiNDb250YWluZXJXaW5kb3d7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDIwcHggNzBweDtcbn1cblxuI1doaXRlV2luZG93e1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBjb2xvcjogIzAwMDtcbiAgcGFkZGluZzogODBweCA1MHB4O1xuICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE3cHg7XG59XG5cbiNCbGFja1dpbmRvd3tcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDgwcHggNTBweDtcbiAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuXG4jT3JhbmdlV2luZG93e1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuL2Fzc2V0cy93ZWxjaHMucG5nXCIpO1xuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjOyAqL1xuICAvKiBoZWlnaHQ6IDUwMHB4OyAqL1xuXG4gIC8qIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyAqL1xuXG4gIC8qIENyZWF0ZSB0aGUgcGFyYWxsYXggc2Nyb2xsaW5nIGVmZmVjdCAqL1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cbiAgLyogYmFja2dyb3VuZC1jb2xvcjogI2ZmM2UwMDsgKi9cbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDEyMHB4IDUwcHggMTIwcHggNTBweDtcbiAgLyogZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjsgKi9cbiAgZm9udC1zaXplOiAxN3B4O1xufVxuXG5cbiN0aXRsZW5hbWV7XG4gIGZvbnQtZmFtaWx5OiAnVHJlYnVjaGV0IE1TJywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiA4MHB4O1xuICAvKiBwYWRkaW5nOiAwcHggMHB4IDBweCAxMDBweDsgKi9cbiAgLyogbWFyZ2luLWJvdHRvbTotMTIwcHggKi9cbn1cbiN0aXRsZW5hbWUtc3Vie1xuICBmb250LWZhbWlseTogJ1RyZWJ1Y2hldCBNUycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogNzBweDtcbiAgLyogcGFkZGluZzogMHB4IDBweCAwcHggMTAwcHg7ICovXG4gIC8qIG1hcmdpbi1ib3R0b206LTEyMHB4ICovXG59XG5cbi5tb3JlLWluZm8ge1xuICBwYWRkaW5nOiAxMHB4IDIwcHggMjBweCAyMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmYzZTAwOyAgLyogcHJldmlvdXNseSBmZjcwNDMgKi9cbn1cblxuXG4uYm94IHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZThlOGU4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgfVxuICBcbi5hc3Rlcmlza0ZpZWxkIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG5cbi5yZXNwb25zaXZlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLnNsaWRlciB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZDogI0UwRTBFMDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KGxlZnQgdG9wLCAjRTBFMEUwLCAjRUVFRUVFKTtcbiAgLyogd2lkdGg6IDUyNXB4OyAqL1xuICBoZWlnaHQ6IDE1cHg7XG4gIG1hcmdpbjogMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cblxuLnRodW1iIHtcbiAgd2lkdGg6IDE1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiAtNXB4O1xuICBiYWNrZ3JvdW5kOiAjZmYzZTAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cblxuLmVycm9yX2JveCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTg7XG59XG5cbi8qIEBpbXBvcnQgXCJjb21wYXNzL2NzczNcIjsgKi9cblxuXG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuXG46OnNlbGVjdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0RUM2REU7XG59XG5cbi50YWJiZWQge1xuLyogIHdpZHRoOiA3MDBweDtcbiAgbWFyZ2luOiA1MHB4IGF1dG87ICAqL1xufVxuXG4udGFiYmVkID4gaW5wdXQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4udGFiYmVkID4gbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmc6IDEycHggMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4zcztcbn1cblxuLnRhYmJlZCA+IGxhYmVsOmhvdmVyLFxuLnRhYmJlZCA+IGlucHV0OmNoZWNrZWQgKyBsYWJlbCB7XG4gIGJhY2tncm91bmQ6ICNmZjNlMDA7XG59XG5cbi50YWJzIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgY2xlYXI6IGJvdGg7XG4gIHBlcnNwZWN0aXZlOiA2MDBweDtcbn1cblxuLnRhYnMgPiBkaXYge1xuICAvKiB3aWR0aDogNzAwcHg7ICovXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmM2UwMDtcbiAgcGFkZGluZzogMTBweCAzMHB4IDQwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjRlbTtcbiAgb3BhY2l0eTogMDtcbiAgei1pbmRleDogMDtcbn1cblxuXG4jdGFiLW5hdi0xOmNoZWNrZWQgfiAudGFicyA+IGRpdjpudGgtb2YtdHlwZSgxKSxcbiN0YWItbmF2LTI6Y2hlY2tlZCB+IC50YWJzID4gZGl2Om50aC1vZi10eXBlKDIpe1xuICBvcGFjaXR5OiAxO1xuICB6LWluZGV4OiAxO1xufVxuI3RhYi1uYXYtMzpjaGVja2VkIH4gLnRhYnMgPiBkaXY6bnRoLW9mLXR5cGUoMyl7XG4gIG9wYWNpdHk6IDE7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5ncmlkLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDBweDtcbn1cbi5ncmlkLWl0ZW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjOGM4Yzg7ICAvKnJnYmEoMCwgMCwgMCwgMC44KTsqL1xuICBwYWRkaW5nOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cblxuLmRpYWdyYW0tYm94IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYzhjOGM4O1xufVxuXG4uZW50ZXItZGF0YXtcbiAgYm9yZGVyOiAycHggc29saWQgI2M4YzhjODtcbiAgcGFkZGluZzogMzBweDtcbn1cblxuLyogaGlkZSBmb3IgbGFyZ2VyIHNjcmVlbnMgKi9cbiNTbWFsbFNjcmVlbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuXG4vKiBzaG93IGZvciBzbWFsbCBzY3JlZW5zICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgICAjU21hbGxTY3JlZW4ge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG59XG5cbi8qIHJlbW92ZSBwYWRkaW5nIG9uIHNtYWxsZXIgc2NyZWVucyAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgI0NvbnRhaW5lcldpbmRvd3tcbiAgICBwYWRkaW5nOiA1MHB4IDVweCA1MHB4IDVweDtcbiAgfVxufVxuXG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App.vue?vue&type=script&lang=js&\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "878fd0acaf32d0e3"; }
/******/ }();
/******/ 
/******/ }
);
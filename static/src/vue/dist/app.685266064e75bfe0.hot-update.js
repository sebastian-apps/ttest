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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ \"./node_modules/core-js/modules/es.array.push.js\");\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js */ \"./node_modules/chart.js/dist/Chart.js\");\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var mathjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mathjs */ \"./node_modules/mathjs/lib/esm/entry/pureFunctionsAny.generated.js\");\n/* harmony import */ var _ttest_chart_data_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ttest-chart-data.js */ \"./src/ttest-chart-data.js\");\n/* harmony import */ var _components_HypothesisComponent_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/HypothesisComponent.vue */ \"./src/components/HypothesisComponent.vue\");\n/* harmony import */ var _components_PPVComponent_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/PPVComponent.vue */ \"./src/components/PPVComponent.vue\");\n/* harmony import */ var _components_ROCComponent_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/ROCComponent.vue */ \"./src/components/ROCComponent.vue\");\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store/store */ \"./src/store/store.js\");\n\n // npm install chart.js@2.9.4\n\n\n\n\n\n\n\n// store.commit('increment');\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  store: _store_store__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n  name: 'App',\n  components: {\n    HypothesisComponent: _components_HypothesisComponent_vue__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    PPVComponent: _components_PPVComponent_vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    ROCComponent: _components_ROCComponent_vue__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n  },\n  data() {\n    return {\n      store: _store_store__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n      ttestChartData: _ttest_chart_data_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n      value1: true,\n      storecount: _store_store__WEBPACK_IMPORTED_MODULE_6__[\"default\"].state.count\n    };\n  },\n  methods: {\n    myFunction: function () {\n      if (this.store.state.crit_t_value > this.store.state.t_value) {\n        this.store.state.crit_t_value = -3.2155;\n        console.log(\"SMALLER\");\n      } else {\n        this.store.state.crit_t_value = 3.2155;\n        console.log(\"BIGGER\");\n      }\n      _store_store__WEBPACK_IMPORTED_MODULE_6__[\"default\"].commit('decrement');\n      _store_store__WEBPACK_IMPORTED_MODULE_6__[\"default\"].commit('updateState');\n      this.storecount++;\n      document.getElementById(\"demo\").innerHTML = \"I have changed!\";\n    },\n    drawAlphaCurve: function (group1, crit_t_value) {\n      // Fill the area under the curve representing alpha.\n      let alpha_curve = [];\n      // this datapoint connects with the critical t vertical line\n      alpha_curve.push({\n        x: crit_t_value,\n        y: t_Distrib(crit_t_value, group1.df)\n      });\n      for (var i = 0; i < group1.dist.length; i++) {\n        if (group1.dist[i]['x'] > crit_t_value) {\n          alpha_curve.push({\n            x: group1.dist[i]['x'],\n            y: group1.dist[i]['y']\n          });\n        }\n      }\n      this.ttestChart.data.datasets[3]['data'] = alpha_curve;\n      this.ttestChart.update();\n    },\n    t_Distrib: function (t, dof) {\n      // For a given x, return the t distribution y value.\n      y = mathjs__WEBPACK_IMPORTED_MODULE_7__.gamma((dof + 1) / 2) / (mathjs__WEBPACK_IMPORTED_MODULE_7__.sqrt(dof * mathjs__WEBPACK_IMPORTED_MODULE_7__.pi) * mathjs__WEBPACK_IMPORTED_MODULE_7__.gamma(dof / 2)) * (1 + t ** 2 / dof) ** (-(dof + 1) / 2);\n      return mathjs__WEBPACK_IMPORTED_MODULE_7__.round(y, 6);\n    }\n  },\n  mounted() {\n    this.ttestChart = new (chart_js__WEBPACK_IMPORTED_MODULE_1___default())(document.getElementById('ttest-chart'), this.ttestChartData);\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvQHZ1ZS92dWUtbG9hZGVyLXYxNS9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NyYy9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFvTEE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Z1ZWFwcC9zcmMvQXBwLnZ1ZT8xMWM0Il0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdiBpZD1cImFwcFwiPlxuIFxuXG4gIDxkaXYgY2xhc3M9XCJoZXJvLWltYWdlXCIgaWQ9XCJPcmFuZ2VXaW5kb3dcIj5cbiAgICA8ZGl2IGlkPVwidGl0bGVuYW1lXCI+V2VsY2gncyA8aT50PC9pPi10ZXN0PC9kaXY+XG4gICAgPGRpdiBpZD1cInRpdGxlbmFtZS1zdWJcIj5jYWxjdWxhdG9yPC9kaXY+XG4gIDwvZGl2PlxuXG4gIDxkaXYgaWQ9XCJCbGFja1dpbmRvd1wiPlxuICAgIDxkaXYgc3R5bGU9XCJ0ZXh0LWFsaWduOmp1c3RpZnlcIj5cbiAgICAgIElzIHRoZXJlIGEgc3RhdGlzdGljYWxseSBzaWduaWZpY2FudCBkaWZmZXJlbmNlIGJldHdlZW4gdHdvIGRhdGFzZXRzPzxwPjwvcD5cbiAgICAgIE1vdmUgdGhlIHNsaWRlciBhbmQgb2JzZXJ2ZSB0aGUgaW1wYWN0IG9mIHRoZSBzaWduaWZpY2FuY2UgbGV2ZWwgb24gdGhlIHByb2JhYmlsaXR5IG9mIG1ha2luZyB0aGUgd3JvbmcgZGVjaXNpb24uIElucHV0IGFuZCBleHBsb3JlIHlvdXIgZGF0YXNldHMuXG4gICAgICBUaGlzIGNhbGN1bGF0b3IgaXMgZm9yIG9uZS10YWlsZWQgV2VsY2jigJlzIDxpPnQ8L2k+LXRlc3RzLiBUaGUgZGF0YSBhcmUgYXNzdW1lZCB0byBiZSBub3JtYWxseSBkaXN0cmlidXRlZC5cbiAgICAgIDxhIGhyZWY9JyNtb3JlLWluZm8nPkZpbmQgbW9yZSBpbmZvcm1hdGlvbi48L2E+XG4gICAgPC9kaXY+XG4gICAgPHA+PC9wPlxuICA8L2Rpdj5cblxuXG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIiBpZD1cIkNvbnRhaW5lcldpbmRvd1wiPlxuXG4gICAgPHA+PGJyPjxwPjxicj48cD48YnI+PHA+XG5cbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5cblxuICAgICAgICA8IS0tIHslIGlmIHRlc3RfcmVzdWx0cyAlfSAtLT5cbiAgICAgICAgPGRpdiBpZD1cInNsaWRlclwiIGNsYXNzPVwic2xpZGVyXCI+XG4gICAgICAgICAgPGRpdiBpZD1cInRodW1iXCIgY2xhc3M9XCJ0aHVtYlwiIG9udG91Y2htb3ZlPVwibW92ZVRodW1iTW9iaWxlKGV2ZW50KVwiPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8Y2FudmFzIGlkPVwidHRlc3QtY2hhcnRcIiB3aWR0aD1cIjEwMDBcIiBoZWlnaHQ9XCI4MDBcIj48L2NhbnZhcz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxwPjxicj48cD48YnI+XG4gICAgICAgIDwhLS0geyUgZW5kaWYgJX0gLS0+XG5cbiAgICAgICAgPGI+PHNwYW4gaWQ9XCJtZXNzYWdlXCI+PC9zcGFuPjwvYj5cbiAgICAgICAgPGJyPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJlbnRlci1kYXRhXCI+XG4gICAgICAgICAgPGZvcm0gaWQ9XCJkYXRhLWZvcm1cIiBhY3Rpb249XCJ7JSB1cmwgJ2NvcmU6dHRlc3QnICV9XCIgbWV0aG9kPSdwb3N0JyBjbGFzcz1cImZvcm1cIj5cbiAgICAgICAgICA8IS0tIHslIGNzcmZfdG9rZW4gJX0gLS0+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtNiBjb2wtc20tNFwiPlxuICAgICAgICAgICAgICAgIDwhLS0ge3sgZm9ybS5kYXRhc2V0MXxhc19jcmlzcHlfZmllbGQgfX0gLS0+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTYgY29sLXNtLTRcIj5cbiAgICAgICAgICAgICAgICA8IS0tIHt7IGZvcm0uZGF0YXNldDJ8YXNfY3Jpc3B5X2ZpZWxkIH19IC0tPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtc20tNFwiPlxuICAgICAgICAgICAgICAgIDxiPlNUQVRJU1RJQ1M8L2I+PGJyPjxicj5cbiAgICAgICAgICAgICAgICA8Yj5jcml0aWNhbCB0OjwvYj4gPHNwYW4gaWQ9XCJjcml0X3RfdmFsdWVcIj48L3NwYW4+PGJyPlxuICAgICAgICAgICAgICAgIDxiPnNpZyBsZXZlbCAoJiM5NDU7KTo8L2I+IDxzcGFuIGlkPVwic2lnLWxldmVsXCI+PC9zcGFuPjxicj5cbiAgICAgICAgICAgICAgICA8YnI+XG5cbiAgICAgICAgICAgICAgICA8Yj50LXZhbHVlOjwvYj4gPHNwYW4gaWQ9XCJ0X3ZhbHVlXCI+PC9zcGFuPjxicj5cbiAgICAgICAgICAgICAgICA8IS0tIDxiPnAtdmFsdWU6PC9iPiB7eyB0ZXN0X3Jlc3VsdHMucF92YWx1ZSB9fTxicj4gLS0+XG4gICAgICAgICAgICAgICAgPGJyPlxuXG4gICAgICAgICAgICAgICAgPCEtLSA8Yj5kZjo8L2I+IHt7IHRlc3RfcmVzdWx0cy5kZiB9fTxicj4gLS0+XG4gICAgICAgICAgICAgICAgPCEtLSA8Yj5lZmZlY3Qgc2l6ZTo8L2I+IHt7IHRlc3RfcmVzdWx0cy5lZmZlY3Rfc2l6ZSB9fTxicj4gLS0+XG4gICAgICAgICAgICAgICAgPGI+bmNwOjwvYj4gPHNwYW4gaWQ9XCJuY3BcIj48L3NwYW4+PGJyPlxuICAgICAgICAgICAgICAgIDxicj48YnI+XG5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG5hbWU9XCJzdWJtaXRcIiBzdHlsZT1cIm1hcmdpbi1ib3R0b206NXB4XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIj5BbmFseXplPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgc3R5bGU9XCJtYXJnaW4tYm90dG9tOjVweFwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgb25jbGljaz1cImNsZWFyRm9ybSgpXCI+Q2xlYXI8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnI+PGJyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9mb3JtPlxuXG4gICAgICAgICAgPGRpdiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTg7IHBhZGRpbmc6MTBweDsgbWluLXdpZHRoOjMwMHB4O1wiIGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTRcIj5cbiAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJTbWFsbFNjcmVlblwiPjxiPkdyb3VwIDE8L2I+PGJyPjwvc3Bhbj5cbiAgICAgICAgICAgICAgPCEtLSB7eyBkYXRhMS5tZWFuIH19PGJyPlxuICAgICAgICAgICAgICB7eyBkYXRhMS5zZCB9fTxicj5cbiAgICAgICAgICAgICAge3sgZGF0YTEubiB9fTxicj4gLS0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtNFwiPlxuICAgICAgICAgICAgICA8c3BhbiBpZD1cIlNtYWxsU2NyZWVuXCI+PGI+R3JvdXAgMjwvYj48YnI+PC9zcGFuPlxuICAgICAgICAgICAgICA8IS0tIHt7IGRhdGEyLm1lYW4gfX08YnI+XG4gICAgICAgICAgICAgIHt7IGRhdGEyLnNkIH19PGJyPlxuICAgICAgICAgICAgICB7eyBkYXRhMi5uIH19PGJyPiAtLT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy00XCI+XG4gICAgICAgICAgICAgIDxzcGFuIGlkPVwiU21hbGxTY3JlZW5cIj48YnI+PC9zcGFuPlxuICAgICAgICAgICAgICA8Yj5NZWFuPC9iPjxicj5cbiAgICAgICAgICAgICAgPGI+U0Q8L2I+PGJyPlxuICAgICAgICAgICAgICA8Yj5OPC9iPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PjwhLS0gY2xvc2UgZW50ZXItZGF0YSBkaXYgLS0+XG4gICAgICAgIDxwPjwvcD48YnI+XG4gICAgICA8L2Rpdj4gPCEtLSBjb2x1bW4gZW5kIC0tPlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTFcIj5cbiAgICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImNvbC1tZC01XCI+XG5cbiAgICAgIDwhLS0geyUgaWYgdGVzdF9yZXN1bHRzICV9IC0tPlxuICAgICAgPGRpdiBjbGFzcz1cInRhYmJlZFwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInRhYnNcIiBpZD1cInRhYi1uYXYtMVwiIGNoZWNrZWQ+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJ0YWItbmF2LTFcIj5IeXBvdGhlc2lzIFRlc3Rpbmc8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInRhYnNcIiBpZD1cInRhYi1uYXYtMlwiPlxuICAgICAgICA8bGFiZWwgZm9yPVwidGFiLW5hdi0yXCI+UFBWPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJ0YWJzXCIgaWQ9XCJ0YWItbmF2LTNcIj5cbiAgICAgICAgPGxhYmVsIGZvcj1cInRhYi1uYXYtM1wiPlJPQzwvbGFiZWw+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRhYnNcIj5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJcIj5cbiAgICAgICAgICAgIDxIeXBvdGhlc2lzQ29tcG9uZW50IC8+IFxuICAgICAgICAgIDwvZGl2PiA8IS0tIGVuZCBoeXBvdGhlc2lzIHRlc3RpbmcgLS0+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFiXCI+XG4gICAgICAgICAgICA8UFBWQ29tcG9uZW50IC8+XG4gICAgICAgICAgPC9kaXY+IDwhLS0gZW5kIFBQViAtLT5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJcIj5cbiAgICAgICAgICAgIDxST0NDb21wb25lbnQgLz5cbiAgICAgICAgICA8L2Rpdj4gPCEtLSBlbmQgUk9DIC0tPlxuXG4gICAgICAgIDwvZGl2PiA8IS0tIGVuZCB0YWJzIC0tPlxuICAgICAgPC9kaXY+ICA8IS0tIGVuZCB0YWJiZWQgLS0+XG4gICAgICAgIFxuICAgICAgPCEtLSB7JSBlbmRpZiAlfSAtLT5cbiAgICA8L2Rpdj4gPCEtLSBlbmQgY29sdW1uIC0tPlxuICA8L2Rpdj4gPCEtLSBlbmQgcm93IC0tPlxuXG5cbiAgICA8ZGl2IGlkPVwiU21hbGxTY3JlZW5cIiBzdHlsZT1cImhlaWdodDogMTIwMHB4O1wiPiAgPCEtLSBidWZmZXIgc3BhY2UgZm9yIHNtYWxsIHNjcmVlbnMgLS0+XG4gICAgPC9kaXY+XG4gICAgPGJyPjxicj48YnI+XG4gIDwvZGl2PlxuXG5cblxuICA8ZGl2IGlkPVwiQmxhY2tXaW5kb3dcIj5cblxuICAgIDxhIG5hbWU9XCJtb3JlLWluZm9cIj48L2E+XG4gICAgPGRpdiBjbGFzcz1cIm1vcmUtaW5mb1wiPlxuICAgICAgPGg0Pk1vcmUgaW5mb3JtYXRpb248L2g0PlxuXG4gICAgICBUaGUgV2VsY2jigJlzIDxpPnQ8L2k+LXRlc3QsIG9yIHVuZXF1YWwgdmFyaWFuY2VzIDxpPnQ8L2k+LXRlc3QsIGNhbiB0ZXN0IGh5cG90aGVzZXMgc3VjaCBhcyB3aGV0aGVyIHRoZSBtZWFucyBvZiB0d28gaW5kZXBlbmRlbnQgbm9ybWFsbHktZGlzdHJpYnV0ZWQgcG9wdWxhdGlvbnMgYXJlIGVxdWFsLiBXaGlsZSB0aGUgY29tbW9ubHktdXNlZCBTdHVkZW50IDxpPnQ8L2k+LXRlc3QgcmVxdWlyZXMgdGhhdCB0aGUgdHdvIHNhbXBsZXMgc2hhcmUgZXF1YWwgdmFyaWFuY2VzIGFuZCBlcXVhbCBzYW1wbGUgc2l6ZXMsIHRoZSBXZWxjaOKAmXMgPGk+dDwvaT4tdGVzdCBkb2VzIG5vdCBoYXZlIHRoaXMgcmVxdWlyZW1lbnQuIFJlc2VhcmNoZXJzIGFyZ3VlIHRoYXQgdGhlIFdlbGNo4oCZcyA8aT50PC9pPi10ZXN0IGlzIG1vcmUgdmVyc2F0aWxlIGFuZCBzaG91bGQgaW5zdGVhZCBiZSB1c2VkIGJ5IGRlZmF1bHQuPHN1cD4xLDI8L3N1cD5cbiAgICAgIDxicj48YnI+XG4gICAgICBTdGF0aXN0aWNhbCByaWdvciBjYW4gYmUgYWNoaWV2ZWQgd2l0aCA8aT50PC9pPi10ZXN0cywgeWV0IHRoZSBzaWduaWZpY2FuY2UgbGV2ZWwgaXMgc2V0IGFyYml0cmFyaWx5LiBXaGlsZSBsb3dlcmluZyBzaWduaWZpY2FuY2UgbGV2ZWxzIG1pdGlnYXRlcyBmYWxzZSBwb3NpdGl2ZXMgKCYjOTQ1OyksIHRoZSBwcm9iYWJpbGl0eSBvZiBmYWxzZSBuZWdhdGl2ZXMgKCYjOTQ2OykgaW5jcmVhc2VzLCBhbmQgdGVzdHMgbWF5IGZhaWwgdG8gZGV0ZWN0IGV4aXN0aW5nIGVmZmVjdHMuPHN1cD4zPC9zdXA+XG4gICAgPC9kaXY+XG4gICAgPGJyPlxuXG5cbiAgPC9kaXY+XG4gIDxkaXYgaWQ9XCJXaGl0ZVdpbmRvd1wiPlxuXG4gICAgICA8aDQ+UmVmZXJlbmNlczwvaDQ+XG5cbiAgICAgIDEuIERhaGlydSwgVC4gUC12YWx1ZSwgYSB0cnVlIHRlc3Qgb2Ygc3RhdGlzdGljYWwgc2lnbmlmaWNhbmNlPyBBIGNhdXRpb25hcnkgbm90ZS4gPGk+QW5uYWxzIG9mIEliYWRhbiBQb3N0Z3JhZHVhdGUgTWVkaWNpbmUuPC9pPiAyMDA4LCA8aT42PC9pPigxKTogMjHigJMyNi5cbiAgICAgIDxicj5cbiAgICAgIDIuIERlbGFjcmUsIE0uOyBMYWtlbnMsIEQuOyBMZXlzLCBDLiBXaHkgUHN5Y2hvbG9naXN0cyBTaG91bGQgYnkgRGVmYXVsdCBVc2UgV2VsY2jigJlzIHQtdGVzdCBJbnN0ZWFkIG9mIFN0dWRlbnTigJlzIHQtdGVzdC4gPGk+SW50ZXJuYXRpb25hbCBSZXZpZXcgb2YgU29jaWFsIFBzeWNob2xvZ3kuPC9pPiAyMDE3LCA8aT4zMDwvaT4oMSksIDky4oCTMTAxLlxuICAgICAgPGJyPlxuICAgICAgMy4gQmVuamFtaW4sIEQuSi47IEJlcmdlciwgSi5PLjsgSm9oYW5uZXNzb24sIE0uIGV0IGFsLiBSZWRlZmluZSBzdGF0aXN0aWNhbCBzaWduaWZpY2FuY2UuIDxpPk5hdHVyZSBIdW1hbiBCZWhhdmlvdXIuPC9pPiAyMDE4LCA8aT4yPC9pPiwgNuKAkzEwLlxuICAgICAgPGJyPlxuICAgICAgNC4gQ29scXVob3VuLCBELiBBbiBpbnZlc3RpZ2F0aW9uIG9mIHRoZSBmYWxzZSBkaXNjb3ZlcnkgcmF0ZSBhbmQgdGhlIG1pc2ludGVycHJldGF0aW9uIG9mIHAtdmFsdWVzLiA8aT5Sb3lhbCBTb2NpZXR5IE9wZW4gU2NpZW5jZS48L2k+IDIwMTQsIDxpPjE8L2k+KDMpOiAxNDAyMTYuXG5cbiAgPC9kaXY+ICA8IS0tIGNvbnRhaW5lciAtLT4gICBcblxuIFxuICAgIDwhLS0gPEh5cG90aGVzaXNDb21wb25lbnQgdi1zaG93PVwidmFsdWUxXCIgbXNnPVwiXCIvPiAtLT5cbiAgICA8IS0tIDxwIGlkPVwiZGVtb1wiIEBjbGljaz1cIm15RnVuY3Rpb25cIj48Yj5DSEFOR0UgQUxQSEE8L2I+PC9wPiAtLT5cbiAgICA8IS0tIDxQUFZDb21wb25lbnQgdi1zaG93PVwidmFsdWUxXCIgbXNnPVwiVGhpcyBpcyB0aGUgUFBWIHdpbmRvdyFcIi8+IC0tPlxuXG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuXG5cbjxzY3JpcHQ+XG5pbXBvcnQgQ2hhcnQgZnJvbSAnY2hhcnQuanMnICAvLyBucG0gaW5zdGFsbCBjaGFydC5qc0AyLjkuNFxuaW1wb3J0ICogYXMgbWF0aCBmcm9tICdtYXRoanMnO1xuaW1wb3J0IHR0ZXN0Q2hhcnREYXRhIGZyb20gJy4vdHRlc3QtY2hhcnQtZGF0YS5qcydcblxuaW1wb3J0IEh5cG90aGVzaXNDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnRzL0h5cG90aGVzaXNDb21wb25lbnQudnVlJ1xuaW1wb3J0IFBQVkNvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvUFBWQ29tcG9uZW50LnZ1ZSdcbmltcG9ydCBST0NDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnRzL1JPQ0NvbXBvbmVudC52dWUnXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zdG9yZS9zdG9yZScgXG5cbi8vIHN0b3JlLmNvbW1pdCgnaW5jcmVtZW50Jyk7XG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBzdG9yZSxcbiAgbmFtZTogJ0FwcCcsXG4gIGNvbXBvbmVudHM6IHtcbiAgICBIeXBvdGhlc2lzQ29tcG9uZW50LFxuICAgIFBQVkNvbXBvbmVudCxcbiAgICBST0NDb21wb25lbnQsXG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0b3JlLFxuICAgICAgdHRlc3RDaGFydERhdGE6IHR0ZXN0Q2hhcnREYXRhLFxuICAgICAgdmFsdWUxOiB0cnVlLFxuICAgICAgc3RvcmVjb3VudDogc3RvcmUuc3RhdGUuY291bnRcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBteUZ1bmN0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKHRoaXMuc3RvcmUuc3RhdGUuY3JpdF90X3ZhbHVlID4gdGhpcy5zdG9yZS5zdGF0ZS50X3ZhbHVlKSB7XG4gICAgICAgICAgICAgIHRoaXMuc3RvcmUuc3RhdGUuY3JpdF90X3ZhbHVlID0gLTMuMjE1NTtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTTUFMTEVSXCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5zdG9yZS5zdGF0ZS5jcml0X3RfdmFsdWUgPSAzLjIxNTU7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQklHR0VSXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIHN0b3JlLmNvbW1pdCgnZGVjcmVtZW50Jyk7XG4gICAgICAgICAgc3RvcmUuY29tbWl0KCd1cGRhdGVTdGF0ZScpO1xuICAgICAgICAgIHRoaXMuc3RvcmVjb3VudCsrO1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVtb1wiKS5pbm5lckhUTUwgPSBcIkkgaGF2ZSBjaGFuZ2VkIVwiO1xuICAgIH0sXG4gICAgZHJhd0FscGhhQ3VydmU6IGZ1bmN0aW9uKGdyb3VwMSwgY3JpdF90X3ZhbHVlKXtcbiAgICAgIC8vIEZpbGwgdGhlIGFyZWEgdW5kZXIgdGhlIGN1cnZlIHJlcHJlc2VudGluZyBhbHBoYS5cbiAgICAgIGxldCBhbHBoYV9jdXJ2ZSA9IFtdO1xuICAgICAgLy8gdGhpcyBkYXRhcG9pbnQgY29ubmVjdHMgd2l0aCB0aGUgY3JpdGljYWwgdCB2ZXJ0aWNhbCBsaW5lXG4gICAgICBhbHBoYV9jdXJ2ZS5wdXNoKHt4OiBjcml0X3RfdmFsdWUsIHk6IHRfRGlzdHJpYihjcml0X3RfdmFsdWUsIGdyb3VwMS5kZil9KTtcbiAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBncm91cDEuZGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZ3JvdXAxLmRpc3RbaV1bJ3gnXSA+IGNyaXRfdF92YWx1ZSl7XG4gICAgICAgICAgYWxwaGFfY3VydmUucHVzaCh7eDogZ3JvdXAxLmRpc3RbaV1bJ3gnXSwgeTogZ3JvdXAxLmRpc3RbaV1bJ3knXX0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLnR0ZXN0Q2hhcnQuZGF0YS5kYXRhc2V0c1szXVsnZGF0YSddID0gYWxwaGFfY3VydmU7XG4gICAgICB0aGlzLnR0ZXN0Q2hhcnQudXBkYXRlKCk7XG4gICAgfSxcbiAgICB0X0Rpc3RyaWI6IGZ1bmN0aW9uKHQsIGRvZil7XG4gICAgLy8gRm9yIGEgZ2l2ZW4geCwgcmV0dXJuIHRoZSB0IGRpc3RyaWJ1dGlvbiB5IHZhbHVlLlxuICAgIHkgPSAobWF0aC5nYW1tYSgoZG9mKzEpLzIpLyhtYXRoLnNxcnQoZG9mKm1hdGgucGkpKm1hdGguZ2FtbWEoZG9mLzIpKSkgKiAoMSsoKHQqKjIpL2RvZikpKiooLShkb2YrMSkvMik7XG4gICAgcmV0dXJuIG1hdGgucm91bmQoeSwgNik7XG4gIH1cbiAgfSxcblxuXG4gIG1vdW50ZWQoKSB7XG4gICAgdGhpcy50dGVzdENoYXJ0ID0gbmV3IENoYXJ0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0dGVzdC1jaGFydCcpLCB0aGlzLnR0ZXN0Q2hhcnREYXRhKTtcbiAgfSxcbn1cblxuXG48L3NjcmlwdD5cblxuPHN0eWxlPlxuLyogI2FwcCB7XG4gIGZvbnQtZmFtaWx5OiBBdmVuaXIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMmMzZTUwO1xuICBtYXJnaW4tdG9wOiA2MHB4O1xufSAqL1xuXG5odG1sIHtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG5cbmJvZHkge1xuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYzZTAwOyAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDM0MzQzO1xuICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbmE6bGluaywgYTp2aXNpdGVkIHtcbiAgY29sb3I6IGdyZXk7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLyogbW91c2Ugb3ZlciBsaW5rICovXG5hOmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi8qIHNlbGVjdGVkIGxpbmsgKi9cbmE6YWN0aXZlIHtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cblxuaDQge1xuICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG5cblxuI0NvbnRhaW5lcldpbmRvd3tcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMjBweCA3MHB4O1xufVxuXG4jV2hpdGVXaW5kb3d7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGNvbG9yOiAjMDAwO1xuICBwYWRkaW5nOiA4MHB4IDUwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cblxuI0JsYWNrV2luZG93e1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogODBweCA1MHB4O1xuICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE3cHg7XG59XG5cbiNPcmFuZ2VXaW5kb3d7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4vYXNzZXRzL3dlbGNocy5wbmdcIik7XG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7ICovXG4gIC8qIGhlaWdodDogNTAwcHg7ICovXG5cbiAgLyogYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7ICovXG5cbiAgLyogQ3JlYXRlIHRoZSBwYXJhbGxheCBzY3JvbGxpbmcgZWZmZWN0ICovXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcblxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYzZTAwOyAqL1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTIwcHggNTBweCAxMjBweCA1MHB4O1xuICAvKiBmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmOyAqL1xuICBmb250LXNpemU6IDE3cHg7XG59XG5cblxuI3RpdGxlbmFtZXtcbiAgZm9udC1mYW1pbHk6ICdUcmVidWNoZXQgTVMnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDgwcHg7XG4gIC8qIHBhZGRpbmc6IDBweCAwcHggMHB4IDEwMHB4OyAqL1xuICAvKiBtYXJnaW4tYm90dG9tOi0xMjBweCAqL1xufVxuI3RpdGxlbmFtZS1zdWJ7XG4gIGZvbnQtZmFtaWx5OiAnVHJlYnVjaGV0IE1TJywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiA3MHB4O1xuICAvKiBwYWRkaW5nOiAwcHggMHB4IDBweCAxMDBweDsgKi9cbiAgLyogbWFyZ2luLWJvdHRvbTotMTIwcHggKi9cbn1cblxuLm1vcmUtaW5mbyB7XG4gIHBhZGRpbmc6IDEwcHggMjBweCAyMHB4IDIwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZjNlMDA7ICAvKiBwcmV2aW91c2x5IGZmNzA0MyAqL1xufVxuXG5cbi5ib3gge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNlOGU4ZTg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtYXJnaW46IDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICB9XG4gIFxuLmFzdGVyaXNrRmllbGQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cblxuLnJlc3BvbnNpdmUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uc2xpZGVyIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kOiAjRTBFMEUwO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQobGVmdCB0b3AsICNFMEUwRTAsICNFRUVFRUUpO1xuICAvKiB3aWR0aDogNTI1cHg7ICovXG4gIGhlaWdodDogMTVweDtcbiAgbWFyZ2luOiAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuXG4udGh1bWIge1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMHB4O1xuICB0b3A6IC01cHg7XG4gIGJhY2tncm91bmQ6ICNmZjNlMDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuXG4uZXJyb3JfYm94IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZThlODtcbn1cblxuLyogQGltcG9ydCBcImNvbXBhc3MvY3NzM1wiOyAqL1xuXG5cbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5cbjo6c2VsZWN0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRFQzZERTtcbn1cblxuLnRhYmJlZCB7XG4vKiAgd2lkdGg6IDcwMHB4O1xuICBtYXJnaW46IDUwcHggYXV0bzsgICovXG59XG5cbi50YWJiZWQgPiBpbnB1dCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi50YWJiZWQgPiBsYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZzogMTJweCAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjNzO1xufVxuXG4udGFiYmVkID4gbGFiZWw6aG92ZXIsXG4udGFiYmVkID4gaW5wdXQ6Y2hlY2tlZCArIGxhYmVsIHtcbiAgYmFja2dyb3VuZDogI2ZmM2UwMDtcbn1cblxuLnRhYnMge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICBjbGVhcjogYm90aDtcbiAgcGVyc3BlY3RpdmU6IDYwMHB4O1xufVxuXG4udGFicyA+IGRpdiB7XG4gIC8qIHdpZHRoOiA3MDBweDsgKi9cbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmYzZTAwO1xuICBwYWRkaW5nOiAxMHB4IDMwcHggNDBweDtcbiAgbGluZS1oZWlnaHQ6IDEuNGVtO1xuICBvcGFjaXR5OiAwO1xuICB6LWluZGV4OiAwO1xufVxuXG5cbiN0YWItbmF2LTE6Y2hlY2tlZCB+IC50YWJzID4gZGl2Om50aC1vZi10eXBlKDEpLFxuI3RhYi1uYXYtMjpjaGVja2VkIH4gLnRhYnMgPiBkaXY6bnRoLW9mLXR5cGUoMil7XG4gIG9wYWNpdHk6IDE7XG4gIHotaW5kZXg6IDE7XG59XG4jdGFiLW5hdi0zOmNoZWNrZWQgfiAudGFicyA+IGRpdjpudGgtb2YtdHlwZSgzKXtcbiAgb3BhY2l0eTogMTtcbiAgei1pbmRleDogMTtcbn1cblxuLmdyaWQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogMHB4O1xufVxuLmdyaWQtaXRlbSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2M4YzhjODsgIC8qcmdiYSgwLCAwLCAwLCAwLjgpOyovXG4gIHBhZGRpbmc6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuXG4uZGlhZ3JhbS1ib3gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjOGM4Yzg7XG59XG5cbi5lbnRlci1kYXRhe1xuICBib3JkZXI6IDJweCBzb2xpZCAjYzhjOGM4O1xuICBwYWRkaW5nOiAzMHB4O1xufVxuXG4vKiBoaWRlIGZvciBsYXJnZXIgc2NyZWVucyAqL1xuI1NtYWxsU2NyZWVuIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG5cbi8qIHNob3cgZm9yIHNtYWxsIHNjcmVlbnMgKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAgICNTbWFsbFNjcmVlbiB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbn1cblxuLyogcmVtb3ZlIHBhZGRpbmcgb24gc21hbGxlciBzY3JlZW5zICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAjQ29udGFpbmVyV2luZG93e1xuICAgIHBhZGRpbmc6IDUwcHggNXB4IDUwcHggNXB4O1xuICB9XG59XG5cbjwvc3R5bGU+XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App.vue?vue&type=script&lang=js&\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "9ab8bfd3e307417d"; }
/******/ }();
/******/ 
/******/ }
);
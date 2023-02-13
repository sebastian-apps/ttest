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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_HypothesisComponent_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/HypothesisComponent.vue */ \"./src/components/HypothesisComponent.vue\");\n/* harmony import */ var _components_PPVComponent_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/PPVComponent.vue */ \"./src/components/PPVComponent.vue\");\n/* harmony import */ var _components_ROCComponent_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/ROCComponent.vue */ \"./src/components/ROCComponent.vue\");\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/store */ \"./src/store/store.js\");\n\n\n\n\n\n// store.commit('increment');\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  store: _store_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  name: 'App',\n  components: {\n    HypothesisComponent: _components_HypothesisComponent_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    PPVComponent: _components_PPVComponent_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    ROCComponent: _components_ROCComponent_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  },\n  data() {\n    return {\n      store: _store_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n      value1: true,\n      storecount: _store_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"].state.count\n    };\n  },\n  methods: {\n    myFunction: function () {\n      if (this.store.state.crit_t_value > this.store.state.t_value) {\n        this.store.state.crit_t_value = -3.2155;\n        console.log(\"SMALLER\");\n      } else {\n        this.store.state.crit_t_value = 3.2155;\n        console.log(\"BIGGER\");\n      }\n      _store_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"].commit('decrement');\n      _store_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"].commit('updateState');\n      this.storecount++;\n      document.getElementById(\"demo\").innerHTML = \"I have changed!\";\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvQHZ1ZS92dWUtbG9hZGVyLXYxNS9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NyYy9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQW9MQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Z1ZWFwcC9zcmMvQXBwLnZ1ZT8xMWM0Il0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdiBpZD1cImFwcFwiPlxuIFxuXG4gIDxkaXYgY2xhc3M9XCJoZXJvLWltYWdlXCIgaWQ9XCJPcmFuZ2VXaW5kb3dcIj5cbiAgICA8ZGl2IGlkPVwidGl0bGVuYW1lXCI+V2VsY2gncyA8aT50PC9pPi10ZXN0PC9kaXY+XG4gICAgPGRpdiBpZD1cInRpdGxlbmFtZS1zdWJcIj5jYWxjdWxhdG9yPC9kaXY+XG4gIDwvZGl2PlxuXG4gIDxkaXYgaWQ9XCJCbGFja1dpbmRvd1wiPlxuICAgIDxkaXYgc3R5bGU9XCJ0ZXh0LWFsaWduOmp1c3RpZnlcIj5cbiAgICAgIElzIHRoZXJlIGEgc3RhdGlzdGljYWxseSBzaWduaWZpY2FudCBkaWZmZXJlbmNlIGJldHdlZW4gdHdvIGRhdGFzZXRzPzxwPjwvcD5cbiAgICAgIE1vdmUgdGhlIHNsaWRlciBhbmQgb2JzZXJ2ZSB0aGUgaW1wYWN0IG9mIHRoZSBzaWduaWZpY2FuY2UgbGV2ZWwgb24gdGhlIHByb2JhYmlsaXR5IG9mIG1ha2luZyB0aGUgd3JvbmcgZGVjaXNpb24uIElucHV0IGFuZCBleHBsb3JlIHlvdXIgZGF0YXNldHMuXG4gICAgICBUaGlzIGNhbGN1bGF0b3IgaXMgZm9yIG9uZS10YWlsZWQgV2VsY2jigJlzIDxpPnQ8L2k+LXRlc3RzLiBUaGUgZGF0YSBhcmUgYXNzdW1lZCB0byBiZSBub3JtYWxseSBkaXN0cmlidXRlZC5cbiAgICAgIDxhIGhyZWY9JyNtb3JlLWluZm8nPkZpbmQgbW9yZSBpbmZvcm1hdGlvbi48L2E+XG4gICAgPC9kaXY+XG4gICAgPHA+PC9wPlxuICA8L2Rpdj5cblxuXG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIiBpZD1cIkNvbnRhaW5lcldpbmRvd1wiPlxuXG4gICAgPHA+PGJyPjxwPjxicj48cD48YnI+PHA+XG5cbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5cblxuICAgICAgICA8IS0tIHslIGlmIHRlc3RfcmVzdWx0cyAlfSAtLT5cbiAgICAgICAgPGRpdiBpZD1cInNsaWRlclwiIGNsYXNzPVwic2xpZGVyXCI+XG4gICAgICAgICAgPGRpdiBpZD1cInRodW1iXCIgY2xhc3M9XCJ0aHVtYlwiIG9udG91Y2htb3ZlPVwibW92ZVRodW1iTW9iaWxlKGV2ZW50KVwiPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8Y2FudmFzIGlkPVwibGluZV9jaGFydFwiIHdpZHRoPVwiMTAwMFwiIGhlaWdodD1cIjgwMFwiPjwvY2FudmFzPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHA+PGJyPjxwPjxicj5cbiAgICAgICAgPCEtLSB7JSBlbmRpZiAlfSAtLT5cblxuICAgICAgICA8Yj48c3BhbiBpZD1cIm1lc3NhZ2VcIj48L3NwYW4+PC9iPlxuICAgICAgICA8YnI+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImVudGVyLWRhdGFcIj5cbiAgICAgICAgICA8Zm9ybSBpZD1cImRhdGEtZm9ybVwiIGFjdGlvbj1cInslIHVybCAnY29yZTp0dGVzdCcgJX1cIiBtZXRob2Q9J3Bvc3QnIGNsYXNzPVwiZm9ybVwiPlxuICAgICAgICAgIDwhLS0geyUgY3NyZl90b2tlbiAlfSAtLT5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy02IGNvbC1zbS00XCI+XG4gICAgICAgICAgICAgICAgPCEtLSB7eyBmb3JtLmRhdGFzZXQxfGFzX2NyaXNweV9maWVsZCB9fSAtLT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtNiBjb2wtc20tNFwiPlxuICAgICAgICAgICAgICAgIDwhLS0ge3sgZm9ybS5kYXRhc2V0Mnxhc19jcmlzcHlfZmllbGQgfX0gLS0+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1zbS00XCI+XG4gICAgICAgICAgICAgICAgPGI+U1RBVElTVElDUzwvYj48YnI+PGJyPlxuICAgICAgICAgICAgICAgIDxiPmNyaXRpY2FsIHQ6PC9iPiA8c3BhbiBpZD1cImNyaXRfdF92YWx1ZVwiPjwvc3Bhbj48YnI+XG4gICAgICAgICAgICAgICAgPGI+c2lnIGxldmVsICgmIzk0NTspOjwvYj4gPHNwYW4gaWQ9XCJzaWctbGV2ZWxcIj48L3NwYW4+PGJyPlxuICAgICAgICAgICAgICAgIDxicj5cblxuICAgICAgICAgICAgICAgIDxiPnQtdmFsdWU6PC9iPiA8c3BhbiBpZD1cInRfdmFsdWVcIj48L3NwYW4+PGJyPlxuICAgICAgICAgICAgICAgIDwhLS0gPGI+cC12YWx1ZTo8L2I+IHt7IHRlc3RfcmVzdWx0cy5wX3ZhbHVlIH19PGJyPiAtLT5cbiAgICAgICAgICAgICAgICA8YnI+XG5cbiAgICAgICAgICAgICAgICA8IS0tIDxiPmRmOjwvYj4ge3sgdGVzdF9yZXN1bHRzLmRmIH19PGJyPiAtLT5cbiAgICAgICAgICAgICAgICA8IS0tIDxiPmVmZmVjdCBzaXplOjwvYj4ge3sgdGVzdF9yZXN1bHRzLmVmZmVjdF9zaXplIH19PGJyPiAtLT5cbiAgICAgICAgICAgICAgICA8Yj5uY3A6PC9iPiA8c3BhbiBpZD1cIm5jcFwiPjwvc3Bhbj48YnI+XG4gICAgICAgICAgICAgICAgPGJyPjxicj5cblxuICAgICAgICAgICAgICAgIDxidXR0b24gbmFtZT1cInN1Ym1pdFwiIHN0eWxlPVwibWFyZ2luLWJvdHRvbTo1cHhcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiPkFuYWx5emU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBzdHlsZT1cIm1hcmdpbi1ib3R0b206NXB4XCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIiBvbmNsaWNrPVwiY2xlYXJGb3JtKClcIj5DbGVhcjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxicj48YnI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Zvcm0+XG5cbiAgICAgICAgICA8ZGl2IHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogI2U4ZThlODsgcGFkZGluZzoxMHB4OyBtaW4td2lkdGg6MzAwcHg7XCIgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtNFwiPlxuICAgICAgICAgICAgICA8c3BhbiBpZD1cIlNtYWxsU2NyZWVuXCI+PGI+R3JvdXAgMTwvYj48YnI+PC9zcGFuPlxuICAgICAgICAgICAgICA8IS0tIHt7IGRhdGExLm1lYW4gfX08YnI+XG4gICAgICAgICAgICAgIHt7IGRhdGExLnNkIH19PGJyPlxuICAgICAgICAgICAgICB7eyBkYXRhMS5uIH19PGJyPiAtLT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy00XCI+XG4gICAgICAgICAgICAgIDxzcGFuIGlkPVwiU21hbGxTY3JlZW5cIj48Yj5Hcm91cCAyPC9iPjxicj48L3NwYW4+XG4gICAgICAgICAgICAgIDwhLS0ge3sgZGF0YTIubWVhbiB9fTxicj5cbiAgICAgICAgICAgICAge3sgZGF0YTIuc2QgfX08YnI+XG4gICAgICAgICAgICAgIHt7IGRhdGEyLm4gfX08YnI+IC0tPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTRcIj5cbiAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJTbWFsbFNjcmVlblwiPjxicj48L3NwYW4+XG4gICAgICAgICAgICAgIDxiPk1lYW48L2I+PGJyPlxuICAgICAgICAgICAgICA8Yj5TRDwvYj48YnI+XG4gICAgICAgICAgICAgIDxiPk48L2I+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+PCEtLSBjbG9zZSBlbnRlci1kYXRhIGRpdiAtLT5cbiAgICAgICAgPHA+PC9wPjxicj5cbiAgICAgIDwvZGl2PiA8IS0tIGNvbHVtbiBlbmQgLS0+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMVwiPlxuICAgICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTVcIj5cblxuICAgICAgPCEtLSB7JSBpZiB0ZXN0X3Jlc3VsdHMgJX0gLS0+XG4gICAgICA8ZGl2IGNsYXNzPVwidGFiYmVkXCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwidGFic1wiIGlkPVwidGFiLW5hdi0xXCIgY2hlY2tlZD5cbiAgICAgICAgPGxhYmVsIGZvcj1cInRhYi1uYXYtMVwiPkh5cG90aGVzaXMgVGVzdGluZzwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwidGFic1wiIGlkPVwidGFiLW5hdi0yXCI+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJ0YWItbmF2LTJcIj5QUFY8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInRhYnNcIiBpZD1cInRhYi1uYXYtM1wiPlxuICAgICAgICA8bGFiZWwgZm9yPVwidGFiLW5hdi0zXCI+Uk9DPC9sYWJlbD5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFic1wiPlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRhYlwiPlxuICAgICAgICAgICAgPEh5cG90aGVzaXNDb21wb25lbnQgLz4gXG4gICAgICAgICAgPC9kaXY+IDwhLS0gZW5kIGh5cG90aGVzaXMgdGVzdGluZyAtLT5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJcIj5cbiAgICAgICAgICAgIDxQUFZDb21wb25lbnQgLz5cbiAgICAgICAgICA8L2Rpdj4gPCEtLSBlbmQgUFBWIC0tPlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRhYlwiPlxuICAgICAgICAgICAgPFJPQ0NvbXBvbmVudCAvPlxuICAgICAgICAgIDwvZGl2PiA8IS0tIGVuZCBST0MgLS0+XG5cbiAgICAgICAgPC9kaXY+IDwhLS0gZW5kIHRhYnMgLS0+XG4gICAgICA8L2Rpdj4gIDwhLS0gZW5kIHRhYmJlZCAtLT5cbiAgICAgICAgXG4gICAgICA8IS0tIHslIGVuZGlmICV9IC0tPlxuICAgIDwvZGl2PiA8IS0tIGVuZCBjb2x1bW4gLS0+XG4gIDwvZGl2PiA8IS0tIGVuZCByb3cgLS0+XG5cblxuICAgIDxkaXYgaWQ9XCJTbWFsbFNjcmVlblwiIHN0eWxlPVwiaGVpZ2h0OiAxMjAwcHg7XCI+ICA8IS0tIGJ1ZmZlciBzcGFjZSBmb3Igc21hbGwgc2NyZWVucyAtLT5cbiAgICA8L2Rpdj5cbiAgICA8YnI+PGJyPjxicj5cbiAgPC9kaXY+XG5cblxuXG4gIDxkaXYgaWQ9XCJCbGFja1dpbmRvd1wiPlxuXG4gICAgPGEgbmFtZT1cIm1vcmUtaW5mb1wiPjwvYT5cbiAgICA8ZGl2IGNsYXNzPVwibW9yZS1pbmZvXCI+XG4gICAgICA8aDQ+TW9yZSBpbmZvcm1hdGlvbjwvaDQ+XG5cbiAgICAgIFRoZSBXZWxjaOKAmXMgPGk+dDwvaT4tdGVzdCwgb3IgdW5lcXVhbCB2YXJpYW5jZXMgPGk+dDwvaT4tdGVzdCwgY2FuIHRlc3QgaHlwb3RoZXNlcyBzdWNoIGFzIHdoZXRoZXIgdGhlIG1lYW5zIG9mIHR3byBpbmRlcGVuZGVudCBub3JtYWxseS1kaXN0cmlidXRlZCBwb3B1bGF0aW9ucyBhcmUgZXF1YWwuIFdoaWxlIHRoZSBjb21tb25seS11c2VkIFN0dWRlbnQgPGk+dDwvaT4tdGVzdCByZXF1aXJlcyB0aGF0IHRoZSB0d28gc2FtcGxlcyBzaGFyZSBlcXVhbCB2YXJpYW5jZXMgYW5kIGVxdWFsIHNhbXBsZSBzaXplcywgdGhlIFdlbGNo4oCZcyA8aT50PC9pPi10ZXN0IGRvZXMgbm90IGhhdmUgdGhpcyByZXF1aXJlbWVudC4gUmVzZWFyY2hlcnMgYXJndWUgdGhhdCB0aGUgV2VsY2jigJlzIDxpPnQ8L2k+LXRlc3QgaXMgbW9yZSB2ZXJzYXRpbGUgYW5kIHNob3VsZCBpbnN0ZWFkIGJlIHVzZWQgYnkgZGVmYXVsdC48c3VwPjEsMjwvc3VwPlxuICAgICAgPGJyPjxicj5cbiAgICAgIFN0YXRpc3RpY2FsIHJpZ29yIGNhbiBiZSBhY2hpZXZlZCB3aXRoIDxpPnQ8L2k+LXRlc3RzLCB5ZXQgdGhlIHNpZ25pZmljYW5jZSBsZXZlbCBpcyBzZXQgYXJiaXRyYXJpbHkuIFdoaWxlIGxvd2VyaW5nIHNpZ25pZmljYW5jZSBsZXZlbHMgbWl0aWdhdGVzIGZhbHNlIHBvc2l0aXZlcyAoJiM5NDU7KSwgdGhlIHByb2JhYmlsaXR5IG9mIGZhbHNlIG5lZ2F0aXZlcyAoJiM5NDY7KSBpbmNyZWFzZXMsIGFuZCB0ZXN0cyBtYXkgZmFpbCB0byBkZXRlY3QgZXhpc3RpbmcgZWZmZWN0cy48c3VwPjM8L3N1cD5cbiAgICA8L2Rpdj5cbiAgICA8YnI+XG5cblxuICA8L2Rpdj5cbiAgPGRpdiBpZD1cIldoaXRlV2luZG93XCI+XG5cbiAgICAgIDxoND5SZWZlcmVuY2VzPC9oND5cblxuICAgICAgMS4gRGFoaXJ1LCBULiBQLXZhbHVlLCBhIHRydWUgdGVzdCBvZiBzdGF0aXN0aWNhbCBzaWduaWZpY2FuY2U/IEEgY2F1dGlvbmFyeSBub3RlLiA8aT5Bbm5hbHMgb2YgSWJhZGFuIFBvc3RncmFkdWF0ZSBNZWRpY2luZS48L2k+IDIwMDgsIDxpPjY8L2k+KDEpOiAyMeKAkzI2LlxuICAgICAgPGJyPlxuICAgICAgMi4gRGVsYWNyZSwgTS47IExha2VucywgRC47IExleXMsIEMuIFdoeSBQc3ljaG9sb2dpc3RzIFNob3VsZCBieSBEZWZhdWx0IFVzZSBXZWxjaOKAmXMgdC10ZXN0IEluc3RlYWQgb2YgU3R1ZGVudOKAmXMgdC10ZXN0LiA8aT5JbnRlcm5hdGlvbmFsIFJldmlldyBvZiBTb2NpYWwgUHN5Y2hvbG9neS48L2k+IDIwMTcsIDxpPjMwPC9pPigxKSwgOTLigJMxMDEuXG4gICAgICA8YnI+XG4gICAgICAzLiBCZW5qYW1pbiwgRC5KLjsgQmVyZ2VyLCBKLk8uOyBKb2hhbm5lc3NvbiwgTS4gZXQgYWwuIFJlZGVmaW5lIHN0YXRpc3RpY2FsIHNpZ25pZmljYW5jZS4gPGk+TmF0dXJlIEh1bWFuIEJlaGF2aW91ci48L2k+IDIwMTgsIDxpPjI8L2k+LCA24oCTMTAuXG4gICAgICA8YnI+XG4gICAgICA0LiBDb2xxdWhvdW4sIEQuIEFuIGludmVzdGlnYXRpb24gb2YgdGhlIGZhbHNlIGRpc2NvdmVyeSByYXRlIGFuZCB0aGUgbWlzaW50ZXJwcmV0YXRpb24gb2YgcC12YWx1ZXMuIDxpPlJveWFsIFNvY2lldHkgT3BlbiBTY2llbmNlLjwvaT4gMjAxNCwgPGk+MTwvaT4oMyk6IDE0MDIxNi5cblxuICA8L2Rpdj4gIDwhLS0gY29udGFpbmVyIC0tPiAgIFxuXG4gXG4gICAgPCEtLSA8SHlwb3RoZXNpc0NvbXBvbmVudCB2LXNob3c9XCJ2YWx1ZTFcIiBtc2c9XCJcIi8+IC0tPlxuICAgIDwhLS0gPHAgaWQ9XCJkZW1vXCIgQGNsaWNrPVwibXlGdW5jdGlvblwiPjxiPkNIQU5HRSBBTFBIQTwvYj48L3A+IC0tPlxuICAgIDwhLS0gPFBQVkNvbXBvbmVudCB2LXNob3c9XCJ2YWx1ZTFcIiBtc2c9XCJUaGlzIGlzIHRoZSBQUFYgd2luZG93IVwiLz4gLS0+XG5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG5cblxuPHNjcmlwdD5cbmltcG9ydCBIeXBvdGhlc2lzQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50cy9IeXBvdGhlc2lzQ29tcG9uZW50LnZ1ZSdcbmltcG9ydCBQUFZDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnRzL1BQVkNvbXBvbmVudC52dWUnXG5pbXBvcnQgUk9DQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50cy9ST0NDb21wb25lbnQudnVlJ1xuaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmUvc3RvcmUnIFxuXG4vLyBzdG9yZS5jb21taXQoJ2luY3JlbWVudCcpO1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgc3RvcmUsXG4gIG5hbWU6ICdBcHAnLFxuICBjb21wb25lbnRzOiB7XG4gICAgSHlwb3RoZXNpc0NvbXBvbmVudCxcbiAgICBQUFZDb21wb25lbnQsXG4gICAgUk9DQ29tcG9uZW50LFxuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzdG9yZSxcbiAgICAgIHZhbHVlMTogdHJ1ZSxcbiAgICAgIHN0b3JlY291bnQ6IHN0b3JlLnN0YXRlLmNvdW50XG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgbXlGdW5jdGlvbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICh0aGlzLnN0b3JlLnN0YXRlLmNyaXRfdF92YWx1ZSA+IHRoaXMuc3RvcmUuc3RhdGUudF92YWx1ZSkge1xuICAgICAgICAgICAgICB0aGlzLnN0b3JlLnN0YXRlLmNyaXRfdF92YWx1ZSA9IC0zLjIxNTU7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU01BTExFUlwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuc3RvcmUuc3RhdGUuY3JpdF90X3ZhbHVlID0gMy4yMTU1O1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkJJR0dFUlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBzdG9yZS5jb21taXQoJ2RlY3JlbWVudCcpO1xuICAgICAgICAgIHN0b3JlLmNvbW1pdCgndXBkYXRlU3RhdGUnKTtcbiAgICAgICAgICB0aGlzLnN0b3JlY291bnQrKztcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlbW9cIikuaW5uZXJIVE1MID0gXCJJIGhhdmUgY2hhbmdlZCFcIjtcbiAgICB9LFxuICB9XG59XG5cblxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbi8qICNhcHAge1xuICBmb250LWZhbWlseTogQXZlbmlyLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzJjM2U1MDtcbiAgbWFyZ2luLXRvcDogNjBweDtcbn0gKi9cblxuaHRtbCB7XG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xufVxuXG5ib2R5IHtcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogI2ZmM2UwMDsgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogIzQzNDM0MztcbiAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG5hOmxpbmssIGE6dmlzaXRlZCB7XG4gIGNvbG9yOiBncmV5O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi8qIG1vdXNlIG92ZXIgbGluayAqL1xuYTpob3ZlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4vKiBzZWxlY3RlZCBsaW5rICovXG5hOmFjdGl2ZSB7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5cbmg0IHtcbiAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn1cblxuXG5cbiNDb250YWluZXJXaW5kb3d7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDIwcHggNzBweDtcbn1cblxuI1doaXRlV2luZG93e1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBjb2xvcjogIzAwMDtcbiAgcGFkZGluZzogODBweCA1MHB4O1xuICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE3cHg7XG59XG5cbiNCbGFja1dpbmRvd3tcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDgwcHggNTBweDtcbiAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuXG4jT3JhbmdlV2luZG93e1xuICAvKiA8aW1nIGNsYXNzPVwicmVzcG9uc2l2ZVwiIDpzcmM9XCJyZXF1aXJlKCdAL2Fzc2V0cy90cmVlLnN2ZycpXCIvPiAqL1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuL2Fzc2V0cy93ZWxjaHMucG5nXCIpO1xuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjOyAqL1xuICAvKiBoZWlnaHQ6IDUwMHB4OyAqL1xuXG4gIC8qIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyAqL1xuXG4gIC8qIENyZWF0ZSB0aGUgcGFyYWxsYXggc2Nyb2xsaW5nIGVmZmVjdCAqL1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cbiAgLyogYmFja2dyb3VuZC1jb2xvcjogI2ZmM2UwMDsgKi9cbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDEyMHB4IDUwcHggMTIwcHggNTBweDtcbiAgLyogZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjsgKi9cbiAgZm9udC1zaXplOiAxN3B4O1xufVxuXG5cbiN0aXRsZW5hbWV7XG4gIGZvbnQtZmFtaWx5OiAnVHJlYnVjaGV0IE1TJywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiA4MHB4O1xuICAvKiBwYWRkaW5nOiAwcHggMHB4IDBweCAxMDBweDsgKi9cbiAgLyogbWFyZ2luLWJvdHRvbTotMTIwcHggKi9cbn1cbiN0aXRsZW5hbWUtc3Vie1xuICBmb250LWZhbWlseTogJ1RyZWJ1Y2hldCBNUycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogNzBweDtcbiAgLyogcGFkZGluZzogMHB4IDBweCAwcHggMTAwcHg7ICovXG4gIC8qIG1hcmdpbi1ib3R0b206LTEyMHB4ICovXG59XG5cbi5tb3JlLWluZm8ge1xuICBwYWRkaW5nOiAxMHB4IDIwcHggMjBweCAyMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmYzZTAwOyAgLyogcHJldmlvdXNseSBmZjcwNDMgKi9cbn1cblxuXG4uYm94IHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZThlOGU4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgfVxuICBcbi5hc3Rlcmlza0ZpZWxkIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG5cbi5yZXNwb25zaXZlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLnNsaWRlciB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZDogI0UwRTBFMDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KGxlZnQgdG9wLCAjRTBFMEUwLCAjRUVFRUVFKTtcbiAgLyogd2lkdGg6IDUyNXB4OyAqL1xuICBoZWlnaHQ6IDE1cHg7XG4gIG1hcmdpbjogMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cblxuLnRodW1iIHtcbiAgd2lkdGg6IDE1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiAtNXB4O1xuICBiYWNrZ3JvdW5kOiAjZmYzZTAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cblxuLmVycm9yX2JveCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTg7XG59XG5cbi8qIEBpbXBvcnQgXCJjb21wYXNzL2NzczNcIjsgKi9cblxuXG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuXG46OnNlbGVjdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0RUM2REU7XG59XG5cbi50YWJiZWQge1xuLyogIHdpZHRoOiA3MDBweDtcbiAgbWFyZ2luOiA1MHB4IGF1dG87ICAqL1xufVxuXG4udGFiYmVkID4gaW5wdXQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4udGFiYmVkID4gbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmc6IDEycHggMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4zcztcbn1cblxuLnRhYmJlZCA+IGxhYmVsOmhvdmVyLFxuLnRhYmJlZCA+IGlucHV0OmNoZWNrZWQgKyBsYWJlbCB7XG4gIGJhY2tncm91bmQ6ICNmZjNlMDA7XG59XG5cbi50YWJzIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgY2xlYXI6IGJvdGg7XG4gIHBlcnNwZWN0aXZlOiA2MDBweDtcbn1cblxuLnRhYnMgPiBkaXYge1xuICAvKiB3aWR0aDogNzAwcHg7ICovXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmM2UwMDtcbiAgcGFkZGluZzogMTBweCAzMHB4IDQwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjRlbTtcbiAgb3BhY2l0eTogMDtcbiAgei1pbmRleDogMDtcbn1cblxuXG4jdGFiLW5hdi0xOmNoZWNrZWQgfiAudGFicyA+IGRpdjpudGgtb2YtdHlwZSgxKSxcbiN0YWItbmF2LTI6Y2hlY2tlZCB+IC50YWJzID4gZGl2Om50aC1vZi10eXBlKDIpe1xuICBvcGFjaXR5OiAxO1xuICB6LWluZGV4OiAxO1xufVxuI3RhYi1uYXYtMzpjaGVja2VkIH4gLnRhYnMgPiBkaXY6bnRoLW9mLXR5cGUoMyl7XG4gIG9wYWNpdHk6IDE7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5ncmlkLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDBweDtcbn1cbi5ncmlkLWl0ZW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjOGM4Yzg7ICAvKnJnYmEoMCwgMCwgMCwgMC44KTsqL1xuICBwYWRkaW5nOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cblxuLmRpYWdyYW0tYm94IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYzhjOGM4O1xufVxuXG4uZW50ZXItZGF0YXtcbiAgYm9yZGVyOiAycHggc29saWQgI2M4YzhjODtcbiAgcGFkZGluZzogMzBweDtcbn1cblxuLyogaGlkZSBmb3IgbGFyZ2VyIHNjcmVlbnMgKi9cbiNTbWFsbFNjcmVlbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuXG4vKiBzaG93IGZvciBzbWFsbCBzY3JlZW5zICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgICAjU21hbGxTY3JlZW4ge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG59XG5cbi8qIHJlbW92ZSBwYWRkaW5nIG9uIHNtYWxsZXIgc2NyZWVucyAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgI0NvbnRhaW5lcldpbmRvd3tcbiAgICBwYWRkaW5nOiA1MHB4IDVweCA1MHB4IDVweDtcbiAgfVxufVxuXG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './assets/welchs.png'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\n/* #app {\\n  font-family: Avenir, Helvetica, Arial, sans-serif;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n  text-align: center;\\n  color: #2c3e50;\\n  margin-top: 60px;\\n} */\\nhtml {\\n  scroll-behavior: smooth;\\n}\\nbody {\\n  /* background-color: #ff3e00; */\\n  background-color: #434343;\\n  font-family: \\\"Helvetica Neue\\\", sans-serif;\\n  font-size: 15px;\\n}\\na:link, a:visited {\\n  color: grey;\\n  text-decoration: none;\\n}\\n\\n/* mouse over link */\\na:hover {\\n  color: white;\\n  text-decoration: none;\\n}\\n\\n/* selected link */\\na:active {\\n  color: black;\\n  text-decoration: none;\\n}\\nh4 {\\n  font-family: \\\"Helvetica Neue\\\", sans-serif;\\n}\\n#ContainerWindow{\\n  background-color: #fff;\\n  padding: 20px 70px;\\n}\\n#WhiteWindow{\\n  background-color: #fff;\\n  color: #000;\\n  padding: 80px 50px;\\n  font-family: \\\"Helvetica Neue\\\", sans-serif;\\n  font-size: 17px;\\n}\\n#BlackWindow{\\n  background-color: #000;\\n  color: #fff;\\n  padding: 80px 50px;\\n  font-family: \\\"Helvetica Neue\\\", sans-serif;\\n  font-size: 17px;\\n}\\n#OrangeWindow{\\n  /* <img class=\\\"responsive\\\" :src=\\\"require('@/assets/tree.svg')\\\"/> */\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  /* background-color: #cccccc; */\\n  /* height: 500px; */\\n\\n  /* background-position: center;\\n  background-repeat: no-repeat;\\n  background-size: cover;\\n  position: relative; */\\n\\n  /* Create the parallax scrolling effect */\\n  background-attachment: fixed;\\n  background-position: center;\\n  background-repeat: no-repeat;\\n  background-size: cover;\\n\\n  /* background-color: #ff3e00; */\\n  color: #fff;\\n  padding: 120px 50px 120px 50px;\\n  /* font-family: \\\"Helvetica Neue\\\", sans-serif; */\\n  font-size: 17px;\\n}\\n#titlename{\\n  font-family: 'Trebuchet MS', sans-serif;\\n  font-size: 80px;\\n  /* padding: 0px 0px 0px 100px; */\\n  /* margin-bottom:-120px */\\n}\\n#titlename-sub{\\n  font-family: 'Trebuchet MS', sans-serif;\\n  font-size: 70px;\\n  /* padding: 0px 0px 0px 100px; */\\n  /* margin-bottom:-120px */\\n}\\n.more-info {\\n  padding: 10px 20px 20px 20px;\\n  border: 2px solid #ff3e00;  /* previously ff7043 */\\n}\\n.box {\\n    border: 2px solid #e8e8e8;\\n    padding: 10px;\\n    margin: 0px;\\n    border-radius: 15px;\\n}\\n.asteriskField {\\n    display: none;\\n}\\n.responsive {\\n  width: 100%;\\n  height: auto;\\n}\\n.slider {\\n  border-radius: 5px;\\n  background: #E0E0E0;\\n  background: linear-gradient(left top, #E0E0E0, #EEEEEE);\\n  /* width: 525px; */\\n  height: 15px;\\n  margin: 0px;\\n  position: relative;\\n}\\n.thumb {\\n  width: 15px;\\n  height: 25px;\\n  border-radius: 3px;\\n  position: relative;\\n  left: 0px;\\n  top: -5px;\\n  background: #ff3e00;\\n  cursor: pointer;\\n}\\n.error_box {\\n  background-color: #e8e8e8;\\n}\\n\\n/* @import \\\"compass/css3\\\"; */\\n* {\\n  box-sizing: border-box;\\n}\\n::-moz-selection {\\n  background-color: #4EC6DE;\\n}\\n::selection {\\n  background-color: #4EC6DE;\\n}\\n.tabbed {\\n/*  width: 700px;\\n  margin: 50px auto;  */\\n}\\n.tabbed > input {\\n  display: none;\\n}\\n.tabbed > label {\\n  display: block;\\n  float: left;\\n  padding: 12px 20px;\\n  margin-right: 5px;\\n  margin-bottom: 0px;\\n  cursor: pointer;\\n  transition: background-color .3s;\\n}\\n.tabbed > label:hover,\\n.tabbed > input:checked + label {\\n  background: #ff3e00;\\n}\\n.tabs {\\n  margin: 0px;\\n  padding: 0px;\\n  clear: both;\\n  perspective: 600px;\\n}\\n.tabs > div {\\n  /* width: 700px; */\\n  position: absolute;\\n  border: 2px solid #ff3e00;\\n  padding: 10px 30px 40px;\\n  line-height: 1.4em;\\n  opacity: 0;\\n  z-index: 0;\\n}\\n#tab-nav-1:checked ~ .tabs > div:nth-of-type(1),\\n#tab-nav-2:checked ~ .tabs > div:nth-of-type(2){\\n  opacity: 1;\\n  z-index: 1;\\n}\\n#tab-nav-3:checked ~ .tabs > div:nth-of-type(3){\\n  opacity: 1;\\n  z-index: 1;\\n}\\n.grid-container {\\n  display: grid;\\n  grid-template-columns: auto auto auto;\\n  background-color: #ffffff;\\n  padding: 0px;\\n}\\n.grid-item {\\n  background-color: rgba(255, 255, 255, 0.8);\\n  border: 1px solid #c8c8c8;  /*rgba(0, 0, 0, 0.8);*/\\n  padding: 10px;\\n  text-align: center;\\n}\\n.diagram-box {\\n  position: relative;\\n  border: 1px solid #c8c8c8;\\n}\\n.enter-data{\\n  border: 2px solid #c8c8c8;\\n  padding: 30px;\\n}\\n\\n/* hide for larger screens */\\n#SmallScreen {\\n    display: none;\\n}\\n\\n\\n/* show for small screens */\\n@media screen and (max-width: 1000px) {\\n#SmallScreen {\\n        display: block;\\n}\\n}\\n\\n/* remove padding on smaller screens */\\n@media screen and (max-width: 500px) {\\n#ContainerWindow{\\n    padding: 50px 5px 50px 5px;\\n}\\n}\\n\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMV0hLi9ub2RlX21vZHVsZXMvQHZ1ZS92dWUtbG9hZGVyLXYxNS9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzJdIS4vbm9kZV9tb2R1bGVzL0B2dWUvdnVlLWxvYWRlci12MTUvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zcmMvQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTdiYTViZDkwJmxhbmc9Y3NzJi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Z1ZWFwcC8uL3NyYy9BcHAudnVlPzFiY2UiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX05PX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9ub1NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvd2VsY2hzLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX05PX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcbi8qICNhcHAge1xcbiAgZm9udC1mYW1pbHk6IEF2ZW5pciwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiAjMmMzZTUwO1xcbiAgbWFyZ2luLXRvcDogNjBweDtcXG59ICovXFxuaHRtbCB7XFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG59XFxuYm9keSB7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYzZTAwOyAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQzNDM0MztcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbn1cXG5hOmxpbmssIGE6dmlzaXRlZCB7XFxuICBjb2xvcjogZ3JleTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLyogbW91c2Ugb3ZlciBsaW5rICovXFxuYTpob3ZlciB7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi8qIHNlbGVjdGVkIGxpbmsgKi9cXG5hOmFjdGl2ZSB7XFxuICBjb2xvcjogYmxhY2s7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbmg0IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG4jQ29udGFpbmVyV2luZG93e1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIHBhZGRpbmc6IDIwcHggNzBweDtcXG59XFxuI1doaXRlV2luZG93e1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgcGFkZGluZzogODBweCA1MHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE3cHg7XFxufVxcbiNCbGFja1dpbmRvd3tcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHBhZGRpbmc6IDgwcHggNTBweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxN3B4O1xcbn1cXG4jT3JhbmdlV2luZG93e1xcbiAgLyogPGltZyBjbGFzcz1cXFwicmVzcG9uc2l2ZVxcXCIgOnNyYz1cXFwicmVxdWlyZSgnQC9hc3NldHMvdHJlZS5zdmcnKVxcXCIvPiAqL1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7ICovXFxuICAvKiBoZWlnaHQ6IDUwMHB4OyAqL1xcblxcbiAgLyogYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7ICovXFxuXFxuICAvKiBDcmVhdGUgdGhlIHBhcmFsbGF4IHNjcm9sbGluZyBlZmZlY3QgKi9cXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG5cXG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICNmZjNlMDA7ICovXFxuICBjb2xvcjogI2ZmZjtcXG4gIHBhZGRpbmc6IDEyMHB4IDUwcHggMTIwcHggNTBweDtcXG4gIC8qIGZvbnQtZmFtaWx5OiBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBzYW5zLXNlcmlmOyAqL1xcbiAgZm9udC1zaXplOiAxN3B4O1xcbn1cXG4jdGl0bGVuYW1le1xcbiAgZm9udC1mYW1pbHk6ICdUcmVidWNoZXQgTVMnLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiA4MHB4O1xcbiAgLyogcGFkZGluZzogMHB4IDBweCAwcHggMTAwcHg7ICovXFxuICAvKiBtYXJnaW4tYm90dG9tOi0xMjBweCAqL1xcbn1cXG4jdGl0bGVuYW1lLXN1YntcXG4gIGZvbnQtZmFtaWx5OiAnVHJlYnVjaGV0IE1TJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogNzBweDtcXG4gIC8qIHBhZGRpbmc6IDBweCAwcHggMHB4IDEwMHB4OyAqL1xcbiAgLyogbWFyZ2luLWJvdHRvbTotMTIwcHggKi9cXG59XFxuLm1vcmUtaW5mbyB7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHggMjBweCAyMHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmM2UwMDsgIC8qIHByZXZpb3VzbHkgZmY3MDQzICovXFxufVxcbi5ib3gge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZThlOGU4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG59XFxuLmFzdGVyaXNrRmllbGQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG4ucmVzcG9uc2l2ZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuLnNsaWRlciB7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kOiAjRTBFMEUwO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KGxlZnQgdG9wLCAjRTBFMEUwLCAjRUVFRUVFKTtcXG4gIC8qIHdpZHRoOiA1MjVweDsgKi9cXG4gIGhlaWdodDogMTVweDtcXG4gIG1hcmdpbjogMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4udGh1bWIge1xcbiAgd2lkdGg6IDE1cHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBsZWZ0OiAwcHg7XFxuICB0b3A6IC01cHg7XFxuICBiYWNrZ3JvdW5kOiAjZmYzZTAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uZXJyb3JfYm94IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTg7XFxufVxcblxcbi8qIEBpbXBvcnQgXFxcImNvbXBhc3MvY3NzM1xcXCI7ICovXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG46Oi1tb3otc2VsZWN0aW9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0RUM2REU7XFxufVxcbjo6c2VsZWN0aW9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0RUM2REU7XFxufVxcbi50YWJiZWQge1xcbi8qICB3aWR0aDogNzAwcHg7XFxuICBtYXJnaW46IDUwcHggYXV0bzsgICovXFxufVxcbi50YWJiZWQgPiBpbnB1dCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4udGFiYmVkID4gbGFiZWwge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBmbG9hdDogbGVmdDtcXG4gIHBhZGRpbmc6IDEycHggMjBweDtcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuM3M7XFxufVxcbi50YWJiZWQgPiBsYWJlbDpob3ZlcixcXG4udGFiYmVkID4gaW5wdXQ6Y2hlY2tlZCArIGxhYmVsIHtcXG4gIGJhY2tncm91bmQ6ICNmZjNlMDA7XFxufVxcbi50YWJzIHtcXG4gIG1hcmdpbjogMHB4O1xcbiAgcGFkZGluZzogMHB4O1xcbiAgY2xlYXI6IGJvdGg7XFxuICBwZXJzcGVjdGl2ZTogNjAwcHg7XFxufVxcbi50YWJzID4gZGl2IHtcXG4gIC8qIHdpZHRoOiA3MDBweDsgKi9cXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZjNlMDA7XFxuICBwYWRkaW5nOiAxMHB4IDMwcHggNDBweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjRlbTtcXG4gIG9wYWNpdHk6IDA7XFxuICB6LWluZGV4OiAwO1xcbn1cXG4jdGFiLW5hdi0xOmNoZWNrZWQgfiAudGFicyA+IGRpdjpudGgtb2YtdHlwZSgxKSxcXG4jdGFiLW5hdi0yOmNoZWNrZWQgfiAudGFicyA+IGRpdjpudGgtb2YtdHlwZSgyKXtcXG4gIG9wYWNpdHk6IDE7XFxuICB6LWluZGV4OiAxO1xcbn1cXG4jdGFiLW5hdi0zOmNoZWNrZWQgfiAudGFicyA+IGRpdjpudGgtb2YtdHlwZSgzKXtcXG4gIG9wYWNpdHk6IDE7XFxuICB6LWluZGV4OiAxO1xcbn1cXG4uZ3JpZC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgcGFkZGluZzogMHB4O1xcbn1cXG4uZ3JpZC1pdGVtIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjOGM4Yzg7ICAvKnJnYmEoMCwgMCwgMCwgMC44KTsqL1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmRpYWdyYW0tYm94IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjOGM4Yzg7XFxufVxcbi5lbnRlci1kYXRhe1xcbiAgYm9yZGVyOiAycHggc29saWQgI2M4YzhjODtcXG4gIHBhZGRpbmc6IDMwcHg7XFxufVxcblxcbi8qIGhpZGUgZm9yIGxhcmdlciBzY3JlZW5zICovXFxuI1NtYWxsU2NyZWVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuXFxuLyogc2hvdyBmb3Igc21hbGwgc2NyZWVucyAqL1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xcbiNTbWFsbFNjcmVlbiB7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG59XFxufVxcblxcbi8qIHJlbW92ZSBwYWRkaW5nIG9uIHNtYWxsZXIgc2NyZWVucyAqL1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxuI0NvbnRhaW5lcldpbmRvd3tcXG4gICAgcGFkZGluZzogNTBweCA1cHggNTBweCA1cHg7XFxufVxcbn1cXG5cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css&\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "70f3c21cb8014db4"; }
/******/ }();
/******/ 
/******/ /* webpack/runtime/jsonp chunk loading */
/******/ !function() {
/******/ 	__webpack_require__.b = document.baseURI || self.location.href;
/******/ 	
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 		"app": 0
/******/ 	};
/******/ 	
/******/ 	// no chunk on demand loading
/******/ 	
/******/ 	// no prefetching
/******/ 	
/******/ 	// no preloaded
/******/ 	
/******/ 	var currentUpdatedModulesList;
/******/ 	var waitingUpdateResolves = {};
/******/ 	function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 		currentUpdatedModulesList = updatedModulesList;
/******/ 		return new Promise(function(resolve, reject) {
/******/ 			waitingUpdateResolves[chunkId] = resolve;
/******/ 			// start update chunk loading
/******/ 			var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 			// create error before stack unwound to get useful stacktrace later
/******/ 			var error = new Error();
/******/ 			var loadingEnded = function(event) {
/******/ 				if(waitingUpdateResolves[chunkId]) {
/******/ 					waitingUpdateResolves[chunkId] = undefined
/******/ 					var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 					var realSrc = event && event.target && event.target.src;
/******/ 					error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 					error.name = 'ChunkLoadError';
/******/ 					error.type = errorType;
/******/ 					error.request = realSrc;
/******/ 					reject(error);
/******/ 				}
/******/ 			};
/******/ 			__webpack_require__.l(url, loadingEnded);
/******/ 		});
/******/ 	}
/******/ 	
/******/ 	(typeof self !== 'undefined' ? self : this)["webpackHotUpdatevueapp"] = function(chunkId, moreModules, runtime) {
/******/ 		for(var moduleId in moreModules) {
/******/ 			if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 				currentUpdate[moduleId] = moreModules[moduleId];
/******/ 				if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 			}
/******/ 		}
/******/ 		if(runtime) currentUpdateRuntime.push(runtime);
/******/ 		if(waitingUpdateResolves[chunkId]) {
/******/ 			waitingUpdateResolves[chunkId]();
/******/ 			waitingUpdateResolves[chunkId] = undefined;
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	var currentUpdateChunks;
/******/ 	var currentUpdate;
/******/ 	var currentUpdateRemovedChunks;
/******/ 	var currentUpdateRuntime;
/******/ 	function applyHandler(options) {
/******/ 		if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 		currentUpdateChunks = undefined;
/******/ 		function getAffectedModuleEffects(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/ 	
/******/ 			var queue = outdatedModules.map(function (id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while (queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				var module = __webpack_require__.c[moduleId];
/******/ 				if (
/******/ 					!module ||
/******/ 					(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 				)
/******/ 					continue;
/******/ 				if (module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if (module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for (var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = __webpack_require__.c[parentId];
/******/ 					if (!parent) continue;
/******/ 					if (parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 					if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if (!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 	
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/ 	
/******/ 		function addAllToSet(a, b) {
/******/ 			for (var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if (a.indexOf(item) === -1) a.push(item);
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/ 	
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 			console.warn(
/******/ 				"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 			);
/******/ 		};
/******/ 	
/******/ 		for (var moduleId in currentUpdate) {
/******/ 			if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				var newModuleFactory = currentUpdate[moduleId];
/******/ 				/** @type {TODO} */
/******/ 				var result;
/******/ 				if (newModuleFactory) {
/******/ 					result = getAffectedModuleEffects(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				/** @type {Error|false} */
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if (result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch (result.type) {
/******/ 					case "self-declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of self decline: " +
/******/ 									result.moduleId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of declined dependency: " +
/******/ 									result.moduleId +
/******/ 									" in " +
/******/ 									result.parentId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 						if (!options.ignoreUnaccepted)
/******/ 							abortError = new Error(
/******/ 								"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if (options.onAccepted) options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if (options.onDisposed) options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if (abortError) {
/******/ 					return {
/******/ 						error: abortError
/******/ 					};
/******/ 				}
/******/ 				if (doApply) {
/******/ 					appliedUpdate[moduleId] = newModuleFactory;
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for (moduleId in result.outdatedDependencies) {
/******/ 						if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 							if (!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(
/******/ 								outdatedDependencies[moduleId],
/******/ 								result.outdatedDependencies[moduleId]
/******/ 							);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if (doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		currentUpdate = undefined;
/******/ 	
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for (var j = 0; j < outdatedModules.length; j++) {
/******/ 			var outdatedModuleId = outdatedModules[j];
/******/ 			var module = __webpack_require__.c[outdatedModuleId];
/******/ 			if (
/******/ 				module &&
/******/ 				(module.hot._selfAccepted || module.hot._main) &&
/******/ 				// removed self-accepted modules should not be required
/******/ 				appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 				// when called invalidate self-accepting is not possible
/******/ 				!module.hot._selfInvalidated
/******/ 			) {
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: outdatedModuleId,
/******/ 					require: module.hot._requireSelf,
/******/ 					errorHandler: module.hot._selfAccepted
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		var moduleOutdatedDependencies;
/******/ 	
/******/ 		return {
/******/ 			dispose: function () {
/******/ 				currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 					delete installedChunks[chunkId];
/******/ 				});
/******/ 				currentUpdateRemovedChunks = undefined;
/******/ 	
/******/ 				var idx;
/******/ 				var queue = outdatedModules.slice();
/******/ 				while (queue.length > 0) {
/******/ 					var moduleId = queue.pop();
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (!module) continue;
/******/ 	
/******/ 					var data = {};
/******/ 	
/******/ 					// Call dispose handlers
/******/ 					var disposeHandlers = module.hot._disposeHandlers;
/******/ 					for (j = 0; j < disposeHandlers.length; j++) {
/******/ 						disposeHandlers[j].call(null, data);
/******/ 					}
/******/ 					__webpack_require__.hmrD[moduleId] = data;
/******/ 	
/******/ 					// disable module (this disables requires from this module)
/******/ 					module.hot.active = false;
/******/ 	
/******/ 					// remove module from cache
/******/ 					delete __webpack_require__.c[moduleId];
/******/ 	
/******/ 					// when disposing there is no need to call dispose handler
/******/ 					delete outdatedDependencies[moduleId];
/******/ 	
/******/ 					// remove "parents" references from all children
/******/ 					for (j = 0; j < module.children.length; j++) {
/******/ 						var child = __webpack_require__.c[module.children[j]];
/******/ 						if (!child) continue;
/******/ 						idx = child.parents.indexOf(moduleId);
/******/ 						if (idx >= 0) {
/******/ 							child.parents.splice(idx, 1);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 	
/******/ 				// remove outdated dependency from module children
/******/ 				var dependency;
/******/ 				for (var outdatedModuleId in outdatedDependencies) {
/******/ 					if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 						module = __webpack_require__.c[outdatedModuleId];
/******/ 						if (module) {
/******/ 							moduleOutdatedDependencies =
/******/ 								outdatedDependencies[outdatedModuleId];
/******/ 							for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 								dependency = moduleOutdatedDependencies[j];
/******/ 								idx = module.children.indexOf(dependency);
/******/ 								if (idx >= 0) module.children.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			},
/******/ 			apply: function (reportError) {
/******/ 				// insert new code
/******/ 				for (var updateModuleId in appliedUpdate) {
/******/ 					if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 						__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 					}
/******/ 				}
/******/ 	
/******/ 				// run new runtime modules
/******/ 				for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 					currentUpdateRuntime[i](__webpack_require__);
/******/ 				}
/******/ 	
/******/ 				// call accept handlers
/******/ 				for (var outdatedModuleId in outdatedDependencies) {
/******/ 					if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 						var module = __webpack_require__.c[outdatedModuleId];
/******/ 						if (module) {
/******/ 							moduleOutdatedDependencies =
/******/ 								outdatedDependencies[outdatedModuleId];
/******/ 							var callbacks = [];
/******/ 							var errorHandlers = [];
/******/ 							var dependenciesForCallbacks = [];
/******/ 							for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 								var dependency = moduleOutdatedDependencies[j];
/******/ 								var acceptCallback =
/******/ 									module.hot._acceptedDependencies[dependency];
/******/ 								var errorHandler =
/******/ 									module.hot._acceptedErrorHandlers[dependency];
/******/ 								if (acceptCallback) {
/******/ 									if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 									callbacks.push(acceptCallback);
/******/ 									errorHandlers.push(errorHandler);
/******/ 									dependenciesForCallbacks.push(dependency);
/******/ 								}
/******/ 							}
/******/ 							for (var k = 0; k < callbacks.length; k++) {
/******/ 								try {
/******/ 									callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 								} catch (err) {
/******/ 									if (typeof errorHandlers[k] === "function") {
/******/ 										try {
/******/ 											errorHandlers[k](err, {
/******/ 												moduleId: outdatedModuleId,
/******/ 												dependencyId: dependenciesForCallbacks[k]
/******/ 											});
/******/ 										} catch (err2) {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-error-handler-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err2,
/******/ 													originalError: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err2);
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									} else {
/******/ 										if (options.onErrored) {
/******/ 											options.onErrored({
/******/ 												type: "accept-errored",
/******/ 												moduleId: outdatedModuleId,
/******/ 												dependencyId: dependenciesForCallbacks[k],
/******/ 												error: err
/******/ 											});
/******/ 										}
/******/ 										if (!options.ignoreErrored) {
/******/ 											reportError(err);
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 	
/******/ 				// Load self accepted modules
/******/ 				for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 					var item = outdatedSelfAcceptedModules[o];
/******/ 					var moduleId = item.module;
/******/ 					try {
/******/ 						item.require(moduleId);
/******/ 					} catch (err) {
/******/ 						if (typeof item.errorHandler === "function") {
/******/ 							try {
/******/ 								item.errorHandler(err, {
/******/ 									moduleId: moduleId,
/******/ 									module: __webpack_require__.c[moduleId]
/******/ 								});
/******/ 							} catch (err2) {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-error-handler-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err2,
/******/ 										originalError: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err2);
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						} else {
/******/ 							if (options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "self-accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if (!options.ignoreErrored) {
/******/ 								reportError(err);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 	
/******/ 				return outdatedModules;
/******/ 			}
/******/ 		};
/******/ 	}
/******/ 	__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 		if (!currentUpdate) {
/******/ 			currentUpdate = {};
/******/ 			currentUpdateRuntime = [];
/******/ 			currentUpdateRemovedChunks = [];
/******/ 			applyHandlers.push(applyHandler);
/******/ 		}
/******/ 		if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 			currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 		}
/******/ 	};
/******/ 	__webpack_require__.hmrC.jsonp = function (
/******/ 		chunkIds,
/******/ 		removedChunks,
/******/ 		removedModules,
/******/ 		promises,
/******/ 		applyHandlers,
/******/ 		updatedModulesList
/******/ 	) {
/******/ 		applyHandlers.push(applyHandler);
/******/ 		currentUpdateChunks = {};
/******/ 		currentUpdateRemovedChunks = removedChunks;
/******/ 		currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 			obj[key] = false;
/******/ 			return obj;
/******/ 		}, {});
/******/ 		currentUpdateRuntime = [];
/******/ 		chunkIds.forEach(function (chunkId) {
/******/ 			if (
/******/ 				__webpack_require__.o(installedChunks, chunkId) &&
/******/ 				installedChunks[chunkId] !== undefined
/******/ 			) {
/******/ 				promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 				currentUpdateChunks[chunkId] = true;
/******/ 			} else {
/******/ 				currentUpdateChunks[chunkId] = false;
/******/ 			}
/******/ 		});
/******/ 		if (__webpack_require__.f) {
/******/ 			__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 				if (
/******/ 					currentUpdateChunks &&
/******/ 					__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 					!currentUpdateChunks[chunkId]
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	__webpack_require__.hmrM = function() {
/******/ 		if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 		return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then(function(response) {
/******/ 			if(response.status === 404) return; // no update available
/******/ 			if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 			return response.json();
/******/ 		});
/******/ 	};
/******/ 	
/******/ 	__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 	
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var runtime = data[2];
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0;
/******/ 		if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 		}
/******/ 		if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				installedChunks[chunkId][0]();
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		return __webpack_require__.O(result);
/******/ 	}
/******/ 	
/******/ 	var chunkLoadingGlobal = (typeof self !== 'undefined' ? self : this)["webpackChunkvueapp"] = (typeof self !== 'undefined' ? self : this)["webpackChunkvueapp"] || [];
/******/ 	chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 	chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ }();
/******/ 
/******/ }
);
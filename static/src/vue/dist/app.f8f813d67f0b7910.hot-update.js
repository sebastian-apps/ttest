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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store/store */ \"./src/store/store.js\");\n// import HypothesisComponent from './components/HypothesisComponent.vue'\n// import PPVComponent from './components/PPVComponent.vue'\n// import ROCComponent from './components/ROCComponent.vue'\n// import ROCComponent from './components/ROCComponent.vue'\n\n\n// store.commit('increment');\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  store: _store_store__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  name: 'App',\n  components: {\n    // HypothesisComponent,\n    // ROCComponent,\n    // ROCComponent,\n    // PPVComponent\n  },\n  data() {\n    return {\n      store: _store_store__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n      value1: true,\n      storecount: _store_store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].state.count\n    };\n  },\n  methods: {\n    myFunction: function () {\n      if (this.store.state.crit_t_value > this.store.state.t_value) {\n        this.store.state.crit_t_value = -3.2155;\n        console.log(\"SMALLER\");\n      } else {\n        this.store.state.crit_t_value = 3.2155;\n        console.log(\"BIGGER\");\n      }\n      _store_store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].commit('decrement');\n      _store_store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].commit('updateState');\n      this.storecount++;\n      document.getElementById(\"demo\").innerHTML = \"I have changed!\";\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvQHZ1ZS92dWUtbG9hZGVyLXYxNS9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NyYy9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsIm1hcHBpbmdzIjoiOztBQXdMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92dWVhcHAvc3JjL0FwcC52dWU/MTFjNCJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXYgaWQ9XCJhcHBcIj5cbiBcblxuICA8ZGl2IGNsYXNzPVwiaGVyby1pbWFnZVwiIGlkPVwiT3JhbmdlV2luZG93XCI+XG4gICAgPGRpdiBpZD1cInRpdGxlbmFtZVwiPldlbGNoJ3MgPGk+dDwvaT4tdGVzdDwvZGl2PlxuICAgIDxkaXYgaWQ9XCJ0aXRsZW5hbWUtc3ViXCI+Y2FsY3VsYXRvcjwvZGl2PlxuICA8L2Rpdj5cblxuICA8ZGl2IGlkPVwiQmxhY2tXaW5kb3dcIj5cbiAgICA8ZGl2IHN0eWxlPVwidGV4dC1hbGlnbjpqdXN0aWZ5XCI+XG4gICAgICBJcyB0aGVyZSBhIHN0YXRpc3RpY2FsbHkgc2lnbmlmaWNhbnQgZGlmZmVyZW5jZSBiZXR3ZWVuIHR3byBkYXRhc2V0cz88cD48L3A+XG4gICAgICBNb3ZlIHRoZSBzbGlkZXIgYW5kIG9ic2VydmUgdGhlIGltcGFjdCBvZiB0aGUgc2lnbmlmaWNhbmNlIGxldmVsIG9uIHRoZSBwcm9iYWJpbGl0eSBvZiBtYWtpbmcgdGhlIHdyb25nIGRlY2lzaW9uLiBJbnB1dCBhbmQgZXhwbG9yZSB5b3VyIGRhdGFzZXRzLlxuICAgICAgVGhpcyBjYWxjdWxhdG9yIGlzIGZvciBvbmUtdGFpbGVkIFdlbGNo4oCZcyA8aT50PC9pPi10ZXN0cy4gVGhlIGRhdGEgYXJlIGFzc3VtZWQgdG8gYmUgbm9ybWFsbHkgZGlzdHJpYnV0ZWQuXG4gICAgICA8YSBocmVmPScjbW9yZS1pbmZvJz5GaW5kIG1vcmUgaW5mb3JtYXRpb24uPC9hPlxuICAgIDwvZGl2PlxuICAgIDxwPjwvcD5cbiAgPC9kaXY+XG5cblxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCIgaWQ9XCJDb250YWluZXJXaW5kb3dcIj5cblxuICAgIDxwPjxicj48cD48YnI+PHA+PGJyPjxwPlxuXG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+XG5cbiAgICAgICAgPCEtLSB7JSBpZiB0ZXN0X3Jlc3VsdHMgJX0gLS0+XG4gICAgICAgIDxkaXYgaWQ9XCJzbGlkZXJcIiBjbGFzcz1cInNsaWRlclwiPlxuICAgICAgICAgIDxkaXYgaWQ9XCJ0aHVtYlwiIGNsYXNzPVwidGh1bWJcIiBvbnRvdWNobW92ZT1cIm1vdmVUaHVtYk1vYmlsZShldmVudClcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGNhbnZhcyBpZD1cImxpbmVfY2hhcnRcIiB3aWR0aD1cIjEwMDBcIiBoZWlnaHQ9XCI4MDBcIj48L2NhbnZhcz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxwPjxicj48cD48YnI+XG4gICAgICAgIDwhLS0geyUgZW5kaWYgJX0gLS0+XG5cbiAgICAgICAgPGI+PHNwYW4gaWQ9XCJtZXNzYWdlXCI+PC9zcGFuPjwvYj5cbiAgICAgICAgPGJyPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJlbnRlci1kYXRhXCI+XG4gICAgICAgICAgPGZvcm0gaWQ9XCJkYXRhLWZvcm1cIiBhY3Rpb249XCJ7JSB1cmwgJ2NvcmU6dHRlc3QnICV9XCIgbWV0aG9kPSdwb3N0JyBjbGFzcz1cImZvcm1cIj5cbiAgICAgICAgICA8IS0tIHslIGNzcmZfdG9rZW4gJX0gLS0+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtNiBjb2wtc20tNFwiPlxuICAgICAgICAgICAgICAgIDwhLS0ge3sgZm9ybS5kYXRhc2V0MXxhc19jcmlzcHlfZmllbGQgfX0gLS0+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTYgY29sLXNtLTRcIj5cbiAgICAgICAgICAgICAgICA8IS0tIHt7IGZvcm0uZGF0YXNldDJ8YXNfY3Jpc3B5X2ZpZWxkIH19IC0tPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtc20tNFwiPlxuICAgICAgICAgICAgICAgIDxiPlNUQVRJU1RJQ1M8L2I+PGJyPjxicj5cbiAgICAgICAgICAgICAgICA8Yj5jcml0aWNhbCB0OjwvYj4gPHNwYW4gaWQ9XCJjcml0X3RfdmFsdWVcIj48L3NwYW4+PGJyPlxuICAgICAgICAgICAgICAgIDxiPnNpZyBsZXZlbCAoJiM5NDU7KTo8L2I+IDxzcGFuIGlkPVwic2lnLWxldmVsXCI+PC9zcGFuPjxicj5cbiAgICAgICAgICAgICAgICA8YnI+XG5cbiAgICAgICAgICAgICAgICA8Yj50LXZhbHVlOjwvYj4gPHNwYW4gaWQ9XCJ0X3ZhbHVlXCI+PC9zcGFuPjxicj5cbiAgICAgICAgICAgICAgICA8IS0tIDxiPnAtdmFsdWU6PC9iPiB7eyB0ZXN0X3Jlc3VsdHMucF92YWx1ZSB9fTxicj4gLS0+XG4gICAgICAgICAgICAgICAgPGJyPlxuXG4gICAgICAgICAgICAgICAgPCEtLSA8Yj5kZjo8L2I+IHt7IHRlc3RfcmVzdWx0cy5kZiB9fTxicj4gLS0+XG4gICAgICAgICAgICAgICAgPCEtLSA8Yj5lZmZlY3Qgc2l6ZTo8L2I+IHt7IHRlc3RfcmVzdWx0cy5lZmZlY3Rfc2l6ZSB9fTxicj4gLS0+XG4gICAgICAgICAgICAgICAgPGI+bmNwOjwvYj4gPHNwYW4gaWQ9XCJuY3BcIj48L3NwYW4+PGJyPlxuICAgICAgICAgICAgICAgIDxicj48YnI+XG5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG5hbWU9XCJzdWJtaXRcIiBzdHlsZT1cIm1hcmdpbi1ib3R0b206NXB4XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIj5BbmFseXplPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgc3R5bGU9XCJtYXJnaW4tYm90dG9tOjVweFwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgb25jbGljaz1cImNsZWFyRm9ybSgpXCI+Q2xlYXI8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnI+PGJyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9mb3JtPlxuXG4gICAgICAgICAgPGRpdiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTg7IHBhZGRpbmc6MTBweDsgbWluLXdpZHRoOjMwMHB4O1wiIGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTRcIj5cbiAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJTbWFsbFNjcmVlblwiPjxiPkdyb3VwIDE8L2I+PGJyPjwvc3Bhbj5cbiAgICAgICAgICAgICAgPCEtLSB7eyBkYXRhMS5tZWFuIH19PGJyPlxuICAgICAgICAgICAgICB7eyBkYXRhMS5zZCB9fTxicj5cbiAgICAgICAgICAgICAge3sgZGF0YTEubiB9fTxicj4gLS0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtNFwiPlxuICAgICAgICAgICAgICA8c3BhbiBpZD1cIlNtYWxsU2NyZWVuXCI+PGI+R3JvdXAgMjwvYj48YnI+PC9zcGFuPlxuICAgICAgICAgICAgICA8IS0tIHt7IGRhdGEyLm1lYW4gfX08YnI+XG4gICAgICAgICAgICAgIHt7IGRhdGEyLnNkIH19PGJyPlxuICAgICAgICAgICAgICB7eyBkYXRhMi5uIH19PGJyPiAtLT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy00XCI+XG4gICAgICAgICAgICAgIDxzcGFuIGlkPVwiU21hbGxTY3JlZW5cIj48YnI+PC9zcGFuPlxuICAgICAgICAgICAgICA8Yj5NZWFuPC9iPjxicj5cbiAgICAgICAgICAgICAgPGI+U0Q8L2I+PGJyPlxuICAgICAgICAgICAgICA8Yj5OPC9iPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PjwhLS0gY2xvc2UgZW50ZXItZGF0YSBkaXYgLS0+XG4gICAgICAgIDxwPjwvcD48YnI+XG4gICAgICA8L2Rpdj4gPCEtLSBjb2x1bW4gZW5kIC0tPlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTFcIj5cbiAgICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImNvbC1tZC01XCI+XG5cbiAgICAgIDwhLS0geyUgaWYgdGVzdF9yZXN1bHRzICV9IC0tPlxuICAgICAgPGRpdiBjbGFzcz1cInRhYmJlZFwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInRhYnNcIiBpZD1cInRhYi1uYXYtMVwiIGNoZWNrZWQ+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJ0YWItbmF2LTFcIj5IeXBvdGhlc2lzIFRlc3Rpbmc8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInRhYnNcIiBpZD1cInRhYi1uYXYtMlwiPlxuICAgICAgICA8bGFiZWwgZm9yPVwidGFiLW5hdi0yXCI+UFBWPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJ0YWJzXCIgaWQ9XCJ0YWItbmF2LTNcIj5cbiAgICAgICAgPGxhYmVsIGZvcj1cInRhYi1uYXYtM1wiPlJPQzwvbGFiZWw+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRhYnNcIj5cblxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRhYlwiPlxuICAgICAgICAgICAgICBIWXBvdGhlc2lzIHRlc3RpbmdcbiAgICAgICAgICA8L2Rpdj4gPCEtLSBlbmQgaHlwb3RoZXNpcyB0ZXN0aW5nIC0tPlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRhYlwiPlxuICAgICAgICAgICAgPGI+UG9zaXRpdmUgUHJlZGljdGl2ZSBWYWx1ZSAoUFBWKTwvYj5cbiAgICAgICAgICAgIDxicj48YnI+XG5cbiAgICAgICAgICA8L2Rpdj4gPCEtLSBlbmQgUFBWIC0tPlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRhYlwiPlxuICAgICAgICAgICAgPGI+UmVjZWl2ZXIgT3BlcmF0aW5nIENoYXJhY3RlcmlzdGljIChST0MpPC9iPlxuXG4gICAgICAgICAgPC9kaXY+IDwhLS0gZW5kIFJPQyAtLT5cblxuICAgICAgICA8L2Rpdj4gPCEtLSBlbmQgdGFicyAtLT5cbiAgICAgIDwvZGl2PiAgPCEtLSBlbmQgdGFiYmVkIC0tPlxuICAgICAgICBcbiAgICAgIHslIGVuZGlmICV9XG4gICAgPC9kaXY+IDwhLS0gZW5kIGNvbHVtbiAtLT5cbiAgPC9kaXY+IDwhLS0gZW5kIHJvdyAtLT5cblxuXG4gICAgPGRpdiBpZD1cIlNtYWxsU2NyZWVuXCIgc3R5bGU9XCJoZWlnaHQ6IDEyMDBweDtcIj4gIDwhLS0gYnVmZmVyIHNwYWNlIGZvciBzbWFsbCBzY3JlZW5zIC0tPlxuICAgIDwvZGl2PlxuICAgIDxicj48YnI+PGJyPlxuICA8L2Rpdj5cblxuXG5cbiAgPGRpdiBpZD1cIkJsYWNrV2luZG93XCI+XG5cbiAgICA8YSBuYW1lPVwibW9yZS1pbmZvXCI+PC9hPlxuICAgIDxkaXYgY2xhc3M9XCJtb3JlLWluZm9cIj5cbiAgICAgIDxoND5Nb3JlIGluZm9ybWF0aW9uPC9oND5cblxuICAgICAgVGhlIFdlbGNo4oCZcyA8aT50PC9pPi10ZXN0LCBvciB1bmVxdWFsIHZhcmlhbmNlcyA8aT50PC9pPi10ZXN0LCBjYW4gdGVzdCBoeXBvdGhlc2VzIHN1Y2ggYXMgd2hldGhlciB0aGUgbWVhbnMgb2YgdHdvIGluZGVwZW5kZW50IG5vcm1hbGx5LWRpc3RyaWJ1dGVkIHBvcHVsYXRpb25zIGFyZSBlcXVhbC4gV2hpbGUgdGhlIGNvbW1vbmx5LXVzZWQgU3R1ZGVudCA8aT50PC9pPi10ZXN0IHJlcXVpcmVzIHRoYXQgdGhlIHR3byBzYW1wbGVzIHNoYXJlIGVxdWFsIHZhcmlhbmNlcyBhbmQgZXF1YWwgc2FtcGxlIHNpemVzLCB0aGUgV2VsY2jigJlzIDxpPnQ8L2k+LXRlc3QgZG9lcyBub3QgaGF2ZSB0aGlzIHJlcXVpcmVtZW50LiBSZXNlYXJjaGVycyBhcmd1ZSB0aGF0IHRoZSBXZWxjaOKAmXMgPGk+dDwvaT4tdGVzdCBpcyBtb3JlIHZlcnNhdGlsZSBhbmQgc2hvdWxkIGluc3RlYWQgYmUgdXNlZCBieSBkZWZhdWx0LjxzdXA+MSwyPC9zdXA+XG4gICAgICA8YnI+PGJyPlxuICAgICAgU3RhdGlzdGljYWwgcmlnb3IgY2FuIGJlIGFjaGlldmVkIHdpdGggPGk+dDwvaT4tdGVzdHMsIHlldCB0aGUgc2lnbmlmaWNhbmNlIGxldmVsIGlzIHNldCBhcmJpdHJhcmlseS4gV2hpbGUgbG93ZXJpbmcgc2lnbmlmaWNhbmNlIGxldmVscyBtaXRpZ2F0ZXMgZmFsc2UgcG9zaXRpdmVzICgmIzk0NTspLCB0aGUgcHJvYmFiaWxpdHkgb2YgZmFsc2UgbmVnYXRpdmVzICgmIzk0NjspIGluY3JlYXNlcywgYW5kIHRlc3RzIG1heSBmYWlsIHRvIGRldGVjdCBleGlzdGluZyBlZmZlY3RzLjxzdXA+Mzwvc3VwPlxuICAgIDwvZGl2PlxuICAgIDxicj5cblxuXG4gIDwvZGl2PlxuICA8ZGl2IGlkPVwiV2hpdGVXaW5kb3dcIj5cblxuICAgICAgPGg0PlJlZmVyZW5jZXM8L2g0PlxuXG4gICAgICAxLiBEYWhpcnUsIFQuIFAtdmFsdWUsIGEgdHJ1ZSB0ZXN0IG9mIHN0YXRpc3RpY2FsIHNpZ25pZmljYW5jZT8gQSBjYXV0aW9uYXJ5IG5vdGUuIDxpPkFubmFscyBvZiBJYmFkYW4gUG9zdGdyYWR1YXRlIE1lZGljaW5lLjwvaT4gMjAwOCwgPGk+NjwvaT4oMSk6IDIx4oCTMjYuXG4gICAgICA8YnI+XG4gICAgICAyLiBEZWxhY3JlLCBNLjsgTGFrZW5zLCBELjsgTGV5cywgQy4gV2h5IFBzeWNob2xvZ2lzdHMgU2hvdWxkIGJ5IERlZmF1bHQgVXNlIFdlbGNo4oCZcyB0LXRlc3QgSW5zdGVhZCBvZiBTdHVkZW504oCZcyB0LXRlc3QuIDxpPkludGVybmF0aW9uYWwgUmV2aWV3IG9mIFNvY2lhbCBQc3ljaG9sb2d5LjwvaT4gMjAxNywgPGk+MzA8L2k+KDEpLCA5MuKAkzEwMS5cbiAgICAgIDxicj5cbiAgICAgIDMuIEJlbmphbWluLCBELkouOyBCZXJnZXIsIEouTy47IEpvaGFubmVzc29uLCBNLiBldCBhbC4gUmVkZWZpbmUgc3RhdGlzdGljYWwgc2lnbmlmaWNhbmNlLiA8aT5OYXR1cmUgSHVtYW4gQmVoYXZpb3VyLjwvaT4gMjAxOCwgPGk+MjwvaT4sIDbigJMxMC5cbiAgICAgIDxicj5cbiAgICAgIDQuIENvbHF1aG91biwgRC4gQW4gaW52ZXN0aWdhdGlvbiBvZiB0aGUgZmFsc2UgZGlzY292ZXJ5IHJhdGUgYW5kIHRoZSBtaXNpbnRlcnByZXRhdGlvbiBvZiBwLXZhbHVlcy4gPGk+Um95YWwgU29jaWV0eSBPcGVuIFNjaWVuY2UuPC9pPiAyMDE0LCA8aT4xPC9pPigzKTogMTQwMjE2LlxuXG4gIDwvZGl2PiAgPCEtLSBjb250YWluZXIgLS0+ICAgXG5cbiAgICA8IS0tIDxST0NDb21wb25lbnQgLz4gLS0+XG4gICAgPCEtLSA8SHlwb3RoZXNpc0NvbXBvbmVudCB2LXNob3c9XCJ2YWx1ZTFcIiBtc2c9XCJcIi8+IC0tPlxuICAgIDwhLS0gPHAgaWQ9XCJkZW1vXCIgQGNsaWNrPVwibXlGdW5jdGlvblwiPjxiPkNIQU5HRSBBTFBIQTwvYj48L3A+IC0tPlxuICAgIDwhLS0gPFBQVkNvbXBvbmVudCB2LXNob3c9XCJ2YWx1ZTFcIiBtc2c9XCJUaGlzIGlzIHRoZSBQUFYgd2luZG93IVwiLz4gLS0+XG5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG5cblxuPHNjcmlwdD5cbi8vIGltcG9ydCBIeXBvdGhlc2lzQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50cy9IeXBvdGhlc2lzQ29tcG9uZW50LnZ1ZSdcbi8vIGltcG9ydCBQUFZDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnRzL1BQVkNvbXBvbmVudC52dWUnXG4vLyBpbXBvcnQgUk9DQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50cy9ST0NDb21wb25lbnQudnVlJ1xuLy8gaW1wb3J0IFJPQ0NvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvUk9DQ29tcG9uZW50LnZ1ZSdcbmltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlL3N0b3JlJyBcblxuLy8gc3RvcmUuY29tbWl0KCdpbmNyZW1lbnQnKTtcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHN0b3JlLFxuICBuYW1lOiAnQXBwJyxcbiAgY29tcG9uZW50czoge1xuICAgIC8vIEh5cG90aGVzaXNDb21wb25lbnQsXG4gICAgLy8gUk9DQ29tcG9uZW50LFxuICAgIC8vIFJPQ0NvbXBvbmVudCxcbiAgICAvLyBQUFZDb21wb25lbnRcbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3RvcmUsXG4gICAgICB2YWx1ZTE6IHRydWUsXG4gICAgICBzdG9yZWNvdW50OiBzdG9yZS5zdGF0ZS5jb3VudFxuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIG15RnVuY3Rpb246IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAodGhpcy5zdG9yZS5zdGF0ZS5jcml0X3RfdmFsdWUgPiB0aGlzLnN0b3JlLnN0YXRlLnRfdmFsdWUpIHtcbiAgICAgICAgICAgICAgdGhpcy5zdG9yZS5zdGF0ZS5jcml0X3RfdmFsdWUgPSAtMy4yMTU1O1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNNQUxMRVJcIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLnN0b3JlLnN0YXRlLmNyaXRfdF92YWx1ZSA9IDMuMjE1NTtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJCSUdHRVJcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgc3RvcmUuY29tbWl0KCdkZWNyZW1lbnQnKTtcbiAgICAgICAgICBzdG9yZS5jb21taXQoJ3VwZGF0ZVN0YXRlJyk7XG4gICAgICAgICAgdGhpcy5zdG9yZWNvdW50Kys7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZW1vXCIpLmlubmVySFRNTCA9IFwiSSBoYXZlIGNoYW5nZWQhXCI7XG4gICAgfSxcbiAgfVxufVxuXG5cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4vKiAjYXBwIHtcbiAgZm9udC1mYW1pbHk6IEF2ZW5pciwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMyYzNlNTA7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG59ICovXG5cbmh0bWwge1xuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cblxuYm9keSB7XG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICNmZjNlMDA7ICovXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MzQzNDM7XG4gIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuYTpsaW5rLCBhOnZpc2l0ZWQge1xuICBjb2xvcjogZ3JleTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4vKiBtb3VzZSBvdmVyIGxpbmsgKi9cbmE6aG92ZXIge1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLyogc2VsZWN0ZWQgbGluayAqL1xuYTphY3RpdmUge1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuXG5oNCB7XG4gIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG59XG5cblxuXG4jQ29udGFpbmVyV2luZG93e1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAyMHB4IDcwcHg7XG59XG5cbiNXaGl0ZVdpbmRvd3tcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgY29sb3I6ICMwMDA7XG4gIHBhZGRpbmc6IDgwcHggNTBweDtcbiAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuXG4jQmxhY2tXaW5kb3d7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA4MHB4IDUwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cblxuI09yYW5nZVdpbmRvd3tcbiAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL3N0YXRpYy9pbWFnZXMvd2VsY2hzLnBuZ1wiKTsgKi9cbiAgLyogYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYzsgKi9cbiAgLyogaGVpZ2h0OiA1MDBweDsgKi9cblxuICAvKiBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cblxuICAvKiBDcmVhdGUgdGhlIHBhcmFsbGF4IHNjcm9sbGluZyBlZmZlY3QgKi9cbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICNmZjNlMDA7ICovXG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxMjBweCA1MHB4IDEyMHB4IDUwcHg7XG4gIC8qIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7ICovXG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cblxuXG4jdGl0bGVuYW1le1xuICBmb250LWZhbWlseTogJ1RyZWJ1Y2hldCBNUycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogODBweDtcbiAgLyogcGFkZGluZzogMHB4IDBweCAwcHggMTAwcHg7ICovXG4gIC8qIG1hcmdpbi1ib3R0b206LTEyMHB4ICovXG59XG4jdGl0bGVuYW1lLXN1YntcbiAgZm9udC1mYW1pbHk6ICdUcmVidWNoZXQgTVMnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDcwcHg7XG4gIC8qIHBhZGRpbmc6IDBweCAwcHggMHB4IDEwMHB4OyAqL1xuICAvKiBtYXJnaW4tYm90dG9tOi0xMjBweCAqL1xufVxuXG4ubW9yZS1pbmZvIHtcbiAgcGFkZGluZzogMTBweCAyMHB4IDIwcHggMjBweDtcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmM2UwMDsgIC8qIHByZXZpb3VzbHkgZmY3MDQzICovXG59XG5cblxuLmJveCB7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2U4ZThlODtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIH1cbiAgXG4uYXN0ZXJpc2tGaWVsZCB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuXG4ucmVzcG9uc2l2ZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5zbGlkZXIge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQ6ICNFMEUwRTA7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChsZWZ0IHRvcCwgI0UwRTBFMCwgI0VFRUVFRSk7XG4gIC8qIHdpZHRoOiA1MjVweDsgKi9cbiAgaGVpZ2h0OiAxNXB4O1xuICBtYXJnaW46IDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5cbi50aHVtYiB7XG4gIHdpZHRoOiAxNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAwcHg7XG4gIHRvcDogLTVweDtcbiAgYmFja2dyb3VuZDogI2ZmM2UwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5cbi5lcnJvcl9ib3gge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlOGU4O1xufVxuXG4vKiBAaW1wb3J0IFwiY29tcGFzcy9jc3MzXCI7ICovXG5cblxuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cblxuOjpzZWxlY3Rpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEVDNkRFO1xufVxuXG4udGFiYmVkIHtcbi8qICB3aWR0aDogNzAwcHg7XG4gIG1hcmdpbjogNTBweCBhdXRvOyAgKi9cbn1cblxuLnRhYmJlZCA+IGlucHV0IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnRhYmJlZCA+IGxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuM3M7XG59XG5cbi50YWJiZWQgPiBsYWJlbDpob3Zlcixcbi50YWJiZWQgPiBpbnB1dDpjaGVja2VkICsgbGFiZWwge1xuICBiYWNrZ3JvdW5kOiAjZmYzZTAwO1xufVxuXG4udGFicyB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIGNsZWFyOiBib3RoO1xuICBwZXJzcGVjdGl2ZTogNjAwcHg7XG59XG5cbi50YWJzID4gZGl2IHtcbiAgLyogd2lkdGg6IDcwMHB4OyAqL1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZjNlMDA7XG4gIHBhZGRpbmc6IDEwcHggMzBweCA0MHB4O1xuICBsaW5lLWhlaWdodDogMS40ZW07XG4gIG9wYWNpdHk6IDA7XG4gIHotaW5kZXg6IDA7XG59XG5cblxuI3RhYi1uYXYtMTpjaGVja2VkIH4gLnRhYnMgPiBkaXY6bnRoLW9mLXR5cGUoMSksXG4jdGFiLW5hdi0yOmNoZWNrZWQgfiAudGFicyA+IGRpdjpudGgtb2YtdHlwZSgyKXtcbiAgb3BhY2l0eTogMTtcbiAgei1pbmRleDogMTtcbn1cbiN0YWItbmF2LTM6Y2hlY2tlZCB+IC50YWJzID4gZGl2Om50aC1vZi10eXBlKDMpe1xuICBvcGFjaXR5OiAxO1xuICB6LWluZGV4OiAxO1xufVxuXG4uZ3JpZC1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0byBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBwYWRkaW5nOiAwcHg7XG59XG4uZ3JpZC1pdGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYzhjOGM4OyAgLypyZ2JhKDAsIDAsIDAsIDAuOCk7Ki9cbiAgcGFkZGluZzogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5cbi5kaWFncmFtLWJveCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2M4YzhjODtcbn1cblxuLmVudGVyLWRhdGF7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNjOGM4Yzg7XG4gIHBhZGRpbmc6IDMwcHg7XG59XG5cbi8qIGhpZGUgZm9yIGxhcmdlciBzY3JlZW5zICovXG4jU21hbGxTY3JlZW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cblxuLyogc2hvdyBmb3Igc21hbGwgc2NyZWVucyAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gICAgI1NtYWxsU2NyZWVuIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxufVxuXG4vKiByZW1vdmUgcGFkZGluZyBvbiBzbWFsbGVyIHNjcmVlbnMgKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICNDb250YWluZXJXaW5kb3d7XG4gICAgcGFkZGluZzogNTBweCA1cHggNTBweCA1cHg7XG4gIH1cbn1cblxuPC9zdHlsZT5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\n/* #app {\\n  font-family: Avenir, Helvetica, Arial, sans-serif;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n  text-align: center;\\n  color: #2c3e50;\\n  margin-top: 60px;\\n} */\\nhtml {\\n  scroll-behavior: smooth;\\n}\\nbody {\\n  /* background-color: #ff3e00; */\\n  background-color: #434343;\\n  font-family: \\\"Helvetica Neue\\\", sans-serif;\\n  font-size: 15px;\\n}\\na:link, a:visited {\\n  color: grey;\\n  text-decoration: none;\\n}\\n\\n/* mouse over link */\\na:hover {\\n  color: white;\\n  text-decoration: none;\\n}\\n\\n/* selected link */\\na:active {\\n  color: black;\\n  text-decoration: none;\\n}\\nh4 {\\n  font-family: \\\"Helvetica Neue\\\", sans-serif;\\n}\\n#ContainerWindow{\\n  background-color: #fff;\\n  padding: 20px 70px;\\n}\\n#WhiteWindow{\\n  background-color: #fff;\\n  color: #000;\\n  padding: 80px 50px;\\n  font-family: \\\"Helvetica Neue\\\", sans-serif;\\n  font-size: 17px;\\n}\\n#BlackWindow{\\n  background-color: #000;\\n  color: #fff;\\n  padding: 80px 50px;\\n  font-family: \\\"Helvetica Neue\\\", sans-serif;\\n  font-size: 17px;\\n}\\n#OrangeWindow{\\n  /* background-image: url(\\\"/static/images/welchs.png\\\"); */\\n  /* background-color: #cccccc; */\\n  /* height: 500px; */\\n\\n  /* background-position: center;\\n  background-repeat: no-repeat;\\n  background-size: cover;\\n  position: relative; */\\n\\n  /* Create the parallax scrolling effect */\\n  background-attachment: fixed;\\n  background-position: center;\\n  background-repeat: no-repeat;\\n  background-size: cover;\\n\\n  /* background-color: #ff3e00; */\\n  color: #fff;\\n  padding: 120px 50px 120px 50px;\\n  /* font-family: \\\"Helvetica Neue\\\", sans-serif; */\\n  font-size: 17px;\\n}\\n#titlename{\\n  font-family: 'Trebuchet MS', sans-serif;\\n  font-size: 80px;\\n  /* padding: 0px 0px 0px 100px; */\\n  /* margin-bottom:-120px */\\n}\\n#titlename-sub{\\n  font-family: 'Trebuchet MS', sans-serif;\\n  font-size: 70px;\\n  /* padding: 0px 0px 0px 100px; */\\n  /* margin-bottom:-120px */\\n}\\n.more-info {\\n  padding: 10px 20px 20px 20px;\\n  border: 2px solid #ff3e00;  /* previously ff7043 */\\n}\\n.box {\\n    border: 2px solid #e8e8e8;\\n    padding: 10px;\\n    margin: 0px;\\n    border-radius: 15px;\\n}\\n.asteriskField {\\n    display: none;\\n}\\n.responsive {\\n  width: 100%;\\n  height: auto;\\n}\\n.slider {\\n  border-radius: 5px;\\n  background: #E0E0E0;\\n  background: linear-gradient(left top, #E0E0E0, #EEEEEE);\\n  /* width: 525px; */\\n  height: 15px;\\n  margin: 0px;\\n  position: relative;\\n}\\n.thumb {\\n  width: 15px;\\n  height: 25px;\\n  border-radius: 3px;\\n  position: relative;\\n  left: 0px;\\n  top: -5px;\\n  background: #ff3e00;\\n  cursor: pointer;\\n}\\n.error_box {\\n  background-color: #e8e8e8;\\n}\\n\\n/* @import \\\"compass/css3\\\"; */\\n* {\\n  box-sizing: border-box;\\n}\\n::-moz-selection {\\n  background-color: #4EC6DE;\\n}\\n::selection {\\n  background-color: #4EC6DE;\\n}\\n.tabbed {\\n/*  width: 700px;\\n  margin: 50px auto;  */\\n}\\n.tabbed > input {\\n  display: none;\\n}\\n.tabbed > label {\\n  display: block;\\n  float: left;\\n  padding: 12px 20px;\\n  margin-right: 5px;\\n  margin-bottom: 0px;\\n  cursor: pointer;\\n  transition: background-color .3s;\\n}\\n.tabbed > label:hover,\\n.tabbed > input:checked + label {\\n  background: #ff3e00;\\n}\\n.tabs {\\n  margin: 0px;\\n  padding: 0px;\\n  clear: both;\\n  perspective: 600px;\\n}\\n.tabs > div {\\n  /* width: 700px; */\\n  position: absolute;\\n  border: 2px solid #ff3e00;\\n  padding: 10px 30px 40px;\\n  line-height: 1.4em;\\n  opacity: 0;\\n  z-index: 0;\\n}\\n#tab-nav-1:checked ~ .tabs > div:nth-of-type(1),\\n#tab-nav-2:checked ~ .tabs > div:nth-of-type(2){\\n  opacity: 1;\\n  z-index: 1;\\n}\\n#tab-nav-3:checked ~ .tabs > div:nth-of-type(3){\\n  opacity: 1;\\n  z-index: 1;\\n}\\n.grid-container {\\n  display: grid;\\n  grid-template-columns: auto auto auto;\\n  background-color: #ffffff;\\n  padding: 0px;\\n}\\n.grid-item {\\n  background-color: rgba(255, 255, 255, 0.8);\\n  border: 1px solid #c8c8c8;  /*rgba(0, 0, 0, 0.8);*/\\n  padding: 10px;\\n  text-align: center;\\n}\\n.diagram-box {\\n  position: relative;\\n  border: 1px solid #c8c8c8;\\n}\\n.enter-data{\\n  border: 2px solid #c8c8c8;\\n  padding: 30px;\\n}\\n\\n/* hide for larger screens */\\n#SmallScreen {\\n    display: none;\\n}\\n\\n\\n/* show for small screens */\\n@media screen and (max-width: 1000px) {\\n#SmallScreen {\\n        display: block;\\n}\\n}\\n\\n/* remove padding on smaller screens */\\n@media screen and (max-width: 500px) {\\n#ContainerWindow{\\n    padding: 50px 5px 50px 5px;\\n}\\n}\\n\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMV0hLi9ub2RlX21vZHVsZXMvQHZ1ZS92dWUtbG9hZGVyLXYxNS9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzJdIS4vbm9kZV9tb2R1bGVzL0B2dWUvdnVlLWxvYWRlci12MTUvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zcmMvQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTdiYTViZDkwJmxhbmc9Y3NzJi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92dWVhcHAvLi9zcmMvQXBwLnZ1ZT8xYmNlIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9OT19TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvbm9Tb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfTk9fU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXG4vKiAjYXBwIHtcXG4gIGZvbnQtZmFtaWx5OiBBdmVuaXIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogIzJjM2U1MDtcXG4gIG1hcmdpbi10b3A6IDYwcHg7XFxufSAqL1xcbmh0bWwge1xcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxufVxcbmJvZHkge1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogI2ZmM2UwMDsgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MzQzNDM7XFxuICBmb250LWZhbWlseTogXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG59XFxuYTpsaW5rLCBhOnZpc2l0ZWQge1xcbiAgY29sb3I6IGdyZXk7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi8qIG1vdXNlIG92ZXIgbGluayAqL1xcbmE6aG92ZXIge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4vKiBzZWxlY3RlZCBsaW5rICovXFxuYTphY3RpdmUge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5oNCB7XFxuICBmb250LWZhbWlseTogXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuI0NvbnRhaW5lcldpbmRvd3tcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBwYWRkaW5nOiAyMHB4IDcwcHg7XFxufVxcbiNXaGl0ZVdpbmRvd3tcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBjb2xvcjogIzAwMDtcXG4gIHBhZGRpbmc6IDgwcHggNTBweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxN3B4O1xcbn1cXG4jQmxhY2tXaW5kb3d7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcbiAgY29sb3I6ICNmZmY7XFxuICBwYWRkaW5nOiA4MHB4IDUwcHg7XFxuICBmb250LWZhbWlseTogXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTdweDtcXG59XFxuI09yYW5nZVdpbmRvd3tcXG4gIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiL3N0YXRpYy9pbWFnZXMvd2VsY2hzLnBuZ1xcXCIpOyAqL1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYzsgKi9cXG4gIC8qIGhlaWdodDogNTAwcHg7ICovXFxuXFxuICAvKiBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cXG5cXG4gIC8qIENyZWF0ZSB0aGUgcGFyYWxsYXggc2Nyb2xsaW5nIGVmZmVjdCAqL1xcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcblxcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogI2ZmM2UwMDsgKi9cXG4gIGNvbG9yOiAjZmZmO1xcbiAgcGFkZGluZzogMTIwcHggNTBweCAxMjBweCA1MHB4O1xcbiAgLyogZm9udC1mYW1pbHk6IFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIHNhbnMtc2VyaWY7ICovXFxuICBmb250LXNpemU6IDE3cHg7XFxufVxcbiN0aXRsZW5hbWV7XFxuICBmb250LWZhbWlseTogJ1RyZWJ1Y2hldCBNUycsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDgwcHg7XFxuICAvKiBwYWRkaW5nOiAwcHggMHB4IDBweCAxMDBweDsgKi9cXG4gIC8qIG1hcmdpbi1ib3R0b206LTEyMHB4ICovXFxufVxcbiN0aXRsZW5hbWUtc3Vie1xcbiAgZm9udC1mYW1pbHk6ICdUcmVidWNoZXQgTVMnLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiA3MHB4O1xcbiAgLyogcGFkZGluZzogMHB4IDBweCAwcHggMTAwcHg7ICovXFxuICAvKiBtYXJnaW4tYm90dG9tOi0xMjBweCAqL1xcbn1cXG4ubW9yZS1pbmZvIHtcXG4gIHBhZGRpbmc6IDEwcHggMjBweCAyMHB4IDIwcHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjZmYzZTAwOyAgLyogcHJldmlvdXNseSBmZjcwNDMgKi9cXG59XFxuLmJveCB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNlOGU4ZTg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbn1cXG4uYXN0ZXJpc2tGaWVsZCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5yZXNwb25zaXZlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG4uc2xpZGVyIHtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQ6ICNFMEUwRTA7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQobGVmdCB0b3AsICNFMEUwRTAsICNFRUVFRUUpO1xcbiAgLyogd2lkdGg6IDUyNXB4OyAqL1xcbiAgaGVpZ2h0OiAxNXB4O1xcbiAgbWFyZ2luOiAwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi50aHVtYiB7XFxuICB3aWR0aDogMTVweDtcXG4gIGhlaWdodDogMjVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxlZnQ6IDBweDtcXG4gIHRvcDogLTVweDtcXG4gIGJhY2tncm91bmQ6ICNmZjNlMDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5lcnJvcl9ib3gge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZThlODtcXG59XFxuXFxuLyogQGltcG9ydCBcXFwiY29tcGFzcy9jc3MzXFxcIjsgKi9cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbjo6LW1vei1zZWxlY3Rpb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRFQzZERTtcXG59XFxuOjpzZWxlY3Rpb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRFQzZERTtcXG59XFxuLnRhYmJlZCB7XFxuLyogIHdpZHRoOiA3MDBweDtcXG4gIG1hcmdpbjogNTBweCBhdXRvOyAgKi9cXG59XFxuLnRhYmJlZCA+IGlucHV0IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi50YWJiZWQgPiBsYWJlbCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgcGFkZGluZzogMTJweCAyMHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxuICBtYXJnaW4tYm90dG9tOiAwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4zcztcXG59XFxuLnRhYmJlZCA+IGxhYmVsOmhvdmVyLFxcbi50YWJiZWQgPiBpbnB1dDpjaGVja2VkICsgbGFiZWwge1xcbiAgYmFja2dyb3VuZDogI2ZmM2UwMDtcXG59XFxuLnRhYnMge1xcbiAgbWFyZ2luOiAwcHg7XFxuICBwYWRkaW5nOiAwcHg7XFxuICBjbGVhcjogYm90aDtcXG4gIHBlcnNwZWN0aXZlOiA2MDBweDtcXG59XFxuLnRhYnMgPiBkaXYge1xcbiAgLyogd2lkdGg6IDcwMHB4OyAqL1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmM2UwMDtcXG4gIHBhZGRpbmc6IDEwcHggMzBweCA0MHB4O1xcbiAgbGluZS1oZWlnaHQ6IDEuNGVtO1xcbiAgb3BhY2l0eTogMDtcXG4gIHotaW5kZXg6IDA7XFxufVxcbiN0YWItbmF2LTE6Y2hlY2tlZCB+IC50YWJzID4gZGl2Om50aC1vZi10eXBlKDEpLFxcbiN0YWItbmF2LTI6Y2hlY2tlZCB+IC50YWJzID4gZGl2Om50aC1vZi10eXBlKDIpe1xcbiAgb3BhY2l0eTogMTtcXG4gIHotaW5kZXg6IDE7XFxufVxcbiN0YWItbmF2LTM6Y2hlY2tlZCB+IC50YWJzID4gZGl2Om50aC1vZi10eXBlKDMpe1xcbiAgb3BhY2l0eTogMTtcXG4gIHotaW5kZXg6IDE7XFxufVxcbi5ncmlkLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICBwYWRkaW5nOiAwcHg7XFxufVxcbi5ncmlkLWl0ZW0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2M4YzhjODsgIC8qcmdiYSgwLCAwLCAwLCAwLjgpOyovXFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uZGlhZ3JhbS1ib3gge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2M4YzhjODtcXG59XFxuLmVudGVyLWRhdGF7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjYzhjOGM4O1xcbiAgcGFkZGluZzogMzBweDtcXG59XFxuXFxuLyogaGlkZSBmb3IgbGFyZ2VyIHNjcmVlbnMgKi9cXG4jU21hbGxTY3JlZW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5cXG4vKiBzaG93IGZvciBzbWFsbCBzY3JlZW5zICovXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XFxuI1NtYWxsU2NyZWVuIHtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG59XFxuXFxuLyogcmVtb3ZlIHBhZGRpbmcgb24gc21hbGxlciBzY3JlZW5zICovXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcXG4jQ29udGFpbmVyV2luZG93e1xcbiAgICBwYWRkaW5nOiA1MHB4IDVweCA1MHB4IDVweDtcXG59XFxufVxcblxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css&\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "ede7c2d8eba0ca59"; }
/******/ }();
/******/ 
/******/ }
);
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/PPVComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/PPVComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mylib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/mylib */ \"./src/mylib.js\");\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store/store */ \"./src/store/store.js\");\n\n\nconsole.log(_mylib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].foo());\n//   store.commit('increment');\n\nconsole.log(undefined.$math.round(999.111111111, 2));\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  store: _store_store__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  name: 'PPVComponent',\n  props: {\n    msg: String\n  },\n  data() {\n    return {\n      store: _store_store__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n      storecount: _store_store__WEBPACK_IMPORTED_MODULE_1__[\"default\"].state.count\n    };\n  },\n  methods: {\n    myFunction: function () {\n      _store_store__WEBPACK_IMPORTED_MODULE_1__[\"default\"].commit('decrement');\n      this.storecount++;\n      document.getElementById(\"demo\").innerHTML = \"I have changed!\";\n    }\n    // prob3_tp: function () {\n    //     return 1-store.state.beta\n    // },\n    // prob5_tn: function () {\n    //     return 1-store.state.alpha\n    // },\n  },\n\n  mounted() {\n    // document.getElementById(\"demo\").innerHTML = \"I have changed!\";\n    // let myFunction = () => { document.getElementById(\"demo\").innerHTML = \"I have changed!\"; };\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvQHZ1ZS92dWUtbG9hZGVyLXYxNS9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NyYy9jb21wb25lbnRzL1BQVkNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwibWFwcGluZ3MiOiI7OztBQTREQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92dWVhcHAvc3JjL2NvbXBvbmVudHMvUFBWQ29tcG9uZW50LnZ1ZT81OTRiIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXYgY2xhc3M9XCJwcHZcIj5cclxuXHJcbiAgICAgICAgPGI+UG9zaXRpdmUgUHJlZGljdGl2ZSBWYWx1ZSAoUFBWKTwvYj5cclxuICAgICAgICAgIDxicj48YnI+XHJcblxyXG4gICAgICAgICAgPGI+UHJvYmFiaWxpdHkgdHJlZSBkaWFncmFtPC9iPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGlhZ3JhbS1ib3hcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzcG9uc2l2ZVwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cInJlc3BvbnNpdmVcIiBzcmM9XCJ7JSBzdGF0aWMgJ2ltYWdlcy90cmVlLnN2ZycgJX1cIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cInByb2IxX3JlXCIgY2xhc3M9XCJwcm9iMV9yZVwiIHZhbHVlPVwiMC4wMVwiIHNpemU9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicHJvYjJfbmVcIiBjbGFzcz1cInByb2IyX25lXCI+PC9kaXY+PGI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicHJvYjNfdHBcIiBjbGFzcz1cInByb2IzX3RwXCI+cHJvYjNfdHA6IHt7IHRoaXMuc3RvcmUuc3RhdGUucHJvYjNfdHAgfX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwcm9iNF9mblwiIGNsYXNzPVwicHJvYjRfZm5cIj5iZXRhOiB7eyB0aGlzLnN0b3JlLnN0YXRlLmJldGEgfX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwcm9iNV90blwiIGNsYXNzPVwicHJvYjVfdG5cIj5wcm9iNV90bjoge3sgdGhpcy5zdG9yZS5zdGF0ZS5wcm9iNV90biB9fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInByb2I2X2ZwXCIgY2xhc3M9XCJwcm9iNl9mcFwiPmFscGhhOiB7eyB0aGlzLnN0b3JlLnN0YXRlLmFscGhhIH19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicHJvYjdfcmV0cFwiIGNsYXNzPVwicHJvYjdfcmV0cFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInByb2I4X3JlZm5cIiBjbGFzcz1cInByb2I4X3JlZm5cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwcm9iOV9uZXRuXCIgY2xhc3M9XCJwcm9iOV9uZXRuXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicHJvYjEwX25lZnBcIiBjbGFzcz1cInByb2IxMF9uZWZwXCI+PC9kaXY+PC9iPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHA+PGJyPlxyXG5cclxuICAgICAgICAgICAgUFBWOiA8Yj48c3BhbiBpZD1cInBwdlwiPjwvc3Bhbj48L2I+PGJyPlxyXG4gICAgICAgICAgICBGYWxzZSBEaXNjb3ZlcnkgUmF0ZTogPGI+PHNwYW4gaWQ9XCJmYWxzZV9yYXRlXCI+PC9zcGFuPjwvYj48YnI+XHJcbiAgICAgICAgICAgIFNlbnNpdGl2aXR5OiA8Yj48c3BhbiBpZD1cInNlbnNpdGl2aXR5XCI+PC9zcGFuPjwvYj48YnI+XHJcbiAgICAgICAgICAgIFNwZWNpZmljaXR5OiA8Yj48c3BhbiBpZD1cInNwZWNpZmljaXR5XCI+PC9zcGFuPjwvYj5cclxuXHJcblxyXG4gICAgICAgICAgICA8YnI+PGJyPjxicj48YnI+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJ0ZXh0LWFsaWduOmp1c3RpZnlcIj5cclxuICAgICAgICAgICAgICBGb3IgZXhhbXBsZSwgaWYgMSUgb2YgdGhlIHBvcHVsYXRpb24gaXMgYWZmbGljdGVkIHdpdGggYSBkaXNlYXNlLCBhbmRcclxuICAgICAgICAgICAgICB0aGUgdGVzdCBmb3IgdGhlIGRpc2Vhc2UgaXMgOTklIGFjY3VyYXRlLCB3ZSBtYXkgaW50dWl0IHRoYXRcclxuICAgICAgICAgICAgICBvdXIgZGlhZ25vc2lzIHdpbGwgYmUgY29ycmVjdCA5OSUgb2YgdGhlIHRpbWUuIEhvd2V2ZXIsIGlmICYjOTQ1OyA9IDAuMDUgYW5kICYjOTQ2OyA9IDAuMDEsIHdlIHdpbGwgYWNjdXJhdGVseSBkaWFnbm9zZSBhIHBhdGllbnQgd2l0aCB0aGUgZGlzZWFzZSBvbmx5IDE2JSBvZiB0aGUgdGltZS4gVGhlIFBQViBpbiB0aGlzIGNhc2UgaXMgMTYlLjxzdXA+NDwvc3VwPlxyXG4gICAgICAgICAgICAgIDxicj48YnI+XHJcbiAgICAgICAgICAgICAgVGhlIHByb2JhYmlsaXR5IG9mIHRoZSByZWFsIGVmZmVjdCAoZS5nLiwgcHJldmFsZW5jZSBvZiBkaXNlYXNlKSBjYW4gYmUgbW9kaWZpZWQgYWJvdmUuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPCEtLSA8aDE+e3sgbXNnIH19PC9oMT5cclxuICAgICAgPHA+XHJcbiAgICAgICAgRm9yIGEgZ3VpZGUgYW5kIHJlY2lwZXMgb24gaG93IHRvIGNvbmZpZ3VyZSAvIGN1c3RvbWl6ZSB0aGlzIHByb2plY3QsPGJyPlxyXG4gICAgICAgIGNoZWNrIG91dCB0aGVcclxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9jbGkudnVlanMub3JnXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXJcIj52dWUtY2xpIGRvY3VtZW50YXRpb248L2E+LlxyXG4gICAgICA8L3A+XHJcbiAgICAgIDxoMz5QUFYgQ29tcG9uZW50PC9oMz5cclxuICAgICAgPHAgaWQ9XCJkZW1vXCIgQGNsaWNrPVwibXlGdW5jdGlvblwiPkxPUkVNIElQU1VNIExPUkVNIElQU1VNIExPUkVNIElQU1VNIExPUkVNIElQU1VNIDwvcD5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIDxsaT4xMjM8L2xpPlxyXG4gICAgICAgIDxsaT40NTY8L2xpPlxyXG4gICAgICAgIDxsaT57eyBzdG9yZWNvdW50IH19PC9saT5cclxuICAgICAgICA8bGk+e3sgdGhpcy5zdG9yZS5zdGF0ZS5jb3VudCB9fTwvbGk+XHJcbiAgICAgIDwvdWw+IC0tPlxyXG5cclxuXHJcblxyXG4gICAgPC9kaXY+XHJcbiAgPC90ZW1wbGF0ZT5cclxuICBcclxuICA8c2NyaXB0PlxyXG4gIGltcG9ydCB0ZXN0IGZyb20gJ0AvbXlsaWInO1xyXG4gIGltcG9ydCBzdG9yZSBmcm9tICdAL3N0b3JlL3N0b3JlJyBcclxuXHJcbiAgY29uc29sZS5sb2codGVzdC5mb28oKSk7XHJcbi8vICAgc3RvcmUuY29tbWl0KCdpbmNyZW1lbnQnKTtcclxuXHJcbiAgY29uc29sZS5sb2codGhpcy4kbWF0aC5yb3VuZCg5OTkuMTExMTExMTExLCAyKSk7XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHN0b3JlLFxyXG4gICAgbmFtZTogJ1BQVkNvbXBvbmVudCcsXHJcbiAgICBwcm9wczoge1xyXG4gICAgICBtc2c6IFN0cmluZ1xyXG4gICAgfSxcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc3RvcmUsXHJcbiAgICAgICAgICAgIHN0b3JlY291bnQ6IHN0b3JlLnN0YXRlLmNvdW50XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBteUZ1bmN0aW9uOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHN0b3JlLmNvbW1pdCgnZGVjcmVtZW50Jyk7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcmVjb3VudCsrO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlbW9cIikuaW5uZXJIVE1MID0gXCJJIGhhdmUgY2hhbmdlZCFcIjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIHByb2IzX3RwOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gICAgIHJldHVybiAxLXN0b3JlLnN0YXRlLmJldGFcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIHByb2I1X3RuOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gICAgIHJldHVybiAxLXN0b3JlLnN0YXRlLmFscGhhXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICBcclxuICAgIH0sXHJcbiAgICBtb3VudGVkKCkge1xyXG4gICAgICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVtb1wiKS5pbm5lckhUTUwgPSBcIkkgaGF2ZSBjaGFuZ2VkIVwiO1xyXG4gICAgICAgIC8vIGxldCBteUZ1bmN0aW9uID0gKCkgPT4geyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlbW9cIikuaW5uZXJIVE1MID0gXCJJIGhhdmUgY2hhbmdlZCFcIjsgfTtcclxuICAgIH1cclxuICB9XHJcbiAgPC9zY3JpcHQ+XHJcbiAgXHJcbiAgPCEtLSBBZGQgXCJzY29wZWRcIiBhdHRyaWJ1dGUgdG8gbGltaXQgQ1NTIHRvIHRoaXMgY29tcG9uZW50IG9ubHkgLS0+XHJcbiAgPHN0eWxlIHNjb3BlZD5cclxuICBoMyB7XHJcbiAgICBtYXJnaW46IDQwcHggMCAwO1xyXG4gIH1cclxuICB1bCB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuICBsaSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW46IDAgMTBweDtcclxuICB9XHJcbiAgYSB7XHJcbiAgICBjb2xvcjogIzQyYjk4MztcclxuICB9XHJcbiAgPC9zdHlsZT5cclxuICAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/PPVComponent.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/PPVComponent.vue?vue&type=template&id=dc2dc852&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/PPVComponent.vue?vue&type=template&id=dc2dc852&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* binding */ render; },\n/* harmony export */   \"staticRenderFns\": function() { return /* binding */ staticRenderFns; }\n/* harmony export */ });\nvar render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c(\"div\", {\n    staticClass: \"ppv\"\n  }, [_c(\"b\", [_vm._v(\"Positive Predictive Value (PPV)\")]), _c(\"br\"), _c(\"br\"), _c(\"b\", [_vm._v(\"Probability tree diagram\")]), _c(\"div\", {\n    staticClass: \"diagram-box\"\n  }, [_c(\"div\", {\n    staticClass: \"responsive\"\n  }, [_c(\"img\", {\n    staticClass: \"responsive\",\n    attrs: {\n      src: \"{% static 'images/tree.svg' %}\"\n    }\n  }), _c(\"input\", {\n    staticClass: \"prob1_re\",\n    attrs: {\n      id: \"prob1_re\",\n      value: \"0.01\",\n      size: \"3\"\n    }\n  }), _c(\"div\", {\n    staticClass: \"prob2_ne\",\n    attrs: {\n      id: \"prob2_ne\"\n    }\n  }), _c(\"b\", [_c(\"div\", {\n    staticClass: \"prob3_tp\",\n    attrs: {\n      id: \"prob3_tp\"\n    }\n  }, [_vm._v(\"prob3_tp: \" + _vm._s(this.store.state.prob3_tp))]), _c(\"div\", {\n    staticClass: \"prob4_fn\",\n    attrs: {\n      id: \"prob4_fn\"\n    }\n  }, [_vm._v(\"beta: \" + _vm._s(this.store.state.beta))]), _c(\"div\", {\n    staticClass: \"prob5_tn\",\n    attrs: {\n      id: \"prob5_tn\"\n    }\n  }, [_vm._v(\"prob5_tn: \" + _vm._s(this.store.state.prob5_tn))]), _c(\"div\", {\n    staticClass: \"prob6_fp\",\n    attrs: {\n      id: \"prob6_fp\"\n    }\n  }, [_vm._v(\"alpha: \" + _vm._s(this.store.state.alpha))]), _c(\"div\", {\n    staticClass: \"prob7_retp\",\n    attrs: {\n      id: \"prob7_retp\"\n    }\n  }), _c(\"div\", {\n    staticClass: \"prob8_refn\",\n    attrs: {\n      id: \"prob8_refn\"\n    }\n  }), _c(\"div\", {\n    staticClass: \"prob9_netn\",\n    attrs: {\n      id: \"prob9_netn\"\n    }\n  }), _c(\"div\", {\n    staticClass: \"prob10_nefp\",\n    attrs: {\n      id: \"prob10_nefp\"\n    }\n  })])])]), _vm._m(0), _vm._m(1)]);\n};\nvar staticRenderFns = [function () {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c(\"p\", [_c(\"br\"), _vm._v(\" PPV: \"), _c(\"b\", [_c(\"span\", {\n    attrs: {\n      id: \"ppv\"\n    }\n  })]), _c(\"br\"), _vm._v(\" False Discovery Rate: \"), _c(\"b\", [_c(\"span\", {\n    attrs: {\n      id: \"false_rate\"\n    }\n  })]), _c(\"br\"), _vm._v(\" Sensitivity: \"), _c(\"b\", [_c(\"span\", {\n    attrs: {\n      id: \"sensitivity\"\n    }\n  })]), _c(\"br\"), _vm._v(\" Specificity: \"), _c(\"b\", [_c(\"span\", {\n    attrs: {\n      id: \"specificity\"\n    }\n  })]), _c(\"br\"), _c(\"br\"), _c(\"br\"), _c(\"br\")]);\n}, function () {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c(\"div\", {\n    staticStyle: {\n      \"text-align\": \"justify\"\n    }\n  }, [_vm._v(\" For example, if 1% of the population is afflicted with a disease, and the test for the disease is 99% accurate, we may intuit that our diagnosis will be correct 99% of the time. However, if α = 0.05 and β = 0.01, we will accurately diagnose a patient with the disease only 16% of the time. The PPV in this case is 16%.\"), _c(\"sup\", [_vm._v(\"4\")]), _c(\"br\"), _c(\"br\"), _vm._v(\" The probability of the real effect (e.g., prevalence of disease) can be modified above. \")]);\n}];\nrender._withStripped = true;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvQHZ1ZS92dWUtbG9hZGVyLXYxNS9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1szXSEuL25vZGVfbW9kdWxlcy9AdnVlL3Z1ZS1sb2FkZXItdjE1L2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc3JjL2NvbXBvbmVudHMvUFBWQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kYzJkYzg1MiZzY29wZWQ9dHJ1ZSYuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQU9BO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFXQTtBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdnVlYXBwLy4vc3JjL2NvbXBvbmVudHMvUFBWQ29tcG9uZW50LnZ1ZT81ODRjIl0sInNvdXJjZXNDb250ZW50IjpbInZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHZhciBfdm0gPSB0aGlzLFxuICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInBwdlwiIH0sIFtcbiAgICBfYyhcImJcIiwgW192bS5fdihcIlBvc2l0aXZlIFByZWRpY3RpdmUgVmFsdWUgKFBQVilcIildKSxcbiAgICBfYyhcImJyXCIpLFxuICAgIF9jKFwiYnJcIiksXG4gICAgX2MoXCJiXCIsIFtfdm0uX3YoXCJQcm9iYWJpbGl0eSB0cmVlIGRpYWdyYW1cIildKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImRpYWdyYW0tYm94XCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyZXNwb25zaXZlXCIgfSwgW1xuICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwicmVzcG9uc2l2ZVwiLFxuICAgICAgICAgIGF0dHJzOiB7IHNyYzogXCJ7JSBzdGF0aWMgJ2ltYWdlcy90cmVlLnN2ZycgJX1cIiB9LFxuICAgICAgICB9KSxcbiAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwicHJvYjFfcmVcIixcbiAgICAgICAgICBhdHRyczogeyBpZDogXCJwcm9iMV9yZVwiLCB2YWx1ZTogXCIwLjAxXCIsIHNpemU6IFwiM1wiIH0sXG4gICAgICAgIH0pLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInByb2IyX25lXCIsIGF0dHJzOiB7IGlkOiBcInByb2IyX25lXCIgfSB9KSxcbiAgICAgICAgX2MoXCJiXCIsIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInByb2IzX3RwXCIsIGF0dHJzOiB7IGlkOiBcInByb2IzX3RwXCIgfSB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXCJwcm9iM190cDogXCIgKyBfdm0uX3ModGhpcy5zdG9yZS5zdGF0ZS5wcm9iM190cCkpLFxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicHJvYjRfZm5cIiwgYXR0cnM6IHsgaWQ6IFwicHJvYjRfZm5cIiB9IH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcImJldGE6IFwiICsgX3ZtLl9zKHRoaXMuc3RvcmUuc3RhdGUuYmV0YSkpLFxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicHJvYjVfdG5cIiwgYXR0cnM6IHsgaWQ6IFwicHJvYjVfdG5cIiB9IH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcInByb2I1X3RuOiBcIiArIF92bS5fcyh0aGlzLnN0b3JlLnN0YXRlLnByb2I1X3RuKSksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwcm9iNl9mcFwiLCBhdHRyczogeyBpZDogXCJwcm9iNl9mcFwiIH0gfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwiYWxwaGE6IFwiICsgX3ZtLl9zKHRoaXMuc3RvcmUuc3RhdGUuYWxwaGEpKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInByb2I3X3JldHBcIiwgYXR0cnM6IHsgaWQ6IFwicHJvYjdfcmV0cFwiIH0gfSksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwcm9iOF9yZWZuXCIsIGF0dHJzOiB7IGlkOiBcInByb2I4X3JlZm5cIiB9IH0pLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicHJvYjlfbmV0blwiLCBhdHRyczogeyBpZDogXCJwcm9iOV9uZXRuXCIgfSB9KSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwcm9iMTBfbmVmcFwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwicHJvYjEwX25lZnBcIiB9LFxuICAgICAgICAgIH0pLFxuICAgICAgICBdKSxcbiAgICAgIF0pLFxuICAgIF0pLFxuICAgIF92bS5fbSgwKSxcbiAgICBfdm0uX20oMSksXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fY1xuICAgIHJldHVybiBfYyhcInBcIiwgW1xuICAgICAgX2MoXCJiclwiKSxcbiAgICAgIF92bS5fdihcIiBQUFY6IFwiKSxcbiAgICAgIF9jKFwiYlwiLCBbX2MoXCJzcGFuXCIsIHsgYXR0cnM6IHsgaWQ6IFwicHB2XCIgfSB9KV0pLFxuICAgICAgX2MoXCJiclwiKSxcbiAgICAgIF92bS5fdihcIiBGYWxzZSBEaXNjb3ZlcnkgUmF0ZTogXCIpLFxuICAgICAgX2MoXCJiXCIsIFtfYyhcInNwYW5cIiwgeyBhdHRyczogeyBpZDogXCJmYWxzZV9yYXRlXCIgfSB9KV0pLFxuICAgICAgX2MoXCJiclwiKSxcbiAgICAgIF92bS5fdihcIiBTZW5zaXRpdml0eTogXCIpLFxuICAgICAgX2MoXCJiXCIsIFtfYyhcInNwYW5cIiwgeyBhdHRyczogeyBpZDogXCJzZW5zaXRpdml0eVwiIH0gfSldKSxcbiAgICAgIF9jKFwiYnJcIiksXG4gICAgICBfdm0uX3YoXCIgU3BlY2lmaWNpdHk6IFwiKSxcbiAgICAgIF9jKFwiYlwiLCBbX2MoXCJzcGFuXCIsIHsgYXR0cnM6IHsgaWQ6IFwic3BlY2lmaWNpdHlcIiB9IH0pXSksXG4gICAgICBfYyhcImJyXCIpLFxuICAgICAgX2MoXCJiclwiKSxcbiAgICAgIF9jKFwiYnJcIiksXG4gICAgICBfYyhcImJyXCIpLFxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpcyxcbiAgICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljU3R5bGU6IHsgXCJ0ZXh0LWFsaWduXCI6IFwianVzdGlmeVwiIH0gfSwgW1xuICAgICAgX3ZtLl92KFxuICAgICAgICBcIiBGb3IgZXhhbXBsZSwgaWYgMSUgb2YgdGhlIHBvcHVsYXRpb24gaXMgYWZmbGljdGVkIHdpdGggYSBkaXNlYXNlLCBhbmQgdGhlIHRlc3QgZm9yIHRoZSBkaXNlYXNlIGlzIDk5JSBhY2N1cmF0ZSwgd2UgbWF5IGludHVpdCB0aGF0IG91ciBkaWFnbm9zaXMgd2lsbCBiZSBjb3JyZWN0IDk5JSBvZiB0aGUgdGltZS4gSG93ZXZlciwgaWYgzrEgPSAwLjA1IGFuZCDOsiA9IDAuMDEsIHdlIHdpbGwgYWNjdXJhdGVseSBkaWFnbm9zZSBhIHBhdGllbnQgd2l0aCB0aGUgZGlzZWFzZSBvbmx5IDE2JSBvZiB0aGUgdGltZS4gVGhlIFBQViBpbiB0aGlzIGNhc2UgaXMgMTYlLlwiXG4gICAgICApLFxuICAgICAgX2MoXCJzdXBcIiwgW192bS5fdihcIjRcIildKSxcbiAgICAgIF9jKFwiYnJcIiksXG4gICAgICBfYyhcImJyXCIpLFxuICAgICAgX3ZtLl92KFxuICAgICAgICBcIiBUaGUgcHJvYmFiaWxpdHkgb2YgdGhlIHJlYWwgZWZmZWN0IChlLmcuLCBwcmV2YWxlbmNlIG9mIGRpc2Vhc2UpIGNhbiBiZSBtb2RpZmllZCBhYm92ZS4gXCJcbiAgICAgICksXG4gICAgXSlcbiAgfSxcbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/PPVComponent.vue?vue&type=template&id=dc2dc852&scoped=true&\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "ac1f0dc357ed1808"; }
/******/ }();
/******/ 
/******/ }
);
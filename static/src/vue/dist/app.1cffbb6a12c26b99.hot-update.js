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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/HypothesisComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/HypothesisComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mylib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/mylib */ \"./src/mylib.js\");\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store/store */ \"./src/store/store.js\");\n\n\n\n//   import funcs from '@/welchs';\n\n// console.log(test.foo());\n//   store.commit('increment');\n// console.log(\"MESSAGE:\", store.specialmsg);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  store: _store_store__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  name: 'HypothesisComponent',\n  props: {\n    msg: String\n  },\n  data() {\n    return {\n      store: _store_store__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n      storecount: _store_store__WEBPACK_IMPORTED_MODULE_1__[\"default\"].state.count,\n      text: 0.01,\n      div_reject: 'back-white',\n      div_not_reject: 'back-white',\n      hypothesis_decision: ''\n    };\n  },\n  methods: {\n    myFunction: function () {\n      _store_store__WEBPACK_IMPORTED_MODULE_1__[\"default\"].commit('decrement');\n      this.storecount++;\n      document.getElementById(\"demo\").innerHTML = \"I have changed!\";\n    },\n    handleInput(event) {\n      let prob = event.target.value;\n      console.log(prob);\n      if (prob >= 0) {\n        console.log(\"In range.\");\n        _store_store__WEBPACK_IMPORTED_MODULE_1__[\"default\"].commit('updateProbRealEffect', {\n          prob\n        });\n      } else {\n        console.log(\"Out of range.\");\n      }\n    },\n    showRejectOrNotReject() {\n      // former inputs: crit_t_value, t_value\n      // determine recommendation: to reject or not reject the null hypothesis\n      if (this.store.state.crit_t_value <= this.store.state.t_value) {\n        this.hypothesis_decision = \"Reject the Null Hypothesis (H\\u2080)\";\n        this.div_reject = 'back-orange';\n        this.div_not_reject = 'back-white';\n      } else if (this.store.state.crit_t_value > this.store.state.t_value) {\n        this.hypothesis_decision = \"Do Not Reject the Null Hypothesis (H\\u2080)\";\n        this.div_reject = 'back-white';\n        this.div_not_reject = 'back-orange';\n      } else {\n        this.hypothesis_decision = \"\";\n        this.div_reject = 'back-white';\n        this.div_not_reject = 'back-white';\n      }\n    }\n  },\n  computed: {\n    count() {\n      return this.store.state.crit_t_value;\n      // Or return basket.getters.fruitsCount\n      // (depends on your design decisions).\n    }\n  },\n\n  watch: {\n    count(newCount) {\n      // Our fancy notification (2).\n      console.log(`We have ${newCount} fruits now!`);\n      this.showRejectOrNotReject();\n    }\n  },\n  // watch: {\n  // userCount (newVal) {\n  //   this.myFantasticFunc(newVal)\n  // },\n\n  mounted() {\n    let prob = 0.01;\n    _store_store__WEBPACK_IMPORTED_MODULE_1__[\"default\"].commit('updateProbRealEffect', {\n      prob\n    });\n    // console.log(\"MATH ROUND:\", math.round(999.111111111, 4));\n    // let myFunction = () => { document.getElementById(\"demo\").innerHTML = \"I have changed!\"; };\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvQHZ1ZS92dWUtbG9hZGVyLXYxNS9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NyYy9jb21wb25lbnRzL0h5cG90aGVzaXNDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsIm1hcHBpbmdzIjoiOzs7QUF1Q0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTtBQUNBOztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92dWVhcHAvc3JjL2NvbXBvbmVudHMvSHlwb3RoZXNpc0NvbXBvbmVudC52dWU/NDhiMSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwiaHRcIj5cclxuICAgICAgPGJyPlxyXG4gICAgICAgICAgPGk+SDxzdWI+MDwvc3ViPjwvaT46IHBvcHVsYXRpb24gMSBtZWFuID0gcG9wdWxhdGlvbiAyIG1lYW48YnI+XHJcbiAgICAgICAgICA8aT5IPHN1Yj4xPC9zdWI+PC9pPjogcG9wdWxhdGlvbiAxIG1lYW4gJmx0OyBwb3B1bGF0aW9uIDIgbWVhbjxicj5cclxuICAgICAgICAgIDxicj5cclxuXHJcbiAgICAgICAgICA8Yj48c3BhbiBpZD1cInJlamVjdC1vci1ub3RcIj57eyBoeXBvdGhlc2lzX2RlY2lzaW9uIH19PC9zcGFuPjwvYj5cclxuICAgICAgICAgIDxwPjxicj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JpZC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyaWQtaXRlbVwiPjxpPkg8c3ViPjA8L3N1Yj48L2k+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncmlkLWl0ZW1cIiA6Y2xhc3M9XCJkaXZfcmVqZWN0XCIgaWQ9XCJyZWplY3RcIj5SRUpFQ1Q8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyaWQtaXRlbVwiIDpjbGFzcz1cImRpdl9ub3RfcmVqZWN0XCIgaWQ9XCJub3QtcmVqZWN0XCI+Tk9UIFJFSkVDVDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JpZC1pdGVtXCI+VFJVRTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JpZC1pdGVtXCIgaWQ9XCJhbHBoYS1ib3hcIj5cclxuICAgICAgICAgICAgICA8Yj48c3BhbiBpZD1cImFscGhhXCI+e3sgdGhpcy5zdG9yZS5zdGF0ZS5hbHBoYSB9fTwvc3Bhbj48L2I+PGJyPjxicj5cclxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT1cImNvbG9yOnJlZFwiPkZhbHNlIFBvc2l0aXZlPGJyPlR5cGUgSSBFcnJvcjxicj4oJiM5NDU7KTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncmlkLWl0ZW1cIj5cclxuICAgICAgICAgICAgICA8Yj48c3BhbiBpZD1cImNvbmZpZGVuY2VcIj57eyB0aGlzLnN0b3JlLnN0YXRlLmNvbmZpZGVuY2UgfX08L3NwYW4+PC9iPjxicj48YnI+XHJcbiAgICAgICAgICAgICAgVHJ1ZSBOZWdhdGl2ZTxicj5Db25maWRlbmNlPGJyPigxIC0gJiM5NDU7KVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyaWQtaXRlbVwiPkZBTFNFPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncmlkLWl0ZW1cIj5cclxuICAgICAgICAgICAgICA8Yj48c3BhbiBpZD1cInBvd2VyXCI+e3sgdGhpcy5zdG9yZS5zdGF0ZS5wb3dlciB9fTwvc3Bhbj48L2I+PGJyPjxicj5cclxuICAgICAgICAgICAgICBUcnVlIFBvc2l0aXZlPGJyPlBvd2VyPGJyPigxIC0gJiM5NDY7KVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyaWQtaXRlbVwiIGlkPVwiYmV0YS1ib3hcIj5cclxuICAgICAgICAgICAgICA8Yj48c3BhbiBpZD1cImJldGFcIj57eyB0aGlzLnN0b3JlLnN0YXRlLmJldGEgfX08L3NwYW4+PC9iPjxicj48YnI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9XCJjb2xvcjpibHVlXCI+RmFsc2UgTmVnYXRpdmU8YnI+VHlwZSBJSSBFcnJvcjxicj4oJiM5NDY7KTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgPC9kaXY+XHJcbiAgPC90ZW1wbGF0ZT5cclxuICBcclxuICA8c2NyaXB0PlxyXG4gIGltcG9ydCB0ZXN0IGZyb20gJ0AvbXlsaWInO1xyXG4gIGltcG9ydCBzdG9yZSBmcm9tICdAL3N0b3JlL3N0b3JlJzsgXHJcbiAgaW1wb3J0ICogYXMgbWF0aCBmcm9tICdtYXRoanMnO1xyXG4vLyAgIGltcG9ydCBmdW5jcyBmcm9tICdAL3dlbGNocyc7XHJcblxyXG5cclxuICAvLyBjb25zb2xlLmxvZyh0ZXN0LmZvbygpKTtcclxuLy8gICBzdG9yZS5jb21taXQoJ2luY3JlbWVudCcpO1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJNRVNTQUdFOlwiLCBzdG9yZS5zcGVjaWFsbXNnKTtcclxuXHJcbiAgXHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHN0b3JlLFxyXG4gICAgbmFtZTogJ0h5cG90aGVzaXNDb21wb25lbnQnLFxyXG4gICAgcHJvcHM6IHtcclxuICAgICAgbXNnOiBTdHJpbmdcclxuICAgIH0sXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHN0b3JlLFxyXG4gICAgICAgICAgICBzdG9yZWNvdW50OiBzdG9yZS5zdGF0ZS5jb3VudCxcclxuICAgICAgICAgICAgdGV4dDogMC4wMSxcclxuICAgICAgICAgICAgZGl2X3JlamVjdDogJ2JhY2std2hpdGUnLFxyXG4gICAgICAgICAgICBkaXZfbm90X3JlamVjdDogJ2JhY2std2hpdGUnLFxyXG4gICAgICAgICAgICBoeXBvdGhlc2lzX2RlY2lzaW9uOiAnJyxcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIG15RnVuY3Rpb246IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgc3RvcmUuY29tbWl0KCdkZWNyZW1lbnQnKTtcclxuICAgICAgICAgICAgdGhpcy5zdG9yZWNvdW50Kys7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVtb1wiKS5pbm5lckhUTUwgPSBcIkkgaGF2ZSBjaGFuZ2VkIVwiO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGFuZGxlSW5wdXQoZXZlbnQpIHtcclxuICAgICAgICAgICAgbGV0IHByb2IgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2IpO1xyXG4gICAgICAgICAgICBpZiAocHJvYiA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkluIHJhbmdlLlwiKTtcclxuICAgICAgICAgICAgICAgIHN0b3JlLmNvbW1pdCgndXBkYXRlUHJvYlJlYWxFZmZlY3QnLCB7IHByb2IgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk91dCBvZiByYW5nZS5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHNob3dSZWplY3RPck5vdFJlamVjdCgpeyAgLy8gZm9ybWVyIGlucHV0czogY3JpdF90X3ZhbHVlLCB0X3ZhbHVlXHJcbiAgICAgICAgICAvLyBkZXRlcm1pbmUgcmVjb21tZW5kYXRpb246IHRvIHJlamVjdCBvciBub3QgcmVqZWN0IHRoZSBudWxsIGh5cG90aGVzaXNcclxuICAgICAgICAgIGlmICh0aGlzLnN0b3JlLnN0YXRlLmNyaXRfdF92YWx1ZSA8PSB0aGlzLnN0b3JlLnN0YXRlLnRfdmFsdWUpe1xyXG4gICAgICAgICAgICB0aGlzLmh5cG90aGVzaXNfZGVjaXNpb24gPSBcIlJlamVjdCB0aGUgTnVsbCBIeXBvdGhlc2lzIChIXFx1MjA4MClcIjtcclxuICAgICAgICAgICAgdGhpcy5kaXZfcmVqZWN0ID0gJ2JhY2stb3JhbmdlJztcclxuICAgICAgICAgICAgdGhpcy5kaXZfbm90X3JlamVjdCA9ICdiYWNrLXdoaXRlJztcclxuICAgICAgICAgIH0gXHJcbiAgICAgICAgICBlbHNlIGlmICh0aGlzLnN0b3JlLnN0YXRlLmNyaXRfdF92YWx1ZSA+IHRoaXMuc3RvcmUuc3RhdGUudF92YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmh5cG90aGVzaXNfZGVjaXNpb24gPSBcIkRvIE5vdCBSZWplY3QgdGhlIE51bGwgSHlwb3RoZXNpcyAoSFxcdTIwODApXCI7XHJcbiAgICAgICAgICAgIHRoaXMuZGl2X3JlamVjdCA9ICdiYWNrLXdoaXRlJztcclxuICAgICAgICAgICAgdGhpcy5kaXZfbm90X3JlamVjdCA9ICdiYWNrLW9yYW5nZSc7XHJcbiAgICAgICAgICB9IFxyXG4gICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaHlwb3RoZXNpc19kZWNpc2lvbiA9IFwiXCI7XHJcbiAgICAgICAgICAgIHRoaXMuZGl2X3JlamVjdCA9ICdiYWNrLXdoaXRlJztcclxuICAgICAgICAgICAgdGhpcy5kaXZfbm90X3JlamVjdCA9ICdiYWNrLXdoaXRlJztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGNvbXB1dGVkOiB7XHJcbiAgICAgIGNvdW50ICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdG9yZS5zdGF0ZS5jcml0X3RfdmFsdWVcclxuICAgICAgICAvLyBPciByZXR1cm4gYmFza2V0LmdldHRlcnMuZnJ1aXRzQ291bnRcclxuICAgICAgICAvLyAoZGVwZW5kcyBvbiB5b3VyIGRlc2lnbiBkZWNpc2lvbnMpLlxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgd2F0Y2g6IHtcclxuICAgICAgY291bnQgKG5ld0NvdW50KSB7XHJcbiAgICAgICAgLy8gT3VyIGZhbmN5IG5vdGlmaWNhdGlvbiAoMikuXHJcbiAgICAgICAgY29uc29sZS5sb2coYFdlIGhhdmUgJHtuZXdDb3VudH0gZnJ1aXRzIG5vdyFgKVxyXG4gICAgICAgIHRoaXMuc2hvd1JlamVjdE9yTm90UmVqZWN0KCk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvLyB3YXRjaDoge1xyXG4gICAgLy8gdXNlckNvdW50IChuZXdWYWwpIHtcclxuICAgIC8vICAgdGhpcy5teUZhbnRhc3RpY0Z1bmMobmV3VmFsKVxyXG4gICAgLy8gfSxcclxuXHJcbiAgICBtb3VudGVkKCkge1xyXG4gICAgICAgIGxldCBwcm9iID0gMC4wMTtcclxuICAgICAgICBzdG9yZS5jb21taXQoJ3VwZGF0ZVByb2JSZWFsRWZmZWN0JywgeyBwcm9iIH0pO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiTUFUSCBST1VORDpcIiwgbWF0aC5yb3VuZCg5OTkuMTExMTExMTExLCA0KSk7XHJcbiAgICAgICAgLy8gbGV0IG15RnVuY3Rpb24gPSAoKSA9PiB7IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVtb1wiKS5pbm5lckhUTUwgPSBcIkkgaGF2ZSBjaGFuZ2VkIVwiOyB9O1xyXG4gICAgfVxyXG4gIH1cclxuICA8L3NjcmlwdD5cclxuICBcclxuICA8IS0tIEFkZCBcInNjb3BlZFwiIGF0dHJpYnV0ZSB0byBsaW1pdCBDU1MgdG8gdGhpcyBjb21wb25lbnQgb25seSAtLT5cclxuICA8c3R5bGUgc2NvcGVkPlxyXG4gICAgaDMge1xyXG4gICAgICAgIG1hcmdpbjogNDBweCAwIDA7XHJcbiAgICB9XHJcbiAgICB1bCB7XHJcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgICBsaSB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIG1hcmdpbjogMCAxMHB4O1xyXG4gICAgfVxyXG4gICAgYSB7XHJcbiAgICAgICAgY29sb3I6ICM0MmI5ODM7XHJcbiAgICB9XHJcblxyXG4gICAgLnJlc3BvbnNpdmUge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgIH1cclxuXHJcbiAgICAuaHQge1xyXG4gICAgICAgIC8qIGRpc3BsYXk6IGJsb2NrOyAqL1xyXG4gICAgICAgIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTsgKi9cclxuICAgICAgICAvKiBmbG9hdDogbGVmdDsgKi9cclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIH1cclxuXHJcbiAgICAuZGlhZ3JhbS1ib3gge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYzhjOGM4O1xyXG4gICAgXHJcbiAgICB9XHJcblxyXG4gICAgLmdyaWQtY29udGFpbmVyIHtcclxuICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gYXV0bztcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgICAgcGFkZGluZzogMHB4O1xyXG4gIH1cclxuICAuZ3JpZC1pdGVtIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjOGM4Yzg7ICAvKnJnYmEoMCwgMCwgMCwgMC44KTsqL1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG5cclxuICAuYmFjay1vcmFuZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmM2UwMDtcclxuICB9XHJcblxyXG4gIC5iYWNrLXdoaXRlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgfVxyXG5cclxuICA8L3N0eWxlPlxyXG4gICJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/HypothesisComponent.vue?vue&type=script&lang=js&\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "07978aae93ff2fad"; }
/******/ }();
/******/ 
/******/ }
);
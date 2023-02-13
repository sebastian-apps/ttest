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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mylib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/mylib */ \"./src/mylib.js\");\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store/store */ \"./src/store/store.js\");\n/* harmony import */ var mathjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mathjs */ \"./node_modules/mathjs/lib/esm/entry/pureFunctionsAny.generated.js\");\n\n\n\n//   import funcs from '@/welchs';\n\nconsole.log(_mylib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].foo());\n//   store.commit('increment');\n// console.log(\"MESSAGE:\", store.specialmsg);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  store: _store_store__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  name: 'HypothesisComponent',\n  props: {\n    msg: String\n  },\n  data() {\n    return {\n      store: _store_store__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n      storecount: _store_store__WEBPACK_IMPORTED_MODULE_1__[\"default\"].state.count,\n      text: 0.01,\n      div_reject: 'back-white',\n      div_not_reject: 'back-white',\n      hypothesis_decision: ''\n    };\n  },\n  methods: {\n    myFunction: function () {\n      _store_store__WEBPACK_IMPORTED_MODULE_1__[\"default\"].commit('decrement');\n      this.storecount++;\n      document.getElementById(\"demo\").innerHTML = \"I have changed!\";\n    },\n    handleInput(event) {\n      let prob = event.target.value;\n      console.log(prob);\n      if (prob >= 0) {\n        console.log(\"In range.\");\n        _store_store__WEBPACK_IMPORTED_MODULE_1__[\"default\"].commit('updateProbRealEffect', {\n          prob\n        });\n      } else {\n        console.log(\"Out of range.\");\n      }\n    },\n    showRejectOrNotReject(crit_t_value, t_value) {\n      // determine recommendation: to reject or not reject the null hypothesis\n      if (crit_t_value <= t_value) {\n        this.hypothesis_decision = \"Reject the Null Hypothesis (H\\u2080)\";\n        this.div_reject = 'back-orange';\n        this.div_not_reject = 'back-orange';\n      } else if (crit_t_value > t_value) {\n        this.hypothesis_decision = \"Do Not Reject the Null Hypothesis (H\\u2080)\";\n        this.div_reject = 'back-orange';\n        this.div_not_reject = 'back-orange';\n      } else {\n        this.hypothesis_decision = \"\";\n        this.div_reject = 'back-orange';\n        this.div_not_reject = 'back-orange';\n      }\n    },\n    showRejectOrNotReject() {\n      console.log(\"this.store.state.crit_t_value:\", this.store.state.crit_t_value);\n      console.log(\"this.store.state.t_value:\", this.store.state.t_value);\n      if (this.store.state.crit_t_value <= this.store.state.t_value) {\n        this.hypothesis_decision = \"Reject the Null Hypothesis (H\\u2080)\";\n        this.div_reject = 'back-orange';\n        this.div_not_reject = 'back-white';\n      } else if (this.store.state.crit_t_value > this.store.state.t_value) {\n        console.log(\"this.store.state.crit_t_value > this.store.state.t_value\");\n        this.div_reject = 'back-white';\n        this.div_not_reject = 'back-orange';\n      }\n    }\n  },\n  computed: {\n    count() {\n      return this.store.state.crit_t_value;\n      // Or return basket.getters.fruitsCount\n      // (depends on your design decisions).\n    }\n  },\n\n  watch: {\n    count(newCount) {\n      // Our fancy notification (2).\n      console.log(`We have ${newCount} fruits now, yay!`);\n      this.showRejectOrNotReject();\n    }\n  },\n  // watch: {\n  // userCount (newVal) {\n  //   this.myFantasticFunc(newVal)\n  // },\n\n  mounted() {\n    let prob = 0.01;\n    _store_store__WEBPACK_IMPORTED_MODULE_1__[\"default\"].commit('updateProbRealEffect', {\n      prob\n    });\n    console.log(\"MATH ROUND:\", mathjs__WEBPACK_IMPORTED_MODULE_2__.round(999.111111111, 4));\n    // let myFunction = () => { document.getElementById(\"demo\").innerHTML = \"I have changed!\"; };\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvQHZ1ZS92dWUtbG9hZGVyLXYxNS9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NyYy9jb21wb25lbnRzL0h5cG90aGVzaXNDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBdUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBO0FBQ0E7QUFDQTs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdnVlYXBwL3NyYy9jb21wb25lbnRzL0h5cG90aGVzaXNDb21wb25lbnQudnVlPzQ4YjEiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiBjbGFzcz1cImh0XCI+XHJcbiAgICAgIDxicj5cclxuICAgICAgICAgIDxpPkg8c3ViPjA8L3N1Yj48L2k+OiBwb3B1bGF0aW9uIDEgbWVhbiA9IHBvcHVsYXRpb24gMiBtZWFuPGJyPlxyXG4gICAgICAgICAgPGk+SDxzdWI+MTwvc3ViPjwvaT46IHBvcHVsYXRpb24gMSBtZWFuICZsdDsgcG9wdWxhdGlvbiAyIG1lYW48YnI+XHJcbiAgICAgICAgICA8YnI+XHJcblxyXG4gICAgICAgICAgPGI+PHNwYW4gaWQ9XCJyZWplY3Qtb3Itbm90XCI+e3sgaHlwb3RoZXNpc19kZWNpc2lvbiB9fTwvc3Bhbj48L2I+XHJcbiAgICAgICAgICA8cD48YnI+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImdyaWQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncmlkLWl0ZW1cIj48aT5IPHN1Yj4wPC9zdWI+PC9pPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JpZC1pdGVtXCIgOmNsYXNzPVwiZGl2X3JlamVjdFwiIGlkPVwicmVqZWN0XCI+UkVKRUNUPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncmlkLWl0ZW1cIiA6Y2xhc3M9XCJkaXZfbm90X3JlamVjdFwiIGlkPVwibm90LXJlamVjdFwiPk5PVCBSRUpFQ1Q8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyaWQtaXRlbVwiPlRSVUU8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyaWQtaXRlbVwiIGlkPVwiYWxwaGEtYm94XCI+XHJcbiAgICAgICAgICAgICAgPGI+PHNwYW4gaWQ9XCJhbHBoYVwiPnt7IHRoaXMuc3RvcmUuc3RhdGUuYWxwaGEgfX08L3NwYW4+PC9iPjxicj48YnI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9XCJjb2xvcjpyZWRcIj5GYWxzZSBQb3NpdGl2ZTxicj5UeXBlIEkgRXJyb3I8YnI+KCYjOTQ1Oyk8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JpZC1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgPGI+PHNwYW4gaWQ9XCJjb25maWRlbmNlXCI+e3sgdGhpcy5zdG9yZS5zdGF0ZS5jb25maWRlbmNlIH19PC9zcGFuPjwvYj48YnI+PGJyPlxyXG4gICAgICAgICAgICAgIFRydWUgTmVnYXRpdmU8YnI+Q29uZmlkZW5jZTxicj4oMSAtICYjOTQ1OylcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncmlkLWl0ZW1cIj5GQUxTRTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JpZC1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgPGI+PHNwYW4gaWQ9XCJwb3dlclwiPnt7IHRoaXMuc3RvcmUuc3RhdGUucG93ZXIgfX08L3NwYW4+PC9iPjxicj48YnI+XHJcbiAgICAgICAgICAgICAgVHJ1ZSBQb3NpdGl2ZTxicj5Qb3dlcjxicj4oMSAtICYjOTQ2OylcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncmlkLWl0ZW1cIiBpZD1cImJldGEtYm94XCI+XHJcbiAgICAgICAgICAgICAgPGI+PHNwYW4gaWQ9XCJiZXRhXCI+e3sgdGhpcy5zdG9yZS5zdGF0ZS5iZXRhIH19PC9zcGFuPjwvYj48YnI+PGJyPlxyXG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlPVwiY29sb3I6Ymx1ZVwiPkZhbHNlIE5lZ2F0aXZlPGJyPlR5cGUgSUkgRXJyb3I8YnI+KCYjOTQ2Oyk8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgIDwvZGl2PlxyXG4gIDwvdGVtcGxhdGU+XHJcbiAgXHJcbiAgPHNjcmlwdD5cclxuICBpbXBvcnQgdGVzdCBmcm9tICdAL215bGliJztcclxuICBpbXBvcnQgc3RvcmUgZnJvbSAnQC9zdG9yZS9zdG9yZSc7IFxyXG4gIGltcG9ydCAqIGFzIG1hdGggZnJvbSAnbWF0aGpzJztcclxuLy8gICBpbXBvcnQgZnVuY3MgZnJvbSAnQC93ZWxjaHMnO1xyXG5cclxuXHJcbiAgY29uc29sZS5sb2codGVzdC5mb28oKSk7XHJcbi8vICAgc3RvcmUuY29tbWl0KCdpbmNyZW1lbnQnKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiTUVTU0FHRTpcIiwgc3RvcmUuc3BlY2lhbG1zZyk7XHJcblxyXG4gIFxyXG5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBzdG9yZSxcclxuICAgIG5hbWU6ICdIeXBvdGhlc2lzQ29tcG9uZW50JyxcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIG1zZzogU3RyaW5nXHJcbiAgICB9LFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzdG9yZSxcclxuICAgICAgICAgICAgc3RvcmVjb3VudDogc3RvcmUuc3RhdGUuY291bnQsXHJcbiAgICAgICAgICAgIHRleHQ6IDAuMDEsXHJcbiAgICAgICAgICAgIGRpdl9yZWplY3Q6ICdiYWNrLXdoaXRlJyxcclxuICAgICAgICAgICAgZGl2X25vdF9yZWplY3Q6ICdiYWNrLXdoaXRlJyxcclxuICAgICAgICAgICAgaHlwb3RoZXNpc19kZWNpc2lvbjogJycsXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBteUZ1bmN0aW9uOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHN0b3JlLmNvbW1pdCgnZGVjcmVtZW50Jyk7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcmVjb3VudCsrO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlbW9cIikuaW5uZXJIVE1MID0gXCJJIGhhdmUgY2hhbmdlZCFcIjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGhhbmRsZUlucHV0KGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGxldCBwcm9iID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9iKTtcclxuICAgICAgICAgICAgaWYgKHByb2IgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJJbiByYW5nZS5cIik7XHJcbiAgICAgICAgICAgICAgICBzdG9yZS5jb21taXQoJ3VwZGF0ZVByb2JSZWFsRWZmZWN0JywgeyBwcm9iIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJPdXQgb2YgcmFuZ2UuXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzaG93UmVqZWN0T3JOb3RSZWplY3QoY3JpdF90X3ZhbHVlLCB0X3ZhbHVlKXtcclxuICAgICAgICAgIC8vIGRldGVybWluZSByZWNvbW1lbmRhdGlvbjogdG8gcmVqZWN0IG9yIG5vdCByZWplY3QgdGhlIG51bGwgaHlwb3RoZXNpc1xyXG4gICAgICAgICAgaWYgKGNyaXRfdF92YWx1ZSA8PSB0X3ZhbHVlKXtcclxuICAgICAgICAgICAgdGhpcy5oeXBvdGhlc2lzX2RlY2lzaW9uID0gXCJSZWplY3QgdGhlIE51bGwgSHlwb3RoZXNpcyAoSFxcdTIwODApXCI7XHJcbiAgICAgICAgICAgIHRoaXMuZGl2X3JlamVjdCA9ICdiYWNrLW9yYW5nZSc7XHJcbiAgICAgICAgICAgIHRoaXMuZGl2X25vdF9yZWplY3QgPSAnYmFjay1vcmFuZ2UnO1xyXG5cclxuICAgICAgICAgIH0gZWxzZSBpZiAoY3JpdF90X3ZhbHVlID4gdF92YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmh5cG90aGVzaXNfZGVjaXNpb24gPSBcIkRvIE5vdCBSZWplY3QgdGhlIE51bGwgSHlwb3RoZXNpcyAoSFxcdTIwODApXCI7XHJcbiAgICAgICAgICAgIHRoaXMuZGl2X3JlamVjdCA9ICdiYWNrLW9yYW5nZSc7XHJcbiAgICAgICAgICAgIHRoaXMuZGl2X25vdF9yZWplY3QgPSAnYmFjay1vcmFuZ2UnO1xyXG5cclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaHlwb3RoZXNpc19kZWNpc2lvbiA9IFwiXCI7XHJcbiAgICAgICAgICAgIHRoaXMuZGl2X3JlamVjdCA9ICdiYWNrLW9yYW5nZSc7XHJcbiAgICAgICAgICAgIHRoaXMuZGl2X25vdF9yZWplY3QgPSAnYmFjay1vcmFuZ2UnO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIHNob3dSZWplY3RPck5vdFJlamVjdCgpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzLnN0b3JlLnN0YXRlLmNyaXRfdF92YWx1ZTpcIiwgdGhpcy5zdG9yZS5zdGF0ZS5jcml0X3RfdmFsdWUpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInRoaXMuc3RvcmUuc3RhdGUudF92YWx1ZTpcIiwgdGhpcy5zdG9yZS5zdGF0ZS50X3ZhbHVlKTtcclxuICAgICAgICAgIGlmICh0aGlzLnN0b3JlLnN0YXRlLmNyaXRfdF92YWx1ZSA8PSB0aGlzLnN0b3JlLnN0YXRlLnRfdmFsdWUpe1xyXG4gICAgICAgICAgICB0aGlzLmh5cG90aGVzaXNfZGVjaXNpb24gPSBcIlJlamVjdCB0aGUgTnVsbCBIeXBvdGhlc2lzIChIXFx1MjA4MClcIjtcclxuICAgICAgICAgICAgdGhpcy5kaXZfcmVqZWN0ID0gJ2JhY2stb3JhbmdlJztcclxuICAgICAgICAgICAgdGhpcy5kaXZfbm90X3JlamVjdCA9ICdiYWNrLXdoaXRlJztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2UgaWYgKHRoaXMuc3RvcmUuc3RhdGUuY3JpdF90X3ZhbHVlID4gdGhpcy5zdG9yZS5zdGF0ZS50X3ZhbHVlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGhpcy5zdG9yZS5zdGF0ZS5jcml0X3RfdmFsdWUgPiB0aGlzLnN0b3JlLnN0YXRlLnRfdmFsdWVcIik7XHJcbiAgICAgICAgICAgIHRoaXMuZGl2X3JlamVjdCA9ICdiYWNrLXdoaXRlJztcclxuICAgICAgICAgICAgdGhpcy5kaXZfbm90X3JlamVjdCA9ICdiYWNrLW9yYW5nZSc7XHJcbiAgICAgICAgICB9IFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgfSAgICAgXHJcbiAgICB9LFxyXG4gICAgY29tcHV0ZWQ6IHtcclxuICAgICAgY291bnQgKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0b3JlLnN0YXRlLmNyaXRfdF92YWx1ZVxyXG4gICAgICAgIC8vIE9yIHJldHVybiBiYXNrZXQuZ2V0dGVycy5mcnVpdHNDb3VudFxyXG4gICAgICAgIC8vIChkZXBlbmRzIG9uIHlvdXIgZGVzaWduIGRlY2lzaW9ucykuXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB3YXRjaDoge1xyXG4gICAgICBjb3VudCAobmV3Q291bnQpIHtcclxuICAgICAgICAvLyBPdXIgZmFuY3kgbm90aWZpY2F0aW9uICgyKS5cclxuICAgICAgICBjb25zb2xlLmxvZyhgV2UgaGF2ZSAke25ld0NvdW50fSBmcnVpdHMgbm93LCB5YXkhYClcclxuICAgICAgICB0aGlzLnNob3dSZWplY3RPck5vdFJlamVjdCgpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy8gd2F0Y2g6IHtcclxuICAgIC8vIHVzZXJDb3VudCAobmV3VmFsKSB7XHJcbiAgICAvLyAgIHRoaXMubXlGYW50YXN0aWNGdW5jKG5ld1ZhbClcclxuICAgIC8vIH0sXHJcblxyXG4gICAgbW91bnRlZCgpIHtcclxuICAgICAgICBsZXQgcHJvYiA9IDAuMDE7XHJcbiAgICAgICAgc3RvcmUuY29tbWl0KCd1cGRhdGVQcm9iUmVhbEVmZmVjdCcsIHsgcHJvYiB9KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk1BVEggUk9VTkQ6XCIsIG1hdGgucm91bmQoOTk5LjExMTExMTExMSwgNCkpO1xyXG4gICAgICAgIC8vIGxldCBteUZ1bmN0aW9uID0gKCkgPT4geyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlbW9cIikuaW5uZXJIVE1MID0gXCJJIGhhdmUgY2hhbmdlZCFcIjsgfTtcclxuICAgIH1cclxuICB9XHJcbiAgPC9zY3JpcHQ+XHJcbiAgXHJcbiAgPCEtLSBBZGQgXCJzY29wZWRcIiBhdHRyaWJ1dGUgdG8gbGltaXQgQ1NTIHRvIHRoaXMgY29tcG9uZW50IG9ubHkgLS0+XHJcbiAgPHN0eWxlIHNjb3BlZD5cclxuICAgIGgzIHtcclxuICAgICAgICBtYXJnaW46IDQwcHggMCAwO1xyXG4gICAgfVxyXG4gICAgdWwge1xyXG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gICAgbGkge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBtYXJnaW46IDAgMTBweDtcclxuICAgIH1cclxuICAgIGEge1xyXG4gICAgICAgIGNvbG9yOiAjNDJiOTgzO1xyXG4gICAgfVxyXG5cclxuICAgIC5yZXNwb25zaXZlIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgLmh0IHtcclxuICAgICAgICAvKiBkaXNwbGF5OiBibG9jazsgKi9cclxuICAgICAgICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7ICovXHJcbiAgICAgICAgLyogZmxvYXQ6IGxlZnQ7ICovXHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmRpYWdyYW0tYm94IHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2M4YzhjODtcclxuICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC5ncmlkLWNvbnRhaW5lciB7XHJcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG87XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgIHBhZGRpbmc6IDBweDtcclxuICB9XHJcbiAgLmdyaWQtaXRlbSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzhjOGM4OyAgLypyZ2JhKDAsIDAsIDAsIDAuOCk7Ki9cclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuXHJcbiAgLmJhY2stb3JhbmdlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjNlMDA7XHJcbiAgfVxyXG5cclxuICAuYmFjay13aGl0ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIH1cclxuXHJcbiAgPC9zdHlsZT5cclxuICAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/HypothesisComponent.vue?vue&type=script&lang=js&\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "d16590195c4a8a3d"; }
/******/ }();
/******/ 
/******/ }
);
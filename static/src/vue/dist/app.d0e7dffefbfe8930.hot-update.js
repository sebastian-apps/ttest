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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/store/store */ \"./src/store/store.js\");\n// import test from '@/mylib';\n\n// import * as math from 'mathjs';\n//   import funcs from '@/welchs';\n\n// console.log(test.foo());\n//   store.commit('increment');\n// console.log(\"MESSAGE:\", store.specialmsg);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  store: _store_store__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  name: 'HypothesisComponent',\n  props: {\n    msg: String\n  },\n  data() {\n    return {\n      store: _store_store__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n      storecount: _store_store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].state.count,\n      text: 0.01,\n      div_reject: 'back-white',\n      div_not_reject: 'back-white',\n      hypothesis_decision: ''\n    };\n  },\n  methods: {\n    myFunction: function () {\n      _store_store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].commit('decrement');\n      this.storecount++;\n      document.getElementById(\"demo\").innerHTML = \"I have changed!\";\n    },\n    handleInput(event) {\n      let prob = event.target.value;\n      console.log(prob);\n      if (prob >= 0) {\n        console.log(\"In range.\");\n        _store_store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].commit('updateProbRealEffect', {\n          prob\n        });\n      } else {\n        console.log(\"Out of range.\");\n      }\n    },\n    showRejectOrNotReject() {\n      // former inputs: crit_t_value, t_value\n      // determine recommendation: to reject or not reject the null hypothesis\n      if (this.store.state.crit_t_value <= this.store.state.t_value) {\n        this.hypothesis_decision = \"Reject the Null Hypothesis (H\\u2080)\";\n        this.div_reject = 'back-orange';\n        this.div_not_reject = 'back-white';\n      } else if (this.store.state.crit_t_value > this.store.state.t_value) {\n        this.hypothesis_decision = \"Do Not Reject the Null Hypothesis (H\\u2080)\";\n        this.div_reject = 'back-white';\n        this.div_not_reject = 'back-orange';\n      } else {\n        this.hypothesis_decision = \"\";\n        this.div_reject = 'back-white';\n        this.div_not_reject = 'back-white';\n      }\n    }\n  },\n  computed: {\n    count() {\n      return this.store.state.crit_t_value;\n      // Or return basket.getters.fruitsCount\n      // (depends on your design decisions).\n    }\n  },\n\n  watch: {\n    count(newCount) {\n      // Our fancy notification (2).\n      console.log(`We have ${newCount} fruits now!`);\n      this.showRejectOrNotReject();\n    }\n  },\n  // watch: {\n  // userCount (newVal) {\n  //   this.myFantasticFunc(newVal)\n  // },\n\n  mounted() {\n    let prob = 0.01;\n    _store_store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].commit('updateProbRealEffect', {\n      prob\n    });\n    // console.log(\"MATH ROUND:\", math.round(999.111111111, 4));\n    // let myFunction = () => { document.getElementById(\"demo\").innerHTML = \"I have changed!\"; };\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvQHZ1ZS92dWUtbG9hZGVyLXYxNS9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NyYy9jb21wb25lbnRzL0h5cG90aGVzaXNDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsIm1hcHBpbmdzIjoiOztBQXVDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQTtBQUNBO0FBQ0E7O0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Z1ZWFwcC9zcmMvY29tcG9uZW50cy9IeXBvdGhlc2lzQ29tcG9uZW50LnZ1ZT80OGIxIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXYgY2xhc3M9XCJodFwiPlxyXG4gICAgICA8YnI+XHJcbiAgICAgICAgICA8aT5IPHN1Yj4wPC9zdWI+PC9pPjogcG9wdWxhdGlvbiAxIG1lYW4gPSBwb3B1bGF0aW9uIDIgbWVhbjxicj5cclxuICAgICAgICAgIDxpPkg8c3ViPjE8L3N1Yj48L2k+OiBwb3B1bGF0aW9uIDEgbWVhbiAmbHQ7IHBvcHVsYXRpb24gMiBtZWFuPGJyPlxyXG4gICAgICAgICAgPGJyPlxyXG5cclxuICAgICAgICAgIDxiPjxzcGFuIGlkPVwicmVqZWN0LW9yLW5vdFwiPnt7IGh5cG90aGVzaXNfZGVjaXNpb24gfX08L3NwYW4+PC9iPlxyXG4gICAgICAgICAgPHA+PGJyPlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJncmlkLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JpZC1pdGVtXCI+PGk+SDxzdWI+MDwvc3ViPjwvaT48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyaWQtaXRlbVwiIDpjbGFzcz1cImRpdl9yZWplY3RcIiBpZD1cInJlamVjdFwiPlJFSkVDVDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JpZC1pdGVtXCIgOmNsYXNzPVwiZGl2X25vdF9yZWplY3RcIiBpZD1cIm5vdC1yZWplY3RcIj5OT1QgUkVKRUNUPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncmlkLWl0ZW1cIj5UUlVFPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncmlkLWl0ZW1cIiBpZD1cImFscGhhLWJveFwiPlxyXG4gICAgICAgICAgICAgIDxiPjxzcGFuIGlkPVwiYWxwaGFcIj57eyB0aGlzLnN0b3JlLnN0YXRlLmFscGhhIH19PC9zcGFuPjwvYj48YnI+PGJyPlxyXG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlPVwiY29sb3I6cmVkXCI+RmFsc2UgUG9zaXRpdmU8YnI+VHlwZSBJIEVycm9yPGJyPigmIzk0NTspPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyaWQtaXRlbVwiPlxyXG4gICAgICAgICAgICAgIDxiPjxzcGFuIGlkPVwiY29uZmlkZW5jZVwiPnt7IHRoaXMuc3RvcmUuc3RhdGUuY29uZmlkZW5jZSB9fTwvc3Bhbj48L2I+PGJyPjxicj5cclxuICAgICAgICAgICAgICBUcnVlIE5lZ2F0aXZlPGJyPkNvbmZpZGVuY2U8YnI+KDEgLSAmIzk0NTspXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JpZC1pdGVtXCI+RkFMU0U8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyaWQtaXRlbVwiPlxyXG4gICAgICAgICAgICAgIDxiPjxzcGFuIGlkPVwicG93ZXJcIj57eyB0aGlzLnN0b3JlLnN0YXRlLnBvd2VyIH19PC9zcGFuPjwvYj48YnI+PGJyPlxyXG4gICAgICAgICAgICAgIFRydWUgUG9zaXRpdmU8YnI+UG93ZXI8YnI+KDEgLSAmIzk0NjspXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JpZC1pdGVtXCIgaWQ9XCJiZXRhLWJveFwiPlxyXG4gICAgICAgICAgICAgIDxiPjxzcGFuIGlkPVwiYmV0YVwiPnt7IHRoaXMuc3RvcmUuc3RhdGUuYmV0YSB9fTwvc3Bhbj48L2I+PGJyPjxicj5cclxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT1cImNvbG9yOmJsdWVcIj5GYWxzZSBOZWdhdGl2ZTxicj5UeXBlIElJIEVycm9yPGJyPigmIzk0NjspPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICA8L2Rpdj5cclxuICA8L3RlbXBsYXRlPlxyXG4gIFxyXG4gIDxzY3JpcHQ+XHJcbiAgLy8gaW1wb3J0IHRlc3QgZnJvbSAnQC9teWxpYic7XHJcbiAgaW1wb3J0IHN0b3JlIGZyb20gJ0Avc3RvcmUvc3RvcmUnOyBcclxuICAvLyBpbXBvcnQgKiBhcyBtYXRoIGZyb20gJ21hdGhqcyc7XHJcbi8vICAgaW1wb3J0IGZ1bmNzIGZyb20gJ0Avd2VsY2hzJztcclxuXHJcblxyXG4gIC8vIGNvbnNvbGUubG9nKHRlc3QuZm9vKCkpO1xyXG4vLyAgIHN0b3JlLmNvbW1pdCgnaW5jcmVtZW50Jyk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIk1FU1NBR0U6XCIsIHN0b3JlLnNwZWNpYWxtc2cpO1xyXG5cclxuICBcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgc3RvcmUsXHJcbiAgICBcclxuICAgIG5hbWU6ICdIeXBvdGhlc2lzQ29tcG9uZW50JyxcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIG1zZzogU3RyaW5nXHJcbiAgICB9LFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzdG9yZSxcclxuICAgICAgICAgICAgc3RvcmVjb3VudDogc3RvcmUuc3RhdGUuY291bnQsXHJcbiAgICAgICAgICAgIHRleHQ6IDAuMDEsXHJcbiAgICAgICAgICAgIGRpdl9yZWplY3Q6ICdiYWNrLXdoaXRlJyxcclxuICAgICAgICAgICAgZGl2X25vdF9yZWplY3Q6ICdiYWNrLXdoaXRlJyxcclxuICAgICAgICAgICAgaHlwb3RoZXNpc19kZWNpc2lvbjogJycsXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBteUZ1bmN0aW9uOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHN0b3JlLmNvbW1pdCgnZGVjcmVtZW50Jyk7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcmVjb3VudCsrO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlbW9cIikuaW5uZXJIVE1MID0gXCJJIGhhdmUgY2hhbmdlZCFcIjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGhhbmRsZUlucHV0KGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGxldCBwcm9iID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9iKTtcclxuICAgICAgICAgICAgaWYgKHByb2IgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJJbiByYW5nZS5cIik7XHJcbiAgICAgICAgICAgICAgICBzdG9yZS5jb21taXQoJ3VwZGF0ZVByb2JSZWFsRWZmZWN0JywgeyBwcm9iIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJPdXQgb2YgcmFuZ2UuXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzaG93UmVqZWN0T3JOb3RSZWplY3QoKXsgIC8vIGZvcm1lciBpbnB1dHM6IGNyaXRfdF92YWx1ZSwgdF92YWx1ZVxyXG4gICAgICAgICAgLy8gZGV0ZXJtaW5lIHJlY29tbWVuZGF0aW9uOiB0byByZWplY3Qgb3Igbm90IHJlamVjdCB0aGUgbnVsbCBoeXBvdGhlc2lzXHJcbiAgICAgICAgICBpZiAodGhpcy5zdG9yZS5zdGF0ZS5jcml0X3RfdmFsdWUgPD0gdGhpcy5zdG9yZS5zdGF0ZS50X3ZhbHVlKXtcclxuICAgICAgICAgICAgdGhpcy5oeXBvdGhlc2lzX2RlY2lzaW9uID0gXCJSZWplY3QgdGhlIE51bGwgSHlwb3RoZXNpcyAoSFxcdTIwODApXCI7XHJcbiAgICAgICAgICAgIHRoaXMuZGl2X3JlamVjdCA9ICdiYWNrLW9yYW5nZSc7XHJcbiAgICAgICAgICAgIHRoaXMuZGl2X25vdF9yZWplY3QgPSAnYmFjay13aGl0ZSc7XHJcbiAgICAgICAgICB9IFxyXG4gICAgICAgICAgZWxzZSBpZiAodGhpcy5zdG9yZS5zdGF0ZS5jcml0X3RfdmFsdWUgPiB0aGlzLnN0b3JlLnN0YXRlLnRfdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5oeXBvdGhlc2lzX2RlY2lzaW9uID0gXCJEbyBOb3QgUmVqZWN0IHRoZSBOdWxsIEh5cG90aGVzaXMgKEhcXHUyMDgwKVwiO1xyXG4gICAgICAgICAgICB0aGlzLmRpdl9yZWplY3QgPSAnYmFjay13aGl0ZSc7XHJcbiAgICAgICAgICAgIHRoaXMuZGl2X25vdF9yZWplY3QgPSAnYmFjay1vcmFuZ2UnO1xyXG4gICAgICAgICAgfSBcclxuICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmh5cG90aGVzaXNfZGVjaXNpb24gPSBcIlwiO1xyXG4gICAgICAgICAgICB0aGlzLmRpdl9yZWplY3QgPSAnYmFjay13aGl0ZSc7XHJcbiAgICAgICAgICAgIHRoaXMuZGl2X25vdF9yZWplY3QgPSAnYmFjay13aGl0ZSc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBjb21wdXRlZDoge1xyXG4gICAgICBjb3VudCAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmUuc3RhdGUuY3JpdF90X3ZhbHVlXHJcbiAgICAgICAgLy8gT3IgcmV0dXJuIGJhc2tldC5nZXR0ZXJzLmZydWl0c0NvdW50XHJcbiAgICAgICAgLy8gKGRlcGVuZHMgb24geW91ciBkZXNpZ24gZGVjaXNpb25zKS5cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHdhdGNoOiB7XHJcbiAgICAgIGNvdW50IChuZXdDb3VudCkge1xyXG4gICAgICAgIC8vIE91ciBmYW5jeSBub3RpZmljYXRpb24gKDIpLlxyXG4gICAgICAgIGNvbnNvbGUubG9nKGBXZSBoYXZlICR7bmV3Q291bnR9IGZydWl0cyBub3chYClcclxuICAgICAgICB0aGlzLnNob3dSZWplY3RPck5vdFJlamVjdCgpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy8gd2F0Y2g6IHtcclxuICAgIC8vIHVzZXJDb3VudCAobmV3VmFsKSB7XHJcbiAgICAvLyAgIHRoaXMubXlGYW50YXN0aWNGdW5jKG5ld1ZhbClcclxuICAgIC8vIH0sXHJcblxyXG4gICAgbW91bnRlZCgpIHtcclxuICAgICAgICBsZXQgcHJvYiA9IDAuMDE7XHJcbiAgICAgICAgc3RvcmUuY29tbWl0KCd1cGRhdGVQcm9iUmVhbEVmZmVjdCcsIHsgcHJvYiB9KTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIk1BVEggUk9VTkQ6XCIsIG1hdGgucm91bmQoOTk5LjExMTExMTExMSwgNCkpO1xyXG4gICAgICAgIC8vIGxldCBteUZ1bmN0aW9uID0gKCkgPT4geyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlbW9cIikuaW5uZXJIVE1MID0gXCJJIGhhdmUgY2hhbmdlZCFcIjsgfTtcclxuICAgIH1cclxuICB9XHJcbiAgPC9zY3JpcHQ+XHJcbiAgXHJcbiAgPCEtLSBBZGQgXCJzY29wZWRcIiBhdHRyaWJ1dGUgdG8gbGltaXQgQ1NTIHRvIHRoaXMgY29tcG9uZW50IG9ubHkgLS0+XHJcbiAgPHN0eWxlIHNjb3BlZD5cclxuICAgIGgzIHtcclxuICAgICAgICBtYXJnaW46IDQwcHggMCAwO1xyXG4gICAgfVxyXG4gICAgdWwge1xyXG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gICAgbGkge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBtYXJnaW46IDAgMTBweDtcclxuICAgIH1cclxuICAgIGEge1xyXG4gICAgICAgIGNvbG9yOiAjNDJiOTgzO1xyXG4gICAgfVxyXG5cclxuICAgIC5yZXNwb25zaXZlIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgLmh0IHtcclxuICAgICAgICAvKiBkaXNwbGF5OiBibG9jazsgKi9cclxuICAgICAgICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7ICovXHJcbiAgICAgICAgLyogZmxvYXQ6IGxlZnQ7ICovXHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmRpYWdyYW0tYm94IHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2M4YzhjODtcclxuICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC5ncmlkLWNvbnRhaW5lciB7XHJcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG87XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgIHBhZGRpbmc6IDBweDtcclxuICB9XHJcbiAgLmdyaWQtaXRlbSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzhjOGM4OyAgLypyZ2JhKDAsIDAsIDAsIDAuOCk7Ki9cclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuXHJcbiAgLmJhY2stb3JhbmdlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjNlMDA7XHJcbiAgfVxyXG5cclxuICAuYmFjay13aGl0ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIH1cclxuXHJcbiAgPC9zdHlsZT5cclxuICAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/HypothesisComponent.vue?vue&type=script&lang=js&\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "b6f0c9449f217b5f"; }
/******/ }();
/******/ 
/******/ }
);
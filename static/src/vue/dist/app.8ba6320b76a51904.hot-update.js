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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mylib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/mylib */ \"./src/mylib.js\");\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store/store */ \"./src/store/store.js\");\n/* harmony import */ var mathjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mathjs */ \"./node_modules/mathjs/lib/esm/entry/pureFunctionsAny.generated.js\");\n\n\n\n//   import funcs from '@/welchs';\n\nconsole.log(_mylib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].foo());\n//   store.commit('increment');\n// console.log(\"MESSAGE:\", store.specialmsg);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  store: _store_store__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  name: 'HypothesisComponent',\n  props: {\n    msg: String\n  },\n  data() {\n    return {\n      store: _store_store__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n      storecount: _store_store__WEBPACK_IMPORTED_MODULE_1__[\"default\"].state.count,\n      text: 0.01\n    };\n  },\n  methods: {\n    myFunction: function () {\n      _store_store__WEBPACK_IMPORTED_MODULE_1__[\"default\"].commit('decrement');\n      this.storecount++;\n      document.getElementById(\"demo\").innerHTML = \"I have changed!\";\n    },\n    handleInput(event) {\n      let prob = event.target.value;\n      console.log(prob);\n      if (prob >= 0) {\n        console.log(\"In range.\");\n        _store_store__WEBPACK_IMPORTED_MODULE_1__[\"default\"].commit('updateProbRealEffect', {\n          prob\n        });\n      } else {\n        console.log(\"Out of range.\");\n      }\n    }\n  },\n  mounted() {\n    let prob = 0.01;\n    _store_store__WEBPACK_IMPORTED_MODULE_1__[\"default\"].commit('updateProbRealEffect', {\n      prob\n    });\n    console.log(\"MATH ROUND:\", mathjs__WEBPACK_IMPORTED_MODULE_2__.round(999.111111111, 4));\n    console.log(\"this.store.state.crit_t_value:\", this.store.state.crit_t_value);\n    console.log(\"this.store.state.t_value:\", this.store.state.t_value);\n    if (this.store.state.crit_t_value <= this.store.state.t_value) {\n      console.log(\"this.store.state.crit_t_value <= this.store.state.t_value\");\n    }\n    // let myFunction = () => { document.getElementById(\"demo\").innerHTML = \"I have changed!\"; };\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvQHZ1ZS92dWUtbG9hZGVyLXYxNS9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NyYy9jb21wb25lbnRzL0h5cG90aGVzaXNDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBdUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBO0FBQ0E7QUFDQTs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Z1ZWFwcC9zcmMvY29tcG9uZW50cy9IeXBvdGhlc2lzQ29tcG9uZW50LnZ1ZT80OGIxIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXYgY2xhc3M9XCJodFwiPlxyXG4gICAgICA8YnI+XHJcbiAgICAgICAgICA8aT5IPHN1Yj4wPC9zdWI+PC9pPjogcG9wdWxhdGlvbiAxIG1lYW4gPSBwb3B1bGF0aW9uIDIgbWVhbjxicj5cclxuICAgICAgICAgIDxpPkg8c3ViPjE8L3N1Yj48L2k+OiBwb3B1bGF0aW9uIDEgbWVhbiAmbHQ7IHBvcHVsYXRpb24gMiBtZWFuPGJyPlxyXG4gICAgICAgICAgPGJyPlxyXG5cclxuICAgICAgICAgIDxiPjxzcGFuIGlkPVwicmVqZWN0LW9yLW5vdFwiPjwvc3Bhbj48L2I+XHJcbiAgICAgICAgICA8cD48YnI+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImdyaWQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncmlkLWl0ZW1cIj48aT5IPHN1Yj4wPC9zdWI+PC9pPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JpZC1pdGVtIGJhY2stb3JhbmdlXCIgaWQ9XCJyZWplY3RcIj5SRUpFQ1Q8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyaWQtaXRlbVwiIGlkPVwibm90LXJlamVjdFwiPk5PVCBSRUpFQ1Q8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyaWQtaXRlbVwiPlRSVUU8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyaWQtaXRlbVwiIGlkPVwiYWxwaGEtYm94XCI+XHJcbiAgICAgICAgICAgICAgPGI+PHNwYW4gaWQ9XCJhbHBoYVwiPnt7IHRoaXMuc3RvcmUuc3RhdGUuYWxwaGEgfX08L3NwYW4+PC9iPjxicj48YnI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9XCJjb2xvcjpyZWRcIj5GYWxzZSBQb3NpdGl2ZTxicj5UeXBlIEkgRXJyb3I8YnI+KCYjOTQ1Oyk8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JpZC1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgPGI+PHNwYW4gaWQ9XCJjb25maWRlbmNlXCI+e3sgdGhpcy5zdG9yZS5zdGF0ZS5jb25maWRlbmNlIH19PC9zcGFuPjwvYj48YnI+PGJyPlxyXG4gICAgICAgICAgICAgIFRydWUgTmVnYXRpdmU8YnI+Q29uZmlkZW5jZTxicj4oMSAtICYjOTQ1OylcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncmlkLWl0ZW1cIj5GQUxTRTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JpZC1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgPGI+PHNwYW4gaWQ9XCJwb3dlclwiPnt7IHRoaXMuc3RvcmUuc3RhdGUucG93ZXIgfX08L3NwYW4+PC9iPjxicj48YnI+XHJcbiAgICAgICAgICAgICAgVHJ1ZSBQb3NpdGl2ZTxicj5Qb3dlcjxicj4oMSAtICYjOTQ2OylcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncmlkLWl0ZW1cIiBpZD1cImJldGEtYm94XCI+XHJcbiAgICAgICAgICAgICAgPGI+PHNwYW4gaWQ9XCJiZXRhXCI+e3sgdGhpcy5zdG9yZS5zdGF0ZS5iZXRhIH19PC9zcGFuPjwvYj48YnI+PGJyPlxyXG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlPVwiY29sb3I6Ymx1ZVwiPkZhbHNlIE5lZ2F0aXZlPGJyPlR5cGUgSUkgRXJyb3I8YnI+KCYjOTQ2Oyk8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgIDwvZGl2PlxyXG4gIDwvdGVtcGxhdGU+XHJcbiAgXHJcbiAgPHNjcmlwdD5cclxuICBpbXBvcnQgdGVzdCBmcm9tICdAL215bGliJztcclxuICBpbXBvcnQgc3RvcmUgZnJvbSAnQC9zdG9yZS9zdG9yZSc7IFxyXG4gIGltcG9ydCAqIGFzIG1hdGggZnJvbSAnbWF0aGpzJztcclxuLy8gICBpbXBvcnQgZnVuY3MgZnJvbSAnQC93ZWxjaHMnO1xyXG5cclxuXHJcbiAgY29uc29sZS5sb2codGVzdC5mb28oKSk7XHJcbi8vICAgc3RvcmUuY29tbWl0KCdpbmNyZW1lbnQnKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiTUVTU0FHRTpcIiwgc3RvcmUuc3BlY2lhbG1zZyk7XHJcblxyXG4gIFxyXG5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBzdG9yZSxcclxuICAgIG5hbWU6ICdIeXBvdGhlc2lzQ29tcG9uZW50JyxcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIG1zZzogU3RyaW5nXHJcbiAgICB9LFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzdG9yZSxcclxuICAgICAgICAgICAgc3RvcmVjb3VudDogc3RvcmUuc3RhdGUuY291bnQsXHJcbiAgICAgICAgICAgIHRleHQ6IDAuMDEsXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBteUZ1bmN0aW9uOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHN0b3JlLmNvbW1pdCgnZGVjcmVtZW50Jyk7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcmVjb3VudCsrO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlbW9cIikuaW5uZXJIVE1MID0gXCJJIGhhdmUgY2hhbmdlZCFcIjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGhhbmRsZUlucHV0KGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGxldCBwcm9iID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9iKTtcclxuICAgICAgICAgICAgaWYgKHByb2IgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJJbiByYW5nZS5cIik7XHJcbiAgICAgICAgICAgICAgICBzdG9yZS5jb21taXQoJ3VwZGF0ZVByb2JSZWFsRWZmZWN0JywgeyBwcm9iIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJPdXQgb2YgcmFuZ2UuXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG4gICAgbW91bnRlZCgpIHtcclxuICAgICAgICBsZXQgcHJvYiA9IDAuMDE7XHJcbiAgICAgICAgc3RvcmUuY29tbWl0KCd1cGRhdGVQcm9iUmVhbEVmZmVjdCcsIHsgcHJvYiB9KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk1BVEggUk9VTkQ6XCIsIG1hdGgucm91bmQoOTk5LjExMTExMTExMSwgNCkpO1xyXG5cclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwidGhpcy5zdG9yZS5zdGF0ZS5jcml0X3RfdmFsdWU6XCIsIHRoaXMuc3RvcmUuc3RhdGUuY3JpdF90X3ZhbHVlKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwidGhpcy5zdG9yZS5zdGF0ZS50X3ZhbHVlOlwiLCB0aGlzLnN0b3JlLnN0YXRlLnRfdmFsdWUpO1xyXG4gICAgICAgIGlmICh0aGlzLnN0b3JlLnN0YXRlLmNyaXRfdF92YWx1ZSA8PSB0aGlzLnN0b3JlLnN0YXRlLnRfdmFsdWUpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwidGhpcy5zdG9yZS5zdGF0ZS5jcml0X3RfdmFsdWUgPD0gdGhpcy5zdG9yZS5zdGF0ZS50X3ZhbHVlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBsZXQgbXlGdW5jdGlvbiA9ICgpID0+IHsgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZW1vXCIpLmlubmVySFRNTCA9IFwiSSBoYXZlIGNoYW5nZWQhXCI7IH07XHJcbiAgICB9XHJcbiAgfVxyXG4gIDwvc2NyaXB0PlxyXG4gIFxyXG4gIDwhLS0gQWRkIFwic2NvcGVkXCIgYXR0cmlidXRlIHRvIGxpbWl0IENTUyB0byB0aGlzIGNvbXBvbmVudCBvbmx5IC0tPlxyXG4gIDxzdHlsZSBzY29wZWQ+XHJcbiAgICBoMyB7XHJcbiAgICAgICAgbWFyZ2luOiA0MHB4IDAgMDtcclxuICAgIH1cclxuICAgIHVsIHtcclxuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICAgIGxpIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgICB9XHJcbiAgICBhIHtcclxuICAgICAgICBjb2xvcjogIzQyYjk4MztcclxuICAgIH1cclxuXHJcbiAgICAucmVzcG9uc2l2ZSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgIC5odCB7XHJcbiAgICAgICAgLyogZGlzcGxheTogYmxvY2s7ICovXHJcbiAgICAgICAgLyogcG9zaXRpb246IGFic29sdXRlOyAqL1xyXG4gICAgICAgIC8qIGZsb2F0OiBsZWZ0OyAqL1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XHJcbiAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgfVxyXG5cclxuICAgIC5kaWFncmFtLWJveCB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjOGM4Yzg7XHJcbiAgICBcclxuICAgIH1cclxuXHJcbiAgICAuZ3JpZC1jb250YWluZXIge1xyXG4gICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0byBhdXRvO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgfVxyXG4gIC5ncmlkLWl0ZW0ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2M4YzhjODsgIC8qcmdiYSgwLCAwLCAwLCAwLjgpOyovXHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcblxyXG4gIC5iYWNrLW9yYW5nZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYzZTAwO1xyXG4gIH1cclxuXHJcbiAgLmJhY2std2hpdGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICB9XHJcblxyXG4gIDwvc3R5bGU+XHJcbiAgIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/HypothesisComponent.vue?vue&type=script&lang=js&\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "8ca9d7ed2477f474"; }
/******/ }();
/******/ 
/******/ }
);
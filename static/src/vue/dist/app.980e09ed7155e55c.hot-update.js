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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mylib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/mylib */ \"./src/mylib.js\");\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store/store */ \"./src/store/store.js\");\n/* harmony import */ var mathjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mathjs */ \"./node_modules/mathjs/lib/esm/entry/pureFunctionsAny.generated.js\");\n\n\n\nconsole.log(_mylib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].foo());\n//   store.commit('increment');\n// console.log(\"MESSAGE:\", store.specialmsg);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  store: _store_store__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  name: 'PPVComponent',\n  props: {\n    msg: String\n  },\n  data() {\n    return {\n      store: _store_store__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n      storecount: _store_store__WEBPACK_IMPORTED_MODULE_1__[\"default\"].state.count\n    };\n  },\n  methods: {\n    myFunction: function () {\n      _store_store__WEBPACK_IMPORTED_MODULE_1__[\"default\"].commit('decrement');\n      this.storecount++;\n      document.getElementById(\"demo\").innerHTML = \"I have changed!\";\n    }\n    // prob3_tp: function () {\n    //     return 1-store.state.beta\n    // },\n    // prob5_tn: function () {\n    //     return 1-store.state.alpha\n    // },\n  },\n\n  mounted() {\n    // console.log(\"MESSAGE:\", this.store.specialmsg);\n    console.log(\"MATH ROUND:\", mathjs__WEBPACK_IMPORTED_MODULE_2__.round(999.111111111, 4));\n    // document.getElementById(\"demo\").innerHTML = \"I have changed!\";\n    // let myFunction = () => { document.getElementById(\"demo\").innerHTML = \"I have changed!\"; };\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvQHZ1ZS92dWUtbG9hZGVyLXYxNS9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NyYy9jb21wb25lbnRzL1BQVkNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUE2Q0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBOztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdnVlYXBwL3NyYy9jb21wb25lbnRzL1BQVkNvbXBvbmVudC52dWU/NTk0YiJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwicHB2XCI+XHJcblxyXG4gICAgICAgIDxiPlBvc2l0aXZlIFByZWRpY3RpdmUgVmFsdWUgKFBQVik8L2I+XHJcbiAgICAgICAgICA8YnI+PGJyPlxyXG5cclxuICAgICAgICAgIDxiPlByb2JhYmlsaXR5IHRyZWUgZGlhZ3JhbTwvYj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRpYWdyYW0tYm94XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlc3BvbnNpdmVcIj5cclxuICAgICAgICAgICAgICAgIDwhLS0gPGltZyBjbGFzcz1cInJlc3BvbnNpdmVcIiBzcmM9XCIuL2Fzc2V0cy90cmVlLnN2Z1wiIC8+IC0tPlxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cInJlc3BvbnNpdmVcIiA6c3JjPVwicmVxdWlyZSgnQC9hc3NldHMvdHJlZS5zdmcnKVwiLz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cInByb2IxX3JlXCIgY2xhc3M9XCJwcm9iMV9yZVwiIHZhbHVlPVwiMC4wMVwiIHNpemU9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicHJvYjJfbmVcIiBjbGFzcz1cInByb2IyX25lXCI+PC9kaXY+PGI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicHJvYjNfdHBcIiBjbGFzcz1cInByb2IzX3RwXCI+cHJvYjNfdHA6IHt7IHRoaXMuc3RvcmUuc3RhdGUucHJvYjNfdHAgfX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwcm9iNF9mblwiIGNsYXNzPVwicHJvYjRfZm5cIj5iZXRhOiB7eyB0aGlzLnN0b3JlLnN0YXRlLmJldGEgfX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwcm9iNV90blwiIGNsYXNzPVwicHJvYjVfdG5cIj5wcm9iNV90bjoge3sgdGhpcy5zdG9yZS5zdGF0ZS5wcm9iNV90biB9fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInByb2I2X2ZwXCIgY2xhc3M9XCJwcm9iNl9mcFwiPmFscGhhOiB7eyB0aGlzLnN0b3JlLnN0YXRlLmFscGhhIH19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicHJvYjdfcmV0cFwiIGNsYXNzPVwicHJvYjdfcmV0cFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInByb2I4X3JlZm5cIiBjbGFzcz1cInByb2I4X3JlZm5cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwcm9iOV9uZXRuXCIgY2xhc3M9XCJwcm9iOV9uZXRuXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicHJvYjEwX25lZnBcIiBjbGFzcz1cInByb2IxMF9uZWZwXCI+PC9kaXY+PC9iPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHA+PGJyPlxyXG4gICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIFBQVjogPGI+PHNwYW4gaWQ9XCJwcHZcIj48L3NwYW4+PC9iPjxicj5cclxuICAgICAgICAgICAgRmFsc2UgRGlzY292ZXJ5IFJhdGU6IDxiPjxzcGFuIGlkPVwiZmFsc2VfcmF0ZVwiPjwvc3Bhbj48L2I+PGJyPlxyXG4gICAgICAgICAgICBTZW5zaXRpdml0eTogPGI+PHNwYW4gaWQ9XCJzZW5zaXRpdml0eVwiPjwvc3Bhbj48L2I+PGJyPlxyXG4gICAgICAgICAgICBTcGVjaWZpY2l0eTogPGI+PHNwYW4gaWQ9XCJzcGVjaWZpY2l0eVwiPjwvc3Bhbj48L2I+XHJcblxyXG5cclxuICAgICAgICAgICAgPGJyPjxicj48YnI+PGJyPlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPVwidGV4dC1hbGlnbjpqdXN0aWZ5XCI+XHJcbiAgICAgICAgICAgICAgRm9yIGV4YW1wbGUsIGlmIDElIG9mIHRoZSBwb3B1bGF0aW9uIGlzIGFmZmxpY3RlZCB3aXRoIGEgZGlzZWFzZSwgYW5kXHJcbiAgICAgICAgICAgICAgdGhlIHRlc3QgZm9yIHRoZSBkaXNlYXNlIGlzIDk5JSBhY2N1cmF0ZSwgd2UgbWF5IGludHVpdCB0aGF0XHJcbiAgICAgICAgICAgICAgb3VyIGRpYWdub3NpcyB3aWxsIGJlIGNvcnJlY3QgOTklIG9mIHRoZSB0aW1lLiBIb3dldmVyLCBpZiAmIzk0NTsgPSAwLjA1IGFuZCAmIzk0NjsgPSAwLjAxLCB3ZSB3aWxsIGFjY3VyYXRlbHkgZGlhZ25vc2UgYSBwYXRpZW50IHdpdGggdGhlIGRpc2Vhc2Ugb25seSAxNiUgb2YgdGhlIHRpbWUuIFRoZSBQUFYgaW4gdGhpcyBjYXNlIGlzIDE2JS48c3VwPjQ8L3N1cD5cclxuICAgICAgICAgICAgICA8YnI+PGJyPlxyXG4gICAgICAgICAgICAgIFRoZSBwcm9iYWJpbGl0eSBvZiB0aGUgcmVhbCBlZmZlY3QgKGUuZy4sIHByZXZhbGVuY2Ugb2YgZGlzZWFzZSkgY2FuIGJlIG1vZGlmaWVkIGFib3ZlLlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICA8L2Rpdj5cclxuICA8L3RlbXBsYXRlPlxyXG4gIFxyXG4gIDxzY3JpcHQ+XHJcbiAgaW1wb3J0IHRlc3QgZnJvbSAnQC9teWxpYic7XHJcbiAgaW1wb3J0IHN0b3JlIGZyb20gJ0Avc3RvcmUvc3RvcmUnOyBcclxuICBpbXBvcnQgKiBhcyBtYXRoIGZyb20gJ21hdGhqcyc7XHJcblxyXG5cclxuICBjb25zb2xlLmxvZyh0ZXN0LmZvbygpKTtcclxuLy8gICBzdG9yZS5jb21taXQoJ2luY3JlbWVudCcpO1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJNRVNTQUdFOlwiLCBzdG9yZS5zcGVjaWFsbXNnKTtcclxuXHJcbiAgXHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHN0b3JlLFxyXG4gICAgbmFtZTogJ1BQVkNvbXBvbmVudCcsXHJcbiAgICBwcm9wczoge1xyXG4gICAgICBtc2c6IFN0cmluZ1xyXG4gICAgfSxcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc3RvcmUsXHJcbiAgICAgICAgICAgIHN0b3JlY291bnQ6IHN0b3JlLnN0YXRlLmNvdW50XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBteUZ1bmN0aW9uOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHN0b3JlLmNvbW1pdCgnZGVjcmVtZW50Jyk7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcmVjb3VudCsrO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlbW9cIikuaW5uZXJIVE1MID0gXCJJIGhhdmUgY2hhbmdlZCFcIjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIHByb2IzX3RwOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gICAgIHJldHVybiAxLXN0b3JlLnN0YXRlLmJldGFcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIHByb2I1X3RuOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gICAgIHJldHVybiAxLXN0b3JlLnN0YXRlLmFscGhhXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICBcclxuICAgIH0sXHJcbiAgICBtb3VudGVkKCkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiTUVTU0FHRTpcIiwgdGhpcy5zdG9yZS5zcGVjaWFsbXNnKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk1BVEggUk9VTkQ6XCIsIG1hdGgucm91bmQoOTk5LjExMTExMTExMSwgNCkpO1xyXG4gICAgICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVtb1wiKS5pbm5lckhUTUwgPSBcIkkgaGF2ZSBjaGFuZ2VkIVwiO1xyXG4gICAgICAgIC8vIGxldCBteUZ1bmN0aW9uID0gKCkgPT4geyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlbW9cIikuaW5uZXJIVE1MID0gXCJJIGhhdmUgY2hhbmdlZCFcIjsgfTtcclxuICAgIH1cclxuICB9XHJcbiAgPC9zY3JpcHQ+XHJcbiAgXHJcbiAgPCEtLSBBZGQgXCJzY29wZWRcIiBhdHRyaWJ1dGUgdG8gbGltaXQgQ1NTIHRvIHRoaXMgY29tcG9uZW50IG9ubHkgLS0+XHJcbiAgPHN0eWxlIHNjb3BlZD5cclxuICAgIGgzIHtcclxuICAgICAgICBtYXJnaW46IDQwcHggMCAwO1xyXG4gICAgfVxyXG4gICAgdWwge1xyXG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gICAgbGkge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBtYXJnaW46IDAgMTBweDtcclxuICAgIH1cclxuICAgIGEge1xyXG4gICAgICAgIGNvbG9yOiAjNDJiOTgzO1xyXG4gICAgfVxyXG5cclxuICAgIC5wcm9iNV90biB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNjAlO1xyXG4gICAgICAgIGxlZnQ6IDQ3JTtcclxuICAgIH1cclxuXHJcbiAgICAucHB2IHtcclxuICAgICAgICAvKiBkaXNwbGF5OiBibG9jazsgKi9cclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgLyogZmxvYXQ6IGxlZnQ7ICovXHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5kaWFncmFtLWJveCB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjOGM4Yzg7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC5yZXNwb25zaXZlIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB9XHJcblxyXG4gIDwvc3R5bGU+XHJcbiAgIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/PPVComponent.vue?vue&type=script&lang=js&\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "048858b4f470769a"; }
/******/ }();
/******/ 
/******/ }
);
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mylib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/mylib */ \"./src/mylib.js\");\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store/store */ \"./src/store/store.js\");\n/* harmony import */ var mathjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mathjs */ \"./node_modules/mathjs/lib/esm/entry/pureFunctionsAny.generated.js\");\n\n\n\nconsole.log(_mylib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].foo());\n//   store.commit('increment');\n// console.log(\"MESSAGE:\", store.specialmsg);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  store: _store_store__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  name: 'PPVComponent',\n  props: {\n    msg: String\n  },\n  data() {\n    return {\n      store: _store_store__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n      storecount: _store_store__WEBPACK_IMPORTED_MODULE_1__[\"default\"].state.count,\n      text: 0.01\n    };\n  },\n  methods: {\n    myFunction: function () {\n      _store_store__WEBPACK_IMPORTED_MODULE_1__[\"default\"].commit('decrement');\n      this.storecount++;\n      document.getElementById(\"demo\").innerHTML = \"I have changed!\";\n    },\n    handleInput(event) {\n      console.log(event.target.value);\n    }\n  },\n  mounted() {\n    console.log(\"MATH ROUND:\", mathjs__WEBPACK_IMPORTED_MODULE_2__.round(999.111111111, 4));\n    // let myFunction = () => { document.getElementById(\"demo\").innerHTML = \"I have changed!\"; };\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvQHZ1ZS92dWUtbG9hZGVyLXYxNS9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NyYy9jb21wb25lbnRzL1BQVkNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUE0Q0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBOztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdnVlYXBwL3NyYy9jb21wb25lbnRzL1BQVkNvbXBvbmVudC52dWU/NTk0YiJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwicHB2XCI+XHJcblxyXG4gICAgICAgIDxiPlBvc2l0aXZlIFByZWRpY3RpdmUgVmFsdWUgKFBQVik8L2I+XHJcbiAgICAgICAgICA8YnI+PGJyPlxyXG5cclxuICAgICAgICAgIDxiPlByb2JhYmlsaXR5IHRyZWUgZGlhZ3JhbTwvYj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRpYWdyYW0tYm94XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlc3BvbnNpdmVcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJyZXNwb25zaXZlXCIgOnNyYz1cInJlcXVpcmUoJ0AvYXNzZXRzL3RyZWUuc3ZnJylcIi8+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJwcm9iMV9yZVwiIGNsYXNzPVwicHJvYjFfcmVcIiB2LW1vZGVsPVwidGV4dFwiIHZhbHVlPVwiMC4wMVwiIHNpemU9XCIzXCIgQGlucHV0PVwiaGFuZGxlSW5wdXRcIi8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicHJvYjJfbmVcIiBjbGFzcz1cInByb2IyX25lXCI+e3sgdGhpcy5zdG9yZS5zdGF0ZS5wcm9iMl9uZSB9fTwvZGl2PjxiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInByb2IzX3RwXCIgY2xhc3M9XCJwcm9iM190cFwiPnt7IHRoaXMuc3RvcmUuc3RhdGUucHJvYjNfdHAgfX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwcm9iNF9mblwiIGNsYXNzPVwicHJvYjRfZm5cIj57eyB0aGlzLnN0b3JlLnN0YXRlLmJldGEgfX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwcm9iNV90blwiIGNsYXNzPVwicHJvYjVfdG5cIj57eyB0aGlzLnN0b3JlLnN0YXRlLnByb2I1X3RuIH19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicHJvYjZfZnBcIiBjbGFzcz1cInByb2I2X2ZwXCI+e3sgdGhpcy5zdG9yZS5zdGF0ZS5hbHBoYSB9fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInByb2I3X3JldHBcIiBjbGFzcz1cInByb2I3X3JldHBcIj57eyB0aGlzLnN0b3JlLnN0YXRlLnByb2I3X3JldHAgfX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwcm9iOF9yZWZuXCIgY2xhc3M9XCJwcm9iOF9yZWZuXCI+e3sgdGhpcy5zdG9yZS5zdGF0ZS5wcm9iOF9yZWZuIH19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicHJvYjlfbmV0blwiIGNsYXNzPVwicHJvYjlfbmV0blwiPnt7IHRoaXMuc3RvcmUuc3RhdGUucHJvYjlfbmV0biB9fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInByb2IxMF9uZWZwXCIgY2xhc3M9XCJwcm9iMTBfbmVmcFwiPnt7IHRoaXMuc3RvcmUuc3RhdGUucHJvYjEwX25lZnAgfX08L2Rpdj48L2I+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8cD48YnI+XHJcbiAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgUFBWOiA8Yj48c3BhbiBpZD1cInBwdlwiPjwvc3Bhbj48L2I+PGJyPlxyXG4gICAgICAgICAgICBGYWxzZSBEaXNjb3ZlcnkgUmF0ZTogPGI+PHNwYW4gaWQ9XCJmYWxzZV9yYXRlXCI+PC9zcGFuPjwvYj48YnI+XHJcbiAgICAgICAgICAgIFNlbnNpdGl2aXR5OiA8Yj48c3BhbiBpZD1cInNlbnNpdGl2aXR5XCI+PC9zcGFuPjwvYj48YnI+XHJcbiAgICAgICAgICAgIFNwZWNpZmljaXR5OiA8Yj48c3BhbiBpZD1cInNwZWNpZmljaXR5XCI+PC9zcGFuPjwvYj5cclxuXHJcblxyXG4gICAgICAgICAgICA8YnI+PGJyPjxicj48YnI+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJ0ZXh0LWFsaWduOmp1c3RpZnlcIj5cclxuICAgICAgICAgICAgICBGb3IgZXhhbXBsZSwgaWYgMSUgb2YgdGhlIHBvcHVsYXRpb24gaXMgYWZmbGljdGVkIHdpdGggYSBkaXNlYXNlLCBhbmRcclxuICAgICAgICAgICAgICB0aGUgdGVzdCBmb3IgdGhlIGRpc2Vhc2UgaXMgOTklIGFjY3VyYXRlLCB3ZSBtYXkgaW50dWl0IHRoYXRcclxuICAgICAgICAgICAgICBvdXIgZGlhZ25vc2lzIHdpbGwgYmUgY29ycmVjdCA5OSUgb2YgdGhlIHRpbWUuIEhvd2V2ZXIsIGlmICYjOTQ1OyA9IDAuMDUgYW5kICYjOTQ2OyA9IDAuMDEsIHdlIHdpbGwgYWNjdXJhdGVseSBkaWFnbm9zZSBhIHBhdGllbnQgd2l0aCB0aGUgZGlzZWFzZSBvbmx5IDE2JSBvZiB0aGUgdGltZS4gVGhlIFBQViBpbiB0aGlzIGNhc2UgaXMgMTYlLjxzdXA+NDwvc3VwPlxyXG4gICAgICAgICAgICAgIDxicj48YnI+XHJcbiAgICAgICAgICAgICAgVGhlIHByb2JhYmlsaXR5IG9mIHRoZSByZWFsIGVmZmVjdCAoZS5nLiwgcHJldmFsZW5jZSBvZiBkaXNlYXNlKSBjYW4gYmUgbW9kaWZpZWQgYWJvdmUuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvZGl2PlxyXG4gIDwvdGVtcGxhdGU+XHJcbiAgXHJcbiAgPHNjcmlwdD5cclxuICBpbXBvcnQgdGVzdCBmcm9tICdAL215bGliJztcclxuICBpbXBvcnQgc3RvcmUgZnJvbSAnQC9zdG9yZS9zdG9yZSc7IFxyXG4gIGltcG9ydCAqIGFzIG1hdGggZnJvbSAnbWF0aGpzJztcclxuXHJcblxyXG4gIGNvbnNvbGUubG9nKHRlc3QuZm9vKCkpO1xyXG4vLyAgIHN0b3JlLmNvbW1pdCgnaW5jcmVtZW50Jyk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIk1FU1NBR0U6XCIsIHN0b3JlLnNwZWNpYWxtc2cpO1xyXG5cclxuICBcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgc3RvcmUsXHJcbiAgICBuYW1lOiAnUFBWQ29tcG9uZW50JyxcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIG1zZzogU3RyaW5nXHJcbiAgICB9LFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzdG9yZSxcclxuICAgICAgICAgICAgc3RvcmVjb3VudDogc3RvcmUuc3RhdGUuY291bnQsXHJcbiAgICAgICAgICAgIHRleHQ6IDAuMDEsXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBteUZ1bmN0aW9uOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHN0b3JlLmNvbW1pdCgnZGVjcmVtZW50Jyk7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcmVjb3VudCsrO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlbW9cIikuaW5uZXJIVE1MID0gXCJJIGhhdmUgY2hhbmdlZCFcIjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGhhbmRsZUlucHV0KGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgIH0sXHJcbiAgICBtb3VudGVkKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTUFUSCBST1VORDpcIiwgbWF0aC5yb3VuZCg5OTkuMTExMTExMTExLCA0KSk7XHJcbiAgICAgICAgLy8gbGV0IG15RnVuY3Rpb24gPSAoKSA9PiB7IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVtb1wiKS5pbm5lckhUTUwgPSBcIkkgaGF2ZSBjaGFuZ2VkIVwiOyB9O1xyXG4gICAgfVxyXG4gIH1cclxuICA8L3NjcmlwdD5cclxuICBcclxuICA8IS0tIEFkZCBcInNjb3BlZFwiIGF0dHJpYnV0ZSB0byBsaW1pdCBDU1MgdG8gdGhpcyBjb21wb25lbnQgb25seSAtLT5cclxuICA8c3R5bGUgc2NvcGVkPlxyXG4gICAgaDMge1xyXG4gICAgICAgIG1hcmdpbjogNDBweCAwIDA7XHJcbiAgICB9XHJcbiAgICB1bCB7XHJcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgICBsaSB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIG1hcmdpbjogMCAxMHB4O1xyXG4gICAgfVxyXG4gICAgYSB7XHJcbiAgICAgICAgY29sb3I6ICM0MmI5ODM7XHJcbiAgICB9XHJcblxyXG4gICAgLnJlc3BvbnNpdmUge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgIH1cclxuXHJcbiAgICAucHB2IHtcclxuICAgICAgICAvKiBkaXNwbGF5OiBibG9jazsgKi9cclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgLyogZmxvYXQ6IGxlZnQ7ICovXHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5kaWFncmFtLWJveCB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjOGM4Yzg7XHJcbiAgICB9XHJcblxyXG4gICAgLyogUHJvYmFiaWxpdHkgb2YgUmVhbCBFZmZlY3QgKi9cclxuICAgIC5wcm9iMV9yZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDMzJTtcclxuICAgIGxlZnQ6IDUlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmM2UwMDtcclxuICAgIH1cclxuICAgIC8qIFByb2JhYmlsaXR5IG9mIE5vIEVmZmVjdCAqL1xyXG4gICAgLnByb2IyX25lIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNjUlO1xyXG4gICAgbGVmdDogNSU7XHJcbiAgICB9XHJcblxyXG4gICAgLyogUHJvYmFiaWxpdHkgb2YgVHJ1ZSBQb3NpdGl2ZSAqL1xyXG4gICAgLnByb2IzX3RwIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjAlO1xyXG4gICAgbGVmdDogNDclO1xyXG4gICAgfVxyXG4gICAgLyogUHJvYmFiaWxpdHkgb2YgRmFsc2UgTmVnYXRpdmUgKi9cclxuICAgIC5wcm9iNF9mbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDQwJTtcclxuICAgIGxlZnQ6IDQ3JTtcclxuICAgIGNvbG9yOiBibHVlO1xyXG4gICAgfVxyXG4gICAgLyogUHJvYmFiaWxpdHkgb2YgVHJ1ZSBOZWdhdGl2ZSAgKi9cclxuICAgIC5wcm9iNV90biB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDYwJTtcclxuICAgIGxlZnQ6IDQ3JTtcclxuICAgIH1cclxuICAgIC8qIFByb2JhYmlsaXR5IG9mIEZhbHNlIFBvc2l0aXZlICovXHJcbiAgICAucHJvYjZfZnAge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA4MCU7XHJcbiAgICBsZWZ0OiA0NyU7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIFByb2JhYmlsaXR5IG9mIFJlYWwgRWZmZWN0IHggVHJ1ZSBQb3NpdGl2ZSAqL1xyXG4gICAgLnByb2I3X3JldHAge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyMCU7XHJcbiAgICBsZWZ0OiA4MiU7XHJcbiAgICB9XHJcbiAgICAvKiBQcm9iYWJpbGl0eSBvZiBSZWFsIEVmZmVjdCB4IEZhbHNlIE5lZ2F0aXZlICovXHJcbiAgICAucHJvYjhfcmVmbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDQwJTtcclxuICAgIGxlZnQ6IDgyJTtcclxuICAgIH1cclxuICAgIC8qIFByb2JhYmlsaXR5IG9mIE5vIEVmZmVjdCB4IFRydWUgTmVnYXRpdmUgKi9cclxuICAgIC5wcm9iOV9uZXRuIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNjAlO1xyXG4gICAgbGVmdDogODIlO1xyXG4gICAgfVxyXG4gICAgLyogUHJvYmFiaWxpdHkgb2YgTm8gRWZmZWN0IHggRmFsc2UgUG9zaXRpdmUgKi9cclxuICAgIC5wcm9iMTBfbmVmcCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDgwJTtcclxuICAgIGxlZnQ6IDgyJTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICA8L3N0eWxlPlxyXG4gICJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/PPVComponent.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/PPVComponent.vue?vue&type=template&id=dc2dc852&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/PPVComponent.vue?vue&type=template&id=dc2dc852&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* binding */ render; },\n/* harmony export */   \"staticRenderFns\": function() { return /* binding */ staticRenderFns; }\n/* harmony export */ });\nvar render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c(\"div\", {\n    staticClass: \"ppv\"\n  }, [_c(\"b\", [_vm._v(\"Positive Predictive Value (PPV)\")]), _c(\"br\"), _c(\"br\"), _c(\"b\", [_vm._v(\"Probability tree diagram\")]), _c(\"div\", {\n    staticClass: \"diagram-box\"\n  }, [_c(\"div\", {\n    staticClass: \"responsive\"\n  }, [_c(\"img\", {\n    staticClass: \"responsive\",\n    attrs: {\n      src: __webpack_require__(/*! @/assets/tree.svg */ \"./src/assets/tree.svg\")\n    }\n  }), _c(\"input\", {\n    directives: [{\n      name: \"model\",\n      rawName: \"v-model\",\n      value: _vm.text,\n      expression: \"text\"\n    }],\n    staticClass: \"prob1_re\",\n    attrs: {\n      id: \"prob1_re\",\n      value: \"0.01\",\n      size: \"3\"\n    },\n    domProps: {\n      value: _vm.text\n    },\n    on: {\n      input: [function ($event) {\n        if ($event.target.composing) return;\n        _vm.text = $event.target.value;\n      }, _vm.handleInput]\n    }\n  }), _c(\"div\", {\n    staticClass: \"prob2_ne\",\n    attrs: {\n      id: \"prob2_ne\"\n    }\n  }, [_vm._v(_vm._s(this.store.state.prob2_ne))]), _c(\"b\", [_c(\"div\", {\n    staticClass: \"prob3_tp\",\n    attrs: {\n      id: \"prob3_tp\"\n    }\n  }, [_vm._v(_vm._s(this.store.state.prob3_tp))]), _c(\"div\", {\n    staticClass: \"prob4_fn\",\n    attrs: {\n      id: \"prob4_fn\"\n    }\n  }, [_vm._v(_vm._s(this.store.state.beta))]), _c(\"div\", {\n    staticClass: \"prob5_tn\",\n    attrs: {\n      id: \"prob5_tn\"\n    }\n  }, [_vm._v(_vm._s(this.store.state.prob5_tn))]), _c(\"div\", {\n    staticClass: \"prob6_fp\",\n    attrs: {\n      id: \"prob6_fp\"\n    }\n  }, [_vm._v(_vm._s(this.store.state.alpha))]), _c(\"div\", {\n    staticClass: \"prob7_retp\",\n    attrs: {\n      id: \"prob7_retp\"\n    }\n  }, [_vm._v(_vm._s(this.store.state.prob7_retp))]), _c(\"div\", {\n    staticClass: \"prob8_refn\",\n    attrs: {\n      id: \"prob8_refn\"\n    }\n  }, [_vm._v(_vm._s(this.store.state.prob8_refn))]), _c(\"div\", {\n    staticClass: \"prob9_netn\",\n    attrs: {\n      id: \"prob9_netn\"\n    }\n  }, [_vm._v(_vm._s(this.store.state.prob9_netn))]), _c(\"div\", {\n    staticClass: \"prob10_nefp\",\n    attrs: {\n      id: \"prob10_nefp\"\n    }\n  }, [_vm._v(_vm._s(this.store.state.prob10_nefp))])])])]), _vm._m(0), _vm._m(1)]);\n};\nvar staticRenderFns = [function () {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c(\"p\", [_c(\"br\"), _vm._v(\" PPV: \"), _c(\"b\", [_c(\"span\", {\n    attrs: {\n      id: \"ppv\"\n    }\n  })]), _c(\"br\"), _vm._v(\" False Discovery Rate: \"), _c(\"b\", [_c(\"span\", {\n    attrs: {\n      id: \"false_rate\"\n    }\n  })]), _c(\"br\"), _vm._v(\" Sensitivity: \"), _c(\"b\", [_c(\"span\", {\n    attrs: {\n      id: \"sensitivity\"\n    }\n  })]), _c(\"br\"), _vm._v(\" Specificity: \"), _c(\"b\", [_c(\"span\", {\n    attrs: {\n      id: \"specificity\"\n    }\n  })]), _c(\"br\"), _c(\"br\"), _c(\"br\"), _c(\"br\")]);\n}, function () {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c(\"div\", {\n    staticStyle: {\n      \"text-align\": \"justify\"\n    }\n  }, [_vm._v(\" For example, if 1% of the population is afflicted with a disease, and the test for the disease is 99% accurate, we may intuit that our diagnosis will be correct 99% of the time. However, if α = 0.05 and β = 0.01, we will accurately diagnose a patient with the disease only 16% of the time. The PPV in this case is 16%.\"), _c(\"sup\", [_vm._v(\"4\")]), _c(\"br\"), _c(\"br\"), _vm._v(\" The probability of the real effect (e.g., prevalence of disease) can be modified above. \")]);\n}];\nrender._withStripped = true;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvQHZ1ZS92dWUtbG9hZGVyLXYxNS9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1szXSEuL25vZGVfbW9kdWxlcy9AdnVlL3Z1ZS1sb2FkZXItdjE1L2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc3JjL2NvbXBvbmVudHMvUFBWQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kYzJkYzg1MiZzY29wZWQ9dHJ1ZSYuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFXQTtBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdnVlYXBwLy4vc3JjL2NvbXBvbmVudHMvUFBWQ29tcG9uZW50LnZ1ZT81ODRjIl0sInNvdXJjZXNDb250ZW50IjpbInZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHZhciBfdm0gPSB0aGlzLFxuICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInBwdlwiIH0sIFtcbiAgICBfYyhcImJcIiwgW192bS5fdihcIlBvc2l0aXZlIFByZWRpY3RpdmUgVmFsdWUgKFBQVilcIildKSxcbiAgICBfYyhcImJyXCIpLFxuICAgIF9jKFwiYnJcIiksXG4gICAgX2MoXCJiXCIsIFtfdm0uX3YoXCJQcm9iYWJpbGl0eSB0cmVlIGRpYWdyYW1cIildKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImRpYWdyYW0tYm94XCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyZXNwb25zaXZlXCIgfSwgW1xuICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwicmVzcG9uc2l2ZVwiLFxuICAgICAgICAgIGF0dHJzOiB7IHNyYzogcmVxdWlyZShcIkAvYXNzZXRzL3RyZWUuc3ZnXCIpIH0sXG4gICAgICAgIH0pLFxuICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0udGV4dCxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwicHJvYjFfcmVcIixcbiAgICAgICAgICBhdHRyczogeyBpZDogXCJwcm9iMV9yZVwiLCB2YWx1ZTogXCIwLjAxXCIsIHNpemU6IFwiM1wiIH0sXG4gICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS50ZXh0IH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGlucHV0OiBbXG4gICAgICAgICAgICAgIGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHJldHVyblxuICAgICAgICAgICAgICAgIF92bS50ZXh0ID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBfdm0uaGFuZGxlSW5wdXQsXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInByb2IyX25lXCIsIGF0dHJzOiB7IGlkOiBcInByb2IyX25lXCIgfSB9LCBbXG4gICAgICAgICAgX3ZtLl92KF92bS5fcyh0aGlzLnN0b3JlLnN0YXRlLnByb2IyX25lKSksXG4gICAgICAgIF0pLFxuICAgICAgICBfYyhcImJcIiwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicHJvYjNfdHBcIiwgYXR0cnM6IHsgaWQ6IFwicHJvYjNfdHBcIiB9IH0sIFtcbiAgICAgICAgICAgIF92bS5fdihfdm0uX3ModGhpcy5zdG9yZS5zdGF0ZS5wcm9iM190cCkpLFxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicHJvYjRfZm5cIiwgYXR0cnM6IHsgaWQ6IFwicHJvYjRfZm5cIiB9IH0sIFtcbiAgICAgICAgICAgIF92bS5fdihfdm0uX3ModGhpcy5zdG9yZS5zdGF0ZS5iZXRhKSksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwcm9iNV90blwiLCBhdHRyczogeyBpZDogXCJwcm9iNV90blwiIH0gfSwgW1xuICAgICAgICAgICAgX3ZtLl92KF92bS5fcyh0aGlzLnN0b3JlLnN0YXRlLnByb2I1X3RuKSksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwcm9iNl9mcFwiLCBhdHRyczogeyBpZDogXCJwcm9iNl9mcFwiIH0gfSwgW1xuICAgICAgICAgICAgX3ZtLl92KF92bS5fcyh0aGlzLnN0b3JlLnN0YXRlLmFscGhhKSksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJwcm9iN19yZXRwXCIsIGF0dHJzOiB7IGlkOiBcInByb2I3X3JldHBcIiB9IH0sXG4gICAgICAgICAgICBbX3ZtLl92KF92bS5fcyh0aGlzLnN0b3JlLnN0YXRlLnByb2I3X3JldHApKV1cbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicHJvYjhfcmVmblwiLCBhdHRyczogeyBpZDogXCJwcm9iOF9yZWZuXCIgfSB9LFxuICAgICAgICAgICAgW192bS5fdihfdm0uX3ModGhpcy5zdG9yZS5zdGF0ZS5wcm9iOF9yZWZuKSldXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInByb2I5X25ldG5cIiwgYXR0cnM6IHsgaWQ6IFwicHJvYjlfbmV0blwiIH0gfSxcbiAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKHRoaXMuc3RvcmUuc3RhdGUucHJvYjlfbmV0bikpXVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJwcm9iMTBfbmVmcFwiLCBhdHRyczogeyBpZDogXCJwcm9iMTBfbmVmcFwiIH0gfSxcbiAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKHRoaXMuc3RvcmUuc3RhdGUucHJvYjEwX25lZnApKV1cbiAgICAgICAgICApLFxuICAgICAgICBdKSxcbiAgICAgIF0pLFxuICAgIF0pLFxuICAgIF92bS5fbSgwKSxcbiAgICBfdm0uX20oMSksXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fY1xuICAgIHJldHVybiBfYyhcInBcIiwgW1xuICAgICAgX2MoXCJiclwiKSxcbiAgICAgIF92bS5fdihcIiBQUFY6IFwiKSxcbiAgICAgIF9jKFwiYlwiLCBbX2MoXCJzcGFuXCIsIHsgYXR0cnM6IHsgaWQ6IFwicHB2XCIgfSB9KV0pLFxuICAgICAgX2MoXCJiclwiKSxcbiAgICAgIF92bS5fdihcIiBGYWxzZSBEaXNjb3ZlcnkgUmF0ZTogXCIpLFxuICAgICAgX2MoXCJiXCIsIFtfYyhcInNwYW5cIiwgeyBhdHRyczogeyBpZDogXCJmYWxzZV9yYXRlXCIgfSB9KV0pLFxuICAgICAgX2MoXCJiclwiKSxcbiAgICAgIF92bS5fdihcIiBTZW5zaXRpdml0eTogXCIpLFxuICAgICAgX2MoXCJiXCIsIFtfYyhcInNwYW5cIiwgeyBhdHRyczogeyBpZDogXCJzZW5zaXRpdml0eVwiIH0gfSldKSxcbiAgICAgIF9jKFwiYnJcIiksXG4gICAgICBfdm0uX3YoXCIgU3BlY2lmaWNpdHk6IFwiKSxcbiAgICAgIF9jKFwiYlwiLCBbX2MoXCJzcGFuXCIsIHsgYXR0cnM6IHsgaWQ6IFwic3BlY2lmaWNpdHlcIiB9IH0pXSksXG4gICAgICBfYyhcImJyXCIpLFxuICAgICAgX2MoXCJiclwiKSxcbiAgICAgIF9jKFwiYnJcIiksXG4gICAgICBfYyhcImJyXCIpLFxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpcyxcbiAgICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljU3R5bGU6IHsgXCJ0ZXh0LWFsaWduXCI6IFwianVzdGlmeVwiIH0gfSwgW1xuICAgICAgX3ZtLl92KFxuICAgICAgICBcIiBGb3IgZXhhbXBsZSwgaWYgMSUgb2YgdGhlIHBvcHVsYXRpb24gaXMgYWZmbGljdGVkIHdpdGggYSBkaXNlYXNlLCBhbmQgdGhlIHRlc3QgZm9yIHRoZSBkaXNlYXNlIGlzIDk5JSBhY2N1cmF0ZSwgd2UgbWF5IGludHVpdCB0aGF0IG91ciBkaWFnbm9zaXMgd2lsbCBiZSBjb3JyZWN0IDk5JSBvZiB0aGUgdGltZS4gSG93ZXZlciwgaWYgzrEgPSAwLjA1IGFuZCDOsiA9IDAuMDEsIHdlIHdpbGwgYWNjdXJhdGVseSBkaWFnbm9zZSBhIHBhdGllbnQgd2l0aCB0aGUgZGlzZWFzZSBvbmx5IDE2JSBvZiB0aGUgdGltZS4gVGhlIFBQViBpbiB0aGlzIGNhc2UgaXMgMTYlLlwiXG4gICAgICApLFxuICAgICAgX2MoXCJzdXBcIiwgW192bS5fdihcIjRcIildKSxcbiAgICAgIF9jKFwiYnJcIiksXG4gICAgICBfYyhcImJyXCIpLFxuICAgICAgX3ZtLl92KFxuICAgICAgICBcIiBUaGUgcHJvYmFiaWxpdHkgb2YgdGhlIHJlYWwgZWZmZWN0IChlLmcuLCBwcmV2YWxlbmNlIG9mIGRpc2Vhc2UpIGNhbiBiZSBtb2RpZmllZCBhYm92ZS4gXCJcbiAgICAgICksXG4gICAgXSlcbiAgfSxcbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/PPVComponent.vue?vue&type=template&id=dc2dc852&scoped=true&\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "83f95040aabb463d"; }
/******/ }();
/******/ 
/******/ }
);
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

/***/ "./src/mylib.js":
/*!**********************!*\
  !*** ./src/mylib.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nvar test = {\n  foo() {\n    console.log('foo');\n  },\n  bar() {\n    console.log('bar');\n  },\n  baz() {\n    console.log('baz');\n  },\n  myFunction() {\n    document.getElementById(\"demo\").innerHTML = \"I have changed!\";\n  },\n  updateProbabilityTree() {\n    if (prob1_re.value >= 0 && prob1_re.value <= 1) {\n      prob2_ne.innerText = round(1 - prob1_re.value);\n      prob3_tp.innerText = round(1 - beta);\n      prob4_fn.innerText = round(beta);\n      prob5_tn.innerText = round(1 - alpha);\n      prob6_fp.innerText = round(alpha);\n      prob7_retp.innerText = round(prob1_re.value * prob3_tp.innerText);\n      prob8_refn.innerText = round(prob1_re.value * prob4_fn.innerText);\n      prob9_netn.innerText = round(prob2_ne.innerText * prob5_tn.innerText);\n      prob10_nefp.innerText = round(prob2_ne.innerText * prob6_fp.innerText);\n\n      //     // Calculate the False Discovery Rate (FDR)\n      //     let fdr = getFalseDiscoveryRate(parseFloat(prob10_nefp.innerText), parseFloat(prob7_retp.innerText));\n      //     // Calculate the Positive Predictive Value (PPV)\n      //     let ppv = math.round(100 - fdr,2);\n\n      //     if (Number.isNaN(fdr)){\n      //       fdr = \" - \";\n      //     }\n      //     if (Number.isNaN(ppv)){\n      //       ppv = \" - \";\n      //     }\n\n      //     elem(\"false_rate\").innerText = fdr + \"%\";\n      //     elem(\"ppv\").innerText = ppv + \"%\";\n      //     elem(\"sensitivity\").innerText = prob3_tp.innerText;\n      //     elem(\"specificity\").innerText = prob5_tn.innerText;\n    }\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (test);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbXlsaWIuanMuanMiLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7O0FBR0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92dWVhcHAvLi9zcmMvbXlsaWIuanM/ZGY3ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxudmFyIHRlc3QgPSB7XHJcbiAgICBmb28gKCkgeyBjb25zb2xlLmxvZygnZm9vJykgfSxcclxuICAgIGJhciAoKSB7IGNvbnNvbGUubG9nKCdiYXInKSB9LFxyXG4gICAgYmF6ICgpIHsgY29uc29sZS5sb2coJ2JheicpIH0sXHJcblxyXG4gICAgbXlGdW5jdGlvbigpIHtkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlbW9cIikuaW5uZXJIVE1MID0gXCJJIGhhdmUgY2hhbmdlZCFcIjsgfSxcclxuXHJcblxyXG4gICAgICB1cGRhdGVQcm9iYWJpbGl0eVRyZWUoKXtcclxuXHJcbiAgICAgICAgaWYgKChwcm9iMV9yZS52YWx1ZSA+PSAwKSAmJiAocHJvYjFfcmUudmFsdWUgPD0gMSkpIHtcclxuICAgICAgICAgIHByb2IyX25lLmlubmVyVGV4dCA9IHJvdW5kKDEgLSBwcm9iMV9yZS52YWx1ZSk7XHJcbiAgICAgICAgICBwcm9iM190cC5pbm5lclRleHQgPSByb3VuZCgxIC0gYmV0YSk7XHJcbiAgICAgICAgICBwcm9iNF9mbi5pbm5lclRleHQgPSByb3VuZChiZXRhKTtcclxuICAgICAgICAgIHByb2I1X3RuLmlubmVyVGV4dCA9IHJvdW5kKDEgLSBhbHBoYSk7XHJcbiAgICAgICAgICBwcm9iNl9mcC5pbm5lclRleHQgPSByb3VuZChhbHBoYSk7XHJcbiAgICAgICAgICBwcm9iN19yZXRwLmlubmVyVGV4dCA9IHJvdW5kKHByb2IxX3JlLnZhbHVlICogcHJvYjNfdHAuaW5uZXJUZXh0KTtcclxuICAgICAgICAgIHByb2I4X3JlZm4uaW5uZXJUZXh0ID0gcm91bmQocHJvYjFfcmUudmFsdWUgKiBwcm9iNF9mbi5pbm5lclRleHQpO1xyXG4gICAgICAgICAgcHJvYjlfbmV0bi5pbm5lclRleHQgPSByb3VuZChwcm9iMl9uZS5pbm5lclRleHQgKiBwcm9iNV90bi5pbm5lclRleHQpO1xyXG4gICAgICAgICAgcHJvYjEwX25lZnAuaW5uZXJUZXh0ID0gcm91bmQocHJvYjJfbmUuaW5uZXJUZXh0ICogcHJvYjZfZnAuaW5uZXJUZXh0KTtcclxuXHJcbiAgICAvLyAgICAgLy8gQ2FsY3VsYXRlIHRoZSBGYWxzZSBEaXNjb3ZlcnkgUmF0ZSAoRkRSKVxyXG4gICAgLy8gICAgIGxldCBmZHIgPSBnZXRGYWxzZURpc2NvdmVyeVJhdGUocGFyc2VGbG9hdChwcm9iMTBfbmVmcC5pbm5lclRleHQpLCBwYXJzZUZsb2F0KHByb2I3X3JldHAuaW5uZXJUZXh0KSk7XHJcbiAgICAvLyAgICAgLy8gQ2FsY3VsYXRlIHRoZSBQb3NpdGl2ZSBQcmVkaWN0aXZlIFZhbHVlIChQUFYpXHJcbiAgICAvLyAgICAgbGV0IHBwdiA9IG1hdGgucm91bmQoMTAwIC0gZmRyLDIpO1xyXG4gICAgXHJcbiAgICAvLyAgICAgaWYgKE51bWJlci5pc05hTihmZHIpKXtcclxuICAgIC8vICAgICAgIGZkciA9IFwiIC0gXCI7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIGlmIChOdW1iZXIuaXNOYU4ocHB2KSl7XHJcbiAgICAvLyAgICAgICBwcHYgPSBcIiAtIFwiO1xyXG4gICAgLy8gICAgIH1cclxuICAgIFxyXG4gICAgLy8gICAgIGVsZW0oXCJmYWxzZV9yYXRlXCIpLmlubmVyVGV4dCA9IGZkciArIFwiJVwiO1xyXG4gICAgLy8gICAgIGVsZW0oXCJwcHZcIikuaW5uZXJUZXh0ID0gcHB2ICsgXCIlXCI7XHJcbiAgICAvLyAgICAgZWxlbShcInNlbnNpdGl2aXR5XCIpLmlubmVyVGV4dCA9IHByb2IzX3RwLmlubmVyVGV4dDtcclxuICAgIC8vICAgICBlbGVtKFwic3BlY2lmaWNpdHlcIikuaW5uZXJUZXh0ID0gcHJvYjVfdG4uaW5uZXJUZXh0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICB9XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGVzdFxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/mylib.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "b814e97157057d14"; }
/******/ }();
/******/ 
/******/ }
);
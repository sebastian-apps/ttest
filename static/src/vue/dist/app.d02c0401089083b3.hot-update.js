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

eval("__webpack_require__.r(__webpack_exports__);\nvar test = {\n  foo() {\n    console.log('foo');\n  },\n  bar() {\n    console.log('bar');\n  },\n  baz() {\n    console.log('baz');\n  },\n  myFunction() {\n    document.getElementById(\"demo\").innerHTML = \"I have changed!\";\n  },\n  updateProbabilityTree() {\n    if (prob1_re.value >= 0 && prob1_re.value <= 1) {\n      prob2_ne.innerText = round(1 - prob1_re.value);\n      prob3_tp.innerText = round(1 - beta);\n      prob4_fn.innerText = round(beta);\n      prob5_tn.innerText = round(1 - alpha);\n      prob6_fp.innerText = round(alpha);\n      prob7_retp.innerText = round(prob1_re.value * prob3_tp.innerText);\n      prob8_refn.innerText = round(prob1_re.value * prob4_fn.innerText);\n      prob9_netn.innerText = round(prob2_ne.innerText * prob5_tn.innerText);\n      prob10_nefp.innerText = round(prob2_ne.innerText * prob6_fp.innerText);\n\n      // Calculate the False Discovery Rate (FDR)\n      let fdr = getFalseDiscoveryRate(parseFloat(prob10_nefp.innerText), parseFloat(prob7_retp.innerText));\n      // Calculate the Positive Predictive Value (PPV)\n      let ppv = math.round(100 - fdr, 2);\n      if (Number.isNaN(fdr)) {\n        fdr = \" - \";\n      }\n      if (Number.isNaN(ppv)) {\n        ppv = \" - \";\n      }\n      elem(\"false_rate\").innerText = fdr + \"%\";\n      elem(\"ppv\").innerText = ppv + \"%\";\n      elem(\"sensitivity\").innerText = prob3_tp.innerText;\n      elem(\"specificity\").innerText = prob5_tn.innerText;\n    }\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (test);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbXlsaWIuanMuanMiLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBR0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92dWVhcHAvLi9zcmMvbXlsaWIuanM/ZGY3ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxudmFyIHRlc3QgPSB7XHJcbiAgICBmb28gKCkgeyBjb25zb2xlLmxvZygnZm9vJykgfSxcclxuICAgIGJhciAoKSB7IGNvbnNvbGUubG9nKCdiYXInKSB9LFxyXG4gICAgYmF6ICgpIHsgY29uc29sZS5sb2coJ2JheicpIH0sXHJcblxyXG4gICAgbXlGdW5jdGlvbigpIHtkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlbW9cIikuaW5uZXJIVE1MID0gXCJJIGhhdmUgY2hhbmdlZCFcIjsgfSxcclxuXHJcblxyXG4gICAgdXBkYXRlUHJvYmFiaWxpdHlUcmVlKCl7XHJcblxyXG4gICAgICBpZiAoKHByb2IxX3JlLnZhbHVlID49IDApICYmIChwcm9iMV9yZS52YWx1ZSA8PSAxKSkge1xyXG4gICAgICAgIHByb2IyX25lLmlubmVyVGV4dCA9IHJvdW5kKDEgLSBwcm9iMV9yZS52YWx1ZSk7XHJcbiAgICAgICAgcHJvYjNfdHAuaW5uZXJUZXh0ID0gcm91bmQoMSAtIGJldGEpO1xyXG4gICAgICAgIHByb2I0X2ZuLmlubmVyVGV4dCA9IHJvdW5kKGJldGEpO1xyXG4gICAgICAgIHByb2I1X3RuLmlubmVyVGV4dCA9IHJvdW5kKDEgLSBhbHBoYSk7XHJcbiAgICAgICAgcHJvYjZfZnAuaW5uZXJUZXh0ID0gcm91bmQoYWxwaGEpO1xyXG4gICAgICAgIHByb2I3X3JldHAuaW5uZXJUZXh0ID0gcm91bmQocHJvYjFfcmUudmFsdWUgKiBwcm9iM190cC5pbm5lclRleHQpO1xyXG4gICAgICAgIHByb2I4X3JlZm4uaW5uZXJUZXh0ID0gcm91bmQocHJvYjFfcmUudmFsdWUgKiBwcm9iNF9mbi5pbm5lclRleHQpO1xyXG4gICAgICAgIHByb2I5X25ldG4uaW5uZXJUZXh0ID0gcm91bmQocHJvYjJfbmUuaW5uZXJUZXh0ICogcHJvYjVfdG4uaW5uZXJUZXh0KTtcclxuICAgICAgICBwcm9iMTBfbmVmcC5pbm5lclRleHQgPSByb3VuZChwcm9iMl9uZS5pbm5lclRleHQgKiBwcm9iNl9mcC5pbm5lclRleHQpO1xyXG4gICAgXHJcbiAgICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBGYWxzZSBEaXNjb3ZlcnkgUmF0ZSAoRkRSKVxyXG4gICAgICAgIGxldCBmZHIgPSBnZXRGYWxzZURpc2NvdmVyeVJhdGUocGFyc2VGbG9hdChwcm9iMTBfbmVmcC5pbm5lclRleHQpLCBwYXJzZUZsb2F0KHByb2I3X3JldHAuaW5uZXJUZXh0KSk7XHJcbiAgICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBQb3NpdGl2ZSBQcmVkaWN0aXZlIFZhbHVlIChQUFYpXHJcbiAgICAgICAgbGV0IHBwdiA9IG1hdGgucm91bmQoMTAwIC0gZmRyLDIpO1xyXG4gICAgXHJcbiAgICAgICAgaWYgKE51bWJlci5pc05hTihmZHIpKXtcclxuICAgICAgICAgIGZkciA9IFwiIC0gXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChOdW1iZXIuaXNOYU4ocHB2KSl7XHJcbiAgICAgICAgICBwcHYgPSBcIiAtIFwiO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIGVsZW0oXCJmYWxzZV9yYXRlXCIpLmlubmVyVGV4dCA9IGZkciArIFwiJVwiO1xyXG4gICAgICAgIGVsZW0oXCJwcHZcIikuaW5uZXJUZXh0ID0gcHB2ICsgXCIlXCI7XHJcbiAgICAgICAgZWxlbShcInNlbnNpdGl2aXR5XCIpLmlubmVyVGV4dCA9IHByb2IzX3RwLmlubmVyVGV4dDtcclxuICAgICAgICBlbGVtKFwic3BlY2lmaWNpdHlcIikuaW5uZXJUZXh0ID0gcHJvYjVfdG4uaW5uZXJUZXh0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICB9XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGVzdFxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/mylib.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "83657995bfad3fbe"; }
/******/ }();
/******/ 
/******/ }
);
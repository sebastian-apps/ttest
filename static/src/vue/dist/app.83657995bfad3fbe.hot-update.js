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

eval("__webpack_require__.r(__webpack_exports__);\nvar test = {\n  foo() {\n    console.log('foo');\n  },\n  bar() {\n    console.log('bar');\n  },\n  baz() {\n    console.log('baz');\n  },\n  myFunction() {\n    document.getElementById(\"demo\").innerHTML = \"I have changed!\";\n  }\n\n  // updateProbabilityTree(){\n\n  //   if ((prob1_re.value >= 0) && (prob1_re.value <= 1)) {\n  //     prob2_ne.innerText = round(1 - prob1_re.value);\n  //     prob3_tp.innerText = round(1 - beta);\n  //     prob4_fn.innerText = round(beta);\n  //     prob5_tn.innerText = round(1 - alpha);\n  //     prob6_fp.innerText = round(alpha);\n  //     prob7_retp.innerText = round(prob1_re.value * prob3_tp.innerText);\n  //     prob8_refn.innerText = round(prob1_re.value * prob4_fn.innerText);\n  //     prob9_netn.innerText = round(prob2_ne.innerText * prob5_tn.innerText);\n  //     prob10_nefp.innerText = round(prob2_ne.innerText * prob6_fp.innerText);\n\n  //     // Calculate the False Discovery Rate (FDR)\n  //     let fdr = getFalseDiscoveryRate(parseFloat(prob10_nefp.innerText), parseFloat(prob7_retp.innerText));\n  //     // Calculate the Positive Predictive Value (PPV)\n  //     let ppv = math.round(100 - fdr,2);\n\n  //     if (Number.isNaN(fdr)){\n  //       fdr = \" - \";\n  //     }\n  //     if (Number.isNaN(ppv)){\n  //       ppv = \" - \";\n  //     }\n\n  //     elem(\"false_rate\").innerText = fdr + \"%\";\n  //     elem(\"ppv\").innerText = ppv + \"%\";\n  //     elem(\"sensitivity\").innerText = prob3_tp.innerText;\n  //     elem(\"specificity\").innerText = prob5_tn.innerText;\n  //   }\n  // }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (test);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbXlsaWIuanMuanMiLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBOztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTs7QUFHQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Z1ZWFwcC8uL3NyYy9teWxpYi5qcz9kZjdkIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG52YXIgdGVzdCA9IHtcclxuICAgIGZvbyAoKSB7IGNvbnNvbGUubG9nKCdmb28nKSB9LFxyXG4gICAgYmFyICgpIHsgY29uc29sZS5sb2coJ2JhcicpIH0sXHJcbiAgICBiYXogKCkgeyBjb25zb2xlLmxvZygnYmF6JykgfSxcclxuXHJcbiAgICBteUZ1bmN0aW9uKCkge2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVtb1wiKS5pbm5lckhUTUwgPSBcIkkgaGF2ZSBjaGFuZ2VkIVwiOyB9LFxyXG5cclxuXHJcbiAgICAvLyB1cGRhdGVQcm9iYWJpbGl0eVRyZWUoKXtcclxuXHJcbiAgICAvLyAgIGlmICgocHJvYjFfcmUudmFsdWUgPj0gMCkgJiYgKHByb2IxX3JlLnZhbHVlIDw9IDEpKSB7XHJcbiAgICAvLyAgICAgcHJvYjJfbmUuaW5uZXJUZXh0ID0gcm91bmQoMSAtIHByb2IxX3JlLnZhbHVlKTtcclxuICAgIC8vICAgICBwcm9iM190cC5pbm5lclRleHQgPSByb3VuZCgxIC0gYmV0YSk7XHJcbiAgICAvLyAgICAgcHJvYjRfZm4uaW5uZXJUZXh0ID0gcm91bmQoYmV0YSk7XHJcbiAgICAvLyAgICAgcHJvYjVfdG4uaW5uZXJUZXh0ID0gcm91bmQoMSAtIGFscGhhKTtcclxuICAgIC8vICAgICBwcm9iNl9mcC5pbm5lclRleHQgPSByb3VuZChhbHBoYSk7XHJcbiAgICAvLyAgICAgcHJvYjdfcmV0cC5pbm5lclRleHQgPSByb3VuZChwcm9iMV9yZS52YWx1ZSAqIHByb2IzX3RwLmlubmVyVGV4dCk7XHJcbiAgICAvLyAgICAgcHJvYjhfcmVmbi5pbm5lclRleHQgPSByb3VuZChwcm9iMV9yZS52YWx1ZSAqIHByb2I0X2ZuLmlubmVyVGV4dCk7XHJcbiAgICAvLyAgICAgcHJvYjlfbmV0bi5pbm5lclRleHQgPSByb3VuZChwcm9iMl9uZS5pbm5lclRleHQgKiBwcm9iNV90bi5pbm5lclRleHQpO1xyXG4gICAgLy8gICAgIHByb2IxMF9uZWZwLmlubmVyVGV4dCA9IHJvdW5kKHByb2IyX25lLmlubmVyVGV4dCAqIHByb2I2X2ZwLmlubmVyVGV4dCk7XHJcbiAgICBcclxuICAgIC8vICAgICAvLyBDYWxjdWxhdGUgdGhlIEZhbHNlIERpc2NvdmVyeSBSYXRlIChGRFIpXHJcbiAgICAvLyAgICAgbGV0IGZkciA9IGdldEZhbHNlRGlzY292ZXJ5UmF0ZShwYXJzZUZsb2F0KHByb2IxMF9uZWZwLmlubmVyVGV4dCksIHBhcnNlRmxvYXQocHJvYjdfcmV0cC5pbm5lclRleHQpKTtcclxuICAgIC8vICAgICAvLyBDYWxjdWxhdGUgdGhlIFBvc2l0aXZlIFByZWRpY3RpdmUgVmFsdWUgKFBQVilcclxuICAgIC8vICAgICBsZXQgcHB2ID0gbWF0aC5yb3VuZCgxMDAgLSBmZHIsMik7XHJcbiAgICBcclxuICAgIC8vICAgICBpZiAoTnVtYmVyLmlzTmFOKGZkcikpe1xyXG4gICAgLy8gICAgICAgZmRyID0gXCIgLSBcIjtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgaWYgKE51bWJlci5pc05hTihwcHYpKXtcclxuICAgIC8vICAgICAgIHBwdiA9IFwiIC0gXCI7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgXHJcbiAgICAvLyAgICAgZWxlbShcImZhbHNlX3JhdGVcIikuaW5uZXJUZXh0ID0gZmRyICsgXCIlXCI7XHJcbiAgICAvLyAgICAgZWxlbShcInBwdlwiKS5pbm5lclRleHQgPSBwcHYgKyBcIiVcIjtcclxuICAgIC8vICAgICBlbGVtKFwic2Vuc2l0aXZpdHlcIikuaW5uZXJUZXh0ID0gcHJvYjNfdHAuaW5uZXJUZXh0O1xyXG4gICAgLy8gICAgIGVsZW0oXCJzcGVjaWZpY2l0eVwiKS5pbm5lclRleHQgPSBwcm9iNV90bi5pbm5lclRleHQ7XHJcbiAgICAvLyAgIH1cclxuICAgIC8vIH1cclxuXHJcblxyXG4gIH1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCB0ZXN0XHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/mylib.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "ab599faee045fd9f"; }
/******/ }();
/******/ 
/******/ }
);
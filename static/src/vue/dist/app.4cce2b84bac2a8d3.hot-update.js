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

/***/ "./src/welchs.js":
/*!***********************!*\
  !*** ./src/welchs.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mathjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mathjs */ \"./node_modules/mathjs/lib/esm/entry/pureFunctionsAny.generated.js\");\n// function drawAlphaCurve(group1, crit_t_value){\n//     // Fill the area under the curve representing alpha.\n//     let alpha_curve = [];\n//     // this datapoint connects with the critical t vertical line\n//     alpha_curve.push({x: crit_t_value, y: t_Distrib(crit_t_value, group1.df)});\n//     for(var i = 0; i < group1.dist.length; i++) {\n//       if (group1.dist[i]['x'] > crit_t_value){\n//         alpha_curve.push({x: group1.dist[i]['x'], y: group1.dist[i]['y']});\n//       }\n//     }\n//     lineChart.data.datasets[3]['data'] = alpha_curve;\n//     lineChart.update();\n//   }\n\n//   function drawBetaCurve(group2, crit_t_value){\n//     // Fill the area under the curve representing beta.\n//     let beta_curve = [];\n//     for(var i = 0; i < group2.dist.length; i++) {\n//       if (group2.dist[i]['x'] < crit_t_value){\n//         beta_curve.push({x: group2.dist[i]['x'], y: group2.dist[i]['y']});\n//       }\n//     }\n//     // this datapoint connects with the critical t vertical line\n//     beta_curve.push({x: crit_t_value, y: t_Distrib(crit_t_value-ncp, group2.df)}); // ncp acts as offset\n//     lineChart.data.datasets[4]['data'] = beta_curve;\n//     lineChart.update();\n//   }\n\n// function t_Distrib(t, dof){\n//   // For a given x, return the t distribution y value.\n//   y = (math.gamma((dof+1)/2)/(math.sqrt(dof*math.pi)*math.gamma(dof/2))) * (1+((t**2)/dof))**(-(dof+1)/2);\n//   return math.round(y, 6);\n// }\n\n// function getAlpha(crit_t_value, df){\n//   return 1 - computeArea(crit_t_value, df);\n// }\n\n// function getBeta(crit_t_value_beta, df){\n//   return computeArea(crit_t_value_beta, df);\n// }\n\n// function getRocCurve(axes){\n//   console.log(\"axes.x_max\", axes.x_max);\n//   console.log(\"axes.x_min:\", axes.x_min);\n//   let partitions = 25;\n//   step_size = (axes.x_max - axes.x_min)/partitions;\n//   console.log(\"step_size:\", step_size);\n//   console.log();\n//   roc_curve=[];\n//   // crit_t_value_beta = crit_t_value - ncp;\n//   for(var i = 0; i <= partitions; i++) {\n//     roc_curve.push({x: getAlpha((axes.x_min+(i*step_size)), df), y: 1-getBeta(((axes.x_min+(i*step_size)))-ncp, df)});    \n//   }\n//   console.log(\"roc_curve:\", roc_curve);\n//   return roc_curve;\n// }\n\n// function getAUC(axes){\n//   // calculate AUC using the left Riemann Sum\n//   console.log(\"axes.x_max\", axes.x_max);\n//   console.log(\"axes.x_min:\", axes.x_min);\n//   let partitions = 500;\n//   let step_size = (axes.x_max - axes.x_min)/partitions;\n//   console.log(\"step_size:\", step_size);\n//   console.log();\n//   let roc_curve=[];\n//   let auc = 0;\n//   for (var i = 0; i <= partitions; i++) {\n//     roc_curve.push({x: getAlpha((axes.x_min+(i*step_size)), df), y: 1-getBeta(((axes.x_min+(i*step_size)))-ncp, df)});    \n//   }\n//   // calculate left Riemann Sum\n//   for (var i = 0; i < roc_curve.length-1; i++) {\n//     auc = auc + (roc_curve[i].x-roc_curve[i+1].x)*roc_curve[i].y;\n//   }\n\n//   console.log(\"auc:\", auc);\n//   return math.round(auc, 2);\n// }\n\n\nvar welchs = {\n  getFalseDiscoveryRate(FP, TP) {\n    console.log(\"FDR input FP:\", FP);\n    console.log(\"FDR input TP:\", TP);\n    console.log(100 * FP / (FP + TP));\n    return mathjs__WEBPACK_IMPORTED_MODULE_0__.round(100 * FP / (FP + TP), 2);\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (welchs);\n\n// function getFalseDiscoveryRate(FP, TP){\n//   /*Calculate the False Discovery Rate (FDR)\n//   FP: False Positive\n//   TP: True Positive\n//   */\n//   return math.round(100*FP/(FP + TP),2);\n// }\n\n// function computeArea(x, df) {\n//     X=eval(x)\n//     df=eval(df)\n//     with (Math) {\n// \t\tif (df<=0) {\n// \t\t\talert(\"Degrees of freedom must be positive\")\n// \t\t} else {\n// \t\t\tA=df/2;\n// \t\t\tS=A+.5;\n// \t\t\tZ=df/(df+X*X);\n// \t\t\tBT=exp(LogGamma(S)-LogGamma(.5)-LogGamma(A)+A*log(Z)+.5*log(1-Z));\n// \t\t\tif (Z<(A+1)/(S+2)) {\n// \t\t\t\tbetacdf=BT*Betinc(Z,A,.5)\n// \t\t\t} else {\n// \t\t\t\tbetacdf=1-BT*Betinc(1-Z,.5,A)\n// \t\t\t}\n// \t\t\tif (X<0) {\n// \t\t\t\ttcdf=betacdf/2\n// \t\t\t} else {\n// \t\t\t\ttcdf=1-betacdf/2\n// \t\t\t}\n// \t\t}\n// \t\t// tcdf=round(tcdf*100000)/100000;\n// \t\t// tcdf=tcdf*100000/100000;\n// \t}\n//     return round(tcdf);\n// }\n\n// function LogGamma(Z) {\n// \twith (Math) {\n// \t\tvar S=1+76.18009173/Z-86.50532033/(Z+1)+24.01409822/(Z+2)-1.231739516/(Z+3)+.00120858003/(Z+4)-.00000536382/(Z+5);\n// \t\tvar LG= (Z-.5)*log(Z+4.5)-(Z+4.5)+log(S*2.50662827465);\n// \t}\n// \treturn LG\n// }\n\n// function Betinc(X,A,B) {\n// \tvar A0=0;\n// \tvar B0=1;\n// \tvar A1=1;\n// \tvar B1=1;\n// \tvar M9=0;\n// \tvar A2=0;\n// \tvar C9;\n// \twhile (Math.abs((A1-A2)/A1)>.00001) {\n// \t\tA2=A1;\n// \t\tC9=-(A+M9)*(A+B+M9)*X/(A+2*M9)/(A+2*M9+1);\n// \t\tA0=A1+C9*A0;\n// \t\tB0=B1+C9*B0;\n// \t\tM9=M9+1;\n// \t\tC9=M9*(B-M9)*X/(A+2*M9-1)/(A+2*M9);\n// \t\tA1=A0+C9*A1;\n// \t\tB1=B0+C9*B1;\n// \t\tA0=A0/B1;\n// \t\tB0=B0/B1;\n// \t\tA1=A1/B1;\n// \t\tB1=1;\n// \t}\n// \treturn A1/A\n// }\n\n// function getLineChart(axes, group1, group2, p_value, crit_t_value){\n//   return new Chart(elem(\"line_chart\"), {\n//       type: 'scatter',\n//       data: {\n//         datasets: [{\n//             data: [\n//               {x: axes.x_min, y: 0},\n//               {x: axes.x_max, y: 0},\n//             ],\n//             label: \"refs\",\n//             borderColor: \"transparent\",\n//             fill: false\n//           },{\n//             data: group1.dist,\n//             label: \"Group 1\",\n//             borderColor: \"#ff0000\",\n//             fill: false\n//           }, {\n//             data: group2.dist,\n//             label: \"Group 2\",\n//             borderColor: \"#0000ff\",\n//             fill: false,\n//           }, {\n//             data: [], // Alpha Curve\n//             label: \"\\u03B1\",\n//             borderColor: \"transparent\",\n//             backgroundColor: \"#ff000055\",\n//             fill: true\n//           }, {\n//             data: [], // Beta Curve\n//             label: \"\\u03B2\",\n//             borderColor: \"transparent\",\n//             backgroundColor: \"#0000ff55\",\n//             fill: true\n//           }\n//         ]\n//       },\n//       options: {\n//         animation: false,\n//         title: {\n//           display: false,\n//           text: 't-test'\n//         },\n//         legend:{\n//           position: 'bottom',\n//           labels: {\n//             filter: function(item, chart) {\n//                 return !item.text.includes('refs'); // Remove the refs legend item\n//               },\n//              usePointStyle: true,\n//            },\n//         },\n//         elements: {\n//           point:{\n//               radius: 0\n//           }\n//         },\n//         scales: {\n//           xAxes: [{\n//               ticks : {\n//               min: axes.x_min,\n//               stepSize: axes.step_size,\n//                   max: axes.x_max,\n//               },\n//             display: true,\n//             gridLines: {\n//               display:false,\n//             },\n//             scaleLabel: {\n//               display: true,\n//               labelString: 't'\n//             }\n//           }],\n//           yAxes: [{\n//             ticks : {\n//               min: 0,\n//               max: axes.y_max,\n//             },\n//             display: true,\n//             scaleLabel: {\n//               display: true,\n//               labelString: 'Normalized Frequency'\n//             },\n//             gridLines: {\n//                 display:false\n//             }\n//           }]\n//         },\n//         annotation: {\n//           annotations: [{\n//             type: 'line',\n//             mode: 'vertical',\n//             scaleID: 'x-axis-1',\n//             value: t_value,\n//             borderColor: '#c8c8c8',\n//             borderWidth: 2,\n//             borderDash: [10,5],\n//             label: {\n//               enabled: true,\n//               content: 'p = ' + p_value,\n//               backgroundColor: 'transparent',\n//               fontColor: '#c8c8c8',\n//               position: \"top\",\n//             }\n//           },{\n//             type: 'line',\n//             mode: 'vertical',\n//             scaleID: 'x-axis-1',\n//             value: crit_t_value,\n//             borderColor: '#ff7034',\n//             borderWidth: 2,\n//             label: {\n//               enabled: true,\n//               content: '\\u03B1',\n//               backgroundColor: 'transparent',\n//               fontColor: '#4d4e4f',\n//               yAdjust: 20,\n//               position: \"top\",\n//             }\n//           }\n//           ],\n//           drawTime: \"afterDatasetsDraw\" \n//         }\n//       }\n//     });\n// }\n\n// function getROCChart(roc_curve){\n//   return new Chart(elem(\"roc_curve\"), {\n//       type: 'scatter',\n//       data: {\n//         datasets: [{\n//             data: [\n//               {x: 0, y: 0},\n//               {x: 1, y: 1},\n//             ],\n//             label: \"refs\",\n//             borderColor: \"transparent\",\n//             fill: false\n//           },{\n//             data: [], \n//             label: \"TPR\",\n//             borderColor: \"#000000\",\n//             backgroundColor: \"#000000\",\n//             fill: true,\n//             pointRadius: 4\n//           }, {\n//             data: [{x:0,y:0}, {x:1,y:1}], // random curve for reference\n//             label: \"Random\",\n//             borderColor: \"#dedede\",\n//             fill: false\n//           },{\n//             data: roc_curve,\n//             label: \"ROC curve\",\n//             borderColor: \"#7600bc\",\n//             backgroundColor: \"#ca5cdd\",\n//             fill: true\n//             // ,pointRadius: 4\n//           }\n//         ]\n//       },\n//       options: {\n//         animation: false,\n//         title: {\n//           display: false,\n//           text: 't-test'\n//         },\n//         legend:{\n//           position: 'bottom',\n//           labels: {\n//             filter: function(item, chart) {\n//                 return !item.text.includes('refs'); // Remove the refs legend item\n//               },\n//              usePointStyle: true,\n//            },\n//         },\n//         elements: {\n//           point:{\n//               radius: 0\n//           }\n//         },\n//         scales: {\n//           xAxes: [{\n//               ticks : {\n//                 min: 0,\n//                 stepSize: 0.2,\n//                 // stepValue: 0.2,\n//                 steps: 10,\n//                 max: 1,\n//               },\n//             display: true,\n//             gridLines: {\n//               display:false,\n//             },\n//             scaleLabel: {\n//               display: true,\n//               labelString: 'False positive rate (\\u03B1)'\n//             }\n//           }],\n//           yAxes: [{\n//             ticks : {\n//               min: 0,\n//               stepSize: 0.2,\n//               max: 1,\n//             },\n//             display: true,\n//             scaleLabel: {\n//               display: true,\n//               labelString: 'True positive rate (1 - \\u03B2)'\n//             },\n//             gridLines: {\n//                 display:false\n//             }\n//           }]\n//         },\n//         annotation: {\n//           annotations: [{\n//             type: 'line',\n//             mode: 'vertical',\n//             scaleID: 'x-axis-1',\n//             value: t_value,\n//             borderColor: '#c8c8c8',\n//             borderWidth: 2,\n//             borderDash: [10,5],\n//             label: {\n//               enabled: true,\n//               content: 'p = ',\n//               backgroundColor: 'transparent',\n//               fontColor: '#c8c8c8',\n//               position: \"top\",\n//             }\n//           },{\n//             type: 'line',\n//             mode: 'vertical',\n//             scaleID: 'x-axis-1',\n//             value: p_value,\n//             borderColor: '#ff7034',\n//             borderWidth: 2,\n//             label: {\n//               enabled: true,\n//               content: '',\n//               backgroundColor: 'transparent',\n//               fontColor: '#4d4e4f',\n//               yAdjust: 20,\n//               position: \"top\",\n//             }\n//           }\n//           ],\n//           drawTime: \"afterDatasetsDraw\" \n//         }\n//       }\n//     });\n// }\n\n//     /*\n//     Functions below may be used at a future date.\n\n//     BELOW FOR NORMAL CURVE (Z-TEST)\n//     function error_f(x, mean, sd){\n//       return (1/(sd*math.sqrt(2*math.pi)))*math.exp((-((x-mean) ** 2))/(2*sd ** 2));\n//     }\n\n//     function area_under_curve(x1, x2, mean, sd){\n//       return -0.5*(math.erf((mean-x2)/(math.sqrt(2)*sd)) - math.erf((mean-x1)/(math.sqrt(2)*sd)));\n//     }\n\n//     const width  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;\n//     if (width <= 1000){\n//       lineChart.options.annotation.annotations[0].label['enabled'] = true;\n//       lineChart.options.annotation.annotations[1].label['enabled'] = true;\n//       lineChart.update();\n//     }\n//     */\n\n//     /*\n//     Bayes Factor = Likelihood Ratio = Sensitivity / False Positive Rate\n//     *///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvd2VsY2hzLmpzLmpzIiwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdnVlYXBwLy4vc3JjL3dlbGNocy5qcz9kZjllIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGZ1bmN0aW9uIGRyYXdBbHBoYUN1cnZlKGdyb3VwMSwgY3JpdF90X3ZhbHVlKXtcclxuLy8gICAgIC8vIEZpbGwgdGhlIGFyZWEgdW5kZXIgdGhlIGN1cnZlIHJlcHJlc2VudGluZyBhbHBoYS5cclxuLy8gICAgIGxldCBhbHBoYV9jdXJ2ZSA9IFtdO1xyXG4vLyAgICAgLy8gdGhpcyBkYXRhcG9pbnQgY29ubmVjdHMgd2l0aCB0aGUgY3JpdGljYWwgdCB2ZXJ0aWNhbCBsaW5lXHJcbi8vICAgICBhbHBoYV9jdXJ2ZS5wdXNoKHt4OiBjcml0X3RfdmFsdWUsIHk6IHRfRGlzdHJpYihjcml0X3RfdmFsdWUsIGdyb3VwMS5kZil9KTtcclxuLy8gICAgIGZvcih2YXIgaSA9IDA7IGkgPCBncm91cDEuZGlzdC5sZW5ndGg7IGkrKykge1xyXG4vLyAgICAgICBpZiAoZ3JvdXAxLmRpc3RbaV1bJ3gnXSA+IGNyaXRfdF92YWx1ZSl7XHJcbi8vICAgICAgICAgYWxwaGFfY3VydmUucHVzaCh7eDogZ3JvdXAxLmRpc3RbaV1bJ3gnXSwgeTogZ3JvdXAxLmRpc3RbaV1bJ3knXX0pO1xyXG4vLyAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vICAgICBsaW5lQ2hhcnQuZGF0YS5kYXRhc2V0c1szXVsnZGF0YSddID0gYWxwaGFfY3VydmU7XHJcbi8vICAgICBsaW5lQ2hhcnQudXBkYXRlKCk7XHJcbi8vICAgfVxyXG4gIFxyXG4gIFxyXG4vLyAgIGZ1bmN0aW9uIGRyYXdCZXRhQ3VydmUoZ3JvdXAyLCBjcml0X3RfdmFsdWUpe1xyXG4vLyAgICAgLy8gRmlsbCB0aGUgYXJlYSB1bmRlciB0aGUgY3VydmUgcmVwcmVzZW50aW5nIGJldGEuXHJcbi8vICAgICBsZXQgYmV0YV9jdXJ2ZSA9IFtdO1xyXG4vLyAgICAgZm9yKHZhciBpID0gMDsgaSA8IGdyb3VwMi5kaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbi8vICAgICAgIGlmIChncm91cDIuZGlzdFtpXVsneCddIDwgY3JpdF90X3ZhbHVlKXtcclxuLy8gICAgICAgICBiZXRhX2N1cnZlLnB1c2goe3g6IGdyb3VwMi5kaXN0W2ldWyd4J10sIHk6IGdyb3VwMi5kaXN0W2ldWyd5J119KTtcclxuLy8gICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyAgICAgLy8gdGhpcyBkYXRhcG9pbnQgY29ubmVjdHMgd2l0aCB0aGUgY3JpdGljYWwgdCB2ZXJ0aWNhbCBsaW5lXHJcbi8vICAgICBiZXRhX2N1cnZlLnB1c2goe3g6IGNyaXRfdF92YWx1ZSwgeTogdF9EaXN0cmliKGNyaXRfdF92YWx1ZS1uY3AsIGdyb3VwMi5kZil9KTsgLy8gbmNwIGFjdHMgYXMgb2Zmc2V0XHJcbi8vICAgICBsaW5lQ2hhcnQuZGF0YS5kYXRhc2V0c1s0XVsnZGF0YSddID0gYmV0YV9jdXJ2ZTtcclxuLy8gICAgIGxpbmVDaGFydC51cGRhdGUoKTtcclxuLy8gICB9XHJcbiAgXHJcblxyXG5cclxuXHJcbi8vIGZ1bmN0aW9uIHRfRGlzdHJpYih0LCBkb2Ype1xyXG4vLyAgIC8vIEZvciBhIGdpdmVuIHgsIHJldHVybiB0aGUgdCBkaXN0cmlidXRpb24geSB2YWx1ZS5cclxuLy8gICB5ID0gKG1hdGguZ2FtbWEoKGRvZisxKS8yKS8obWF0aC5zcXJ0KGRvZiptYXRoLnBpKSptYXRoLmdhbW1hKGRvZi8yKSkpICogKDErKCh0KioyKS9kb2YpKSoqKC0oZG9mKzEpLzIpO1xyXG4vLyAgIHJldHVybiBtYXRoLnJvdW5kKHksIDYpO1xyXG4vLyB9XHJcblxyXG5cclxuLy8gZnVuY3Rpb24gZ2V0QWxwaGEoY3JpdF90X3ZhbHVlLCBkZil7XHJcbi8vICAgcmV0dXJuIDEgLSBjb21wdXRlQXJlYShjcml0X3RfdmFsdWUsIGRmKTtcclxuLy8gfVxyXG5cclxuLy8gZnVuY3Rpb24gZ2V0QmV0YShjcml0X3RfdmFsdWVfYmV0YSwgZGYpe1xyXG4vLyAgIHJldHVybiBjb21wdXRlQXJlYShjcml0X3RfdmFsdWVfYmV0YSwgZGYpO1xyXG4vLyB9XHJcblxyXG5cclxuLy8gZnVuY3Rpb24gZ2V0Um9jQ3VydmUoYXhlcyl7XHJcbi8vICAgY29uc29sZS5sb2coXCJheGVzLnhfbWF4XCIsIGF4ZXMueF9tYXgpO1xyXG4vLyAgIGNvbnNvbGUubG9nKFwiYXhlcy54X21pbjpcIiwgYXhlcy54X21pbik7XHJcbi8vICAgbGV0IHBhcnRpdGlvbnMgPSAyNTtcclxuLy8gICBzdGVwX3NpemUgPSAoYXhlcy54X21heCAtIGF4ZXMueF9taW4pL3BhcnRpdGlvbnM7XHJcbi8vICAgY29uc29sZS5sb2coXCJzdGVwX3NpemU6XCIsIHN0ZXBfc2l6ZSk7XHJcbi8vICAgY29uc29sZS5sb2coKTtcclxuLy8gICByb2NfY3VydmU9W107XHJcbi8vICAgLy8gY3JpdF90X3ZhbHVlX2JldGEgPSBjcml0X3RfdmFsdWUgLSBuY3A7XHJcbi8vICAgZm9yKHZhciBpID0gMDsgaSA8PSBwYXJ0aXRpb25zOyBpKyspIHtcclxuLy8gICAgIHJvY19jdXJ2ZS5wdXNoKHt4OiBnZXRBbHBoYSgoYXhlcy54X21pbisoaSpzdGVwX3NpemUpKSwgZGYpLCB5OiAxLWdldEJldGEoKChheGVzLnhfbWluKyhpKnN0ZXBfc2l6ZSkpKS1uY3AsIGRmKX0pOyAgICBcclxuLy8gICB9XHJcbi8vICAgY29uc29sZS5sb2coXCJyb2NfY3VydmU6XCIsIHJvY19jdXJ2ZSk7XHJcbi8vICAgcmV0dXJuIHJvY19jdXJ2ZTtcclxuLy8gfVxyXG5cclxuXHJcbi8vIGZ1bmN0aW9uIGdldEFVQyhheGVzKXtcclxuLy8gICAvLyBjYWxjdWxhdGUgQVVDIHVzaW5nIHRoZSBsZWZ0IFJpZW1hbm4gU3VtXHJcbi8vICAgY29uc29sZS5sb2coXCJheGVzLnhfbWF4XCIsIGF4ZXMueF9tYXgpO1xyXG4vLyAgIGNvbnNvbGUubG9nKFwiYXhlcy54X21pbjpcIiwgYXhlcy54X21pbik7XHJcbi8vICAgbGV0IHBhcnRpdGlvbnMgPSA1MDA7XHJcbi8vICAgbGV0IHN0ZXBfc2l6ZSA9IChheGVzLnhfbWF4IC0gYXhlcy54X21pbikvcGFydGl0aW9ucztcclxuLy8gICBjb25zb2xlLmxvZyhcInN0ZXBfc2l6ZTpcIiwgc3RlcF9zaXplKTtcclxuLy8gICBjb25zb2xlLmxvZygpO1xyXG4vLyAgIGxldCByb2NfY3VydmU9W107XHJcbi8vICAgbGV0IGF1YyA9IDA7XHJcbi8vICAgZm9yICh2YXIgaSA9IDA7IGkgPD0gcGFydGl0aW9uczsgaSsrKSB7XHJcbi8vICAgICByb2NfY3VydmUucHVzaCh7eDogZ2V0QWxwaGEoKGF4ZXMueF9taW4rKGkqc3RlcF9zaXplKSksIGRmKSwgeTogMS1nZXRCZXRhKCgoYXhlcy54X21pbisoaSpzdGVwX3NpemUpKSktbmNwLCBkZil9KTsgICAgXHJcbi8vICAgfVxyXG4vLyAgIC8vIGNhbGN1bGF0ZSBsZWZ0IFJpZW1hbm4gU3VtXHJcbi8vICAgZm9yICh2YXIgaSA9IDA7IGkgPCByb2NfY3VydmUubGVuZ3RoLTE7IGkrKykge1xyXG4vLyAgICAgYXVjID0gYXVjICsgKHJvY19jdXJ2ZVtpXS54LXJvY19jdXJ2ZVtpKzFdLngpKnJvY19jdXJ2ZVtpXS55O1xyXG4vLyAgIH1cclxuXHJcbi8vICAgY29uc29sZS5sb2coXCJhdWM6XCIsIGF1Yyk7XHJcbi8vICAgcmV0dXJuIG1hdGgucm91bmQoYXVjLCAyKTtcclxuLy8gfVxyXG5cclxuaW1wb3J0ICogYXMgbWF0aCBmcm9tICdtYXRoanMnO1xyXG5cclxuXHJcbnZhciB3ZWxjaHMgPSB7XHJcbiAgZ2V0RmFsc2VEaXNjb3ZlcnlSYXRlKEZQLCBUUCkge1xyXG4gICAgY29uc29sZS5sb2coXCJGRFIgaW5wdXQgRlA6XCIsIEZQKTtcclxuICAgIGNvbnNvbGUubG9nKFwiRkRSIGlucHV0IFRQOlwiLCBUUCk7XHJcbiAgICBjb25zb2xlLmxvZygxMDAqRlAvKEZQICsgVFApKTtcclxuICAgIHJldHVybiBtYXRoLnJvdW5kKDEwMCpGUC8oRlAgKyBUUCksMik7XHJcbiAgfSxcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdlbGNocyBcclxuXHJcblxyXG4vLyBmdW5jdGlvbiBnZXRGYWxzZURpc2NvdmVyeVJhdGUoRlAsIFRQKXtcclxuLy8gICAvKkNhbGN1bGF0ZSB0aGUgRmFsc2UgRGlzY292ZXJ5IFJhdGUgKEZEUilcclxuLy8gICBGUDogRmFsc2UgUG9zaXRpdmVcclxuLy8gICBUUDogVHJ1ZSBQb3NpdGl2ZVxyXG4vLyAgICovXHJcbi8vICAgcmV0dXJuIG1hdGgucm91bmQoMTAwKkZQLyhGUCArIFRQKSwyKTtcclxuLy8gfVxyXG5cclxuXHJcblxyXG4vLyBmdW5jdGlvbiBjb21wdXRlQXJlYSh4LCBkZikge1xyXG4vLyAgICAgWD1ldmFsKHgpXHJcbi8vICAgICBkZj1ldmFsKGRmKVxyXG4vLyAgICAgd2l0aCAoTWF0aCkge1xyXG4vLyBcdFx0aWYgKGRmPD0wKSB7XHJcbi8vIFx0XHRcdGFsZXJ0KFwiRGVncmVlcyBvZiBmcmVlZG9tIG11c3QgYmUgcG9zaXRpdmVcIilcclxuLy8gXHRcdH0gZWxzZSB7XHJcbi8vIFx0XHRcdEE9ZGYvMjtcclxuLy8gXHRcdFx0Uz1BKy41O1xyXG4vLyBcdFx0XHRaPWRmLyhkZitYKlgpO1xyXG4vLyBcdFx0XHRCVD1leHAoTG9nR2FtbWEoUyktTG9nR2FtbWEoLjUpLUxvZ0dhbW1hKEEpK0EqbG9nKFopKy41KmxvZygxLVopKTtcclxuLy8gXHRcdFx0aWYgKFo8KEErMSkvKFMrMikpIHtcclxuLy8gXHRcdFx0XHRiZXRhY2RmPUJUKkJldGluYyhaLEEsLjUpXHJcbi8vIFx0XHRcdH0gZWxzZSB7XHJcbi8vIFx0XHRcdFx0YmV0YWNkZj0xLUJUKkJldGluYygxLVosLjUsQSlcclxuLy8gXHRcdFx0fVxyXG4vLyBcdFx0XHRpZiAoWDwwKSB7XHJcbi8vIFx0XHRcdFx0dGNkZj1iZXRhY2RmLzJcclxuLy8gXHRcdFx0fSBlbHNlIHtcclxuLy8gXHRcdFx0XHR0Y2RmPTEtYmV0YWNkZi8yXHJcbi8vIFx0XHRcdH1cclxuLy8gXHRcdH1cclxuLy8gXHRcdC8vIHRjZGY9cm91bmQodGNkZioxMDAwMDApLzEwMDAwMDtcclxuLy8gXHRcdC8vIHRjZGY9dGNkZioxMDAwMDAvMTAwMDAwO1xyXG4vLyBcdH1cclxuLy8gICAgIHJldHVybiByb3VuZCh0Y2RmKTtcclxuLy8gfVxyXG5cclxuXHJcblxyXG4vLyBmdW5jdGlvbiBMb2dHYW1tYShaKSB7XHJcbi8vIFx0d2l0aCAoTWF0aCkge1xyXG4vLyBcdFx0dmFyIFM9MSs3Ni4xODAwOTE3My9aLTg2LjUwNTMyMDMzLyhaKzEpKzI0LjAxNDA5ODIyLyhaKzIpLTEuMjMxNzM5NTE2LyhaKzMpKy4wMDEyMDg1ODAwMy8oWis0KS0uMDAwMDA1MzYzODIvKForNSk7XHJcbi8vIFx0XHR2YXIgTEc9IChaLS41KSpsb2coWis0LjUpLShaKzQuNSkrbG9nKFMqMi41MDY2MjgyNzQ2NSk7XHJcbi8vIFx0fVxyXG4vLyBcdHJldHVybiBMR1xyXG4vLyB9XHJcblxyXG4vLyBmdW5jdGlvbiBCZXRpbmMoWCxBLEIpIHtcclxuLy8gXHR2YXIgQTA9MDtcclxuLy8gXHR2YXIgQjA9MTtcclxuLy8gXHR2YXIgQTE9MTtcclxuLy8gXHR2YXIgQjE9MTtcclxuLy8gXHR2YXIgTTk9MDtcclxuLy8gXHR2YXIgQTI9MDtcclxuLy8gXHR2YXIgQzk7XHJcbi8vIFx0d2hpbGUgKE1hdGguYWJzKChBMS1BMikvQTEpPi4wMDAwMSkge1xyXG4vLyBcdFx0QTI9QTE7XHJcbi8vIFx0XHRDOT0tKEErTTkpKihBK0IrTTkpKlgvKEErMipNOSkvKEErMipNOSsxKTtcclxuLy8gXHRcdEEwPUExK0M5KkEwO1xyXG4vLyBcdFx0QjA9QjErQzkqQjA7XHJcbi8vIFx0XHRNOT1NOSsxO1xyXG4vLyBcdFx0Qzk9TTkqKEItTTkpKlgvKEErMipNOS0xKS8oQSsyKk05KTtcclxuLy8gXHRcdEExPUEwK0M5KkExO1xyXG4vLyBcdFx0QjE9QjArQzkqQjE7XHJcbi8vIFx0XHRBMD1BMC9CMTtcclxuLy8gXHRcdEIwPUIwL0IxO1xyXG4vLyBcdFx0QTE9QTEvQjE7XHJcbi8vIFx0XHRCMT0xO1xyXG4vLyBcdH1cclxuLy8gXHRyZXR1cm4gQTEvQVxyXG4vLyB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8gZnVuY3Rpb24gZ2V0TGluZUNoYXJ0KGF4ZXMsIGdyb3VwMSwgZ3JvdXAyLCBwX3ZhbHVlLCBjcml0X3RfdmFsdWUpe1xyXG4vLyAgIHJldHVybiBuZXcgQ2hhcnQoZWxlbShcImxpbmVfY2hhcnRcIiksIHtcclxuLy8gICAgICAgdHlwZTogJ3NjYXR0ZXInLFxyXG4vLyAgICAgICBkYXRhOiB7XHJcbi8vICAgICAgICAgZGF0YXNldHM6IFt7XHJcbi8vICAgICAgICAgICAgIGRhdGE6IFtcclxuLy8gICAgICAgICAgICAgICB7eDogYXhlcy54X21pbiwgeTogMH0sXHJcbi8vICAgICAgICAgICAgICAge3g6IGF4ZXMueF9tYXgsIHk6IDB9LFxyXG4vLyAgICAgICAgICAgICBdLFxyXG4vLyAgICAgICAgICAgICBsYWJlbDogXCJyZWZzXCIsXHJcbi8vICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcInRyYW5zcGFyZW50XCIsXHJcbi8vICAgICAgICAgICAgIGZpbGw6IGZhbHNlXHJcbi8vICAgICAgICAgICB9LHtcclxuLy8gICAgICAgICAgICAgZGF0YTogZ3JvdXAxLmRpc3QsXHJcbi8vICAgICAgICAgICAgIGxhYmVsOiBcIkdyb3VwIDFcIixcclxuLy8gICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwiI2ZmMDAwMFwiLFxyXG4vLyAgICAgICAgICAgICBmaWxsOiBmYWxzZVxyXG4vLyAgICAgICAgICAgfSwge1xyXG4vLyAgICAgICAgICAgICBkYXRhOiBncm91cDIuZGlzdCxcclxuLy8gICAgICAgICAgICAgbGFiZWw6IFwiR3JvdXAgMlwiLFxyXG4vLyAgICAgICAgICAgICBib3JkZXJDb2xvcjogXCIjMDAwMGZmXCIsXHJcbi8vICAgICAgICAgICAgIGZpbGw6IGZhbHNlLFxyXG4vLyAgICAgICAgICAgfSwge1xyXG4vLyAgICAgICAgICAgICBkYXRhOiBbXSwgLy8gQWxwaGEgQ3VydmVcclxuLy8gICAgICAgICAgICAgbGFiZWw6IFwiXFx1MDNCMVwiLFxyXG4vLyAgICAgICAgICAgICBib3JkZXJDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxyXG4vLyAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmMDAwMDU1XCIsXHJcbi8vICAgICAgICAgICAgIGZpbGw6IHRydWVcclxuLy8gICAgICAgICAgIH0sIHtcclxuLy8gICAgICAgICAgICAgZGF0YTogW10sIC8vIEJldGEgQ3VydmVcclxuLy8gICAgICAgICAgICAgbGFiZWw6IFwiXFx1MDNCMlwiLFxyXG4vLyAgICAgICAgICAgICBib3JkZXJDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxyXG4vLyAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzAwMDBmZjU1XCIsXHJcbi8vICAgICAgICAgICAgIGZpbGw6IHRydWVcclxuLy8gICAgICAgICAgIH1cclxuLy8gICAgICAgICBdXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICAgIG9wdGlvbnM6IHtcclxuLy8gICAgICAgICBhbmltYXRpb246IGZhbHNlLFxyXG4vLyAgICAgICAgIHRpdGxlOiB7XHJcbi8vICAgICAgICAgICBkaXNwbGF5OiBmYWxzZSxcclxuLy8gICAgICAgICAgIHRleHQ6ICd0LXRlc3QnXHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgICAgICBsZWdlbmQ6e1xyXG4vLyAgICAgICAgICAgcG9zaXRpb246ICdib3R0b20nLFxyXG4vLyAgICAgICAgICAgbGFiZWxzOiB7XHJcbi8vICAgICAgICAgICAgIGZpbHRlcjogZnVuY3Rpb24oaXRlbSwgY2hhcnQpIHtcclxuLy8gICAgICAgICAgICAgICAgIHJldHVybiAhaXRlbS50ZXh0LmluY2x1ZGVzKCdyZWZzJyk7IC8vIFJlbW92ZSB0aGUgcmVmcyBsZWdlbmQgaXRlbVxyXG4vLyAgICAgICAgICAgICAgIH0sXHJcbi8vICAgICAgICAgICAgICB1c2VQb2ludFN0eWxlOiB0cnVlLFxyXG4vLyAgICAgICAgICAgIH0sXHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgICAgICBlbGVtZW50czoge1xyXG4vLyAgICAgICAgICAgcG9pbnQ6e1xyXG4vLyAgICAgICAgICAgICAgIHJhZGl1czogMFxyXG4vLyAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICAgICAgc2NhbGVzOiB7XHJcbi8vICAgICAgICAgICB4QXhlczogW3tcclxuLy8gICAgICAgICAgICAgICB0aWNrcyA6IHtcclxuLy8gICAgICAgICAgICAgICBtaW46IGF4ZXMueF9taW4sXHJcbi8vICAgICAgICAgICAgICAgc3RlcFNpemU6IGF4ZXMuc3RlcF9zaXplLFxyXG4vLyAgICAgICAgICAgICAgICAgICBtYXg6IGF4ZXMueF9tYXgsXHJcbi8vICAgICAgICAgICAgICAgfSxcclxuLy8gICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcclxuLy8gICAgICAgICAgICAgZ3JpZExpbmVzOiB7XHJcbi8vICAgICAgICAgICAgICAgZGlzcGxheTpmYWxzZSxcclxuLy8gICAgICAgICAgICAgfSxcclxuLy8gICAgICAgICAgICAgc2NhbGVMYWJlbDoge1xyXG4vLyAgICAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXHJcbi8vICAgICAgICAgICAgICAgbGFiZWxTdHJpbmc6ICd0J1xyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICB9XSxcclxuLy8gICAgICAgICAgIHlBeGVzOiBbe1xyXG4vLyAgICAgICAgICAgICB0aWNrcyA6IHtcclxuLy8gICAgICAgICAgICAgICBtaW46IDAsXHJcbi8vICAgICAgICAgICAgICAgbWF4OiBheGVzLnlfbWF4LFxyXG4vLyAgICAgICAgICAgICB9LFxyXG4vLyAgICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4vLyAgICAgICAgICAgICBzY2FsZUxhYmVsOiB7XHJcbi8vICAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcclxuLy8gICAgICAgICAgICAgICBsYWJlbFN0cmluZzogJ05vcm1hbGl6ZWQgRnJlcXVlbmN5J1xyXG4vLyAgICAgICAgICAgICB9LFxyXG4vLyAgICAgICAgICAgICBncmlkTGluZXM6IHtcclxuLy8gICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmFsc2VcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgfV1cclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgICAgIGFubm90YXRpb246IHtcclxuLy8gICAgICAgICAgIGFubm90YXRpb25zOiBbe1xyXG4vLyAgICAgICAgICAgICB0eXBlOiAnbGluZScsXHJcbi8vICAgICAgICAgICAgIG1vZGU6ICd2ZXJ0aWNhbCcsXHJcbi8vICAgICAgICAgICAgIHNjYWxlSUQ6ICd4LWF4aXMtMScsXHJcbi8vICAgICAgICAgICAgIHZhbHVlOiB0X3ZhbHVlLFxyXG4vLyAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyNjOGM4YzgnLFxyXG4vLyAgICAgICAgICAgICBib3JkZXJXaWR0aDogMixcclxuLy8gICAgICAgICAgICAgYm9yZGVyRGFzaDogWzEwLDVdLFxyXG4vLyAgICAgICAgICAgICBsYWJlbDoge1xyXG4vLyAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbi8vICAgICAgICAgICAgICAgY29udGVudDogJ3AgPSAnICsgcF92YWx1ZSxcclxuLy8gICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXHJcbi8vICAgICAgICAgICAgICAgZm9udENvbG9yOiAnI2M4YzhjOCcsXHJcbi8vICAgICAgICAgICAgICAgcG9zaXRpb246IFwidG9wXCIsXHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgIH0se1xyXG4vLyAgICAgICAgICAgICB0eXBlOiAnbGluZScsXHJcbi8vICAgICAgICAgICAgIG1vZGU6ICd2ZXJ0aWNhbCcsXHJcbi8vICAgICAgICAgICAgIHNjYWxlSUQ6ICd4LWF4aXMtMScsXHJcbi8vICAgICAgICAgICAgIHZhbHVlOiBjcml0X3RfdmFsdWUsXHJcbi8vICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnI2ZmNzAzNCcsXHJcbi8vICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAyLFxyXG4vLyAgICAgICAgICAgICBsYWJlbDoge1xyXG4vLyAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbi8vICAgICAgICAgICAgICAgY29udGVudDogJ1xcdTAzQjEnLFxyXG4vLyAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcclxuLy8gICAgICAgICAgICAgICBmb250Q29sb3I6ICcjNGQ0ZTRmJyxcclxuLy8gICAgICAgICAgICAgICB5QWRqdXN0OiAyMCxcclxuLy8gICAgICAgICAgICAgICBwb3NpdGlvbjogXCJ0b3BcIixcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgXSxcclxuLy8gICAgICAgICAgIGRyYXdUaW1lOiBcImFmdGVyRGF0YXNldHNEcmF3XCIgXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICB9XHJcbi8vICAgICB9KTtcclxuLy8gfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLyBmdW5jdGlvbiBnZXRST0NDaGFydChyb2NfY3VydmUpe1xyXG4vLyAgIHJldHVybiBuZXcgQ2hhcnQoZWxlbShcInJvY19jdXJ2ZVwiKSwge1xyXG4vLyAgICAgICB0eXBlOiAnc2NhdHRlcicsXHJcbi8vICAgICAgIGRhdGE6IHtcclxuLy8gICAgICAgICBkYXRhc2V0czogW3tcclxuLy8gICAgICAgICAgICAgZGF0YTogW1xyXG4vLyAgICAgICAgICAgICAgIHt4OiAwLCB5OiAwfSxcclxuLy8gICAgICAgICAgICAgICB7eDogMSwgeTogMX0sXHJcbi8vICAgICAgICAgICAgIF0sXHJcbi8vICAgICAgICAgICAgIGxhYmVsOiBcInJlZnNcIixcclxuLy8gICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcclxuLy8gICAgICAgICAgICAgZmlsbDogZmFsc2VcclxuLy8gICAgICAgICAgIH0se1xyXG4vLyAgICAgICAgICAgICBkYXRhOiBbXSwgXHJcbi8vICAgICAgICAgICAgIGxhYmVsOiBcIlRQUlwiLFxyXG4vLyAgICAgICAgICAgICBib3JkZXJDb2xvcjogXCIjMDAwMDAwXCIsXHJcbi8vICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMDAwMDAwXCIsXHJcbi8vICAgICAgICAgICAgIGZpbGw6IHRydWUsXHJcbi8vICAgICAgICAgICAgIHBvaW50UmFkaXVzOiA0XHJcbi8vICAgICAgICAgICB9LCB7XHJcbi8vICAgICAgICAgICAgIGRhdGE6IFt7eDowLHk6MH0sIHt4OjEseToxfV0sIC8vIHJhbmRvbSBjdXJ2ZSBmb3IgcmVmZXJlbmNlXHJcbi8vICAgICAgICAgICAgIGxhYmVsOiBcIlJhbmRvbVwiLFxyXG4vLyAgICAgICAgICAgICBib3JkZXJDb2xvcjogXCIjZGVkZWRlXCIsXHJcbi8vICAgICAgICAgICAgIGZpbGw6IGZhbHNlXHJcbi8vICAgICAgICAgICB9LHtcclxuLy8gICAgICAgICAgICAgZGF0YTogcm9jX2N1cnZlLFxyXG4vLyAgICAgICAgICAgICBsYWJlbDogXCJST0MgY3VydmVcIixcclxuLy8gICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwiIzc2MDBiY1wiLFxyXG4vLyAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2NhNWNkZFwiLFxyXG4vLyAgICAgICAgICAgICBmaWxsOiB0cnVlXHJcbi8vICAgICAgICAgICAgIC8vICxwb2ludFJhZGl1czogNFxyXG4vLyAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIF1cclxuLy8gICAgICAgfSxcclxuLy8gICAgICAgb3B0aW9uczoge1xyXG4vLyAgICAgICAgIGFuaW1hdGlvbjogZmFsc2UsXHJcbi8vICAgICAgICAgdGl0bGU6IHtcclxuLy8gICAgICAgICAgIGRpc3BsYXk6IGZhbHNlLFxyXG4vLyAgICAgICAgICAgdGV4dDogJ3QtdGVzdCdcclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgICAgIGxlZ2VuZDp7XHJcbi8vICAgICAgICAgICBwb3NpdGlvbjogJ2JvdHRvbScsXHJcbi8vICAgICAgICAgICBsYWJlbHM6IHtcclxuLy8gICAgICAgICAgICAgZmlsdGVyOiBmdW5jdGlvbihpdGVtLCBjaGFydCkge1xyXG4vLyAgICAgICAgICAgICAgICAgcmV0dXJuICFpdGVtLnRleHQuaW5jbHVkZXMoJ3JlZnMnKTsgLy8gUmVtb3ZlIHRoZSByZWZzIGxlZ2VuZCBpdGVtXHJcbi8vICAgICAgICAgICAgICAgfSxcclxuLy8gICAgICAgICAgICAgIHVzZVBvaW50U3R5bGU6IHRydWUsXHJcbi8vICAgICAgICAgICAgfSxcclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgICAgIGVsZW1lbnRzOiB7XHJcbi8vICAgICAgICAgICBwb2ludDp7XHJcbi8vICAgICAgICAgICAgICAgcmFkaXVzOiAwXHJcbi8vICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgICAgICBzY2FsZXM6IHtcclxuLy8gICAgICAgICAgIHhBeGVzOiBbe1xyXG4vLyAgICAgICAgICAgICAgIHRpY2tzIDoge1xyXG4vLyAgICAgICAgICAgICAgICAgbWluOiAwLFxyXG4vLyAgICAgICAgICAgICAgICAgc3RlcFNpemU6IDAuMixcclxuLy8gICAgICAgICAgICAgICAgIC8vIHN0ZXBWYWx1ZTogMC4yLFxyXG4vLyAgICAgICAgICAgICAgICAgc3RlcHM6IDEwLFxyXG4vLyAgICAgICAgICAgICAgICAgbWF4OiAxLFxyXG4vLyAgICAgICAgICAgICAgIH0sXHJcbi8vICAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXHJcbi8vICAgICAgICAgICAgIGdyaWRMaW5lczoge1xyXG4vLyAgICAgICAgICAgICAgIGRpc3BsYXk6ZmFsc2UsXHJcbi8vICAgICAgICAgICAgIH0sXHJcbi8vICAgICAgICAgICAgIHNjYWxlTGFiZWw6IHtcclxuLy8gICAgICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4vLyAgICAgICAgICAgICAgIGxhYmVsU3RyaW5nOiAnRmFsc2UgcG9zaXRpdmUgcmF0ZSAoXFx1MDNCMSknXHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgIH1dLFxyXG4vLyAgICAgICAgICAgeUF4ZXM6IFt7XHJcbi8vICAgICAgICAgICAgIHRpY2tzIDoge1xyXG4vLyAgICAgICAgICAgICAgIG1pbjogMCxcclxuLy8gICAgICAgICAgICAgICBzdGVwU2l6ZTogMC4yLFxyXG4vLyAgICAgICAgICAgICAgIG1heDogMSxcclxuLy8gICAgICAgICAgICAgfSxcclxuLy8gICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcclxuLy8gICAgICAgICAgICAgc2NhbGVMYWJlbDoge1xyXG4vLyAgICAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXHJcbi8vICAgICAgICAgICAgICAgbGFiZWxTdHJpbmc6ICdUcnVlIHBvc2l0aXZlIHJhdGUgKDEgLSBcXHUwM0IyKSdcclxuLy8gICAgICAgICAgICAgfSxcclxuLy8gICAgICAgICAgICAgZ3JpZExpbmVzOiB7XHJcbi8vICAgICAgICAgICAgICAgICBkaXNwbGF5OmZhbHNlXHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgIH1dXHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgICAgICBhbm5vdGF0aW9uOiB7XHJcbi8vICAgICAgICAgICBhbm5vdGF0aW9uczogW3tcclxuLy8gICAgICAgICAgICAgdHlwZTogJ2xpbmUnLFxyXG4vLyAgICAgICAgICAgICBtb2RlOiAndmVydGljYWwnLFxyXG4vLyAgICAgICAgICAgICBzY2FsZUlEOiAneC1heGlzLTEnLFxyXG4vLyAgICAgICAgICAgICB2YWx1ZTogdF92YWx1ZSxcclxuLy8gICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjYzhjOGM4JyxcclxuLy8gICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDIsXHJcbi8vICAgICAgICAgICAgIGJvcmRlckRhc2g6IFsxMCw1XSxcclxuLy8gICAgICAgICAgICAgbGFiZWw6IHtcclxuLy8gICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxyXG4vLyAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdwID0gJyxcclxuLy8gICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXHJcbi8vICAgICAgICAgICAgICAgZm9udENvbG9yOiAnI2M4YzhjOCcsXHJcbi8vICAgICAgICAgICAgICAgcG9zaXRpb246IFwidG9wXCIsXHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgIH0se1xyXG4vLyAgICAgICAgICAgICB0eXBlOiAnbGluZScsXHJcbi8vICAgICAgICAgICAgIG1vZGU6ICd2ZXJ0aWNhbCcsXHJcbi8vICAgICAgICAgICAgIHNjYWxlSUQ6ICd4LWF4aXMtMScsXHJcbi8vICAgICAgICAgICAgIHZhbHVlOiBwX3ZhbHVlLFxyXG4vLyAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyNmZjcwMzQnLFxyXG4vLyAgICAgICAgICAgICBib3JkZXJXaWR0aDogMixcclxuLy8gICAgICAgICAgICAgbGFiZWw6IHtcclxuLy8gICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxyXG4vLyAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnLFxyXG4vLyAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcclxuLy8gICAgICAgICAgICAgICBmb250Q29sb3I6ICcjNGQ0ZTRmJyxcclxuLy8gICAgICAgICAgICAgICB5QWRqdXN0OiAyMCxcclxuLy8gICAgICAgICAgICAgICBwb3NpdGlvbjogXCJ0b3BcIixcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgXSxcclxuLy8gICAgICAgICAgIGRyYXdUaW1lOiBcImFmdGVyRGF0YXNldHNEcmF3XCIgXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICB9XHJcbi8vICAgICB9KTtcclxuLy8gfVxyXG5cclxuXHJcbi8vICAgICAvKlxyXG4vLyAgICAgRnVuY3Rpb25zIGJlbG93IG1heSBiZSB1c2VkIGF0IGEgZnV0dXJlIGRhdGUuXHJcblxyXG5cclxuLy8gICAgIEJFTE9XIEZPUiBOT1JNQUwgQ1VSVkUgKFotVEVTVClcclxuLy8gICAgIGZ1bmN0aW9uIGVycm9yX2YoeCwgbWVhbiwgc2Qpe1xyXG4vLyAgICAgICByZXR1cm4gKDEvKHNkKm1hdGguc3FydCgyKm1hdGgucGkpKSkqbWF0aC5leHAoKC0oKHgtbWVhbikgKiogMikpLygyKnNkICoqIDIpKTtcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICBmdW5jdGlvbiBhcmVhX3VuZGVyX2N1cnZlKHgxLCB4MiwgbWVhbiwgc2Qpe1xyXG4vLyAgICAgICByZXR1cm4gLTAuNSoobWF0aC5lcmYoKG1lYW4teDIpLyhtYXRoLnNxcnQoMikqc2QpKSAtIG1hdGguZXJmKChtZWFuLXgxKS8obWF0aC5zcXJ0KDIpKnNkKSkpO1xyXG4vLyAgICAgfVxyXG5cclxuXHJcbi8vICAgICBjb25zdCB3aWR0aCAgPSB3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggfHwgZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aDtcclxuLy8gICAgIGlmICh3aWR0aCA8PSAxMDAwKXtcclxuLy8gICAgICAgbGluZUNoYXJ0Lm9wdGlvbnMuYW5ub3RhdGlvbi5hbm5vdGF0aW9uc1swXS5sYWJlbFsnZW5hYmxlZCddID0gdHJ1ZTtcclxuLy8gICAgICAgbGluZUNoYXJ0Lm9wdGlvbnMuYW5ub3RhdGlvbi5hbm5vdGF0aW9uc1sxXS5sYWJlbFsnZW5hYmxlZCddID0gdHJ1ZTtcclxuLy8gICAgICAgbGluZUNoYXJ0LnVwZGF0ZSgpO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgKi9cclxuXHRcclxuXHRcclxuLy8gICAgIC8qXHJcbi8vICAgICBCYXllcyBGYWN0b3IgPSBMaWtlbGlob29kIFJhdGlvID0gU2Vuc2l0aXZpdHkgLyBGYWxzZSBQb3NpdGl2ZSBSYXRlXHJcbi8vICAgICAqL1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/welchs.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "c8b3f24bd197d931"; }
/******/ }();
/******/ 
/******/ }
);
// import Chart from "chart.js";


// export const ROCChartData = {
//   type: "line",
//   data: {
//     labels: ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"],
//     datasets: [
//       {
//         label: "Number of Moons",
//         data: [0, 0, 1, 2, 79, 82, 27, 14],
//         backgroundColor: "rgba(54,73,93,.5)",
//         borderColor: "#36495d",
//         borderWidth: 3
//       },
//       {
//         label: "Planetary Mass (relative to the Sun x 10^-6)",
//         data: [0.166, 2.081, 3.003, 0.323, 954.792, 285.886, 43.662, 51.514],
//         backgroundColor: "rgba(71, 183,132,.5)",
//         borderColor: "#47b784",
//         borderWidth: 3
//       }
//     ]
//   },
//   options: {
//     responsive: true,
//     lineTension: 1,
//     scales: {
//       yAxes: [
//         {
//           ticks: {
//             beginAtZero: true,
//             padding: 25
//           }
//         }
//       ]
//     }
//   }
// };




export const ROCChartData = {

      type: 'scatter',
      data: {
        datasets: [{
            data: [
              {x: 0, y: 0},
              {x: 1, y: 1},
            ],
            label: "refs",
            borderColor: "transparent",
            fill: false
          }
          ,{
            data:  [{x: 0.05, y: 0.75}],     //[], 
            label: "TPR",
            borderColor: "#000000",
            backgroundColor: "#000000",
            fill: true,
            pointRadius: 4
          }, {
            data: [{x:0,y:0}, {x:1,y:1}], // random curve for reference
            label: "Random",
            borderColor: "#dedede",
            fill: false,
            showLine: true
          }
          ,{
            data: [{x:0.9995, y:1}, {x:0.999, y:1}, {x:0.9979, y:0.9999}, 
                  {x:0.9955, y: 0.9999}, 
                  {x:0.9902, y: 0.9998}, 
                  {x:0.9786, y: 0.9995}, 
                  {x:0.9534, y: 0.9991}, 
                  {x:0.9021, y: 0.9981}, 
                  {x:0.8087, y: 0.996}, 
                  {x:0.6644, y: 0.9914}, 
                  {x:0.48419999999999996, y: 0.9813}, 
                  {x:0.3077, y: 0.9591}, 
                  {x:0.17179999999999995, y: 0.9134}, 
                  {x:0.08660000000000001, y: 0.8282}, 
                  {x:0.04090000000000005, y: 0.6923}, 
                  {x:0.01870000000000005, y: 0.5158}, 
                  {x:0.008600000000000052, y: 0.3356}, 
                  {x:0.0040000000000000036, y: 0.19130000000000003}, 
                  {x:0.0019000000000000128, y: 0.09789999999999999}, 
                  {x:0.0009000000000000119, y: 0.046599999999999975}, 
                  {x:0.0004999999999999449, y: 0.021399999999999975}, 
                  {x:0.00019999999999997797, y: 0.009800000000000031}, 
                  {x:0.00009999999999998899, y: 0.0044999999999999485}, 
                  {x:0.00009999999999998899, y: 0.0020999999999999908}, 
                  {x:0, y: 0.0010000000000000009}, 
                  {x:0, y:0.0004999999999999449}],

            label: "ROC curve",
            borderColor: "#7600bc",
            backgroundColor: "#ca5cdd",
            fill: true,
            showLine: true
            // ,pointRadius: 4
          }
        ]
      },
      options: {
        animation: false,
        title: {
          display: false,
          text: 't-test'
        },
        legend:{
          position: 'bottom',
          labels: {
            filter: function(item, ) {  // filter: function(item, chart)
                return !item.text.includes('refs'); // Remove the refs legend item
              },
              usePointStyle: true,
            },
        },
        elements: {
          point:{
              radius: 0
          }
        },
        scales: {
          xAxes: [{
              ticks : {
                min: 0,
                stepSize: 0.2,
                // stepValue: 0.2,
                steps: 10,
                max: 1,
              },
            display: true,
            gridLines: {
              display:false,
            },
            scaleLabel: {
              display: true,
              labelString: 'False positive rate (\u03B1)'
            }
          }],
          yAxes: [{
            ticks : {
              min: 0,
              stepSize: 0.2,
              max: 1,
            },
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'True positive rate (1 - \u03B2)'
            },
            gridLines: {
                display:false
            }
          }]
        },
        annotation: {
          annotations: [{
            type: 'line',
            mode: 'vertical',
            scaleID: 'x-axis-1',
            value: -2.2502, // t_value,
            borderColor: '#c8c8c8',
            borderWidth: 2,
            borderDash: [10,5],
            label: {
              enabled: true,
              content: 'p = ',
              backgroundColor: 'transparent',
              fontColor: '#c8c8c8',
              position: "top",
            }
          },{
            type: 'line',
            mode: 'vertical',
            scaleID: 'x-axis-1',
            value: 0.0255, // p_value,
            borderColor: '#ff7034',
            borderWidth: 2,
            label: {
              enabled: true,
              content: '',
              backgroundColor: 'transparent',
              fontColor: '#4d4e4f',
              yAdjust: 20,
              position: "top",
            }
          }
          ],
          drawTime: "afterDatasetsDraw" 
        }
      }
    };
    

export default ROCChartData;
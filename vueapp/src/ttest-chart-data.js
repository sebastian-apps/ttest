

export const ttestChartData = {

    // elem("line_chart")
        type: 'scatter',
        data: {
          datasets: [{
              data: [],  // [{x: axes.x_min, y: 0}, {x: axes.x_max, y: 0}],
              label: "refs",
              borderColor: "transparent",
              fill: false
            },{
              data: [],   // group1.dist,
              label: "Group 1",
              borderColor: "#ff0000",
              fill: false,
              showLine: true
            }, {
              data: [],  // group2.dist,
              label: "Group 2",
              borderColor: "#0000ff",
              fill: false,
              showLine: true
            }, {
              data: [], // Alpha Curve
              label: "\u03B1",
              borderColor: "transparent",
              backgroundColor: "#ff000055",
              fill: true,
              showLine: true  //new
            }, {
              data: [], // Beta Curve
              label: "\u03B2",
              borderColor: "transparent",
              backgroundColor: "#0000ff55",
              fill: true,
              showLine: true  //new
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
                  min: -4.753,   // axes.x_min,
                  stepSize: 0.4794,  // axes.step_size,
                  max: 7.232,  // axes.x_max,
                },
              display: true,
              gridLines: {
                display:false,
              },
              scaleLabel: {
                display: true,
                labelString: 't'
              }
            }],
            yAxes: [{
              ticks : {
                min: 0,
                max: 0,  // axes.y_max,
              },
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Normalized Frequency'
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
              value: 0, // -2.2502,   // t_value,
              borderColor: '#c8c8c8',
              borderWidth: 2,
              borderDash: [10,5],
              label: {
                enabled: true,
                content: '',   //'p = ' + 0.0255,  // content: 'p = ' + p_value,
                backgroundColor: 'transparent',
                fontColor: '#c8c8c8',
                position: "top",
              }
            },{
              type: 'line',
              mode: 'vertical',
              scaleID: 'x-axis-1',
              value: 0, //3.2557,  // crit_t_value,
              borderColor: '#ff7034',
              borderWidth: 2,
              label: {
                enabled: true,
                content: '\u03B1',
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


export default ttestChartData;
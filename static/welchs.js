function drawAlphaCurve(){
    // Fill the area under the curve representing alpha.
    let alpha_curve = [];
    // this datapoint connects with the critical t vertical line
    alpha_curve.push({x: crit_t_value, y: t_distrib(crit_t_value, group1.df)});
    for(var i = 0; i < group1.dist.length; i++) {
      if (group1.dist[i]['x'] > crit_t_value){
        alpha_curve.push({x: group1.dist[i]['x'], y: group1.dist[i]['y']});
      }
    }
    lineChart.data.datasets[3]['data'] = alpha_curve;
    lineChart.update();
  }
  
  
  function drawBetaCurve(){
    // Fill the area under the curve representing beta.
    let beta_curve = [];
    for(var i = 0; i < group2.dist.length; i++) {
      if (group2.dist[i]['x'] < crit_t_value){
        beta_curve.push({x: group2.dist[i]['x'], y: group2.dist[i]['y']});
      }
    }
    // this datapoint connects with the critical t vertical line
    beta_curve.push({x: crit_t_value, y: t_distrib(crit_t_value-ncp, group2.df)}); // ncp acts as offset
    lineChart.data.datasets[4]['data'] = beta_curve;
    lineChart.update();
  }
  



function t_distrib(t, dof){
  // For a given x, return the t distribution y value.
  y = (math.gamma((dof+1)/2)/(math.sqrt(dof*math.pi)*math.gamma(dof/2))) * (1+((t**2)/dof))**(-(dof+1)/2);
  return math.round(y, 6);
}


function getAlpha(){
  return 1 - computeArea(crit_t_value, df);
}

function getBeta(){
  return computeArea(crit_t_value_beta, df);
}


function getFalseDiscoveryRate(FP, TP){
  /*Calculate the False Discovery Rate (FDR)
  FP: False Positive
  TP: True Positive
  */
  return math.round(100*FP/(FP + TP),2);
}



function computeArea(x, df) {
    X=eval(x)
    df=eval(df)
    with (Math) {
		if (df<=0) {
			alert("Degrees of freedom must be positive")
		} else {
			A=df/2;
			S=A+.5;
			Z=df/(df+X*X);
			BT=exp(LogGamma(S)-LogGamma(.5)-LogGamma(A)+A*log(Z)+.5*log(1-Z));
			if (Z<(A+1)/(S+2)) {
				betacdf=BT*Betinc(Z,A,.5)
			} else {
				betacdf=1-BT*Betinc(1-Z,.5,A)
			}
			if (X<0) {
				tcdf=betacdf/2
			} else {
				tcdf=1-betacdf/2
			}
		}
		tcdf=round(tcdf*100000)/100000;
	}
    return round(tcdf);
}



function LogGamma(Z) {
	with (Math) {
		var S=1+76.18009173/Z-86.50532033/(Z+1)+24.01409822/(Z+2)-1.231739516/(Z+3)+.00120858003/(Z+4)-.00000536382/(Z+5);
		var LG= (Z-.5)*log(Z+4.5)-(Z+4.5)+log(S*2.50662827465);
	}
	return LG
}

function Betinc(X,A,B) {
	var A0=0;
	var B0=1;
	var A1=1;
	var B1=1;
	var M9=0;
	var A2=0;
	var C9;
	while (Math.abs((A1-A2)/A1)>.00001) {
		A2=A1;
		C9=-(A+M9)*(A+B+M9)*X/(A+2*M9)/(A+2*M9+1);
		A0=A1+C9*A0;
		B0=B1+C9*B0;
		M9=M9+1;
		C9=M9*(B-M9)*X/(A+2*M9-1)/(A+2*M9);
		A1=A0+C9*A1;
		B1=B0+C9*B1;
		A0=A0/B1;
		B0=B0/B1;
		A1=A1/B1;
		B1=1;
	}
	return A1/A
}





function getLineChart(){
  return new Chart(elem("line_chart"), {
      type: 'scatter',
      data: {
        datasets: [{
            data: [
              {x: axes.x_min, y: 0},
              {x: axes.x_max, y: 0},
            ],
            label: "refs",
            borderColor: "transparent",
            fill: false
          },{
            data: group1.dist,
            label: "Group 1",
            borderColor: "#ff0000",
            fill: false
          }, {
            data: group2.dist,
            label: "Group 2",
            borderColor: "#0000ff",
            fill: false,
          }, {
            data: [], // Alpha Curve
            label: "\u03B1",
            borderColor: "transparent",
            backgroundColor: "#ff000055",
            fill: true
          }, {
            data: [], // Beta Curve
            label: "\u03B2",
            borderColor: "transparent",
            backgroundColor: "#0000ff55",
            fill: true
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
            filter: function(item, chart) {
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
              min: axes.x_min,
              stepSize: axes.step_size,
                  max: axes.x_max,
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
              max: axes.y_max,
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
            value: t_value,
            borderColor: '#c8c8c8',
            borderWidth: 2,
            borderDash: [10,5],
            label: {
              enabled: true,
              content: 'p = ' + p_value,
              backgroundColor: 'transparent',
              fontColor: '#c8c8c8',
              position: "top",
            }
          },{
            type: 'line',
            mode: 'vertical',
            scaleID: 'x-axis-1',
            value: crit_t_value,
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
    });
}



    /*
    Functions below may be used at a future date.


    BELOW FOR NORMAL CURVE (Z-TEST)
    function error_f(x, mean, sd){
      return (1/(sd*math.sqrt(2*math.pi)))*math.exp((-((x-mean) ** 2))/(2*sd ** 2));
      //return (1/(sd*math.sqrt(2*math.pi)))*math.exp((-((x-mean)^2))/(2*sd^2));
    }

    function area_under_curve(x1, x2, mean, sd){
      return -0.5*(math.erf((mean-x2)/(math.sqrt(2)*sd)) - math.erf((mean-x1)/(math.sqrt(2)*sd)));
    }


    const width  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (width <= 1000){
      lineChart.options.annotation.annotations[0].label['enabled'] = true;
      lineChart.options.annotation.annotations[1].label['enabled'] = true;
      lineChart.update();
    }
    */
	
	
    /*
    Bayes Factor = Likelihood Ratio = Sensitivity / False Positive Rate
    */
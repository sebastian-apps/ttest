

const ROUND_DECIMALS = 4;
var alpha_curve;
var beta_curve;
var shiftX;
var alpha;
var beta;
var newLeft;
var df;
var crit_t_value;
var t_value;
var crit_t_value_beta;  // critical t with respect to the group 2 distribution, not group 1


{% if test_results %}
  const group1 = {{ data1|safe }};
  const group2 = {{ data2|safe }};
  const axes = JSON.parse('{{ axes|safe }}');
  console.log(group1);
  console.log(group2);
  console.log(axes);

  df = {{ test_results.df }};
  ncp = {{ test_results.ncp }};
  elem("ncp").innerText = round(ncp);

  var t_value = {{ test_results.t_value }};
  elem("t_value").innerText = round(t_value);  // display t-value, even as negative
  t_value = math.abs(t_value);

{% endif %}


prob1_re = elem("prob1_re");
prob2_ne = elem("prob2_ne");
prob3_tp = elem("prob3_tp");
prob4_fn = elem("prob4_fn");
prob5_tn = elem("prob5_tn");
prob6_fp = elem("prob6_fp");
prob7_retp = elem("prob7_retp");
prob8_refn = elem("prob8_refn");
prob9_netn = elem("prob9_netn");
prob10_nefp = elem("prob10_nefp");



var lineChart = new Chart(elem("line_chart"), {
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
        data: alpha_curve,
        label: "\u03B1",
        borderColor: "transparent",
        backgroundColor: "#ff000055",
        fill: true
      }, {
        data: beta_curve,
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
          content: 'p = {{ test_results.p_value }}',
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
      drawTime: "afterDatasetsDraw" // (default)
    }
  }
});




// OBTAIN MOUSE EVENT, DRAG SLIDER
let thumb = slider.querySelector('.thumb');

thumb.onmousedown = function(event) {
  event.preventDefault(); // prevent selection start (browser action)
  shiftX = event.clientX - thumb.getBoundingClientRect().left;
  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);

  function onMouseMove(event) {
    newLeft = event.clientX - shiftX - slider.getBoundingClientRect().left;
    // the pointer is out of slider => lock the thumb within the boundaries
    if (newLeft < 0) {
      newLeft = 0;
    }
    let rightEdge = slider.offsetWidth - thumb.offsetWidth;
    if (newLeft > rightEdge) {
      newLeft = rightEdge;
    }

    thumb.style.left = newLeft + 'px';
    moveBar();
  }

  function onMouseUp() {
    document.removeEventListener('mouseup', onMouseUp);
    document.removeEventListener('mousemove', onMouseMove);
  }

};

thumb.ondragstart = function() {
  return false;
};





// FOR MOBILE DEVICES ONLY, DRAG SLIDER
function move_thumb_mobile(event) {
  newLeft = event.touches[0].clientX - slider.getBoundingClientRect().left;

  // the pointer is out of slider => lock the thumb within the boundaries
  if (newLeft < 0) {
    newLeft = 0;
  }
  let rightEdge = slider.offsetWidth - thumb.offsetWidth;
  if (newLeft > rightEdge) {
    newLeft = rightEdge;
  }
  thumb.style.left = newLeft + 'px';
  moveBar();
}



// Execute initially
newLeft = init_thumb(axes.x_min, axes.x_max, thumb.offsetWidth);
moveBar();






function init_thumb(chart_x_min, chart_x_max, thumbOffsetWidth){
  // Initial position of the slider thumb.
  // crit_t_init is an arbitrary initial critical t value
  var crit_t_init = {{ test_results.crit_t_init }};
  var init_x = crit_t_init;

  var points = lineChart.chart.getDatasetMeta(0).data;
  var x1 = points[0]._model.x;
  var x2 = points[1]._model.x;

  // convert chart x value to the x screen position for the slider thumb
  var magic_number = 3; // better implementation needed
  var new_thumb = convert_chart_x_to_screen_x(init_x, chart_x_min, chart_x_max, x1, x2, magic_number);
  elem("thumb").style.left = new_thumb +"px";
  return new_thumb;
}





function convert_chart_x_to_screen_x(x, chart_x_min, chart_x_max, x1, x2, magic_offset){
  return math.round((((x - chart_x_min)/(chart_x_max - chart_x_min))*(x2-x1)) - magic_offset,0);
}

function convert_screen_x_to_chart_x(x, x1, x2, chart_x1, chart_x2, thumbOffsetWidth){
  return (x + (thumbOffsetWidth/2))/(x2 - x1)*(chart_x2-chart_x1) + chart_x1;
}



function moveBar(){

  // get absolute x,y coordinates of the chart on the screen
  var points = lineChart.chart.getDatasetMeta(0).data;
  var x1 = points[0]._model.x;
  var y1 = points[0]._model.y;
  var x2 = points[1]._model.x;
  var y2 = points[1]._model.y;

  // adjust the slider
  elem("slider").style.left = x1 + "px";
  elem("slider").style.width = x2 - x1 + "px";

  // draw the critical t vertical line
  crit_t_value = round(convert_screen_x_to_chart_x(newLeft, x1, x2, axes.x_min, axes.x_max, thumb.offsetWidth));
  lineChart.options.annotation.annotations[1]['value'] = crit_t_value;
  lineChart.update();

  /* update numeric values related to critical t.
     shift by the non-centrality parameter. */
  crit_t_value_beta = crit_t_value - ncp;
  //elem('message').innerText = "comp area: " + compute_area(3, df);
  elem('crit_t_value').innerText = crit_t_value;

  // fill in areas under the graph, find alpha and beta
  draw_alpha_curve();
  draw_beta_curve();
  get_probabilities();
  elem('sig-level').innerText = round(alpha);

  // determine recommendation: to reject or not reject the null hypothesis
  if (crit_t_value <= t_value){
    elem('reject-or-not').innerText = "Reject the Null Hypothesis (H\u2080)";
    elem('reject').style.backgroundColor = "#ff7034";
    elem('not-reject').style.backgroundColor = "#ffffff";

  } else if (crit_t_value > t_value) {
    elem('reject-or-not').innerText = "Do Not Reject the Null Hypothesis (H\u2080)";
    elem('reject').style.backgroundColor = "#ffffff";
    elem('not-reject').style.backgroundColor = "#ff7034";

  } else {
    elem('reject-or-not').innerText = " ";
    elem('reject').style.backgroundColor = "#ffffff";
    elem('not-reject').style.backgroundColor = "#ffffff";
  }

  updateProbabilityTree();
}




function draw_alpha_curve(){
  // Fill the area under the curve representing alpha.
  alpha_curve = [];
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


function draw_beta_curve(){
  // Fill the area under the curve representing beta.
  beta_curve = [];
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



function get_probabilities(){

  alpha = 1 - compute_area(crit_t_value, df);
  beta = compute_area(crit_t_value_beta, df);

  elem("alpha").innerText = round(alpha);
  elem("confidence").innerText = round(1-alpha);
  elem("beta").innerText = round(beta);
  elem("power").innerText = round(1-beta);

  lineChart.options.annotation.annotations[1].label['content'] = '\u03B1 = ' + round(alpha);
  lineChart.update();

  // Option to have Hypothesis Testing boxes change color intensity according to magnitude of alpha and beta probability
  //elem('alpha-box').style = "background-color: rgba(255, 0, 0, "+ (Math.round(alpha * 1000)*0.6 / (1000)).toFixed(3) +");"
  //elem('beta-box').style = "background-color: rgba(0, 0, 255, "+ (Math.round(beta * 1000)*0.6 / (1000)).toFixed(3) +");"
}





function updateProbabilityTree(){

  if ((prob1_re.value >= 0) && (prob1_re.value <= 1)) {
    prob2_ne.innerText = round(1 - prob1_re.value);
    prob3_tp.innerText = round(1 - beta);
    prob4_fn.innerText = round(beta);
    prob5_tn.innerText = round(1 - alpha);
    prob6_fp.innerText = round(alpha);
    prob7_retp.innerText = round(prob1_re.value * prob3_tp.innerText);
    prob8_refn.innerText = round(prob1_re.value * prob4_fn.innerText);
    prob9_netn.innerText = round(prob2_ne.innerText * prob5_tn.innerText);
    prob10_nefp.innerText = round(prob2_ne.innerText * prob6_fp.innerText);

    // Calculate the False Discovery Rate (FDR)
    var fdr = math.round(parseFloat(prob10_nefp.innerText)*100/(parseFloat(prob10_nefp.innerText) + parseFloat(prob7_retp.innerText)),2);
    // Calculate the Positive Predictive Value (PPV)
    var ppv = math.round(100 - fdr,2);

    if (Number.isNaN(fdr)){
      fdr = " - ";
    }
    if (Number.isNaN(ppv)){
      ppv = " - ";
    }

    elem("false_rate").innerText = fdr + "%";
    elem("ppv").innerText = ppv + "%";
    elem("sensitivity").innerText = prob3_tp.innerText;
    elem("specificity").innerText = prob5_tn.innerText;
  }
}





function round(val){
  return math.round(val, ROUND_DECIMALS).toFixed(ROUND_DECIMALS);
}


function clear_form() {
  elem("id_dataset1").value = '';
  elem("id_dataset2").value = '';
}


elem("prob1_re").onkeypress = function(event){
    if (event.keyCode == 13 || event.which == 13){
        updateProbabilityTree();
    }
};


$(window).resize(function(e) {
  moveBar();
});


// function provides shorthand for getting element id
function elem(elem_id){
  return document.getElementById(elem_id);
}




function t_distrib(t, dof){
  // For a given x, return the t distribution y value.
  f = (math.gamma((dof+1)/2)/(math.sqrt(dof*math.pi)*math.gamma(dof/2))) * (1+((t**2)/dof))**(-(dof+1)/2);
  return math.round(f, 6);
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

function compute_area(x, df) {
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
	

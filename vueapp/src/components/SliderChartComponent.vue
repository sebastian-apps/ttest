
<template>
  <div>

    <div class="slidecontainer" id="slidecontainer">
      <input type="range" min="0" max="100" value="50" class="slider" id="myRange" v-model="slideValue" v-on:input="slidefunc">
      <!-- <input type="range" min="0" max="100" value="50" class="slider" id="myRange" v-model="slideValue" v-on:input="slidefunc" v-bind:style="{ left: computedLeft }"> -->
    </div>

    <div>
      <canvas id="ttest-chart" width="1000" height="800"></canvas>
    </div>


  </div>
</template>


<script>
import store from '../store/store' 
import Chart from 'chart.js'  // npm install chart.js@2.9.4, then tried 2.9.3. so,e say 2.9.4 doesn't work.
import chartjsPluginAnnotation from "chartjs-plugin-annotation"; // npm install chartjs-plugin-annotation@0.5.7 --save    <<< used this. necessary?
import * as math from 'mathjs';
import ttestChartData from '../ttest-chart-data.js'
import welchs from '@/welchs';



export default {
  name: 'SliderChart',
  data() {
    return {
      store,
      state: store.state,
      ttestChartData: ttestChartData,
      storecount: store.state.count,
      ttestChart: null,
      thumb: null,
      sliderValue: null,
      sliderElem: null,
    }
  },
  methods: {
    drawAlphaCurve: function(group1, crit_t_value){  
      let alpha_curve = welchs.getAlphaCurve(group1, crit_t_value);
      this.ttestChartData.data.datasets[3].data = alpha_curve;  // was [3]['data']
      // this.ttestChart.update();
    },
    drawBetaCurve: function (group2, crit_t_value, ncp){  
      let beta_curve = welchs.getBetaCurve (group2, crit_t_value, ncp);
      this.ttestChartData.data.datasets[4].data = beta_curve;
      // this.ttestChart.update();
    },

    convertChartXToScreenX: function (x, chart_x_min, chart_x_max, x1, x2, offset){
    //return math.round((((x - chart_x_min)/(chart_x_max - chart_x_min))*(x2-x1)) - offset,0);
    return (((x - chart_x_min)/(chart_x_max - chart_x_min))*(x2-x1)) - offset;
    },

    convertScreenXToChartX: function (x, x1, x2, chart_x1, chart_x2, thumbOffsetWidth){
      return (x + (thumbOffsetWidth/2))/(x2 - x1)*(chart_x2-chart_x1) + chart_x1;
    },

    convertRangeSliderXToChartX: function (rs_x, rs_x1, rs_x2, px_x1, px_x2, chart_x1, chart_x2, thumbWidth){
      let rs_prop = rs_x/(rs_x2-rs_x1);
      // console.log("rs_prop", rs_prop);
      let px_offset = -(rs_prop-0.5)*Number(thumbWidth); 
      // console.log("px_offset", px_offset);
      let px_prop = rs_prop + px_offset/(px_x2-px_x1);
      // console.log("px_prop", px_prop);
      return  px_prop*(chart_x2-chart_x1) + chart_x1;
    },


    slidefunc(){
      // console.log("SLIDEFUNC", this.state.axes.x_min, this.state.axes.x_max);
      // console.log("this.slideValue:", Number(this.slideValue));
      var points = this.ttestChart.chart.getDatasetMeta(0).data;
      var x1 = Number(points[0]._model.x);
      var x2 = Number(points[1]._model.x);
      let slideval = Number(this.slideValue);
      let thumbWidth = 21;
      this.state.crit_t_value = this.convertRangeSliderXToChartX(slideval, 0, 100, x1, x2, this.state.axes.x_min, this.state.axes.x_max, thumbWidth); 
      // console.log("CONVERT:", this.state.crit_t_value);
      // this.ttestChartData.options.annotation.annotations[1].value = this.state.crit_t_value;
      this.updateState();
      // this.ttestChart.update();
    },
    
    updateState: function(){  //updateState: function(crit_t_value, df, ncp)
      // calculations
      // crit_t_value_beta = crit_t_value - ncp;  // ncp: non-centrality parameter
      this.state.crit_t_value_beta = this.state.crit_t_value - this.state.ncp;  // ncp: non-centrality parameter
      // UPDATE STATE IN STORE

      this.state.alpha = math.round(welchs.getAlpha(this.state.crit_t_value, this.state.df), 4);
      this.state.beta = math.round(welchs.getBeta(this.state.crit_t_value_beta, this.state.df), 4);

      console.log("crit_t_value:", this.state.crit_t_value);
      console.log("crit_t_value_beta:", this.state.crit_t_value_beta);
      console.log("df:", this.state.df);
      console.log("alpha:", this.state.alpha);
      console.log("beta:", this.state.beta);

      // // update display
      // elem('crit_t_value').innerText = crit_t_value;
      // elem('sig-level').innerText = round(alpha);

      this.ttestChartData.options.annotation.annotations[1].value = this.state.crit_t_value;
      this.ttestChartData.options.annotation.annotations[1].label.content = '\u03B1 = ' + this.state.alpha; 

      // lineChart.update();

      this.drawAlphaCurve(this.state.group1, this.state.crit_t_value);
      this.drawBetaCurve(this.state.group2, this.state.crit_t_value,this.state.ncp);
      
      store.commit('updateState');
      // store.commit('updateConfusionMatrix');
      // store.commit('updateProbabilityTree');

      // showRejectOrNotReject(crit_t_value, t_value);
      this.ttestChart.update();
      // store.commit('updateState');

    },

    initThumb(){
      var points = this.ttestChart.chart.getDatasetMeta(0).data;
      var x1 = points[0]._model.x;
      var x2 = points[1]._model.x;
      this.sliderElem.style.left = x1 + "px";
      this.sliderElem.style.width = x2 - x1 + "px";
    },

  },
  // computed: {
  //   computedLeft: function () {
  //     return "51px";
  //   },
  // },
  mounted() {
    Chart.plugins.register(chartjsPluginAnnotation)
    this.ttestChart = new Chart(document.getElementById('ttest-chart'), this.ttestChartData);
    this.ttestChartData.data.datasets[0].data = [{x: -4.753, y: 0}, {x: 7.232, y: 0}];
    this.ttestChartData.options.scales.xAxes[0].ticks.min = this.state.axes.x_min;
    this.ttestChartData.options.scales.xAxes[0].ticks.max = this.state.axes.x_max; 
    this.ttestChartData.options.scales.yAxes[0].ticks.max = 0.5;

    this.ttestChartData.options.annotation.annotations[0].label.content = 'p = ' + this.state.p_value;
    this.ttestChartData.options.annotation.annotations[0].value = this.state.t_value;
    // this.ttestChartData.options.annotation.annotations[1].label.content = '\u03B1 = ' + this.state.alpha; 
    // this.ttestChartData.options.annotation.annotations[1].value = this.state.crit_t_value;
    
    this.ttestChartData.data.datasets[1].data = this.state.group1.dist;
    this.ttestChartData.data.datasets[2].data = this.state.group2.dist;
    this.updateState();
    
    
    this.sliderElem = document.getElementById('myRange');
    this.initThumb();

    // init range slider annotation position
    this.slideValue=50;
    this.slidefunc();

  },



}
</script>




<style scoped>

  .slidecontainer {
    margin: 0px;
    padding: 0px;
  }

  /* The slider itself */
  .slider {
    -webkit-appearance: none;  /* Override default CSS styles */
    appearance: none;
    width: 100%; /* Full-width */
    height: 15px; /* Specified height */
    background: #d3d3d3; /* Grey background */
    outline: none; /* Remove outline */
    /*opacity: 0.7;*/ /* Set transparency (for mouse-over effects on hover) */
    -webkit-transition: .2s; /* 0.2 seconds transition on hover */
    transition: opacity .2s;
    border-radius: 3px;
    position: relative;
    margin: 0px;
    padding: 0px;
    top: +5px;

  }
  /* .slider {
    border-radius: 5px;
    background: #E0E0E0;
    background: linear-gradient(left top, #E0E0E0, #EEEEEE);
    height: 15px;
    margin: 0px;
    position: relative;
  } */


  /* Mouse-over effects */
  .slider:hover {
    opacity: 1; /* Fully shown on mouse-over */
  }

  /* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */
  .slider::-webkit-slider-thumb {
    -webkit-appearance: none; /* Override default look */
    appearance: none;
    width: 21px; /* Set a specific slider handle width */
    height: 25px; /*25px   Slider handle height */
    cursor: pointer; /* Cursor on hover */
    opacity: 1;
    background: #ff3e00;
    border-radius: 3px;
    /* top: -5px; */
    /* bottom: -2px; */
    position: relative;
    margin: 0px;
    padding: 0px;
    left: 0px;

  }

  .slider::-moz-range-thumb {
    width: 15px; /* Set a specific slider handle width */
    height: 25px; /* Slider handle height */
    cursor: pointer; /* Cursor on hover */

    background: #ff3e00;
    border-radius: 3px;
  }



  .thumb {
    width: 15px;
    height: 25px;
    border-radius: 3px;
    position: relative;
    left: 0px;
    top: -5px;
    cursor: pointer;
    background: #ff3e00;
  }

  /* #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  } */

  html {
    scroll-behavior: smooth;
  }

  body {
    /* background-color: #ff3e00; */
    background-color: #434343;
    font-family: "Helvetica Neue", sans-serif;
    font-size: 15px;
  }

  a:link, a:visited {
    color: grey;
    text-decoration: none;
  }

  /* mouse over link */
  a:hover {
    color: white;
    text-decoration: none;
  }

  /* selected link */
  a:active {
    color: black;
    text-decoration: none;
  }


  h4 {
    font-family: "Helvetica Neue", sans-serif;
  }


  .responsive {
    width: 100%;
    height: auto;
  }

  /* .slider {
    border-radius: 5px;
    background: #E0E0E0;
    background: linear-gradient(left top, #E0E0E0, #EEEEEE);
    height: 15px;
    margin: 0px;
    position: relative;
  } */
  /* width: 525px; */


  .thumb {
    width: 15px;
    height: 25px;
    border-radius: 3px;
    position: relative;
    left: 0px;
    top: -5px;
    background: #ff3e00;
    cursor: pointer;
  }


</style>

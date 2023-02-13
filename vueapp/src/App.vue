<template>
  <div id="app">
 

  <div class="hero-image" id="OrangeWindow">
    <div id="titlename">Welch's <i>t</i>-test</div>
    <div id="titlename-sub">calculator</div>
  </div>

  <div id="BlackWindow">
    <div style="text-align:justify">
      Is there a statistically significant difference between two datasets?<p></p>
      Move the slider and observe the impact of the significance level on the probability of making the wrong decision. Input and explore your datasets.
      This calculator is for one-tailed Welch's <i>t</i>-tests. The data are assumed to be normally distributed.
      <a href='#more-info'>Find more information.</a>
    </div>
    <p></p>
  </div>


  <div class="container" id="ContainerWindow">

    <p><br><p><br><p><br><p>

    <div class="row">
      <div class="col-md-6">

        <!-- {% if test_results %} -->
        <!-- <div id="slider" class="slider">
          <div id="thumb" class="thumb" ontouchmove="moveThumbMobile(event)"></div>
          <div id="thumb" class="thumb"></div>
          <input type="range" id="thumb" class="thumb" />
        </div>  -->
      
        <SliderChartComponent /> 

        <!-- <ROCComponent /> -->

        <!-- <div class="slidecontainer" id="slidecontainer">
          <input type="range" min="0" max="100" value="50" class="slider" id="myRange" v-model="slideValue" v-on:input="slidefunc" v-bind:style="{ left: computedLeft }">
        </div>

        <div>
          <canvas id="ttest-chart" width="1000" height="800"></canvas>
        </div> -->

        <p><br><p><br>

        <!-- {% endif %} -->

        <b><span id="message"></span></b>
        <br>

        <div class="enter-data">
          <form id="data-form" action="{% url 'core:ttest' %}" method='post' class="form">
          <!-- {% csrf_token %} -->

          <div class="row">
              <div class="col-xs-6 col-sm-4">
                <!-- {{ form.dataset1|as_crispy_field }} -->
              </div>
              <div class="col-xs-6 col-sm-4">
                <!-- {{ form.dataset2|as_crispy_field }} -->
              </div>

            <div class="col-xs-12 col-sm-4">
                <b>STATISTICS</b><br><br>
                <b>critical t:</b> <span id="crit_t_value">{{ this.state.crit_t_value }}</span><br>
                <b>sig level (&#945;):</b> <span id="sig-level">{{ this.state.alpha }}</span><br>
                <br>

                <b>t-value:</b> <span id="t_value">{{ this.state.t_value }}</span><br>
                <b>p-value:</b> {{ this.state.p_value }}<br>
                <br>

                <b>df:</b> {{ this.state.df }}<br>
                <b>effect size:</b> {{ this.state.effect_size }}<br>
                <b>ncp:</b> <span id="ncp">{{ this.state.ncp }}</span><br>
                <br><br>

                <button name="submit" style="margin-bottom:5px" class="btn btn-primary">Analyze</button>
                <button type="button" style="margin-bottom:5px" class="btn btn-default" onclick="clearForm()">Clear</button>
                <br><br>
            </div>
          </div>
          </form>

          <div style="background-color: #e8e8e8; padding:10px; min-width:300px;" class="row">
            <div class="col-xs-4">
              <span id="SmallScreen"><b>Group 1</b><br></span>
                {{ this.state.group1.mean }}<br>
                {{ this.state.group1.sd }}<br>
                {{ this.state.group1.n }}<br>
            </div>
            <div class="col-xs-4">
              <span id="SmallScreen"><b>Group 2</b><br></span>
                {{ this.state.group2.mean }}<br>
                {{ this.state.group2.sd }}<br>
                {{ this.state.group2.n }}<br>
            </div>
            <div class="col-xs-4">
              <span id="SmallScreen"><br></span>
              <b>Mean</b><br>
              <b>SD</b><br>
              <b>N</b>
            </div>
          </div>
        </div><!-- close enter-data div -->
        <p></p><br>
      </div> <!-- column end -->

      <div class="col-md-1">
      </div>

    <div class="col-md-5">

      <!-- {% if test_results %} -->
      <div class="tabbed">
        <input type="radio" name="tabs" id="tab-nav-1" checked>
        <label for="tab-nav-1">Hypothesis Testing</label>
        <input type="radio" name="tabs" id="tab-nav-2">
        <label for="tab-nav-2">PPV</label>
        <input type="radio" name="tabs" id="tab-nav-3">
        <label for="tab-nav-3">ROC</label>

        <div class="tabs">

          <div class="tab">
            <HypothesisComponent /> 
          </div> <!-- end hypothesis testing -->

          <div class="tab">
            <PPVComponent />
          </div> <!-- end PPV -->

          <div class="tab">
            <ROCComponent />
          </div> <!-- end ROC -->

        </div> <!-- end tabs -->
      </div>  <!-- end tabbed -->
        
      <!-- {% endif %} -->
    </div> <!-- end column -->
  </div> <!-- end row -->


    <div id="SmallScreen" style="height: 1200px;">  <!-- buffer space for small screens -->
    </div>
    <br><br><br>
  </div>



  <div id="BlackWindow">

    <a name="more-info"></a>
    <div class="more-info">
      <h4>More information</h4>

      The Welch's <i>t</i>-test, or unequal variances <i>t</i>-test, can test hypotheses such as whether the means of two independent normally-distributed populations are equal. While the commonly-used Student <i>t</i>-test requires that the two samples share equal variances and equal sample sizes, the Welch's <i>t</i>-test does not have this requirement. Researchers argue that the Welch's <i>t</i>-test is more versatile and should instead be used by default.<sup>1,2</sup>
      <br><br>
      Statistical rigor can be achieved with <i>t</i>-tests, yet the significance level is set arbitrarily. While lowering significance levels mitigates false positives (&#945;), the probability of false negatives (&#946;) increases, and tests may fail to detect existing effects.<sup>3</sup>
    </div>
    <br>


  </div>
  <div id="WhiteWindow">

      <h4>References</h4>

      1. Dahiru, T. P-value, a true test of statistical significance? A cautionary note. <i>Annals of Ibadan Postgraduate Medicine.</i> 2008, <i>6</i>(1): 21–26.
      <br>
      2. Delacre, M.; Lakens, D.; Leys, C. Why Psychologists Should by Default Use Welch's t-test Instead of Student's t-test. <i>International Review of Social Psychology.</i> 2017, <i>30</i>(1), 92–101.
      <br>
      3. Benjamin, D.J.; Berger, J.O.; Johannesson, M. et al. Redefine statistical significance. <i>Nature Human Behaviour.</i> 2018, <i>2</i>, 6–10.
      <br>
      4. Colquhoun, D. An investigation of the false discovery rate and the misinterpretation of p-values. <i>Royal Society Open Science.</i> 2014, <i>1</i>(3): 140216.

  </div>  <!-- container -->   

  </div>
</template>



<script>

import SliderChartComponent from './components/SliderChartComponent.vue'
import HypothesisComponent from './components/HypothesisComponent.vue'
import PPVComponent from './components/PPVComponent.vue'
import ROCComponent from './components/ROCComponent.vue'
import store from './store/store' 

// store.commit('increment');


export default {
  store,
  name: 'App',
  components: {
    SliderChartComponent,
    HypothesisComponent,
    PPVComponent,
    ROCComponent,
  },
  data() {
    return {
      store,
      state: store.state,
      ttestChart: null,
      thumb: null,
      sliderElem: null,
    }
  },
  methods: {
    myFunction: function () {
          if (this.state.crit_t_value > this.state.t_value) {
              this.state.crit_t_value = -3.2155;
              console.log("SMALLER");
            } else {
              this.state.crit_t_value = 3.2155;
              console.log("BIGGER");
            }
          store.commit('decrement');
          store.commit('updateState');
          document.getElementById("demo").innerHTML = "I have changed!";
    },
  }

}


</script>

<style>


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



#ContainerWindow{
  background-color: #fff;
  padding: 20px 70px;
}

#WhiteWindow{
  background-color: #fff;
  color: #000;
  padding: 80px 50px;
  font-family: "Helvetica Neue", sans-serif;
  font-size: 17px;
}

#BlackWindow{
  background-color: #000;
  color: #fff;
  padding: 80px 50px;
  font-family: "Helvetica Neue", sans-serif;
  font-size: 17px;
}

#OrangeWindow{
  background-image: url("./assets/welchs.png");
  /* background-color: #cccccc; */
  /* height: 500px; */

  /* background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative; */

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  /* background-color: #ff3e00; */
  color: #fff;
  padding: 120px 50px 120px 50px;
  /* font-family: "Helvetica Neue", sans-serif; */
  font-size: 17px;
}


#titlename{
  font-family: 'Trebuchet MS', sans-serif;
  font-size: 80px;
  /* padding: 0px 0px 0px 100px; */
  /* margin-bottom:-120px */
}
#titlename-sub{
  font-family: 'Trebuchet MS', sans-serif;
  font-size: 70px;
  /* padding: 0px 0px 0px 100px; */
  /* margin-bottom:-120px */
}

.more-info {
  padding: 10px 20px 20px 20px;
  border: 2px solid #ff3e00;  /* previously ff7043 */
}


.box {
    border: 2px solid #e8e8e8;
    padding: 10px;
    margin: 0px;
    border-radius: 15px;
  }
  
.asteriskField {
    display: none;
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


.error_box {
  background-color: #e8e8e8;
}

/* @import "compass/css3"; */


* {
  box-sizing: border-box;
}


::selection {
  background-color: #4EC6DE;
}

.tabbed {
/*  width: 700px;
  margin: 50px auto;  */
}

.tabbed > input {
  display: none;
}

.tabbed > label {
  display: block;
  float: left;
  padding: 12px 20px;
  margin-right: 5px;
  margin-bottom: 0px;
  cursor: pointer;
  transition: background-color .3s;
}

.tabbed > label:hover,
.tabbed > input:checked + label {
  background: #ff3e00;
}

.tabs {
  margin: 0px;
  padding: 0px;
  clear: both;
  perspective: 600px;
}

.tabs > div {
  /* width: 700px; */
  position: absolute;
  border: 2px solid #ff3e00;
  padding: 10px 30px 40px;
  line-height: 1.4em;
  opacity: 0;
  z-index: 0;
}


#tab-nav-1:checked ~ .tabs > div:nth-of-type(1),
#tab-nav-2:checked ~ .tabs > div:nth-of-type(2){
  opacity: 1;
  z-index: 1;
}
#tab-nav-3:checked ~ .tabs > div:nth-of-type(3){
  opacity: 1;
  z-index: 1;
}

.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  background-color: #ffffff;
  padding: 0px;
}
.grid-item {
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid #c8c8c8;  /*rgba(0, 0, 0, 0.8);*/
  padding: 10px;
  text-align: center;
}


.diagram-box {
  position: relative;
  border: 1px solid #c8c8c8;
}

.enter-data{
  border: 2px solid #c8c8c8;
  padding: 30px;
}

/* hide for larger screens */
#SmallScreen {
    display: none;
}


/* show for small screens */
@media screen and (max-width: 1000px) {
    #SmallScreen {
        display: block;
    }
}

/* remove padding on smaller screens */
@media screen and (max-width: 500px) {
  #ContainerWindow{
    padding: 50px 5px 50px 5px;
  }
}

</style>

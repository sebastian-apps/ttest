<template>
    <div class="ht">
      <br>
          <i>H<sub>0</sub></i>: population 1 mean = population 2 mean<br>
          <i>H<sub>1</sub></i>: population 1 mean &lt; population 2 mean<br>
          <br>

          <b><span id="reject-or-not">{{ hypothesis_decision }}</span></b>
          <p><br>

          <div class="grid-container">
            <div class="grid-item"><i>H<sub>0</sub></i></div>
            <div class="grid-item" :class="div_reject" id="reject">REJECT</div>
            <div class="grid-item" :class="div_not_reject" id="not-reject">NOT REJECT</div>
            <div class="grid-item">TRUE</div>
            <div class="grid-item" id="alpha-box">
              <b><span id="alpha">{{ this.state.alpha }}</span></b><br><br>
              <span style="color:red">False Positive<br>Type I Error<br>(&#945;)</span>
            </div>
            <div class="grid-item">
              <b><span id="confidence">{{ this.state.confidence }}</span></b><br><br>
              True Negative<br>Confidence<br>(1 - &#945;)
            </div>
            <div class="grid-item">FALSE</div>
            <div class="grid-item">
              <b><span id="power">{{ this.state.power }}</span></b><br><br>
              True Positive<br>Power<br>(1 - &#946;)
            </div>
            <div class="grid-item" id="beta-box">
              <b><span id="beta">{{ this.state.beta }}</span></b><br><br>
              <span style="color:blue">False Negative<br>Type II Error<br>(&#946;)</span>
            </div>
          </div>


    </div>
  </template>
  
  <script>
  // import test from '@/mylib';
  import store from '@/store/store'; 
  // import * as math from 'mathjs';
//   import funcs from '@/welchs';


  // console.log(test.foo());
//   store.commit('increment');
    // console.log("MESSAGE:", store.specialmsg);

  

  export default {
    store,
    name: 'HypothesisComponent',
    props: {
      msg: String
    },
    data() {
        return {
            store,
            state: store.state,
            storecount: store.state.count,
            text: 0.01,
            div_reject: 'back-white',
            div_not_reject: 'back-white',
            hypothesis_decision: '',
        }
    },
    methods: {
        myFunction: function () {
            store.commit('decrement');
            this.storecount++;
            document.getElementById("demo").innerHTML = "I have changed!";
        },
        handleInput(event) {
            let prob = event.target.value;
            console.log(prob);
            if (prob >= 0) {
                console.log("In range.");
                store.commit('updateProbRealEffect', { prob });
            } else {
                console.log("Out of range.");
            }
        },
        showRejectOrNotReject(){  // former inputs: crit_t_value, t_value
          // determine recommendation: to reject or not reject the null hypothesis
          if (this.state.crit_t_value <= this.state.t_value){
            this.hypothesis_decision = "Reject the Null Hypothesis (H\u2080)";
            this.div_reject = 'back-orange';
            this.div_not_reject = 'back-white';
          } 
          else if (this.state.crit_t_value > this.state.t_value) {
            this.hypothesis_decision = "Do Not Reject the Null Hypothesis (H\u2080)";
            this.div_reject = 'back-white';
            this.div_not_reject = 'back-orange';
          } 
          else {
            this.hypothesis_decision = "";
            this.div_reject = 'back-white';
            this.div_not_reject = 'back-white';
          }
        },
    },
    computed: {
      count () {
        return this.state.crit_t_value
        // Or return basket.getters.fruitsCount
        // (depends on your design decisions).
      }
    },
    watch: {
      count (newCount) {
        // Our fancy notification (2).
        console.log(`We have ${newCount} fruits now!`)
        this.showRejectOrNotReject();
      }
    },
    // watch: {
    // userCount (newVal) {
    //   this.myFantasticFunc(newVal)
    // },

    mounted() {
        let prob = 0.01;
        store.commit('updateProbRealEffect', { prob });
        // console.log("MATH ROUND:", math.round(999.111111111, 4));
        // let myFunction = () => { document.getElementById("demo").innerHTML = "I have changed!"; };
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
    h3 {
        margin: 40px 0 0;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }

    .responsive {
        width: 100%;
        height: auto;
    }

    .ht {
        /* display: block; */
        /* position: absolute; */
        /* float: left; */
        border: 2px solid grey;
        padding: 20px;
        text-align: left;
    }

    .diagram-box {
        position: relative;
        border: 1px solid #c8c8c8;
    
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


  .back-orange {
    background-color: #ff3e00;
  }

  .back-white {
    background-color: #fff;
  }

  </style>
  
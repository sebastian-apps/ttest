<template>
    <div class="ppv">

        <b>Positive Predictive Value (PPV)</b>
          <br><br>

          <b>Probability tree diagram</b>
            <div class="diagram-box">
              <div class="responsive">
                <img class="responsive" :src="require('@/assets/tree.svg')"/>
                <input id="prob1_re" class="prob1_re" v-model="text" value="0.01" size="3" @input="handleInput"/>
                <div id="prob2_ne" class="prob2_ne">{{ this.state.prob2_ne }}</div><b>
                <div id="prob3_tp" class="prob3_tp">{{ this.state.prob3_tp }}</div>
                <div id="prob4_fn" class="prob4_fn">{{ this.state.beta }}</div>
                <div id="prob5_tn" class="prob5_tn">{{ this.state.prob5_tn }}</div>
                <div id="prob6_fp" class="prob6_fp">{{ this.state.alpha }}</div>
                <div id="prob7_retp" class="prob7_retp">{{ this.state.prob7_retp }}</div>
                <div id="prob8_refn" class="prob8_refn">{{ this.state.prob8_refn }}</div>
                <div id="prob9_netn" class="prob9_netn">{{ this.state.prob9_netn }}</div>
                <div id="prob10_nefp" class="prob10_nefp">{{ this.state.prob10_nefp }}</div></b>
              </div>
            </div>
            <p><br>
               

            PPV: <b>{{ this.state.ppv }}%</b><br>
            False Discovery Rate: <b>{{ this.state.fdr }}%</b><br>
            Sensitivity: <b>{{ this.state.prob3_tp }}</b><br>
            Specificity: <b>{{ this.state.prob5_tn }}</b>


            <br><br><br><br>
            <div style="text-align:justify">
              For example, if 1% of the population is afflicted with a disease, and
              the test for the disease is 99% accurate, we may intuit that
              our diagnosis will be correct 99% of the time. However, if &#945; = 0.05 and &#946; = 0.01, we will accurately diagnose a patient with the disease only 16% of the time. The PPV in this case is 16%.<sup>4</sup>
              <br><br>
              The probability of the real effect (e.g., prevalence of disease) can be modified above.
            </div>

    </div>
  </template>
  
  <script>
  import test from '@/mylib';
  import store from '@/store/store'; 
  import * as math from 'mathjs';
//   import funcs from '@/welchs';


  console.log(test.foo());
//   store.commit('increment');
    // console.log("MESSAGE:", store.specialmsg);

  

  export default {
    name: 'PPVComponent',
    props: {
      msg: String
    },
    data() {
        return {
            store,
            state: store.state,
            text: 0.01,
        }
    },
    methods: {
        myFunction: function () {
            store.commit('decrement');
            // this.storecount++;
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
        
    },
    mounted() {
        let prob = 0.01;
        store.commit('updateProbRealEffect', { prob });
        console.log("MATH ROUND:", math.round(999.111111111, 4));
        // let myFunction = () => { document.getElementById("demo").innerHTML = "I have changed!"; };
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
    /* h3 {
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
    } */

    .responsive {
        width: 100%;
        height: auto;
    }

    /* .ppv {

        position: absolute;
        border: 2px solid grey;
        padding: 20px;
        text-align: left;
    } */
        /* display: block; */
        /* float: left; */


    .diagram-box {
        position: relative;
        border: 1px solid #c8c8c8;
    
    }

    /* Probability of Real Effect */
    .prob1_re {
      position: absolute;
      top: 33%;
      left: 5%;
      border: 1px solid #ff3e00;
    }
    /* Probability of No Effect */
    .prob2_ne {
      position: absolute;
      top: 65%;
      left: 5%;
    }

    /* Probability of True Positive */
    .prob3_tp {
      position: absolute;
      top: 20%;
      left: 47%;
    }
    /* Probability of False Negative */
    .prob4_fn {
      position: absolute;
      top: 40%;
      left: 47%;
      color: blue;
    }
    /* Probability of True Negative  */
    .prob5_tn {
      position: absolute;
      top: 60%;
      left: 47%;
    }
    /* Probability of False Positive */
    .prob6_fp {
      position: absolute;
      top: 80%;
      left: 47%;
      color: red;
    }

    /* Probability of Real Effect x True Positive */
    .prob7_retp {
      position: absolute;
      top: 20%;
      left: 82%;
    }
    /* Probability of Real Effect x False Negative */
    .prob8_refn {
      position: absolute;
      top: 40%;
      left: 82%;
    }
    /* Probability of No Effect x True Negative */
    .prob9_netn {
      position: absolute;
      top: 60%;
      left: 82%;
    }
    /* Probability of No Effect x False Positive */
    .prob10_nefp {
      position: absolute;
      top: 80%;
      left: 82%;
    }



  </style>
  
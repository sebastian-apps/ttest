// import Vue from 'vue'
// import Vuex from 'vuex'

// Vue.use(Vuex)
// const state = {
//   count: 0
// }
// export default new Vuex.Store({
//   state
// })


//store.js 
import Vue from 'vue' 
import Vuex from 'vuex' 


import * as math from 'mathjs';
import welchs from '@/welchs';
// import * as welchs from './welchs';

// import getters from './getters' 
// import actions from './actions' 
// import mutations from './mutations' 



Vue.use(Vuex) 
 
const state = { 
  count: 0,

  alpha: 0.05,
  beta: 0.2673,
  confidence: 0,
  power: 0,
  t_value: 2.2502,   // abs? -2.2502
  crit_t_value: 1.8331,
  crit_t_value_beta: -0.645632670931199,
  p_value: 0.0255,

  df: 9,
  effect_size: 1.1789,
  ncp: 2.478732670931199,

  axes: {x_min: -4.753, x_max: 7.232},

  prob1_re: 0.01,
  prob2_ne: 0,
  prob3_tp: 0.0347,
  prob4_fn: 0,
  prob5_tn: 0,
  prob6_fp: 0,
  prob7_retp: 0,
  prob8_refn: 0,
  prob9_netn: 0,
  prob10_nefp: 0,
  fdr: 0,
  ppv: 0,

  group1: {  
    dataset: [87, 101, 64, 86, 87, 82, 70, 85, 78, 92, 84, 88], 
    df: 11,
    mean: 83.6667,
    n: 12,
    sd: 9.6609,
    step_size: 0.2397,
    dist:               
      [{x: -4.753424, y: 0.0005}, 
      {x: -4.513713, y: 0.0007}, 
      {x: -4.274001, y: 0.0011}, 
      {x: -4.034289, y: 0.0017}, 
      {x: -3.794578, y: 0.0026}, 
      {x: -3.554866, y: 0.004}, 
      {x: -3.315155, y: 0.0061}, 
      {x: -3.075443, y: 0.0094}, 
      {x: -2.835731, y: 0.0145}, 
      {x: -2.59602, y: 0.0222}, 
      {x: -2.356308, y: 0.0336}, 
      {x: -2.116596, y: 0.0502}, 
      {x: -1.876885, y: 0.0736}, 
      {x: -1.637173, y: 0.1054}, 
      {x: -1.397462, y: 0.1463}, 
      {x: -1.15775, y: 0.1956}, 
      {x: -0.918038, y: 0.2504}, 
      {x: -0.678327, y: 0.305}, 
      {x: -0.438615, y: 0.3515}, 
      {x: -0.198903, y: 0.3817}, 
      {x: 0.040808, y: 0.3896}, 
      {x: 0.28052, y: 0.3737}, 
      {x: 0.520231, y: 0.3371}, 
      {x: 0.759943, y: 0.2869}, 
      {x: 0.999655, y: 0.2315}, 
      {x: 1.239366, y: 0.178}, 
      {x: 1.479078, y: 0.1313}, 
      {x: 1.71879, y: 0.0936}, 
      {x: 1.958501, y: 0.0648}, 
      {x: 2.198213, y: 0.0439}, 
      {x: 2.437924, y: 0.0292}, 
      {x: 2.677636, y: 0.0192}, 
      {x: 2.917348, y: 0.0125}, 
      {x: 3.157059, y: 0.0081}, 
      {x: 3.396771, y: 0.0053}, 
      {x: 3.636483, y: 0.0034}, 
      {x: 3.876194, y: 0.0022}, 
      {x: 4.115906, y: 0.0015}, 
      {x: 4.355617, y: 0.001}, 
      {x: 4.595329, y: 0.0006}, 
      {x: 4.835041, y: 0.0004}, 
      {x: 5.074752, y: 0.0003}, 
      {x: 5.314464, y: 0.0002}, 
      {x: 5.554176, y: 0.0001}, 
      {x: 5.793887, y: 0.0001}, 
      {x: 6.033599, y: 0.0001}, 
      {x: 6.27331, y: 0}, 
      {x: 6.513022, y: 0}, 
      {x: 6.752734, y: 0}, 
      {x: 6.992445, y: 0}],
  },

  group2: {   
    dataset: [83, 124, 86, 98, 96, 103, 89],
    df: 6,
    mean: 97,
    n: 7,
    sd: 13.8323,
    step_size: 0.23971162577130747,
    dist:
      [{x: -2.274691329068801, y: 0.0016}, 
      {x: -2.034980329068801, y: 0.0021}, 
      {x: -1.7952683290688012, y: 0.0029}, 
      {x: -1.5555563290688013, y: 0.0039}, 
      {x: -1.315845329068801, y: 0.0053}, 
      {x: -1.076133329068801, y: 0.0072}, 
      {x: -0.8364223290688009, y: 0.01}, 
      {x: -0.596710329068801, y: 0.0139}, 
      {x: -0.356998329068801, y: 0.0195}, 
      {x: -0.11728732906880124, y: 0.0274}, 
      {x: 0.12242467093119913, y: 0.0386}, 
      {x: 0.36213667093119906, y: 0.0543}, 
      {x: 0.6018476709311991, y: 0.076}, 
      {x: 0.841559670931199, y: 0.1051}, 
      {x: 1.081270670931199, y: 0.1428}, 
      {x: 1.320982670931199, y: 0.189}, 
      {x: 1.5606946709311988, y: 0.2416}, 
      {x: 1.800405670931199, y: 0.2955}, 
      {x: 2.040117670931199, y: 0.3427}, 
      {x: 2.279829670931199, y: 0.374}, 
      {x: 2.519540670931199, y: 0.3824}, 
      {x: 2.759252670931199, y: 0.3657}, 
      {x: 2.998963670931199, y: 0.328}, 
      {x: 3.2386756709311992, y: 0.2775}, 
      {x: 3.478387670931199, y: 0.2232}, 
      {x: 3.718098670931199, y: 0.1724}, 
      {x: 3.957810670931199, y: 0.1289}, 
      {x: 4.197522670931199, y: 0.0943}, 
      {x: 4.4372336709311995, y: 0.0679}, 
      {x: 4.6769456709311985, y: 0.0484}, 
      {x: 4.916656670931199, y: 0.0344}, 
      {x: 5.156368670931199, y: 0.0244}, 
      {x: 5.396080670931199, y: 0.0174}, 
      {x: 5.635791670931199, y: 0.0124}, 
      {x: 5.875503670931199, y: 0.009}, 
      {x: 6.1152156709311996, y: 0.0065}, 
      {x: 6.354926670931199, y: 0.0048}, 
      {x: 6.594638670931198, y: 0.0035}, 
      {x: 6.834349670931198, y: 0.0026}, 
      {x: 7.074061670931199, y: 0.002}, 
      {x: 7.3137736709312, y: 0.0015}, 
      {x: 7.5534846709312, y: 0.0011}, 
      {x: 7.793196670931199, y: 0.0009}, 
      {x: 8.0329086709312, y: 0.0007}, 
      {x: 8.2726196709312, y: 0.0005}, 
      {x: 8.512331670931198, y: 0.0004}, 
      {x: 8.7520426709312, y: 0.0003}, 
      {x: 8.991754670931199, y: 0.0003}, 
      {x: 9.2314666709312, y: 0.0002}, 
      {x: 9.4711776709312, y: 0.0002}],              

  },

} 



const mutations = {
  increment (state) {
    state.count++
  },
  decrement (state) {
    state.count--
  },
  updateState(state){
    state.alpha = (Number(0.1) + Number(state.alpha)).toFixed(4);
    state.beta = (Number(0.1) + Number(state.beta)).toFixed(4);

    this.commit('updateConfusionMatrix');
    this.commit('updateProbabilityTree');
  },

  updateConfusionMatrix (state) {
    state.confidence = (Number(1.0) - Number(state.alpha)).toFixed(4);
    state.power = (Number(1.0) - Number(state.beta)).toFixed(4);
  },
  updateProbabilityTree (state) {
    state.prob2_ne = math.round(1 - state.prob1_re, 4).toFixed(4);
    state.prob3_tp = math.round(1 - state.beta, 4).toFixed(4);
    state.prob4_fn = math.round(state.beta, 4).toFixed(4);
    state.prob5_tn = math.round(1-state.alpha, 4).toFixed(4);
    state.prob6_fp = math.round(state.alpha, 4).toFixed(4);
    state.prob7_retp = math.round(state.prob1_re * state.prob3_tp, 4).toFixed(4);
    state.prob8_refn = math.round(state.prob1_re * state.prob4_fn, 4).toFixed(4);
    state.prob9_netn = math.round(state.prob2_ne * state.prob5_tn, 4).toFixed(4);
    state.prob10_nefp = math.round(state.prob2_ne * state.prob6_fp, 4).toFixed(4);

    state.fdr = welchs.getFalseDiscoveryRate(state.prob10_nefp, state.prob7_retp);
    state.ppv = math.round(100 - state.fdr,2);
    // console.log("FDR:", state.fdr + "%");
    // console.log("PPV:", state.ppv + "%");

    // if (Number.isNaN(fdr)){
    //   fdr = " - ";
    // }
    // if (Number.isNaN(ppv)){
    //   ppv = " - ";
    // }

    // elem("false_rate").innerText = fdr + "%";
    // elem("ppv").innerText = ppv + "%";
    // elem("sensitivity").innerText = prob3_tp.innerText;
    // elem("specificity").innerText = prob5_tn.innerText;

  },
  updateProbRealEffect(state, { prob }) {
    state.prob1_re = prob;
    this.commit('updateProbabilityTree');

  }
}

export default new Vuex.Store({ 
  state,
  mutations, 
  // math 
  // getters,  
  // actions 
}) 
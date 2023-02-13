
<template>
  <div class="roc">

    <b>Receiver Operating Characteristic (ROC)</b>
    <br><br>
    <div class="responsive">  
      <canvas id="roc-chart" height="100%" width="100%"></canvas>
    </div>

    <br> 
    AUC: <b><span id="auc_value"></span></b>

  </div>
</template>


<script>
import store from '@/store/store'; 
import Chart from 'chart.js'  // npm install chart.js@2.9.4
import ROCChartData from '../roc-data.js'


export default {
  name: 'ROCChart',
  data() {
    return {
      store,
      state: store.state,
      ROCChartData: ROCChartData,
      chart: null,
    }
  },
  mounted() {
    const ctx = document.getElementById('roc-chart');
    this.chart = new Chart(ctx, this.ROCChartData);
  },
  methods: {
    // renderChart: 

    updateROCCurve: function () {
      this.ROCChartData.data.datasets[1].data = [{x: this.state.alpha, y: 1-this.state.beta}];
      this.chart.update();
    }
  },
  watch: {
    // Note: only simple paths. Expressions are not supported.
    'store.state.alpha' (newValue) {
      console.log("ACTIVITY IN ROC watch!", newValue);
      this.updateROCCurve();
    }
  }


}
</script>



<style scoped>

</style>

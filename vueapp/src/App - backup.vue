<template>
  <div id="app">
    
    <p></p>
  
    <ROCComponent />

    <hr>
    <!-- <HypothesisComponent v-show="value1" msg=""/> -->
    
    <p id="demo" @click="myFunction"><b>CHANGE ALPHA</b></p>

    <!-- <PPVComponent v-show="value1" msg="This is the PPV window!"/> -->

  </div>
</template>

<script>
// import HypothesisComponent from './components/HypothesisComponent.vue'
// import PPVComponent from './components/PPVComponent.vue'
// import ROCComponent from './components/ROCComponent.vue'
import ROCComponent from './components/ROCComponent.vue'
import store from './store/store' 

// store.commit('increment');


export default {
  store,
  name: 'App',
  components: {
    // HypothesisComponent,
    // ROCComponent,
    ROCComponent,
    // PPVComponent
  },
  data() {
    return {
      store,
      value1: true,
      storecount: store.state.count
    }
  },
  methods: {
    myFunction: function () {
          if (this.store.state.crit_t_value > this.store.state.t_value) {
              this.store.state.crit_t_value = -3.2155;
              console.log("SMALLER");
            } else {
              this.store.state.crit_t_value = 3.2155;
              console.log("BIGGER");
            }
          store.commit('decrement');
          store.commit('updateState');
          this.storecount++;
          document.getElementById("demo").innerHTML = "I have changed!";
    },
  }
}


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


.responsive {
        width: 100%;
        height: auto;
    }

</style>

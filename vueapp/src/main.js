import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
// import * as math from 'mathjs'




console.log("store.state.count:", store.state.count);



Vue.config.productionTip = false
// app.config.globalProperties.foo222 = 'Hello there!!!';

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')


// app.config.globalProperties.$math=math;


// new Vue({
//   el: '#app',
//   store,
//   template: '<App/>',
//   components: { App }
// })


// import store from './store'

// const app = new Vue({
//   /* .. other properties .. */
//   store
// })


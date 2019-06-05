import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = App.constructor;

new Vue({
  el: "#app",
  render: h => h(App),
})

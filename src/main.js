import Vue from 'vue'
import App from './App.vue'
import VueMasonry from 'vue-masonry-css'

Vue.config.productionTip = false

window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = App.constructor;

Vue.use(VueMasonry);

new Vue({
  el: "#app",
  render: h => h(App),
})

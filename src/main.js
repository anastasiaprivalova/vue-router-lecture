import Vue from 'vue'
import App from './1_intro/App.vue'
import router from './1_intro/router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

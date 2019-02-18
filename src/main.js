import Vue from 'vue'

// import App from './1_intro/App.vue'
// import router from './1_intro/router'

// import App from './2_dynamic/App.vue'
// import router from './2_dynamic/router'

// import App from './3_nested/App.vue'
// import router from './3_nested/router'

// import App from './4_lazy/App.vue'
// import router from './4_lazy/router'


import App from './5_programmatic/App.vue'
import router from './5_programmatic/router'

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

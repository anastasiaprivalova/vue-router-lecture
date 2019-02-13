import Vue from 'vue'

/*import App from './1_intro/App.vue'
import router from './1_intro/router'*/

/*import App from './2_dynamic/App.vue'
import router from './2_dynamic/router'*/

import App from './3_nested/App.vue'
import router from './3_nested/router'

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

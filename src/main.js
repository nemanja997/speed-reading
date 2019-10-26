import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ToggleButton from 'vue-js-toggle-button'

// import 'bootstrap';
import 'font-awesome/css/font-awesome.css';

Vue.config.productionTip = false;
Vue.config.devtools = true;

Vue.use(ToggleButton);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

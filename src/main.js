import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'
import ToggleButton from 'vue-js-toggle-button'
import {changeTitle} from "./router/authGuards";
import 'bootstrap';
import 'font-awesome/css/font-awesome.css';




Vue.config.productionTip = false;
Vue.config.devtools = true;

Vue.use(ToggleButton);

router.beforeEach(changeTitle);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

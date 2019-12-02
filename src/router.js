import Vue from 'vue'
import Router from 'vue-router'
import SettingsView from './views/SettingsView.vue'
import ReadView from './views/ReadView.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'settings',
      component: SettingsView
    },
    {
        path: '/read',
        name: 'read',
        component: ReadView
    }
  ]
})

import Vue from 'vue'
import VueRouter from 'vue-router'

import home from '../components/home.vue'

Vue.use(VueRouter)

const routes = [
    {
      path: '/',
      name: 'home',
      component: home
    }
  ]


export default new VueRouter({
    mode: 'history',
    routes
})
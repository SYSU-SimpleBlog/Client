import Vue from 'vue'
import VueRouter from 'vue-router'

import home from '../components/home.vue';
import errorPage from '../components/404.vue';
import signIn from '../components/signin.vue'
import articlePage from '../components/articlePage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/404',
    component: errorPage
  },
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/signin',
    name: 'singin',
    component: signIn
  },
  {
    path: '/articleDetail',
    name: 'articlePage',
    component: articlePage
  },
  // 404页面需要放在最后,为什么？
  {
    path: '*',
    redirect: '/404'
  }
]


export default new VueRouter({
    mode: 'history',
    routes
})

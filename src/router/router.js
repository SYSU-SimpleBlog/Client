import Vue from 'vue'
import VueRouter from 'vue-router'

import home from '../components/home.vue';
import errorPage from '../components/404.vue';
import signIn from '../components/signin.vue'
import articlePage from '../components/articlePage.vue'
import articleList from '../components/articleList.vue'

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
    path: '/articleList',
    name: 'articleList',
    component: articleList
  },
  {
    path: '/articleDetail',
    name: 'articlePage',
    component: articlePage
  },
  // 404页面需要放在最后, 因为路由是从上往下找的，中间如果没找到，就用下一个，所以使用*兜底
  {
    path: '*',
    redirect: '/404'
  }
]


export default new VueRouter({
    mode: 'history',
    routes
})

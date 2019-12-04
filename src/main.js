import Vue from 'vue'
import App from './App.vue'
//引入router组件
import router from './router/router'
// import './assets/styles/index.scss'

require('./mock/articlemock.js')

new Vue({
  //注入router
  router,
  render: h => h(App)
}).$mount('#app')
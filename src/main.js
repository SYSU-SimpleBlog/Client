import Vue from 'vue'
import App from './App.vue'
import ViewUI from 'view-design'
// 导入样式
import 'view-design/dist/styles/iview.css';

//引入router组件
import router from './router/router'
// import './assets/styles/index.scss'

Vue.use(ViewUI);

require('./mock/articlemock.js')

new Vue({
  //注入router
  router,
  render: h => h(App)
}).$mount('#app')

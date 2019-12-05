import Vue from 'vue'
import App from './App.vue'
import ViewUI from 'view-design'
// 导入样式
import 'view-design/dist/styles/iview.css';

//引入router组件
import router from './router/router'
import './assets/styles/index.scss'

Vue.use(ViewUI);

router.beforeEach((to, from, next) => {
  ViewUI.LoadingBar.start();
  next();
});

router.afterEach(route => {
  ViewUI.LoadingBar.finish();
});

require('./mock/articlemock.js')

new Vue({
  //注入router
  router,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import ViewUI from 'view-design'
// 导入样式
import 'view-design/dist/styles/iview.css';

//引入router组件
import router from './router/router'
import './assets/styles/index.scss'

import store from './store'

Vue.use(ViewUI);

router.beforeEach((to, from, next) => {
  ViewUI.LoadingBar.start();
  // 检查是否登录
  if (to.matched.some(m => m.meta.auth)) {
    if (window.localStorage.isLogin === '1') {
      next()
    } else if (to.path !== '/') {
      next({path: '/'})
      Vue.prototype.$Message.warning('检测到您还未登录,请登录后操作！')
    }
  } else {
    next()
  }
  next();
});

router.afterEach(route => {
  ViewUI.LoadingBar.finish();
});

//require('./mock/articlemock.js')
new Vue({
  // 全局注入router, store
  router,
  store,
  render: h => h(App)
}).$mount('#app')


import Vue from 'vue'
import router from './router.js'
// import cookies from './cookies.js'
import App from './App.vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Axios from 'axios'
import VueRouter from 'vue-router'

Vue.config.productionTip = false
Axios.defaults.withCredentials=true; //让ajax携带cookie
Vue.prototype.$axios = Axios;
// Vue.prototype.$axios.cookies = cookies;

Vue.use(ElementUI)
Vue.use(VueRouter)

new Vue({
  // 此处router是深坑吗？命名规范，之前报错匹配不到就是因为命名，js里面已经实例化了，此处直接调用。
  router,
  render: h => h(App),
}).$mount('#app')

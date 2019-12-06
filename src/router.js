import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/login/Login.vue'

Vue.use(Router)

// 我开始是没有实例化router的，在控制台会报错(其他组件想找到路由就要都去定点找然后挂在自己身上,)
export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    }
  ]
})
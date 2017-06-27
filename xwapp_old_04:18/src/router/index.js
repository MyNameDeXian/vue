import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children : [{
        path : '/',
        name: '我的客户',
        component : resolve => require(['../pages/container/clientContainer.vue'],resolve),
      },{
        path : 'clientContainer',
        name: '我的客户',
        component : resolve => require(['../pages/container/clientContainer.vue'],resolve),
      },{
        path : 'PApplication',
        name: '我的申请',
        component : resolve => require(['../pages/application/PApplication.vue'],resolve),
      },{
        path : 'PTask',
        name: '我的申请',
        component : resolve => require(['../pages/application/PTask.vue'],resolve),
      }],
    }
  ]
})
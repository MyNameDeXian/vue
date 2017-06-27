import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import PApplication from '@/pages/application/PApplication'
import CApplication from '@/pages/application/CApplication'

//use是vue的全局函数，用于加载插件
Vue.use(Router) 

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
    	path: '/pApplication',
    	name: 'PApplication',
    	component: PApplication
    },
    {
      path: '/cApplication',
      name: 'CApplication',
      component: CApplication
    }
  ]
})

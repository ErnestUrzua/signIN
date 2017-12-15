import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/register'
import Admin from '@/components/admin'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'register',
      component: Register
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin
    }
  ]
})

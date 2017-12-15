import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/register'
import Admin from '@/components/admin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'register',
      component: Register
    },
    {
      path: '/',
      name: 'admin',
      component: Admin
    }
  ]
})

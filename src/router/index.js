import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/home/Home'
import AdminPages from '@/components/admin/AdminPages'
import Auth from '@/components/auth/Auth'

import { userKey } from '@/global'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/admin',
    name: 'adminPages',
    component: AdminPages,
    meta: { requiresAdmin: true }
  },
  {
    path: '/auth',
    name: 'auth',
    component: Auth
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  const json = localStorage.getItem(userKey)

  if (to.matched.some(recordRoute => recordRoute.meta.requiresAdmin)) {
    const user = JSON.parse(json)
    user && user.admin ? next() : next({ path: '/' })
  } else {
    next()
  }
})

export default router

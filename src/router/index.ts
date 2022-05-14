import { createRouter, createWebHistory } from 'vue-router'
import { RouteRecordRaw } from 'vue-router'

import localCache from '@/utils/localCache'

const main = () => import('views/main/main.vue')
const login = () => import('views/login/login.vue')

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/main',
    name: 'main',
    component: main,
    children: []
  },
  {
    path: '/login',
    name: 'login',
    component: login
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

router.beforeEach((to, from) => {
  const token = localCache.getLocalCache('token')
  if (to.path !== '/login' && !token) return '/login'
})

export default router

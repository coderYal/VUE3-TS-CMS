import { createRouter, createWebHistory } from 'vue-router'
const main = () => import('views/main/main.vue')
const routes = [
  {
    path: '/',
    redirect: 'main'
  },
  {
    path: '/main',
    name: 'main',
    component: main
  }
]
const router = createRouter({
  routes,
  history: createWebHistory()
})
export default router
//# sourceMappingURL=index.js.map

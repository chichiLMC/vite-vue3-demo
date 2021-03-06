import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../index.vue'),
    meta: {
      title: 'index'
    }
  },
  {
    path: '/login',
    component: () => import('../views/layout/login.vue'),
    meta: {
      title: 'login'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ y: 0 }),
  routes: routes
})


export default router
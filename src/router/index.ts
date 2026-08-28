import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'timer',
      component: ,
      meta: { requiresAuth: true, title: 'My Time' },
    },
    {
      path: '/log-in',
      name: 'log-in',
      component: ,
      meta: { requiresAuth: true, title: 'Log In - My Time' },
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: ,
      meta: { requiresAuth: true, title: 'Sign Up - My Time' },
    },
  ],
})

router.beforeEach(async (to) => {})

export default router
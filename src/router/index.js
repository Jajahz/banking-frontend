import { createRouter, createWebHistory } from 'vue-router'
import AccountSummary from '../views/AccountSummary.vue'
import LoginPage from '../views/LoginPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: AccountSummary
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginPage
    }
  ]
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import AccountSummary from '../views/AccountSummary.vue'
import LoginPage from '../views/LoginPage.vue'
import TransferPage from '../views/TransferPage.vue'

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
    },
    {
      path: '/transfer',
      name: 'Transfer',
      component: TransferPage
    }
  ]
})

export default router

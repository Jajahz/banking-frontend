import { createRouter, createWebHistory } from 'vue-router'
import AccountSummary from '../views/AccountSummary.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: AccountSummary
    }
  ]
})

export default router

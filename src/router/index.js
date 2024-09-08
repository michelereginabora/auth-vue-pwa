import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import HomeView from '../views/HomeView.vue'
import SignUpView from '@/views/SignUpView.vue'
import Welcome from '@/components/Welcome.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView
        },
        {
          path: 'signup',
          name: 'signup',
          component: SignUpView
        }
      ]
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: Welcome
    }
  ]
})

export default router

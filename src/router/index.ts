import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import View from '../views/View.vue'
import Upload from '../views/Upload.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cats/my',
    name: 'View',
    component: View
  },
  {
    path: '/cats/new',
    name: 'Upload',
    component: Upload
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

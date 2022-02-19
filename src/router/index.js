import { createRouter, createWebHistory } from 'vue-router'
import Characters from '../views/Characters.vue'
import Locations from '../views/Locations.vue'
import Episodes from '../views/Episodes.vue'

const routes = [
  {
    path: '/',
    name: 'Characters',
    component: Characters
  },
  {
    path: '/locations',
    name: 'Locations',
    component: Locations
  },
  {
    path: '/episodes',
    name: 'Episodes',
    component: Episodes
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

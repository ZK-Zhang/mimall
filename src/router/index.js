import { createRouter, createWebHashHistory } from 'vue-router'
import routes from '../router/routers'


const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

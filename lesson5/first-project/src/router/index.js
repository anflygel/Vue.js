import Vue from 'vue'
import VueRouter from 'vue-router'

import Dashboard from '../views/Dashboard.vue'
import NotFound from '../views/NotFound.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard
  },
  {
    path: '/dashboard/:page',
    name: "Dashboard",
    component: Dashboard
  },
  {
    path: '/about*',
    name: "About",
    component: About
  },
  {
    path: '/notfound',
    name: "NotFound",
    component: NotFound
  },

]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router


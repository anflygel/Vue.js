import Vue from 'vue'
import VueRouter from 'vue-router'

// import Dashboard from '../views/Dashboard.vue'
// import NotFound from '../views/NotFound.vue'
// import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    // component: Dashboard
    component: () => import(/*webpackChunkName: "Dashboard"*/ '../views/Dashboard.vue')
  },
  {
    path: '/dashboard/:page',
    name: "Dashboard",
    component: () => import(/*webpackChunkName: "Dashboard"*/ '../views/Dashboard.vue')
  },
  // {
  //   path: "/dashboard/:action/:category/:value",
  //   name: "Dashboard",

  //   component: () => import(/*webpackChunkName: "Dashboard"*/ '../views/Dashboard.vue')
  // },

  {
    path: '/about*',
    name: "About",
    component: () => import(/*webpackChunkName: "About"*/ '../views/About.vue')
  },
  {
    path: '/notfound',
    name: "NotFound",
    component: () => import(/*webpackChunkName: "NotFound"*/ '../views/NotFound.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router


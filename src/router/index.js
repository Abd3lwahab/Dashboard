import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
  },
  {
    path: '/reset-password',
    name: 'Reset-Password',
    component: () => import(/* webpackChunkName: "login" */ '../views/ResetPassword.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "login" */ '../views/Register.vue'),
  },
]

const router = new VueRouter({
  routes: routes,
  mode: 'history',
})

export default router

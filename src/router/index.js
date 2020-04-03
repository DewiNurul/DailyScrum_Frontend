import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import DailyScrum from '../views/DailyScrum.vue'
import Navbar from '../views/Navbar.vue'
import Footer from '../views/Footer.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

Vue.use(VueRouter)

const routes = [

  {
    path: '/login',
    name: 'login',
    components: {default: Login,},
  },
  {
    path: '/',
    name: 'register',
    components: {default: Register,}
  },
  {
    path: '/daily_scrum',
    name: 'daily_scrum',
    components: {default: DailyScrum, header: Navbar, footer: Footer},
    meta: { 
      requiresAuth: true
    }
  },

  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/login') 
  } else {
    next() 
  }
})

export default router

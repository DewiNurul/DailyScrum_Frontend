import Vue from 'vue'
import VueRouter from 'vue-router'
import DailyScrum from '../views/DailyScrum.vue'
import Navbar from '../views/Navbar.vue'
import Footer from '../views/Footer.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'login',
    components: {default: Login,}
  },
  {
    path: '/daily_scrum',
    name: 'daily_scrum',
    components: {default: DailyScrum, header: Navbar, footer: Footer},
    meta: { 
      requiresAuth: true
    }
  },

  {
    path: '/register',
    name: 'register',
    components: {default: Register,}
  },

  
]

const router = new VueRouter({
  routes
})

export default router

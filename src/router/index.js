// index.js
import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from '@/views/Home.vue'
import AtmosphereCRICafe  from '@/components/Atmosphere'
import CafeMenu from '@/components/Menu'
import ReservationCRICafe from '@/components/Reservation'
import AccessAndInfo from '@/components/AccessAndInfo'

Vue.use(VueRouter)

const routes = [
  // { path: '/home', component: HomePage },
  { path: '/', component: HomePage },
  { path: '/atmosphere', component: AtmosphereCRICafe },
  { path: '/menu', component: CafeMenu },
  { path: '/reservation', component: ReservationCRICafe },
  { path: '/access&info', component: AccessAndInfo }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.NODE_ENV === "development" ? process.env.BASE_URL : "/cri_cafe/",
  // base: "/cri_cafe/",
  routes
})
export default router
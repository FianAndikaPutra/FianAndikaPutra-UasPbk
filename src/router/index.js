// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/Login.vue'
import Dashboard from '../components/Dashboard.vue'
import MenuList from '../components/MenuList.vue'
import Order from '../components/Order.vue'
import TentangKami from '../components/TentangKami.vue'


const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/dashboard', component: Dashboard },
  { path: '/menu', component: MenuList },
  { path: '/delivery-order', name: 'Order', component: Order },  { path: '/history', component: History },
  { path: '/tentang-kami', component: TentangKami },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'

import Menu from '../views/Menu/Menu'
Vue.use(VueRouter)

const routes = [
   
    {
        path: '/',
        name: 'Menu',
        component: Menu,
    }
]

const router = new VueRouter({
    routes,
})

export default router
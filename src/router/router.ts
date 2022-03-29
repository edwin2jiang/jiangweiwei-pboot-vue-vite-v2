import { createRouter, createWebHistory,createWebHashHistory } from 'vue-router'

const Home = { template: '<div>Home</div>' }
const About = { template: '<div>About</div>' }

const routes = [
    { path: '/', component: () => import('@/pages/Index.vue'), alias: '/index' },
    { path: '/devManual', component: () => import('@/pages/DevManual.vue') },
    { path: '/freeGrant', component: () => import('@/pages/FreeGrant.vue') },
    { path: '/index', component: () => import('@/pages/Index.vue') },
    { path: '/recShopper', component: () => import('@/pages/RecShopper.vue') },
    { path: '/sysDescription', component: () => import('@/pages/SysDescription.vue') }, 
    { path: '/techCommunication', component: () => import('@/pages/TechCommunication.vue') }, 
    { path: '/updateLog', component: () => import('@/pages/UpdateLog.vue') }
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

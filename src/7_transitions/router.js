import Vue from 'vue'
import Router from 'vue-router'
import { storageKey } from './config'

const Login  = () => import('./views/Login.vue')
const Articles  = () => import('./views/Articles.vue')
const Hub  = () => import('./views/Hub.vue')
const Article  = () => import('./views/Article.vue')
const Premium = () => import('./views/Premium.vue')
const AccessDenied = () => import('./views/AccessDenied.vue')
const NotFound  = () => import('./views/NotFound.vue')

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/articles',
            component: Articles,
            children: [
                {
                    path: 'premium',
                    name: 'premium',
                    component: Premium,
                    meta: { depth: 2 },
                    beforeEnter: (to, from, next) => {
                        if (localStorage.getItem(storageKey)) {
                            next()
                        } else {
                            next('/premium-denied')
                        }
                    }
                },
                {
                    path: ':id(\\d+)',
                    name: 'article',
                    component: Article,
                    meta: { depth: 2 },
                },
                {
                    path: ':hub?',
                    name: 'hub',
                    component: Hub,
                    meta: { depth: 1 },
                },
            ]
        },
        {
            path: '/premium-denied',
            name: 'premiumDenied',
            component: AccessDenied
        },
        {
            path: '*',
            name: 'default',
            component: NotFound,
        }
    ]
})
import Vue from 'vue'
import Router from 'vue-router'

const Login  = () => import('./views/Login.vue')
const Articles  = () => import('./views/Articles.vue')
const Hub  = () => import('./views/Hub.vue')
const Article  = () => import('./views/Article.vue')
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
                    path: ':id(\\d+)',
                    name: 'article',
                    component: Article
                },
                {
                    path: ':hub?',
                    name: 'hub',
                    component: Hub
                },
            ]
        },
        {
            path: '*',
            name: 'default',
            component: NotFound,
        }
    ]
})
import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Articles from './views/Articles.vue'
import Hub from './views/Hub.vue'
import Article from './views/Article.vue'
import NotFound from './views/NotFound'

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
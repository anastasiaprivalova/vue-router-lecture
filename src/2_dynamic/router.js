import Vue from 'vue'
import Router from 'vue-router'
import Hub from './views/Hub.vue'
import Login from './views/Login.vue'
import Article from './views/Article.vue'
import NotFound from './views/NotFound'

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/login', //non-dynamic route
            name: 'login',
            component: Login
        },
        {
            path: '/:id(\\d+)', //match with id by regex (only digits)
            name: 'article',
            component: Article
        },
        {
            path: '/:hub?', //match with hub optional dynamic parameter
            name: 'hub',
            component: Hub
        },
        {
            path: '*', //default match
            name: 'default',
            component: NotFound,
        }
    ]
})
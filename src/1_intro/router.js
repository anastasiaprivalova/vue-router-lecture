import Vue from 'vue'
import Router from 'vue-router'
import ArticleContainer from './views/ArticleContainer.vue'
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'article-container',
            component: ArticleContainer
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        }
    ]
})
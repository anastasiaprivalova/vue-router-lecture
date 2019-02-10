<template>
    <main class="articles-list">
        <Nav />
        <ul class="article-list-items">
            <li v-for="article in articles" :key="route + article.id">
                <router-link :to="`/${article.id}`">{{article.title}}</router-link>
            </li>
        </ul>
    </main>
</template>

<script>
    import Nav from './../components/Nav';
    import articles from './../../data/articles.json'

    export default {
        name: 'ArticlesList',

        components: {
            Nav
        },

        computed: {
            route() {
                return `/${this.$route.params.hub || ''}`;
            },
            articles() {
                const filteredArticles = articles.find(article => article.route === this.route);
                return filteredArticles ? filteredArticles.articles : []
            }
        },
    }
</script>

<style>
    .article-list-items {
        font-size: 20px;
        list-style: none;
        margin: 20px auto 40px;
        padding-left: 0;
        width: 75%;
    }
    
    .article-list-items li {
        border-bottom: 1px dotted var(--theme-color);
        padding: 10px 0;
    }
    .article-list-items li:last-child {
        border-bottom: 0;
    }

    .article-list-items li a {
        color: var(--theme-color);
        text-decoration: none;
    }
</style>
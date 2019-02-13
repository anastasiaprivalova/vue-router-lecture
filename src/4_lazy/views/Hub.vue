<template>
    <ul class="hub">
        <li v-for="article in articles" :key="route + article.id">
            <router-link :to="`/articles/${article.id}`">{{article.title}}</router-link>
        </li>
    </ul>
</template>

<script>
    import articles from '../../data/articles.json'

    export default {
        name: 'Hub',

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
    .hub {
        font-size: 20px;
        list-style: none;
        margin: 20px auto 40px;
        padding-left: 0;
        width: 75%;
    }
    
    .hub li {
        border-bottom: 1px dotted var(--theme-color);
        padding: 10px 0;
    }
    .hub li:last-child {
        border-bottom: 0;
    }

    .hub li a {
        color: var(--theme-color);
        text-decoration: none;
    }
</style>
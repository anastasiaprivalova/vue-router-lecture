<template>
    <article class="article">
        <div class="article__hero">
            <img :src="imageSrc" :alt="`${article.title} article hero`" />
            <h2>{{ article.title }}</h2>
        </div>
        <p>
            {{ article.text }}
        </p>
    </article>
</template>

<script>
    import articles from '../../data/articles.json';

    export default {
        name: 'Article',

        computed: {
            id() {
                return +this.$route.params.id || 0;
            },
            article() {
                return articles[0].articles.find(article => article.id === this.id) || {};
            },
            imageSrc() {
                return require(`./../../assets/${this.article.imageSrc}`);
            }
        },
    }
</script>

<style>
    .article {
        color: var(--theme-text);
        margin: 20px 10%;
    }

    .article__hero {
        text-align: center;
        position: relative;
    }

    .article__hero img {
        max-width: 100%;
    }

    .article__hero h2 {
        background: var(--lighter-bg);
        left: 50%;
        padding: 20px 5%;
        position: absolute;
        top: calc(50% - 20px);
        transform: translate(-50%, -50%);
    }

    .article p {
        font-size: 20px;
    }
</style>
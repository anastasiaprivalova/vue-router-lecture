<template>
    <section class="premium-article__container">
        <article
            v-for="article in premium"
            :key="`premium-${article.id}`"
            class="premium-article">
            <img :src="getImgSrc(article)" :alt="article.title" />
            <div class="premium-article__content">
                <h2>{{ article.title }}</h2>
                <p>{{ article.text }}</p>
            </div>
        </article>
    </section>
</template>

<script>
    import premium from './../../data/premium.json';

    export default {
        name: 'Premium',

        data() {
            return {
                premium
            }
        },

        methods: {
            getImgSrc(article) {
                return require(`./../../assets/${article.imageSrc}`);
            }
        }
    }
</script>

<style>
    .premium-article {
        margin: 20px;
    }

    .premium-article::after {
        clear: both;
        content: '';
        display: table;
    }

    .premium-article__container {
        margin: 0 auto;
        width: 80%;
    }

    .premium-article img {
        border-radius: 50%;
        float: left;
        height: 200px;
        margin: 30px;
        shape-outside: circle(50%);
        width: 200px;
    }

    .premium-article__content {
        padding: 10px 0;
    }
</style>
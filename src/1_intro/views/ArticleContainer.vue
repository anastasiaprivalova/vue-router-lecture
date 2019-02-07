<template>
    <main class="article-container">
        <Nav />
        <article class="article">
            <div class="article__hero">
                <img src="./../../assets/article.jpg" alt="test article hero" />
                <h2>Test title</h2>
            </div>
            <p>
                Aliquam erat volutpat. Pellentesque egestas, neque sit amet convallis pulvinar, justo nulla eleifend augue, ac auctor orci leo non est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce id purus. Fusce a quam. Vivamus in erat ut urna cursus vestibulum.
            </p>
        </article>
    </main>
</template>

<script>
    import Nav from './../components/Nav';

    export default {
        name: 'ArticleContainer',
        components: {
            Nav
        }
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
<template>
    <main class="not-found__container">
        <div class="not-found">
            <h1>404</h1>
            <p>Page not found</p>
            <router-link to="/articles">Home</router-link>
        </div>
    </main>
</template>

<style>
    .not-found__container {
        align-items: center;
        background: center / cover no-repeat url('../../assets/404-bg.jpg') var(--theme-color);
        background-blend-mode: multiply;
        display: flex;
        height: 100vh;
        justify-content: center;
        width: 100vw;
    }

    .not-found {
        background-color: var(--darker-bg);
        padding: 20px;
        text-align: center;
    }

    .not-found > * {
        color: var(--theme-color);
        font-size: 20px;
    }

    .not-found h1 {
        font-size: 200px;
    }
</style>
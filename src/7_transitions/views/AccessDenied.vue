<template>
    <main class="access-denied">
        <div class="access-denied__message">
            <h1>Sorry, you don't have access to this page</h1>
            <p>
                <router-link to="/login">Login</router-link>
                or
                <router-link to="/articles">Go to the Home page</router-link>
            </p>
        </div>
    </main>
</template>

<style>
    .access-denied {
        align-items: center;
        background: center / cover no-repeat url('../../assets/access-denied-bg.jpg') var(--theme-color);
        background-blend-mode: multiply;
        display: flex;
        height: 100vh;
        justify-content: center;
        width: 100vw;
    }

    .access-denied__message {
        background-color: var(--darker-bg);
        color: var(--theme-text-opposite);
        padding: 30px 4%;
        text-align: center;
    }

    .access-denied__message p {
        font-size: 27px
    }

    .access-denied__message a {
        color: var(--theme-color);
        text-decoration: none;
    }
</style>
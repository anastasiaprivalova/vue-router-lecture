<template>
    <header class="nav">
        <router-link to="/articles" class="nav__home">
            H
        </router-link>
        <nav id="nav">
            <button @click="toggleNav" id="navToggler" class="nav__menu-toggler">
                Jump to Hub
            </button>
            <ul v-show="isNavVisible" class="nav__menu">
                <li v-for="link in links" :key="link.title">
                    <router-link :to="`/articles${link.route}`">{{ link.title }}</router-link>
                </li>
            </ul>
        </nav>
        <router-link to="/login" class="nav__login"/>
    </header>
</template>

<script>
    import articles from '../../data/articles.json';

    export default {
        name: 'Nav',
        data() {
            return {
                isNavVisible: false,
                links: articles,
            }
        },
        watch: {
            $route() {
                this.isNavVisible = false
            },
        },
        mounted() {
            document.addEventListener('pointerdown', this.closeNav)
        },
        beforeDestroy() {
            document.removeEventListener('pointerdown', this.closeNav)
        },
        methods: {
            toggleNav() {
                this.isNavVisible = !this.isNavVisible
            },
            closeNav({ target }) {
                if (!target.closest('#nav')) {
                    this.isNavVisible = false
                }
            }
        }
    }
</script>

<style>
    .nav {
        align-items: center;
        display: flex;
        padding: 0 0 20px;
    }

    .nav a {
        color: var(--theme-color);
        outline-color: var(--theme-color);
        text-decoration: none;
    }

    .nav__home {
        font-size: 40px;
        padding: 20px;
    }

    .nav nav {
        flex: 1;
        position: relative;
    }

    .nav__menu-toggler {
        background: var(--theme-color);
        border: 0;
        border-radius: 0;
        color: var(--theme-text-opposite);
        cursor: pointer;
        font-size: 20px;
        outline-color: var(--theme-color);
        padding: 20px;
        text-align: center;
        width: 100%;
    }

    .nav__menu {
        background-color: var(--primary-bg);
        border: 1px solid var(--border-color);
        box-shadow: 2px 2px 2px 1px var(--border-color);
        font-size: 20px;
        left: 0;
        list-style: none;
        margin: 0;
        padding: 20px;
        position: absolute;
        right: 0;
        text-align: center;
        top: 100%;
        z-index: 1;
    }

    .nav__menu a {
        display: block;
        padding: 15px 0;
    }

    .nav__login {
        background: url('../../assets/lock-closed.svg') center / contain no-repeat;
        height: 40px;
        outline-color: var(--theme-color);
        width: 60px;
    }

    .nav__login:hover {
        background-image: url('../../assets/lock-open.svg');
    }
</style>
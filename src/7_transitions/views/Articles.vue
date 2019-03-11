<template>
    <main class="articles">
        <Nav/>
        <transition name="slide-right" :duration="1000">
            <router-view/>
        </transition>
    </main>
</template>

<script>
    import Nav from '../components/Nav';

    export default {
        name: 'Articles',

        components: {
            Nav
        },
    }
</script>

<style>
    .hub,
    .article {
        left: 0;
        position: absolute;
        transition: all .5s cubic-bezier(.55, 0, .1, 1);
        right: 0;
    }
</style>

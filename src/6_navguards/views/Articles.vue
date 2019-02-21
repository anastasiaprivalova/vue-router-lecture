<template>
    <main class="articles">
        <Nav/>
        <router-view></router-view>
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
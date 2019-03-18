<template>
    <main class="articles">
        <Nav/>
        <transition :name="transitionName" :duration="1000">
            <router-view/>
        </transition>
    </main>
</template>

<script>
    import Nav from '../components/Nav';

    const transitions = {
        SLIDE_RIGHT: 'slide-right',
        SLIDE_LEFT: 'slide-left',
    }

    export default {
        name: 'Articles',

        components: {
            Nav
        },

        data() {
            return {
                transitionName: transitions.SLIDE_LEFT,
            }
        },

        watch: {
            '$route' (to, from) {
                const toDepth = to.meta.depth
                const fromDepth = from.meta.depth

                this.transitionName = toDepth < fromDepth ? transitions.SLIDE_RIGHT : transitions.SLIDE_LEFT
            }
        }
    }
</script>

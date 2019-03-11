<template>
    <div id="app">
        <transition :name="transitionName" :duration="transitionDuration">
            <router-view/>
        </transition>
    </div>
</template>

<script>    
    const transitions = {
        SLIDE: 'slide-left',
        FALL: 'fall',
    }

    export default {
        name: 'Main',

        data() {
            return {
                transitionName: transitions.SLIDE
            }
        },

        computed: {
            transitionDuration() {
                return this.transitionName === transitions.SLIDE ? 1000 : 3000
            }
        },

        watch: {
            '$route' (to) {
                const toRouteName = to.name
                const isErrorView = (toRouteName === 'default' || toRouteName === 'premiumDenied')
                
                this.transitionName = isErrorView ? transitions.FALL : transitions.SLIDE
            }
        }
    }
</script>

<style>
    @import './animations.css';

    :root {
        --primary-bg: white;
        --darker-bg: rgba(0, 0, 0, .5);
        --lighter-bg: rgba(255, 255, 255, .7);
        --secondary-text: #999;
        --border-color: #ccc;

        --theme-color: darkseagreen;
        --theme-dark: #658065;
        --theme-text: #435f43;
        --theme-text-opposite: white;
    }

    * {
        box-sizing: border-box;
    }

    body {
        font-family: Helvetica sans-serif;
        margin: 0;
    }

    #app {
        height: 100vh;
        overflow-x: hidden;
        position: relative;
        width: 100vw;
    }

    main {
        left: 0;
        max-width: 100vw;
        position: absolute;
        right: 0;
    }    
</style>
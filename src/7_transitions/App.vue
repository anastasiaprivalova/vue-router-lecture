<template>
    <div id="app">
        <transition :name="transitionName" :duration="1000">
            <router-view/>
        </transition>
    </div>
</template>

<script>    
    const transitions = {
        SLIDE_RIGHT: 'slide-right',
        SLIDE_LEFT: 'slide-left',
        SLIDE_TOP: 'slide-top',
        FALL: 'fall',
    }

    export default {
        name: 'Main',

        data() {
            return {
                transitionName: transitions.SLIDE
            }
        },

        watch: {
            '$route' (to, from) {
                switch(to.name) {
                    case 'premiumDenied':
                    case 'default':
                        this.transitionName = transitions.FALL
                        break
                    
                    case 'login':
                        this.transitionName = transitions.SLIDE_TOP
                        break
                    
                    default:
                        to.meta.depth < from.meta.depth ? transitions.SLIDE_RIGHT : transitions.SLIDE_LEFT
                        break
                }
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
</style>
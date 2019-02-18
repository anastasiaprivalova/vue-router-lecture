<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<style>
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
</style>
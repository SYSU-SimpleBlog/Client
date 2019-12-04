<template>
    <div id="app">
        <nav-bar></nav-bar>
        <router-view></router-view>
    </div>
</template>

<script>
    import navBar from "./components/navBar.vue"
    export default {
        name: 'app',
        components: {
            navBar
        }
    }
</script>

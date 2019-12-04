<template>
    <div>
        <header class="header">
            <router-link to="/">Simple Blog</router-link>
            <Input prefix="md-book" search placeholder="搜索..." style="width: 250px; margin-left: 750px; "/>
            <div style="clear: both"/>
        </header>
    </div>
</template>

<script>
    export default {
        name: "navBar"
    }
</script>

<style scoped>
    .header {
        padding: 20px 150px;
        background-color: #24292E;
    }
    .header a {
        text-decoration: none;
        font-size: 20px;
        letter-spacing: 3px;
        text-transform: uppercase;
        color: white;
    }
</style>

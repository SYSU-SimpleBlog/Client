<template>
    <div>
        <header class="header">
            <router-link to="/">Simple Blog</router-link>
            <router-link v-if="this.$route.name ==='home'" style="float:right; margin-right: 50px; font-size: 15px;" to="/signin">
                <Button  ghost >登录</Button>
            </router-link>
            <Input id="search" prefix="md-book" search placeholder="搜索..." @on-focus="expend" @on-blur="narrow"
                   style="float:right; width: 250px;  margin-right: 50px"/>
            <div style="clear: both"/>
        </header>
    </div>
</template>

<script>
    export default {
        name: "navBar",
        methods:{
            expend(){
                let s = document.getElementById("search")
                s.style.width='400px'
            },
            narrow(){
                let s = document.getElementById("search")
                s.style.width='250px'
            }
        }
    }
</script>

<style scoped>
    .header {
        padding: 20px 0 20px 150px;
        background-color: #24292E;
    }
    .header a {
        text-decoration: none;
        font-size: 20px;
        letter-spacing: 3px;
        text-transform: uppercase;
        color: white;
    }

    #search{
        transition:  width 0.5s ease-in-out;
    }
</style>

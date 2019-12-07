<template>
    <div>
        <header class="header">
            <a @click="toHomePage">Simple Blog</a>
            <router-link v-if="this.$route.name ==='home'" style="float:right; margin-right: 50px; font-size: 15px;" to="/signin">
                <Button  ghost >登录</Button>
            </router-link>
            <router-link v-else-if="this.$route.name ==='articleList'" style="float:right; margin-right: 50px; font-size: 15px;" to="/">
                <Button  ghost @click="signOut">退出</Button>
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
            toHomePage(){
                if(window.localStorage.isLogin === '1')
                    this.$router.push('/articleList')
                else
                    this.$router.push('/')
            },
            expend(){
                let s = document.getElementById("search")
                s.style.width='400px'
                this.$Message.warning('未完成的功能，敬请期待!')
            },
            narrow(){
                let s = document.getElementById("search")
                s.style.width='250px'
            },
            signOut(){
                this.$store.commit('$_removeStorage')
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

<template>
    <div>
        <h1>{{ helloMessage }}</h1>
        <h3>This is a very simple blog website.</h3>
        <ul>
            <li>API design: Swagger</li>
            <li>Back-end: Golang</li>
            <li>Front-end: Vue.js</li>
        </ul>

        <p style="margin-top: 50px;">Click the sign-in button to enjoy.</p>
        <p>See more details in <a href="https://github.com/SYSU-SimpleBlog" target="_blank">Github</a></p>
    </div>
</template>

<script>

import axios from 'axios'

export default {
    name:'home',
    data(){
        return {
            helloMessage: 'WELCOME',
            articles: []
        }
    },
    created(){
        if(window.localStorage.isLogin === '1')
            this.$router.push('/articleList')
    },
    methods:{

    }
}
</script>

<style scoped>
    div{
        text-align: center;
    }

    h1{
        margin-top: 100px;
        letter-spacing: 5px;
        font-size: 50px;
    }

    ul{
        margin-top: 30px;
        line-height: 30px;
    }
</style>

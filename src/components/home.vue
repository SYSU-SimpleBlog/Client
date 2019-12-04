<template>
    <div>
        <h1>{{ helloMessage }}</h1>
        <router-link to="/signin">登录</router-link>
        <router-link to="/articleDetail">文章详情</router-link>
    </div>
</template>

<script>

import axios from 'axios'

export default {
    name:'home',
    data(){
        return {
            helloMessage: 'Hello Vue!',
            articles: []
        }
    },
    created(){
        this.findArticleData()
    },
    methods:{
        findArticleData(){
            axios.get('/api/articles')
            .then(e=>{
                let data = e.data
                if(data.data && Array.isArray(data.data)){
                    this.articles = data.data
                }
                console.log(this.articles)
            })
            .catch(err=>{
                console.log(err)
            })
        }
    }
}
</script>

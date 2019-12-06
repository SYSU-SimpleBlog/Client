<template>
    <div id='articlelist'>
        <h1 id='h1'>文章列表</h1>
        <ul>
            <li id="list" v-for="item in articles">
                <div id='title'>
                    <router-link :to="{
					path:'/articleDetail/',
					name: 'articlePage',
					params: {id: item.id}}">{{item.name}}
                    </router-link>
                </div>
            </li>
        </ul>
        <br/>
			<nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center" id='pageul' style="display: flex;  justify-content:space-around">
                <li class="page-item">
                    <a class="page-link" aria-label="Previous" @click="switchToPage(1)">
                        <span aria-hidden="true">First Page</span>
                        <span class="sr-only">Previous</span>
                    </a>
                </li>

                <li class="page-item">
                    <a class="page-link" aria-label="Previous" @click="switchToPage(currentPage - 1)">
                        <span aria-hidden="true">&laquo;</span>
                        <span class="sr-only">Previous</span>
                    </a>
                </li>
                <li class="page-item">
                    {{currentPage}}/{{totalPages}}
                </li>
                <li class="page-item" v-for="n in totalPages" v-if='n >= clowLimit && n <= chiLimit'
                    :class="{active:n==currentPage}" :key="n">
                    <a v-if='n == clowLimit && n > 1' class="page-link">...</a>
                    <a v-else-if='n == chiLimit && n < totalPages' class="page-link">...</a>
                    <a v-else href="#" @click="switchToPage(n)" class="page-link">{{n}}</a>
                </li>

                <li class="page-item">
                    <a class="page-link" aria-label="Next" @click="switchToPage(currentPage + 1)">
                        <span class="sr-only">Next</span>
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>

                <li class="page-item">
                    <a class="page-link" href="#" aria-label="Previous" @click="switchToPage(totalPages)">
                        <span aria-hidden="true">Last Page</span>
                        <span class="sr-only">Previous</span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>

</template>

<script>
    import { GetArticles } from '../lib/api.js'
    var currentPage = 1;
    export default {
        name: "articleList",
        created() {
            this.getData()
            this.findArticles()
        },
        data() {
            return {
                namelist: [],
                articles: []
            }
        },
        props: {
            currentPage: 1,
            lowLimit: 1,
            hiLimit: 8,
            listSize: 10,
            totalArticles: 100,
            totalPages: 10,
            loading: false,
        },
        methods: {
            getData() {
                let me = this
                me.currentPage = 1
                me.lowLimit = 1
                me.hiLimit = 10
                me.listSize = 10
                me.totalArticles = 100
                me.totalPages = 10
            },

            switchToPage: function (pageNo) {
                if (pageNo <= 0 || pageNo > this.totalPages) {
                    return;
                }
                this.currentPage = pageNo
                let me = this
                GetArticles({
                    page: me.currentPage,
                })
                    .then(function (res) {
                        me.articles = res.data.Articles
                        // me.articles=[1,2,3,4,5,6,7,8,9,0]
                    })
                    .catch(function (err) {
                        me.articles = []
                    })
            },

            findArticles() {
                this.currentPage = 1
                let me = this
                GetArticles({
                    page: me.currentPage,
                })
                    .then(function (res) {
                        me.articles = res.data.Articles
                    })
                    .catch(function (err) {
                        me.articles = []
                    })
            }
        }

    }
</script>

<style scoped>
    #h1 {
        text-align: center;
    }

    #articlelist {
        margin-top: 50px;
        padding: 0 250px;
    }

    #list {
        font-size: 25px;
        list-style: none;
        border-bottom: solid 1px #24292E;
        margin-bottom: 2px;
        margin-top: 2px;
        height: 50px;
    }

    #title {
        width: 100%;
        text-align: left;
        height: 100%;
        float: left;
        padding: 5px;
    }

    #author {
        width: 50%;
        text-align: right;
        height: 100%;
        float: left;
        padding: 5px;
    }

    .page-item {
        list-style: none;
        display: inline-block;
        text-align: center;
    }
</style>

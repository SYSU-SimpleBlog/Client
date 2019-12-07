<template>
    <div id='articleList'>
        <BackTop :height="100"></BackTop>
        <h1>文章列表</h1>
        <ul>
            <li v-for="(item, index) in articlesData" :key="index">
                <div id='title'>
                    <router-link :to="{
					path:'/articleDetail/',
					name: 'articlePage',
					params: {id: item.id}}">
                        {{item.name}}
                    </router-link>
                </div>
                <span style="float: right" ><a @click="openDeleteModal(index)" style="color: black"><Icon type="md-trash" style="color: black"/>删除</a></span>
                <Divider/>
            </li>
        </ul>
        <br/>
        <Page :total="this.articleNum" :page-size="10" size="small" show-total style="float: right; overflow: hidden" @on-change="handlePageTurn"/>

        <Modal v-model="isDelete"
                title="删除文章"
                @on-ok="handleArticleDelete"
                @on-cancel="cancelModal">
            <p>是否确定删除文章？</p>
        </Modal>
        <br>
    </div>

</template>

<script>
    import { GetArticles } from '../lib/api.js'
    import { DeleteArticleById } from '../lib/api.js'

    export default {
        name: "articleList",
        components:{

        },
        data() {
            return {
                isDelete: false,
                articlesData: [],
                articleNum: 0,
                currentPage: 1,
                articlesDeleteId: -1
            }
        },
        created() {
            this.getArticlesData(this.currentPage)
        },
        methods: {
            getArticlesData(pageNum) {
                GetArticles({
                    page: pageNum
                }).then(res=>{
                    this.articlesData = res.data.Articles
                    this.articleNum = res.data.PageCount
                }).catch(err=>{
                    console.log(err)
                })
            },

            handlePageTurn(page) {
                this.currentPage = page
                this.getArticlesData(this.currentPage)
            },

            openDeleteModal(index){
                this.isDelete = true
                this.articlesDeleteId = this.articlesData[index].id
                console.log(this.articlesDeleteId)
            },

            cancelModal(){
                this.isDelete = false
                this.articlesDeleteId = -1
                this.$Message.warning("取消删除")
            },

            handleArticleDelete(index){
                console.log(index)

                DeleteArticleById({
                    id: this.articlesDeleteId
                }).then(res=>{
                    this.$Message.success("删除成功")
                    this.getArticlesData(this.currentPage)
                }).catch(err=>{
                    console.log(err)
                    this.$Message.error("未知错误，删除失败")
                })
            }

        }
    }
</script>

<style scoped>
    h1 {
        text-align: center;
        margin-bottom: 20px;
    }

    #articleList {
        margin-top: 50px;
        padding: 0 350px;
    }

    li{
        list-style: none;
        height:80px;
    }

    li span{
        opacity: 0;
    }

    #title{
        padding-left: 10px;
        padding-top: 5px;
        font-size: 20px;
        height: 50px;
    }

    #title a{
        color: #24292E;
    }
    #title a:hover{
        color: chocolate;
    }

    li:hover{
        background-color: #F5F6F7;
    }

    li:hover span{
        opacity: 1;
    }
</style>



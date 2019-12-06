<template>
    <div id="article">
        <BackTop :height="100"></BackTop>
        <h1>{{ articleData.name }}</h1>
        <div style="text-align: center">发表时间：{{ articleData.date }}</div>
        <div id="content">
            <p v-html="compileMarkdown"></p>
        </div>
        <div id="tags" style="text-align: center">
            <span><Icon type="md-pricetag"/>网站架构</span>
            <span><Icon type="md-pricetag"/>教程</span>
        </div>
        <Divider>文章结束</Divider>
        <div id="comments">
            <div id="addNewComment" style="overflow: hidden">
                <Input type="textarea" v-model="commentText" :rows="5" placeholder="想对作者说点什么"
                       @input="showCommentButton"></Input>
                <Button v-show="isComment" style="float: right; margin-top: 10px" type="primary" ghost
                        @click="addComment">发表评论
                </Button>
            </div>
            <br>
            <Card style="overflow: hidden">
                <p slot="title">评论</p>
                <div>
                    <span><b>神叨叨叨丶</b></span><span style="float: right"><a @click="reply">回复</a></span>
                    <p style="padding: 10px">谢谢分享，很有启发。</p>
                    <Divider dashed/>
                </div>
                <Page :total="100" size="small" show-total style="float: right; overflow: hidden"/>
                <br>
            </Card>
            <br><br>
        </div>
    </div>
</template>

<script>
    import marked from 'marked'
    import { GetArticleById } from '../lib/api.js'
    import { GetCommentsOfArticle } from '../lib/api.js'
    export default {
        name: "articlePage",
        components: {},
        data() {
            return {
                articleId: '',
                articleData: {
                    tags: [],
                    title: '',
                    content: '',
                    date: '',
                },
                isComment: false,
                commentText: '',
            }
        },
        created() {
            this.articleId = this.$route.params.id
            this.getArticleData()
            this.getArticleComment()
        },
        methods: {
            getArticleData() {
                GetArticleById({
                    id: this.articleId
                }).then(res=>{
                    this.articleData = res.data
                }).catch(err=>{
                    console.log(err)
                })
            },
            getArticleComment(){
                GetCommentsOfArticle({
                    id: this.articleId
                }).then(res=>{
                    console.log(res.data)
                }).catch(err=>{
                    console.log(err)
                })
            },

            showCommentButton() {
                if (this.commentText.length > 0)
                    this.isComment = true
                else
                    this.isComment = false
            },
            addComment(){

                this.$Message.success('评论成功')
            },
            reply(){
                this.$Message.warning('未完成的功能，敬请期待!')
            }
        },
        computed: {
            compileMarkdown: function () {
                return marked(this.articleData.content, {})
            }
        }
    }
</script>

<style scoped>
    #article {
        margin-top: 50px;
        padding: 0 250px;
    }

    h1 {
        text-align: center;
        margin: 20px 0 5px 0;
        color: black;
    }

    #content {
        margin: 30px 0;
    }
</style>

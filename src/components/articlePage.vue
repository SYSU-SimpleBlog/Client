<template>
    <div id="article">
        <ButtonGroup vertical style="position: fixed; margin-top:0px; margin-left: -50px;">
            <Button icon="logo-facebook"></Button>
            <Button icon="logo-twitter"></Button>
            <Button icon="logo-googleplus"></Button>
            <Button icon="logo-tumblr"></Button>
        </ButtonGroup>
        <BackTop :height="100"></BackTop>
        <h1>{{ articleData.name }}</h1>
        <div style="text-align: center">发表时间：{{ articleData.date }}</div>
        <div id="content">
            <p v-html="compileMarkdown"></p>
        </div>
        <div id="tags" style="text-align: center">
            <span v-for="(item) in articleData.tags" style="margin-right: 5px;"><Icon type="md-pricetag"/>{{ item.name }}</span>
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
                <div v-for="(item, index) in comments">
                    <span style="font-size: 17px;"><b>{{ item.author }}</b></span><span style="margin-left: 10px; color: darkgray">{{ item.date }}</span>
                    <span style="margin-left: 10px; color: darkgray">#{{ index + 1 + (currentCommentPage - 1)*5 }}楼</span>
                    <span style="float: right"><a @click="reply">回复</a></span>
                    <p style="padding: 10px">{{ item.content }}</p>
                    <Divider dashed/>
                </div>
                <Page :total="this.totalCommentsNum" :page-size="5" size="small" show-total style="float: right; overflow: hidden" @on-change="handlePageTurn"/>
                <br>
            </Card>
            <br><br>
        </div>
    </div>
</template>

<script>
    import marked from 'marked'
    import {GetArticleById} from '../lib/api.js'
    import {GetCommentsOfArticle} from '../lib/api.js'
    import {CreateComment} from "../lib/api"

    export default {
        name: "articlePage",
        components: {},
        data() {
            return {
                articleId: '',
                articleData: {
                    tags: [],
                    name: '',
                    content: '',
                    date: '',
                },
                comments: [],
                totalCommentsNum: 0,
                isComment: false,
                commentText: '',
                currentCommentPage: 1
            }
        },
        created() {
            this.articleId = this.$route.params.id
            this.getArticleData()
            this.getArticleComment(this.currentCommentPage)
        },
        methods: {
            getCookie(name) {
                let ca = document.cookie.split(';')
                for (let i = 0; i < ca.length; i++) {
                    let c = ca[i]
                    c = c.trim()
                    console.log(c)
                    if (c.split('=')[0] == name)
                        return c.split('=')[1];
                }
                return ""
            },

            getArticleData() {
                GetArticleById({
                    id: this.articleId
                }).then(res => {
                    this.articleData = res.data
                }).catch(err => {
                    console.log(err)
                })
            },
            getArticleComment(pageNum) {
                GetCommentsOfArticle({
                    id: this.articleId,
                    page: pageNum
                }).then(res => {
                    this.comments = res.data.contents
                    this.totalCommentsNum = res.data.PageCount
                }).catch(err => {
                    console.log(err)
                })
            },

            showCommentButton() {
                if (this.commentText.length > 0)
                    this.isComment = true
                else
                    this.isComment = false
            },

            handlePageTurn(page) {
                this.currentCommentPage = page
                this.getArticleComment(this.currentCommentPage)
            },

            addComment() {
                let username = this.getCookie('username')
                let token = this.getCookie('token')
                console.log(token)
                CreateComment({
                    $config: {
                        headers: {
                            'Authorization': token
                        }
                    },
                    id: this.articleId,
                    body: {
                        content: this.commentText,
                        author: username
                    }

                }).then(res => {
                    this.$Message.success('评论成功')
                    this.currentCommentPage = 1
                    this.commentText = ''
                    this.getArticleComment(this.currentCommentPage)
                }).catch(err => {
                    console.log(err)
                    this.$Message.error('未知错误')
                })
            },
            reply() {
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
        position: relative;
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

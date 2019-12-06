<template>
    <div style="width: 500px; margin: 150px auto 0px;">
        <Card>
            <p slot="title" style="text-align: center; font-size: 20px;">
                <b>登 录</b>
            </p>
            <Form v-model="signInForm" label-position="top" :rules="rule">
                <FormItem label="用户名" prop="username">
                    <Input type="text" size="large" autofocus clearable v-model="signInForm.username"
                           placeholder="请输入用户名"/>
                </FormItem>
                <FormItem label="密码" prop="password">
                    <Input type="password" size="large" password v-model="signInForm.password" placeholder="请输入密码"/>
                </FormItem>
                <FormItem>
                    <Button type="success" size="large" long :loading="loading" @click="handleSignIn">登录</Button>
                </FormItem>
            </Form>
        </Card>
    </div>
</template>

<script>
    import {SignIn} from '../lib/api.js'
    export default {
        name: 'signIn',
        components: {},
        data() {
            return {
                signInForm: {},
                rule: {},
                loading: false
            }

        },
        created() {

        },
        methods: {
            handleSignIn() {
                console.log(this.signInForm)
                this.loading = true
                SignIn(this.signInForm)
                    .then(res => {
                        console.log(res.token)
                    }).catch(err => {
                    console.log(err)
                })

                // 全局通知
                this.$Notice.success({
                    title: '登录成功',
                    render: h => {
                        return h('div', [
                            h('span', {}, '欢迎使用. 这是一个简单的博客网站。详情请见'),
                            h('a', {
                                attrs: {
                                    href: 'https://github.com/SYSU-SimpleBlog',
                                    target: '_blank'
                                }
                            }, 'Github')
                        ])
                    },
                    duration: 4
                })
                //this.$router.push('/articleList')
            }
        }
    }
</script>

<style scoped>

</style>

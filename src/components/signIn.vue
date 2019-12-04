<template>
    <div style="width: 500px; margin: 200px auto;">
        <Card>
            <p slot="title" style="text-align: center; font-size: 20px;">
                <b>登 录</b>
            </p>
            <Form v-model="signInForm" label-position="top" :rules="rule">
                <FormItem label="用户名" prop="username">
                    <Input type="text" size="large" clearable v-model="signInForm.username" placeholder="请输入用户名"/>
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
    export default {
        name: 'signIn',
        components: {},
        data() {
            return {
                signInForm: {},
                rule:{
                },
                loading: false
            }

        },
        created() {

        },
        methods: {
            handleSignIn() {
                this.loading = true
            }
        }
    }
</script>

<style scoped>

</style>

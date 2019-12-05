<template>
    <div>
        <h1>OOPS!</h1>
        <p>Please check that the URL you entered is correct, or click the button below to return to the homepage.</p>
        <router-link to="/">返回主页</router-link>
    </div>
</template>

<script>
export default {
    name: 'errorPage'
}
</script>

<style scoped>
    div{
        text-align: center;
    }
    h1{
        margin-top: 100px;
        font-size: 40px;
    }
    p{
        margin: 20px 0;
    }
</style>

<template>
    <div>
        <h1>{{ helloMessage }}</h1>
    </div>
</template>

<script>
export default {
    name:'home',
    data(){
        return {
            helloMessage: 'Hello Vue!'
        }
    }
}
</script>
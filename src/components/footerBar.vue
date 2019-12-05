<template>
    <div>
        <footer>
            <ul>
                <li><Icon type="logo-github" :size="25" style="margin-right: 5px"/><span>Github</span></li>
                <li><a href="https://github.com/SYSU-SimpleBlog/Proj-doc" target="_blank">Docs</a></li>
                <li><a href="https://github.com/SYSU-SimpleBlog/Client" target="_blank">FrontEnd</a></li>
                <li><a href="https://github.com/SYSU-SimpleBlog/Server" target="_blank">BackEnd</a></li>
            </ul>
            <ul>
                <li><Icon type="md-people" size="25" style="margin-right: 5px"/><span>FrontEnd Team</span></li>
                <li><a href="https://github.com/DanielXuuuuu" target="_blank">Daniel Xu</a></li>
                <li><a href="https://github.com/xutaiqi" target="_blank">xutaiqi</a></li>
            </ul>
            <ul>
                <li><Icon type="ios-people" size="25" style="margin-right: 5px"/><span>BackEnd Team</span></li>
                <li><a href="https://github.com/IYreality" target="_blank">Ailsa</a></li>
                <li><a href="https://github.com/LeoBarwoo" target="_blank">LeoBarwoo</a></li>
                <li><a href="https://github.com/rye0410" target="_blank">rye0410</a></li>
                <li><a href="https://github.com/xxxufj" target="_blank">xxxufj</a></li>
            </ul>
            <ul>
                <li><Icon type="md-chatboxes" size="25" style="margin-right: 5px"/><span>Contact Us</span></li>
                <li><a><Icon type="logo-twitter" style="margin-right: 5px"/>Twitter</a></li>
                <li><a><Icon type="logo-facebook" style="margin-right: 5px"/>Facebook</a></li>
                <li><a><Icon type="logo-google" style="margin-right: 5px"/>Google</a></li>
            </ul>
        </footer>
    </div>
</template>

<script>
    export default {
        name: "footerBar"
    }
</script>

<style scoped>
    div{
        background-color: #24292E;
        width: 100%;
        position:absolute;
        bottom:0;
    }

    footer{
        display: flex;
        overflow: hidden;
        padding: 20px;
        color: white;
        justify-content: space-around;
    }

    footer ul{
        list-style:none;
    }

    footer ul li{
        margin-left: 10px;
        margin-top: 5px;
    }

    footer li:first-child{
        margin: 0px;
    }

    a{
        color: white;
    }
</style>

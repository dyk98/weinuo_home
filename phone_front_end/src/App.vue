<template>
    <div id="app">
        <div class="header">
            <div class="header_name">
                <p>天津维诺智创</p>
                <p>Technology</p>
            </div>
            <div class="header_more">
                <img src="/static/img/more.png" alt="">
            </div>
        </div>

        <router-view/>

        <div class="footer">
            <p style="text-align: center;">导航栏</p>
            <hr>
            <div class="navigation">
                <p>服务</p>
                <p>方案</p>
                <p>行业</p>
                <p>案例</p>
                <p>关于</p>
            </div>
            <hr>
            <div class="contact">
                <p>联系方式：xxxxxxx</p>
                <p>地址：天津西青区XXXXX</p>
            </div>
            <hr>
            <div>
                <p class="small">天津维诺智创大数据科技有限公司</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        /*text-align: center;*/
    }

    .header {
        padding: 15px;
        height: 40px;
        background: #595959;
        display: flex;
    }

    .header_name {
        flex: 6;
    }

    .header_name p {
        margin: 0;
        color: #ffffff;
    }

    .header_more {
        flex: 1;
        text-align: right;
    }

    .header_more img {
        margin-top: 5px;
        width: 30px;
        height: 30px;
    }

    .footer {
        background: #595959;
        color: #ffffff;
        padding-top: 20px;
        padding-bottom: 5px;
    }

    .footer hr {
        width: 90%;
        opacity: 0.5;
    }

    .navigation {
        display: flex;
        justify-content: space-around;
    }

    .navigation p {
        text-align: center;
    }

    .contact {
        margin-left: 15px;
    }

    .small {
        font-size: 10px;
        margin-left: 15px;
        color: #ffffff;
        opacity: 0.5;
    }

</style>

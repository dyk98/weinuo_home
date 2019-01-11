<template>
    <div>
    <div class="service">

        <p class="tag" >服 务</p>
        <div>
            <p>我们以技术服务为核心业务，并在此基础上提供行业应用软件等一系列信息服务</p>
        </div>
        <div class="hr"></div>
        <div class="service_icon">
            <div>
                <img src="/static/img/ruanjian.png" alt="">
                <h2>软件开发</h2>
            </div>
            <div>
                <img src="/static/img/jiaohu.png" alt="">
                <h2>交互体验</h2>
            </div>
            <div>
                <img src="/static/img/yunwei.png" alt="">
                <h2>运营维护</h2>
            </div>
            <div>
                <img src="/static/img/ziyuan.png" alt="">
                <h2>资源配置</h2>
            </div>
            <div>
                <img src="/static/img/zhiliang.png" alt="">
                <h2>质量管理</h2>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
    export default {
        name: "Service"
    }
</script>

<style scoped>
    .service {
        text-align: center;
        height: 500px;
        padding-top: 45px;
        background-color: #ffffff;
        width: 70%;
        margin: 0 auto;
    }
    .hr {
        background-color: #357ad9;
        height: 2px;
        width: 35px;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 20px;
    }

    .tag {
        color: #2e3537;
        font-size: 40px;
        text-decoration: none;
        position: relative;
        top: -0.5em;
        height: 10px;
    }

    .service_icon {
        display: flex;
        justify-content: space-around;
        padding: 0 10px;

    }
    .service_icon img {
        width: 70%;
        margin-top: 2em;
    }

    .service_icon p {
        font-size: 16px;
        margin-top: 0;
    }
</style>
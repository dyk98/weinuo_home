<template>
    <div class="service">
        <h2 class="tag" >服务</h2>
        <div class="hr"></div>
        <div class="service_icon">
            <div>
                <img src="/static/img/ruanjian.png" alt="">
                <p>软件开发</p>
            </div>
            <div>
                <img src="/static/img/jiaohu.png" alt="">
                <p>交互体验</p>
            </div>
            <div>
                <img src="/static/img/yunwei.png" alt="">
                <p>运营维护</p>
            </div>
            <div>
                <img src="/static/img/ziyuan.png" alt="">
                <p>资源配置</p>
            </div>
            <div>
                <img src="/static/img/zhiliang.png" alt="">
                <p>质量管理</p>
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
        height: 200px;
        padding-top: 45px;
        background-color: #ffffff;
    }
    .hr {
        background-color: #357ad9;
        height: 2px;
        width: 35px;
        margin: 8px auto;
    }

    .tag {
        color: #2e3537;
        font-size: 25px;
        text-decoration: none;
    }

    .service_icon {
        display: flex;
        justify-content: space-around;
        padding: 0 10px;
    }

    .service_icon img {
        width: 55px;
        height: 55px;
        margin-top: 10px;
    }

    .service_icon p {
        font-size: 16px;
        margin-top: 0;
    }
</style>
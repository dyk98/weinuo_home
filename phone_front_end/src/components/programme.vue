<template>
    <div>
    <div class="service_header">
        <div style="font-weight: bold; font-size: 35px;">服务方案</div>
        <div style="font-weight: bold;">我们以技术服务为核心业务，并在此基础上提供行业应用软件等一系列信息服务。</div>
    </div>
    <div class="content">
        <div class="content_m" style="background-color: #cc8846;">
            <div class="s_img">
                <img src="/static/img/qiye.png" alt="">
            </div>
            <p>企业应用</p>
        </div>
        <div class="content_m" style="background-color: #dad656;">
            <div class="s_img">
                <img src="/static/img/yidong.png" alt="">
            </div>
            <p>移动应用</p>
        </div>
        <div class="content_m" style="background-color: #76d251;">
            <div class="s_img">
                <img src="/static/img/yunyin.png" alt="">
            </div>
            <p>运营平台</p>
        </div>
        <div class="content_m" style="background-color: #5941d0;">
            <div class="s_img">
                <img src="/static/img/shangwu.png" alt="">
            </div>
            <p>电子商务</p>
        </div>
        <div class="content_m" style="background-color: #d2433f;">
            <div class="s_img">
                <img src="/static/img/kehu.png" alt="">
            </div>
            <p>客户关系</p>
        </div>
        <div class="content_m" style="background-color: #437cd2;">
            <div class="s_img">
                <img src="/static/img/shengchan.png" alt="">
            </div>
            <p>生产管理</p>
        </div>
    </div>
    <div style="height: 30px"></div>
    </div>
</template>

<script>
    export default {
        name: "Programme"
    }
</script>

<style scoped>
    .service_header {
        padding: 0 15px;
    }

    .content {
        text-align: center;
        margin-top: 20px;
    }

    .content_m {
        width: 92%;
        margin: 3px auto;
        padding: 10px 0;
    }

    .content img {
        width: 50px;
        height: 50px;
        margin-top: 10px;
    }

    .s_img {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        margin: 0 auto;
        border: #FFFFFF solid 3px;
    }

    .content p {
        color: #FFFFFF;
        font-weight: bold;
    }

</style>
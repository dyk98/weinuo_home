<template>
    <div>
        <div class="service_header">
            <div style="font-weight: bold; font-size: 35px;">维诺服务</div>
            <div style="font-weight: bold;">我们以技术服务为核心业务，并在此基础上提供行业应用软件等一系列信息服务。</div>
        </div>
        <div class="content">
            <div class="content_m" style="background-color: #ea4c57;">
                <div class="s_img">
                    <img src="/static/img/ruanjian2.png" alt="">
                </div>
                <p>软件开发</p>
            </div>
            <div class="content_m" style="background-color: #f4aa3c">
                <div class="s_img">
                    <img src="/static/img/jiaohu2.png" alt="">
                </div>
                <p>交互体验</p>
            </div>
            <div class="content_m" style="background-color: #4894f8">
                <div class="s_img">
                    <img src="/static/img/yunwei2.png" alt="">
                </div>
                <p>运营维护</p>
            </div>
            <div class="content_m" style="background-color: #7ae55d;">
                <div class="s_img">
                    <img src="/static/img/ziyuan2.png" alt="">
                </div>
                <p>资源配置</p>
            </div>
            <div class="content_m" style="background-color: #f894f8;">
                <div class="s_img">
                    <img src="/static/img/zhiliang2.png" alt="">
                </div>
                <p>质量管理</p>
            </div>
        </div>
        <div style="height: 30px"></div>
    </div>
</template>

<script>
    export default {
        name: "Serve"
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
        background-color: #FFFFFF;
        border-radius: 50%;
        margin: 0 auto;
    }

    .content p {
        color: #FFFFFF;
        font-weight: bold;
    }

</style>
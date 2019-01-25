<template>
    <div class="case">
        <p class="tag" >案例</p>
        <div>
            <p>我们针对产品及行业性质进行个性化方案设计为您的企业创造更高市场价值</p>
        </div>
        <div class="hr"></div>
        <div class="content">
            <div class="content_img1">
                <img src="/static/img/slider1.png" alt="">
            </div>
            <div class="content_img2">
                <div class="content_flex">
                    <img src="/static/img/slider2.png" alt="">
                    <img src="/static/img/slider3.png" alt="">
                </div>
                <div class="content_flex">
                    <img src="/static/img/slider4.png" alt="">
                    <img src="/static/img/slider5.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Case"
    }
</script>

<style scoped>
    .case {
        text-align: center;
        padding-top: 50px;
        background-color: #ffffff;
        padding-bottom: 100px;
        height: 560px;
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

    .content {
        margin: 0 auto;
        width: 70%;
        display: flex;
    }

    .content_flex {
        display: flex;
    }

    .content_img1 {
        flex:1;
    }

    .content_img2 {
        flex:1;
    }

    .content_img1 img {
        width: 99%;
        margin: 0.5%;
        height: 97%;
    }

    .content_flex img {
        width: 49%;
        height: 49%;
        margin: 0.5%;
    }
</style>
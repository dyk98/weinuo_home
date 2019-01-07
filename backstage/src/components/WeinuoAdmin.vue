<template>
    <div class="body">

        <!--轮播图-->
        <div class="lunbo">
            <p>轮播图管理</p>
            <div class="hr"></div>
            <div class="lunbo_flex">
                <div class="img1">
                    <img src="/static/img/lunbo.png" alt="">
                    <p>动态轮播</p>
                </div>
                <div class="img2">
                    <img src="/static/img/lunbo.png" alt="">
                    <p>案例轮播</p>
                </div>
            </div>
            <div class="shu"></div>
        </div>

        <!--案例-->
        <div class="anli">
            <p>案例管理</p>
            <div class="anli_flex">
                <img src="/static/img/slide1.png" alt="">
                <p>服务案例</p>
            </div>
            <div class="anli_flex">
                <img src="/static/img/slide2.png" alt="">
                <p>方案案例</p>
            </div>
            <div class="anli_flex">
                <img src="/static/img/slide3.png" alt="">
                <p>行业案例</p>
            </div>

        </div>

        <!--联系我们-->
        <div class="call">
            <p>联系我们</p>
            <div class="hr"></div>
            <div class="call_flex">
                <div class="img">
                    <img src="/static/img/address.png" alt="">
                    <p>地址修改</p>
                </div>
                <div class="img">
                    <img src="/static/img/phone.png" alt="">
                    <p>联系方式修改</p>
                </div>
            </div>
            <div class="shu"></div>
        </div>
        <div style="height: 60px"></div>

    </div>
</template>

<script>
    export default {
        name: "WeinuoAdmin"
    }
</script>

<style scoped>
    .body {
        background-color: #eff5f8;
        color: #2f333d;

    }

    .lunbo {
        margin-left: 25%;
        width: 65%;
        height: 200px;
        background-color: #ffffff;
        margin-top: 70px;
        padding-top: 10px;
    }

    .hr {
        height: 1px;
        background-color: slategrey;
        width: 90%;
        margin: 0 auto;
        opacity: 0.3;
    }

    .shu {
        width: 1px;
        height: 100px;
        background-color: slategrey;
        margin: -70px auto;
        opacity: 0.3;
    }

    .lunbo_flex {
        display: flex;
        justify-content: space-around;
        margin-top: 20px;
    }

    .img1 {
        background-color: #7470e6;
        width: 70px;
        height: 70px;
        border-radius: 50%;

    }

    .img2 {
        background-color: #ef7e7a;
        width: 70px;
        height: 70px;
        border-radius: 50%;
    }

    .lunbo_flex img {
        width: 50px;
        height: 50px;
        margin-top: 10px;
    }

    .anli {
        margin-left: 25%;
        width: 65%;
        margin-top: 35px;
        padding-top: 10px;
    }

    .anli p {
        background-color: #ffffff;
        height: 60px;
        line-height: 60px;
    }

    .anli img {
        height: 60px;
        width: 90px;
    }

    .anli_flex {
        display: flex;
        background-color: #ffffff;
        margin: 10px 0;
    }

    .anli_flex p {
        margin: 0 20px;
    }

    .call {
        margin-left: 25%;
        width: 65%;
        margin-top: 60px;
        padding-top: 10px;
        height: 180px;
        background-color: #ffffff;
    }

    .img {
        display: flex;
    }

    .call_flex {
        display: flex;
        justify-content: space-around;
        margin-top: 20px;
    }

    .call_flex img {
        width: 55px;
        height: 55px;
        margin-right: 20px;
    }
</style>
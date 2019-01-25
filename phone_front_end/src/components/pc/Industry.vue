<template>
    <div style="width: 100%; background-color: #f5f5f5;">
    <div class="industry">
        <p class="tag" >行业</p>
        <div>
            <p>我们与多个行业内知名企业合作，熟悉洞察行业现状及发展是我们一直在做的事</p>
        </div>
        <div class="hr"></div>
        <div class="industry_icon">
            <router-link class="industry_icon_m" style="background-color: #1570c4;" to="/industry/Medical">
                <img src="/static/img/yiliao.png" alt="">
                <p>医疗</p>
            </router-link>

            <router-link class="industry_icon_m" style="background-color: #72a8d7;" to="/industry/Government">
                <img src="/static/img/zhengfu.png" alt="">
                <p>政府</p>
            </router-link>

            <router-link class="industry_icon_m" style="background-color: #1570c4;" to="/industry/Agriculture">
                <img src="/static/img/nongye.png" alt="">
                <p>农业</p>
            </router-link>
        </div>
        <div class="industry_icon">
            <router-link class="industry_icon_m" style="background-color: #72a8d7;" to="/industry/Culture">
                <img src="/static/img/wenhua.png" alt="">
                <p>文化</p>
            </router-link>

            <router-link class="industry_icon_m" style="background-color: #1570c4;" to="/industry/Cosmetology">
                <img src="/static/img/meirong.png" alt="">
                <p>美容</p>
            </router-link>

            <router-link class="industry_icon_m" style="background-color: #72a8d7;" to="/industry/Tourism">
                <img src="/static/img/lvyou.png" alt="">
                <p>旅游</p>
            </router-link>
        </div>
        <div class="industry_icon">
            <router-link class="industry_icon_m" style="background-color: #1570c4;" to="/industry/RealEstate">
                <img src="/static/img/fangchan.png" alt="">
                <p>地产</p>
            </router-link>

            <router-link class="industry_icon_m" style="background-color: #72a8d7;" to="/industry/Environment">
                <img src="/static/img/huanbao.png" alt="">
                <p>环保</p>
            </router-link>

            <router-link class="industry_icon_m" style="background-color: #1570c4;" to="/industry/Furniture">
                <img src="/static/img/jiaju.png" alt="">
                <p>家具</p>
            </router-link>
        </div>
    </div>
    </div>
</template>

<script>
    export default {
        name: "Industry"
    }
</script>

<style scoped>
    .industry {
        text-align: center;
        padding-top: 45px;
        width: 70%;
        margin: 0 auto;
        padding-bottom: 100px;
        height: 800px;
    }

    .industry_icon {
        display: flex;
        text-align: center;
        height: 200px;
        line-height: 200px;
    }

    .industry_icon img {
        width: 100px;
        height: 100px;
        margin-top: 50px;
    }

    .industry_icon p {
        font-size: 28px;
        margin-top: 0;
        color: #ffffff;
        font-weight: bold;
    }

    .industry_icon_m {
        display: flex;
        flex: 1;
        margin: 1.5px;
        justify-content: space-around;
        text-decoration: none;
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
</style>
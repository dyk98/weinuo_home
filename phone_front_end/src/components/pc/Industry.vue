<template>
    <div class="industry">
        <router-link class="tag" to="/industry">行业</router-link>
        <div class="hr"></div>
        <div class="industry_icon">
            <router-link class="industry_icon_m" style=" background-color: #f894f8;" to="/industry/Medical">
                <img src="/static/img/yiliao.png" alt="">
                <p>医疗</p>
            </router-link>

            <router-link class="industry_icon_m" style="background-color: #4894f8;" to="/industry/Government">
                <img src="/static/img/zhengfu.png" alt="">
                <p>政府</p>
            </router-link>

            <router-link class="industry_icon_m" style="background-color: #dad656;" to="/industry/Agriculture">
                <img src="/static/img/nongye.png" alt="">
                <p>农业</p>
            </router-link>
        </div>
        <div class="industry_icon">
            <router-link class="industry_icon_m" style="background-color: #f4aa3c;" to="/industry/Culture">
                <img src="/static/img/wenhua.png" alt="">
                <p>文化</p>
            </router-link>

            <router-link class="industry_icon_m" style="background-color: #ea4c57;" to="/industry/Cosmetology">
                <img src="/static/img/meirong.png" alt="">
                <p>美容</p>
            </router-link>

            <router-link class="industry_icon_m" style="background-color: #5941d0;" to="/industry/Tourism">
                <img src="/static/img/lvyou.png" alt="">
                <p>旅游</p>
            </router-link>
        </div>
        <div class="industry_icon">
            <router-link class="industry_icon_m" style="background-color: #985bd2;" to="/industry/RealEstate">
                <img src="/static/img/fangchan.png" alt="">
                <p>地产</p>
            </router-link>

            <router-link class="industry_icon_m" style="background-color: #74d2a2;" to="/industry/Environment">
                <img src="/static/img/huanbao.png" alt="">
                <p>环保</p>
            </router-link>

            <router-link class="industry_icon_m" style="background-color: #d29e7d;" to="/industry/Furniture">
                <img src="/static/img/jiaju.png" alt="">
                <p>家具</p>
            </router-link>
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
        background-color: #ffffff;
        width: 70%;
        margin: 0 auto;
        padding-bottom: 100px;
    }

    .industry_icon {
        display: flex;
        text-align: center;
        height: 100px;
        line-height: 100px;
    }

    .industry_icon img {
        width: 55px;
        height: 55px;
        margin-top: 20px;
    }

    .industry_icon p {
        font-size: 18px;
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
        margin: 8px auto;
    }

    .tag {
        color: #2e3537;
        font-size: 25px;
        text-decoration: none;
    }
</style>
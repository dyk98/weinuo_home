<template>
    <!--行业-->
    <div class="industry_area" style="height: auto">
        <div class="section_title">
            <h3>涉及行业</h3>
        </div>
        <div class="container">
        <ul style="text-align: center">

            <div class="pagelist"  style="background-color: #dad656;" >
                <div class="section">
                    <router-link class="list" to="/industry/Agriculture">
                        <img src="/static/img/nongye.png" alt="">
                        <p>农业</p>
                    </router-link>
                </div>
            </div>

            <div class="pagelist"  style="background-color: #4894f8;" >
                <div class="section">
                    <router-link class="list"  to="/industry/Government">
                        <img src="/static/img/zhengfu.png" alt="">
                        <p>政府</p>
                    </router-link>
                </div>
            </div>

            <div class="pagelist"  style="background-color: #ea4c57;" >
                <div class="section">
                    <router-link class="list"  to="/industry/Cosmetology">
                        <img src="/static/img/meirong.png" alt="">
                        <p>美容</p>
                    </router-link>
                </div>
            </div>

            <div class="pagelist"  style="background-color: #f4aa3c;" >
                <div class="section">
                    <router-link class="list"  to="/industry/Culture">
                        <img src="/static/img/wenhua.png" alt="">
                        <p>文化</p>
                    </router-link>
                </div>
            </div>


            <div class="pagelist" style=" background-color: #f894f8;" >
                <div class="section">
                    <router-link class="list"to="/industry/Medical">
                        <img src="/static/img/yiliao.png" alt="">
                        <p>医疗</p>
                    </router-link>
                </div>
            </div>

            <div class="pagelist" style="background-color: #74d2a2;" >
                <div class="section">
                    <router-link class="list"  to="/industry/Environment">
                        <img src="/static/img/huanbao.png" alt="">
                        <p>环保</p>
                    </router-link>
                </div>
            </div>

            <div class="pagelist" style="background-color: #985bd2;" >
                <div class="section">
                    <router-link class="list"  to="/industry/RealEstate">
                        <img src="/static/img/fangchan.png" alt="">
                        <p>地产</p>
                    </router-link>
                </div>
            </div>

            <div class="pagelist" style="background-color: #5941d0;" >
                <div class="section">
                    <router-link class="list"  to="/industry/Tourism">
                        <img src="/static/img/lvyou.png" alt="">
                        <p>旅游</p>
                    </router-link>
                </div>
            </div>

            <div class="pagelist" style="background-color: #d29e7d;" >
                <div class="section">
                    <router-link class="list"  to="/industry/Furniture">
                        <img src="/static/img/jiaju.png" alt="">
                        <p>家具</p>
                    </router-link>
                </div>
            </div>
        </ul>
        </div>
    </div>

</template>

<script>
    export default {
        name: "Industry"
    }
</script>

<style scoped>
    .industry_area {
        height: 318px;
        background-color: whitesmoke;
    }
    .industry_area h3 {
        font-size: 2em;
        height: 0.5em;
        margin: 1em auto;
        top: 1em;
        position: relative;
    }
    ul {
        margin: 0;
        padding: 0;
    }
    ol, ul {
        margin-top: 0;
        margin-bottom: 1em;
    }
    .myworks-list li {
            height: 5.8em;
            overflow: hidden;
            margin: 0.1em;
            position: relative;
        }
    .section_title {
        height: 3em;
        text-align: left;
        position: relative;
        top: -3em;
    }
    .container img {
        width: 4em;
    }
    .pagelist {
        width: 90%;
        margin: 0.3em auto;
        padding: 1em 0;
    }
    .container p {
        color: #FFFFFF;
        font-weight: bold;
    }
    .list {
        text-decoration: none;
    }
</style>
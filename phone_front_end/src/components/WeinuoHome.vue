<template>
    <div class="all">
        <!--服务-->
        <div class="service">
            <router-link class="tag" to="/service">服务</router-link>
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

        <!--方案-->
        <div class="programme">
            <router-link class="tag" to="/programme">方案</router-link>
            <div class="hr"></div>
            <div class="programme_icon">
                <div style="background-color: #cc8846; flex: 1; margin: 1.5px">
                    <img src="/static/img/qiye.png" alt="">
                    <p>企业应用</p>
                </div>
                <div style="background-color: #dad656; flex: 1; margin: 1.5px">
                    <img src="/static/img/yidong.png" alt="">
                    <p>移动应用</p>
                </div>
                <div style="background-color: #76d251; flex: 1; margin: 1.5px">
                    <img src="/static/img/yunyin.png" alt="">
                    <p>运营平台</p>
                </div>
            </div>
            <div class="programme_icon">
                <div style="background-color: #5941d0; flex: 1; margin: 1.5px">
                    <img src="/static/img/shangwu.png" alt="">
                    <p>电子商务</p>
                </div>
                <div style="background-color: #d2433f; flex: 1; margin: 1.5px">
                    <img src="/static/img/kehu.png" alt="">
                    <p>客户关系</p>
                </div>
                <div style="background-color: #437cd2; flex: 1; margin: 1.5px">
                    <img src="/static/img/shengchan.png" alt="">
                    <p>生产管理</p>
                </div>
            </div>
        </div>

        <!--行业-->
        <div class="industry">
            <router-link class="tag" to="/industry">行业</router-link>
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

        <!--案例-->
        <div class="case">
            <router-link class="tag" to="/case">案例</router-link>
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

        <!--关于-->
        <div class="about">
            <router-link class="tag" to="/about">关于</router-link>
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


    </div>
</template>

<script>
    export default {
        name: 'WeinuoHome',
        data() {
            return {}
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .all {
        text-align: center;
    }

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

    .programme {
        text-align: center;
        height: 330px;
        padding-top: 45px;
        background-color: #f5f5f5;
    }

    .industry {
        text-align: center;
        height: 200px;
        padding-top: 45px;
        background-color: #ffffff;
    }

    .case {
        text-align: center;
        height: 200px;
        padding-top: 45px;
        background-color: #f5f5f5;
    }

    .about {
        text-align: center;
        height: 200px;
        padding-top: 45px;
        background-color: #ffffff;
    }

    .programme_icon {
        display: flex;
        padding: 0 15px;
    }

    .programme_icon img {
        width: 55px;
        height: 55px;
        margin-top: 10px;
    }

    .programme_icon p {
        font-size: 16px;
        margin-top: 0;
        color: #ffffff;
    }
</style>

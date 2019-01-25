<template>
    <div class="all">
        <!--动态-->
        <div style="width: 100%; margin:0 auto">
            <div class="swiper-container0">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="slider in sliders">
                        <img :src="slider.img" alt="" style="width: 100%; height: 250px">
                    </div>
                    <div class="swiper-pagination" style="margin-top: 230px;display: flex;justify-content: center;width: 100%;"></div>
                </div>
            </div>
        </div>
        <!--服务-->
        <div class="service">
            <div class="tag">服务</div>
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

        <!--行业-->
        <div class="industry">
            <div class="tag">行业</div>
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

        <!--案例-->
        <div class="case">
            <router-link class="tag" to="/case">案例</router-link>
            <div class="hr"></div>

            <div class="swiper-container">
                <div class="swiper-wrapper" style="width: 100%">
                    <div class="swiper-slide" v-for="slide in slides">
                        <img :src="slide.img" alt="" style="width: 100%; height: 250px">
                    </div>
                </div>
            </div>
        </div>

        <!--关于-->
        <div class="about">
            <router-link class="tag" to="/about">关于</router-link>
            <div class="hr"></div>
            <div class="about_m">
                <div style="flex: 1;margin: 2px;" v-for="item in we1">
                    <router-link class="about_link" :to="item.path">
                        <img style="width:100%" :src="item.img" alt="">
                    </router-link>
                </div>
            </div>
            <div class="about_m">
                <div style="flex: 1;margin: 2px;" v-for="item in we2">
                    <router-link class="about_link" :to="item.path">
                        <img style="width:100%" :src="item.img" alt="">
                    </router-link>
                </div>
            </div>
            <div class="about_m">
                <div style="flex: 1;margin: 2px;" v-for="item in we3">
                    <router-link class="about_link" :to="item.path">
                        <img style="width:100%" :src="item.img" alt="">
                    </router-link>
                </div>
            </div>

        </div>


    </div>
</template>

<script>
    import Swiper from 'swiper'
    import 'swiper/dist/css/swiper.min.css';

    export default {
        name: 'WeinuoHome',
        data() {
            return {
                sliders: [
                    {
                        img: '/static/img/slide3.png'
                    }, {
                        img: '/static/img/slide2.png'
                    }, {
                        img: '/static/img/slide1.png'
                    },
                ],
                slides: [
                    {
                        img: '/static/img/slider1.png'
                    }, {
                        img: '/static/img/slider2.png'
                    }, {
                        img: '/static/img/slider3.png'
                    }, {
                        img: '/static/img/slider4.png'
                    }, {
                        img: '/static/img/slider5.png'
                    }
                ],
                we1: [{
                    img: '/static/img/introduce.png',
                    path: '/about/Introduction'
                }, {
                    img: '/static/img/business.png',
                    path: '/about/Business'
                }],
                we2: [{
                    img: '/static/img/idea.png',
                    path: '/about/Idea'
                }, {
                    img: '/static/img/model.png',
                    path: '/about/ManagementModel'
                }],
                we3: [{
                    img: '/static/img/advantage.png',
                    path: '/about/Advantage'
                }, {
                    img: '/static/img/prize.png',
                    path: '/about/Prize'
                }],
            }
        },
        mounted() {
            var mySwiper0 = new Swiper('.swiper-container0', {
                loop: true,
                autoplay: true,
                effect: 'fade',
                pagination: {
                    el: '.swiper-pagination',
                },

            })

            var mySwiper = new Swiper('.swiper-container', {
                loop: true,
                autoplay: true,
                effect: 'cube',

            });

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    .all {
        text-align: center;
        overflow: hidden;
    }

    .swiper-container0 {
        height: 250px;
    }

    .swiper-pagination-bullet {
        margin: 0 5px;
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
        width: 50px;
        height: 50px;
        margin-top: 10px;
    }

    .service_icon p {
        font-size: 12px;
        margin-top: 10px;
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
        font-weight: bold;
    }

    .industry {
        text-align: center;
        height: 340px;
        padding-top: 45px;
        background-color: #f5f5f5;
    }

    .industry_icon {
        display: flex;
        padding: 0 15px;
        height: 80px;
        line-height: 80px;
    }

    .industry_icon img {
        width: 55px;
        height: 55px;
        margin-top: 10px;
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

    .case {
        text-align: center;
        height: 330px;
        padding-top: 45px;
        background-color: #ffffff;
    }

    .swiper-container {
        height: 200px;
        padding: 0;
    }

    .about {
        text-align: center;
        height: 460px;
        padding-top: 45px;
        background-color: #f5f5f5;
    }

    .about_m {
        display: flex;
        padding: 0 15px;
    }

    .about_link {
        color: #FFFFFF;
        text-decoration: none;
        font-weight: bold;
    }

</style>

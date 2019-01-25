<template>
    <div class="about">
        <div style="width: 70%;margin: 0 auto;text-align: center">
        <p class="tag">关 于</p>
            <div>
                <p>我们以技术服务为核心业务，并在此基础上提供行业应用软件等一系列信息服务</p>
            </div>
        <div class="hr"></div>
        <div class="about_m">
            <div style="flex: 1;" v-for="item in we1">
                <div class="about_link" >
                    <img style="width:98%;height: 98%" :src="item.img" alt="">
                </div>
            </div>
        </div>
        <div class="about_m">
            <div style="flex: 1;" v-for="item in we2">
                <div class="about_link" >
                    <img style="width:98%;height: 98%" :src="item.img" alt="">
                </div>
            </div>
        </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "About",
        data () {
            return{
                we1: [{
                    img: '/static/img/introduce.png',
                    path: ''
                }, {
                    img: '/static/img/business.png',
                    path: ''
                }, {
                    img: '/static/img/advantage.png',
                    path: ''
                },
                ],
                we2: [{
                    img: '/static/img/idea.png',
                    path: ''
                }, {
                    img: '/static/img/model.png',
                    path: ''
                }, {
                    img: '/static/img/prize.png',
                    path: ''
                }
                ],
            }
        }
    }
</script>

<style scoped>
    .about {
        width: 100%;
        margin: 0 auto;
        padding-bottom: 100px;
        padding-top: 45px;
        text-align: center;
        background-color: #f5f5f5;
        height: 650px;
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

    .about_m {
        display: flex;
    }

    .about_link {
        color: #FFFFFF;
        text-decoration: none;
        font-weight: bold;
    }

</style>
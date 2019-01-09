<template>
    <div class="about">
        <router-link class="tag" to="/about">关 于</router-link>
        <div class="hr"></div>
        <div class="about_m">
            <div style="flex: 1;margin: 3px;" v-for="item in we1">
                <router-link class="about_link" :to="item.path">
                    <img style="width:80%;height: 80%" :src="item.img" alt="">
                </router-link>
            </div>
        </div>
        <div class="about_m">
            <div style="flex: 1;margin: 3px;" v-for="item in we2">
                <router-link class="about_link" :to="item.path">
                    <img style="width:80%;height: 80%" :src="item.img" alt="">
                </router-link>
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
                    path: '/about/Introduction'
                }, {
                    img: '/static/img/business.png',
                    path: '/about/Business'
                }, {
                    img: '/static/img/advantage.png',
                    path: '/about/Advantage'
                },
                ],
                we2: [{
                    img: '/static/img/idea.png',
                    path: '/about/Idea'
                }, {
                    img: '/static/img/model.png',
                    path: '/about/ManagementModel'
                }, {
                    img: '/static/img/prize.png',
                    path: '/about/Prize'
                }
                ],
            }
        }
    }
</script>

<style scoped>
    .about {
        width: 65%;
        margin: 0 auto;
        height: 500px;
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
    .about {
        text-align: center;
        height: 500px;
        padding-top: 45px;
        background-color: #ffffff;
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
<template>
    <div id="app">

        <div class="head" >
            <div class="top_bar">
                <h3>维诺智创后台管理系统</h3>
            </div>
            <div class="left_bar">
                <el-collapse-transition>
                    <div v-show="show3">
                        <div style="color:#3c3f41; margin-bottom: 0.1em; font-weight: bold;text-align: left;font-size:18px;padding-left: 15px; " @click="home">
                            主页
                        </div>
                        <el-collapse v-model="activeNames" accordion>
                            <el-collapse-item title="轮播图管理" name="1" class="section">
                                <div class="section_list">
                                    <router-link class="link" to="/"><p>动态轮播</p></router-link>
                                </div>
                                <div class="section_list">
                                    <router-link class="link" to="/"><p>案例轮播</p></router-link>
                                </div>

                            </el-collapse-item>
                            <el-collapse-item title="案例管理" name="2" class="section">
                                <div class="section_list">
                                    <router-link class="link" to="/"><p>服务案例</p></router-link>
                                </div>
                                <div class="section_list">
                                    <router-link class="link" to="/"><p>方案案例</p></router-link>
                                </div>
                                <div class="section_list">
                                    <router-link class="link" to="/"><p>行业案例</p></router-link>
                                </div>

                            </el-collapse-item>
                            <el-collapse-item title="联系我们" name="3" class="section">
                                <div class="section_list">
                                    <router-link class="link" to="/"><p>地址修改</p></router-link>
                                </div>
                                <div class="section_list">
                                    <router-link class="link" to="/"><p>联系方式修改</p></router-link>
                                </div>

                            </el-collapse-item>
                        </el-collapse>

                    </div>
                </el-collapse-transition>

            </div>

        </div>

        <div style="height: 30px;"></div>
        <router-view/>
        <div class="foot_bar">
            <p>天津维诺智创大数据公司</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {
                activeNames: '0',
                show3: true,
            };
        },
        methods: {
            home() {
                this.$router.push({path: '/'});
            },
        }

    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        margin: 0;
        padding: 0;
        background-color: #eff5f8;
    }

    .head {
        position: fixed;
        width: 100%;
        top: 0;
        height: 100%;
        z-index: 999;
    }

    .foot_bar p {
        margin-left: 20%;
        text-align: left;
    }

    .foot_bar {
        margin: 0;
        width: 100%;
        height: 45px;
        background-color: #2f333d;
        color: white;
        z-index: 999;
        line-height: 45px;
    }

    .top_bar {
        margin: 0;
        width: auto;
        height: 45px;
        background-color: #2f333d;
    }

    .top_bar h3 {
        margin: 0;
        color: #ffffff;
        line-height: 45px;
    }

    .left_bar {
        height: 100%;
        width: 15%;
        background-color: #ffffff;
        float: top;
        border:1px solid #d5d9dd;

    }

    .el-collapse-item__header {
        color: #3c3f41;
        font-size: 18px;
        background-color: #ffffff;
        padding-left: 15px;
    }

    .el-collapse-item__content {
        padding-bottom: 2em;
        color: #3c3f41;
    }

    .el-collapse-item__wrap {
        background-color:  #eff5f8;
        border: none;
    }
    .el-collapse-item__header :hover {
        background-color: #eff5f8;
    }
    .section_list p:hover {
        background-color: #7470e6;
    }
    .section_list p:active {
        background-color: #7470e6;
    }
    .link {
        text-decoration: none;
        font-size: 1.5em;
        color: black;
    }
    .link :hover {
        color: white;
    }
</style>

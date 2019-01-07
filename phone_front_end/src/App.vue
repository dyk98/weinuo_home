<template>
    <div id="app">
        <div class="header">
            <div class="header_more">
                <img src="/static/img/more.png" alt="" @click="show3 = !show3">
            </div>
            <div class="header_name">
                <p>天津维诺智创</p>
                <p>Technology</p>
            </div>
        </div>
        <div style="height: 70px; background-color: #ffffff"></div>
        <el-collapse-transition>
            <div class="navigation_bar" v-show="show3">
                <div style="font-size: 18px; color: #FFFFFF; margin-bottom: 5px; font-weight: bold" @click="home">主页
                </div>
                <el-collapse v-model="activeName" accordion>
                    <el-collapse-item title="服务" name="0">
                        <div class="navigation_bar_p">软件开发</div>
                        <div class="navigation_bar_p">交互体验</div>
                        <div class="navigation_bar_p">运营维护</div>
                        <div class="navigation_bar_p">资源配置</div>
                        <div class="navigation_bar_p">质量管理</div>
                    </el-collapse-item>
                    <el-collapse-item class="navigation_bar_p" title="方案" name="2">
                        <div class="navigation_bar_p">企业应用</div>
                        <div class="navigation_bar_p">移动应用</div>
                        <div class="navigation_bar_p">运营平台</div>
                        <div class="navigation_bar_p">电子商务</div>
                        <div class="navigation_bar_p">客户关系</div>
                        <div class="navigation_bar_p">生产管理</div>
                    </el-collapse-item>
                    <el-collapse-item class="navigation_bar_p" title="行业" name="3">
                        <div class="navigation_bar_p">医疗</div>
                        <div class="navigation_bar_p">政府</div>
                        <div class="navigation_bar_p">农业</div>
                        <div class="navigation_bar_p">文化</div>
                        <div class="navigation_bar_p">美容</div>
                        <div class="navigation_bar_p">旅游</div>
                        <div class="navigation_bar_p">地产</div>
                        <div class="navigation_bar_p">环保</div>
                        <div class="navigation_bar_p">家具</div>
                    </el-collapse-item>
                    <el-collapse-item class="navigation_bar_p" title="案例" name="4">
                        <div class="navigation_bar_p">案例一</div>
                        <div class="navigation_bar_p">案例二</div>
                    </el-collapse-item>
                    <el-collapse-item class="navigation_bar_p" title="关于" name="5">
                        <div class="navigation_bar_p">公司历史</div>
                        <div class="navigation_bar_p">核心业务</div>
                        <div class="navigation_bar_p">公司理念</div>
                        <div class="navigation_bar_p">经营模式</div>
                        <div class="navigation_bar_p">团队优势</div>
                        <div class="navigation_bar_p">奖项证书</div>

                    </el-collapse-item>

                </el-collapse>

                <div>
                    <p>地址：天津市西青区XXXXX</p>
                    <p>联系方式：XXXXX</p>
                </div>
            </div>
        </el-collapse-transition>
        <router-view/>

        <div class="footer">
            <p style="text-align: center;">导航栏</p>
            <hr>
            <div class="navigation">
                <router-link class="foo" to="/service"><P>服务</P></router-link>
                <router-link class="foo" to="/programme"><p>方案</p></router-link>
                <router-link class="foo" to="/industry"><p>行业</p></router-link>
                <router-link class="foo" to="/case"><p>案例</p></router-link>
                <router-link class="foo" to="/about"><p>关于</p></router-link>
            </div>
            <hr>
            <div class="contact">
                <p>联系方式：xxxxxxx</p>
                <p>地址：天津西青区XXXXX</p>
            </div>
            <hr>
            <div>
                <p class="small">天津维诺智创大数据科技有限公司</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {
                activeName: '1',
                show3: false
            };
        },
        methods: {
            home() {
                this.$router.push({path: '/'});
            }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        /*text-align: center;*/
    }

    .header {
        height: 70px;
        background: #5e5e5e;
        display: flex;
        top: 0;
        position: fixed;
        width: 100%;
        z-index: 999;
    }

    .header_name {
        margin: 15px;
        flex: 6;
        text-align: right;
    }

    .header_name p {
        margin: 0;
        color: #ffffff;
    }

    .header_more {
        margin: 15px;
        flex: 1;
    }

    .header_more img {
        margin-top: 5px;
        width: 30px;
        height: 30px;
    }

    .navigation_bar {
        position: fixed;
        z-index: 999;
        width: 40%;
        padding: 5px 15px;
        background-color: #5e5e5e;
        margin-top: -11px;
        height: 100%;
    }

    .navigation_bar_p {
        color: #FFFFFF;
        font-size: 16px;
    }

    .footer {
        background: #5e5e5e;
        color: #ffffff;
        padding-top: 20px;
        padding-bottom: 5px;
    }

    .footer hr {
        width: 90%;
        opacity: 0.5;
    }

    .navigation {
        display: flex;
        justify-content: space-around;
    }

    .navigation p {
        text-align: center;
    }

    .contact {
        margin-left: 15px;
    }

    .small {
        font-size: 10px;
        margin-left: 15px;
        color: #ffffff;
        opacity: 0.5;
    }

    .foo {
        color: #FFFFFF;
        text-decoration: none;
    }

    .el-collapse-item__header {
        color: #ffffff;
        font-size: 18px;
        background-color: #5e5e5e;
    }

    .el-collapse-item__content {
        padding-bottom: 20px;
    }

    .el-collapse-item__wrap {
        background-color: #5e5e5e;
        border: none;
        font-size: 16px;
    }
</style>

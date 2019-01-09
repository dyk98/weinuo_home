<template>
    <div id="app">
        <div class="phone" v-show="phone">
            <div class="header">
                <div class="header_more">
                    <img src="/static/img/more.png" alt="" @click="show3 = !show3">
                </div>
                <div class="header_name">
                    <div style="flex: 2">
                        <img style="height: 50px;margin-left:65%;margin-top: -5px;" src="/static/img/logo.png" alt="">
                    </div>
                    <div style="flex: 1.5">
                        <p>天津维诺智创</p>
                        <p>Technology</p>
                    </div>
                </div>
            </div>
            <div style="height: 70px; background-color: #ffffff"></div>
            <el-collapse-transition>
                <div class="navigation_bar" v-show="show3">
                    <div style="flex: 2; padding: 5px 15px; background-color: #5e5e5e;">
                        <div style="font-size: 18px; color: #FFFFFF; margin-bottom: 5px; font-weight: bold"
                             @click="home">主页
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

                        <div style="color: #FFFFFF;">
                            <p>地址：天津西青区才智道35号 海澜德产业园区</p>
                            <p>联系方式：022-23983126</p>
                        </div>
                    </div>
                    <div style="flex: 3;opacity: 0" @click="off">我是打酱油的,xixi你看不见我</div>
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
                    <p>联系方式：022-23983126</p>
                    <p>地址：天津西青区才智道35号 海澜德产业园区</p>
                </div>
                <hr>
                <div>
                    <p class="small">天津维诺智创大数据科技有限公司</p>
                </div>
            </div>
        </div>

        <div class="pc" v-show="pc">
            <div class="MyHeader">
                <p class="companyName">天津维诺智通</p>
                <div class="headerTitle">
                    <div class="headerSelect item1">
                        <router-link to="PcService" class="headerSelectP ">服务</router-link>
                        <div class="mune q1">
                            <div class="title">
                                <h3 class="muneTitle">服务</h3>
                            </div>
                            <div class="mylist">
                                <ul class="muneList">
                                    <li class="listItem"><router-link class="Item" to="">高科技</router-link></li>
                                    <li class="listItem"><router-link class="Item" to="">银行</router-link></li>
                                    <li class="listItem"><router-link class="Item" to="">保险</router-link></li>
                                    <li class="listItem"><router-link class="Item" to="">证券</router-link></li>
                                    <li class="listItem"><router-link class="Item" to="">金融其他</router-link></li>
                                    <li class="listItem"><router-link class="Item" to="">制造</router-link></li>
                                </ul>
                            </div>

                            <div class="mylist">
                                <ul class="muneList">
                                    <li class="listItem"><router-link class="Item" to="">电信</router-link></li>
                                    <li class="listItem"><router-link class="Item" to="">互联网</router-link></li>
                                    <li class="listItem"><router-link class="Item" to="">汽车</router-link></li>
                                    <li class="listItem"><router-link class="Item" to="">医疗和健康</router-link></li>
                                    <li class="listItem"><router-link class="Item" to="">旅游交通</router-link></li>
                                    <li class="listItem"><router-link class="Item" to="">政府和教育</router-link></li>
                                </ul>
                            </div>

                            <div class="mylist">
                                <ul class="muneList">
                                    <li class="listItem"><router-link class="Item" to="">媒体娱乐</router-link></li>
                                    <li class="listItem"><router-link class="Item" to="">零售</router-link></li>
                                    <li class="listItem"><router-link class="Item" to="">人力资源管理</router-link></li>
                                    <li class="listItem"><router-link class="Item" to="">AI人工智能</router-link></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="headerSelect item1">
                        <router-link to="" class="headerSelectP">方案</router-link>
                        <div class="mune q1">
                            <div class="title">
                                <h3 class="muneTitle">方案</h3>
                            </div>
                            <div class="mylist">
                                <ul class="muneList">
                                    <li class="listItem"><router-link class="Item" to="">应用开发+运维</router-link></li>
                                    <li class="listItem"><router-link class="Item" to="">内嵌式技术+IoT</router-link></li>
                                    <li class="listItem"><router-link class="Item" to="">数字化产品+平台研发</router-link></li>
                                    <li class="listItem"><router-link class="Item" to="">DevOps实施</router-link></li>
                                    <li class="listItem"><router-link class="Item" to="">CRM</router-link></li>
                                    <li class="listItem"><router-link class="Item" to="">ERP</router-link></li>
                                </ul>
                            </div>

                            <div class="mylist">
                                <ul class="muneList">
                                    <li class="listItem"><router-link class="Item" to="">Marketing Cloud</router-link></li>
                                    <li class="listItem"><router-link class="Item" to="">测试服务</router-link></li>
                                    <li class="listItem"><router-link class="Item" to="">大数据平台</router-link></li>
                                    <li class="listItem"><router-link class="Item" to="">产品化解决方案</router-link></li>
                                    <li class="listItem"><router-link class="Item" to="">HCM</router-link></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="headerSelect item1">
                        <router-link to="" class="headerSelectP">行业</router-link>
                        <div class="mune q1">
                            <div class="title">
                                <h3 class="muneTitle">行业</h3>
                            </div>
                            <div class="mylist">
                                <ul class="muneList">
                                    <li class="listItem"><router-link class="Item" to="">用户交互设计</router-link></li>
                                    <li class="listItem"><router-link class="Item" to="">内容管理解决方案</router-link></li>
                                    <li class="listItem"><router-link class="Item" to="">线上营销</router-link></li>
                                    <li class="listItem"><router-link class="Item" to="">全球化及本地化服务</router-link></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="headerSelect item1">
                        <router-link to="" class="headerSelectP">案例</router-link>
                        <div class="mune q1">
                            <div class="title">
                                <h3 class="muneTitle">案例</h3>
                            </div>
                            <div class="mylist">
                                <ul class="muneList">
                                    <li class="listItem"><router-link class="Item" to="">数字化转型</router-link></li>
                                    <li class="listItem"><router-link class="Item" to="">信息服务生态建设</router-link></li>
                                    <li class="listItem"><router-link class="Item" to="">其他咨询服务</router-link></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="headerSelect item1">
                        <router-link to="" class="headerSelectP">关于</router-link>
                        <div class="mune q1">
                            <div class="title">
                                <h3 class="muneTitle">关于</h3>
                            </div>
                            <div class="mylist">
                                <ul class="muneList">
                                    <li class="listItem"><router-link class="Item" to="">大数据分析</router-link></li>
                                    <li class="listItem"><router-link class="Item" to="">商业智能</router-link></li>
                                    <li class="listItem"><router-link class="Item" to="">云基础设施管理</router-link></li>
                                    <li class="listItem"><router-link class="Item" to="">业务流程外包（BPO）</router-link></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

                <el-carousel height="300px">
                    <el-carousel-item v-for="item in 4" :key="item">
                        <h3>{{ item }}</h3>
                    </el-carousel-item>
                </el-carousel>

            </div>

            <router-view/>

            <div class="footer">
                <div class="footer_top">
                    <b></b>
                </div>
                <div class="footer_mid">
                    <div class="footer_one">
                        <p class="footer_heading">探索</p>
                        <div class="footer_menu">
                            <ul class="menu">
                                <li class="menu-item">
                                    <router-link to="CompanyInFo" id="click">我们的领导团队</router-link>
                                </li>
                                <li class="menu-item">
                                    <router-link to="CompanyInFo" id="click">新闻</router-link>
                                </li>
                                <li class="menu-item">
                                    <router-link to="CompanyInFo" id="click">职业机会</router-link>
                                </li>
                                <li class="menu-item">
                                    <router-link to="CompanyInFo" id="click">投资者</router-link>
                                </li>
                                <li class="menu-item">
                                    <router-link to="CompanyInFo" id="click">商业行为和道德准则</router-link>
                                </li>
                                <li class="menu-item">
                                    <router-link to="CompanyInFo" id="click">供应商商业行为与道德守则</router-link>
                                </li>
                                <li class="menu-item">
                                    <router-link to="CompanyInFo" id="click">文思海辉（Pactera）个人信息保护方针 | 文思海辉</router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="footer_two">
                        <p class="footer_heading">全球办公室</p>
                        <div class="footer_menu">
                            <ul class="menu">
                                <li class="menu-item">
                                    <router-link to="CompanyInFo" id="click">大中华地区</router-link>
                                </li>
                                <li class="menu-item">
                                    <router-link to="CompanyInFo" id="click">亚太地区</router-link>
                                </li>
                                <li class="menu-item">
                                    <router-link to="CompanyInFo" id="click">美洲</router-link>
                                </li>
                                <li class="menu-item">
                                    <router-link to="CompanyInFo" id="click">欧洲/中东/非洲</router-link>
                                </li>
                                <li class="menu-item">
                                    <router-link to="CompanyInFo" id="click">查看所有</router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="footer_three">
                        <p class="footer_heading">友情链接</p>
                        <div class="footer_menu">
                            <ul class="menu">
                                <li class="menu-item">
                                    <router-link to="CompanyInFo" id="click">文小包</router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="footer_bot">
                    <p class="end-head">© 2019 天津维诺智通大数据科技有限公司 </p>
                    <div>
                        <ul class="footer_end">
                            <li class="end-item">
                                <router-link to="CompanyInFo" id="click">使用条款</router-link>
                            </li>
                            <li class="end-item">
                                <router-link to="CompanyInFo" id="click">隐私政策</router-link>
                            </li>
                            <li class="end-item">
                                <router-link to="CompanyInFo" id="click">Cookies政策</router-link>
                            </li>
                            <li class="end-item">
                                <router-link to="CompanyInFo" id="click">法律声明</router-link>
                            </li>
                            <li class="end-item5">
                                <router-link to="CompanyInFo" id="click">网站地图</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
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
                show3: false,
                phone: false,
                pc: false
            };
        },
        methods: {
            home() {
                this.$router.push({path: '/'});
            },
            off() {
                this.show3 = false
            }
        },

        created(){
            if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
                this.$router.push({path:'/phone'})
                this.phone = true
            } else {
                this.$router.push({path:'/pc'})
                this.pc = true
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
        /*text-align: right;*/
        display: flex;
    }

    .header_name p {
        margin: 0;
        color: #ffffff;
        text-align: right;
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
        width: 100%;
        margin-top: -11px;
        height: 100%;
        display: flex;
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


    /*pc*/

    .headerSelectP {
        text-decoration: none;
        color: #2c3e50;
        font-weight: bold;
        font-size: 18px;
    }

    .headerSelectP:hover::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0;
        height: 0;
        transform: translate(-50%,20px) rotate(-45deg);
        border: 5.5px solid #ce1b2e;
        border-bottom-color: transparent;
        border-left-color: transparent;
        transition: transform .2s ease;
    }


    .headerSelectP:hover {
        color: #ce1b2e;
    }

    .headerTitle:hover {
        border-bottom: 1.5px #ce1b2e solid;
    }

    .headerTitle {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        line-height: 50px;
        border-bottom: 1.5px white solid;
    }

    .headerSelect {
        display: inline-block;
        position: relative;
    }

    .MyHeader {
        padding: 0 50px;
    }

    .companyName {
        color: #065cb2;
        font-weight: bold;
        letter-spacing: 5px;
        font-size: 22px;
        margin-bottom: 0;
    }

    .listItem{
        list-style: none;
        margin-top: -14px;
    }

    .Item{
        text-decoration: none;
        color: #193c74;
        font-size: 13px;
        font-weight: bold;
        border-left: 3px solid #e1e3e6;
    }
    .Item:hover{
        color: #bd3135;
    }


    .title{
        flex-grow: 0.5;
    }

    .mylist{
        flex-grow: 3;
        margin-left:10px;
    }
    .q1 {
        display: none;
        position: absolute;
        width: 1000px;
    }

    .item1:hover .q1 {
        display: flex;
    }

    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 150px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }


    .footer {
        width: 100%;
    }
    .footer_top{
        height: 80px;
        background-color: #181D23;
        border-bottom: 1px solid #3e4247;
        color: #BDBCBC;
        line-height: 80px;
        text-align: center;
        font-size: 18px;
    }
    .footer_mid {
        height: 250px;
        display: flex;
        justify-content: space-between;
        padding: 0 25px;
        bottom: 0;
        background-color: #181D23;
        color: white;
    }
    .footer_bot {
        height: 80px;
        background-color: #181D23;
        border-top: 1px solid #3e4247;
        padding: 20px 0;
        text-align: center;
        color: white;
    }
    .footer_one {
        width: calc(100%/3);
        padding: 25px;
        border-right: 1px solid #3e4247;
    }
    .footer_two {
        width: calc(100%/3);
        padding: 25px;
        border-right: 1px solid #3e4247;
    }
    .footer_three {
        width: calc(100%/3);
        padding: 25px;
    }
    .footer_heading {
        margin-top: 0;
        font-size: 22px;
    }
    .menu {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        padding-left: 0;
        margin: 0;
    }
    .menu-item {
        min-width: 40%;
        display: inline-flex;
        list-style:none;
        padding: 11px 4px;
        color: #3e4247;
        font-size: 12px;
    }
    #click {
        text-decoration: none;
        color: #bdbcbc;
    }
    #click:hover {
        color: #CE1B2E;
    }
    .end-head{
        color: #bdbcbc;
        margin-top: 0;
        font-size: 14px;
    }
    .footer_end {
        margin: 0;
        padding-left: 0;
        height: 20px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        list-style: none;
        font-size: 12px;
    }
    .end-item {
        width: 6%;
        border-right: 1px solid #3e4247;
    }
    .end-item5 {
        width: 6%;
    }


</style>

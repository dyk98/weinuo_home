<template>
    <div id="app">
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
                                <router-link to="CompanyInFo" id="click">美洲</router-link>
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
</template>

<script>
    import company_info from "./CompanyInFo";
    export default {
        name: "CompanyInFo",
        components: {
            company_info
        },
        data () {
            return {

            }
        },
        methods: {

        }
    }
</script>

<style scoped>
.footer {
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
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
    width: 10%;
    border-right: 1px solid #3e4247;
}
.end-item5 {
    width: 10%;
}
</style>
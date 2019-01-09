<template>
    <div class="MyHeader">
        <p class="companyName">天津维诺智通</p>
        <div class="headerTitle">
            <div class="headerSelect item1">
                <router-link to="" class="headerSelectP ">服务</router-link>
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

</template>

<script>
    export default {
        name: "MyHeader",
        data () {
            return {
            }
        },
    }
</script>

<style scoped>
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

    /*.headerSelectP:hover::after {*/
    /*content: "▲";*/
    /*position: relative;*/
    /*top: 20px;*/
    /*left: -44px;*/
    /*}*/

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


</style>
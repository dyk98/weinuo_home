<template>
    <div class="MyHeader">
        <p class="companyName">天津维诺智通</p>
        <div class="headerTitle">
            <div class="headerSelect item1">
                <router-link to="" class="headerSelectP">涉及行业</router-link>
                <div class="mune q1">
                    <h3 class="muneTitle">涉及行业</h3>
                    <ul class="muneList">
                        <li class="listItem"><router-link class="Item" to="">高科技</router-link></li>
                        <li class="listItem"><router-link class="Item" to="">银行</router-link></li>
                        <li class="listItem"><router-link class="Item" to="">保险</router-link></li>
                        <li class="listItem"><router-link class="Item" to="">证券</router-link></li>
                        <li class="listItem"><router-link class="Item" to="">金融其他</router-link></li>
                        <li class="listItem"><router-link class="Item" to="">制造</router-link></li>
                    </ul>
                    <ul class="muneList">
                        <li class="listItem"><router-link class="Item" to="">电信</router-link></li>
                        <li class="listItem"><router-link class="Item" to="">互联网</router-link></li>
                        <li class="listItem"><router-link class="Item" to="">汽车</router-link></li>
                        <li class="listItem"><router-link class="Item" to="">医疗和健康</router-link></li>
                        <li class="listItem"><router-link class="Item" to="">旅游交通</router-link></li>
                        <li class="listItem"><router-link class="Item" to="">政府和教育</router-link></li>
                    </ul>
                    <ul class="muneList">
                        <li class="listItem"><router-link class="Item" to="">媒体娱乐</router-link></li>
                        <li class="listItem"><router-link class="Item" to="">零售</router-link></li>
                        <li class="listItem"><router-link class="Item" to="">人力资源管理</router-link></li>
                        <li class="listItem"><router-link class="Item" to="">AI人工智能</router-link></li>
                    </ul>
                </div>
            </div>
            <div class="headerSelect">
                <router-link to="" class="headerSelectP">技术实施</router-link>
            </div>
            <div class="headerSelect">
                <router-link to="" class="headerSelectP">数字营销</router-link>
            </div>
            <div class="headerSelect">
                <router-link to="" class="headerSelectP">咨询服务</router-link>
            </div>
            <div class="headerSelect">
                <router-link to="" class="headerSelectP">运营服务</router-link>
            </div>
            <div class="headerSelect">
                <router-link to="" class="headerSelectP">就业机会</router-link>
            </div>
            <div class="headerSelect">
                <router-link to="" class="headerSelectP">关于我们</router-link>
            </div>
        </div>



        <div class="mune">
            <h3 class="muneTitle">技术实施</h3>
            <ul class="muneList">
                <li class="listItem"><router-link class="Item" to="">应用开发+运维</router-link></li>
                <li class="listItem"><router-link class="Item" to="">内嵌式技术+IoT</router-link></li>
                <li class="listItem"><router-link class="Item" to="">数字化产品+平台研发</router-link></li>
                <li class="listItem"><router-link class="Item" to="">DevOps实施</router-link></li>
                <li class="listItem"><router-link class="Item" to="">CRM</router-link></li>
                <li class="listItem"><router-link class="Item" to="">ERP</router-link></li>
            </ul>
            <ul class="muneList">
                <li class="listItem"><router-link class="Item" to="">Marketing Cloud</router-link></li>
                <li class="listItem"><router-link class="Item" to="">测试服务</router-link></li>
                <li class="listItem"><router-link class="Item" to="">大数据平台</router-link></li>
                <li class="listItem"><router-link class="Item" to="">产品化解决方案</router-link></li>
                <li class="listItem"><router-link class="Item" to="">HCM</router-link></li>
            </ul>
        </div>

        <div class="mune">
            <h3 class="muneTitle">数字营销</h3>
            <ul class="muneList">
                <li class="listItem"><router-link class="Item" to="">用户交互设计</router-link></li>
                <li class="listItem"><router-link class="Item" to="">内嵌式技术+loT</router-link></li>
                <li class="listItem"><router-link class="Item" to="">内容管理解决方案</router-link></li>
                <li class="listItem"><router-link class="Item" to="">线上营销</router-link></li>
                <li class="listItem"><router-link class="Item" to="">全球化及本地化服务</router-link></li>
            </ul>
        </div>

    </div>

</template>

<script>
    export default {
        name: "MyHeader",
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
    .mune{
        display: flex;
        width: 90%;
    }
    .listItem{
        list-style: none;
        margin-top: 8px;
    }
    .muneList{
        flex-grow: 2;
    }
    .muneTitle{
        flex-grow: 0.5;
        margin-left:300px;
    }
    .Item{
        text-decoration: none;
        color: #193c74;
        font-size: 14px;
        font-weight: bold;
        border-left: 3px solid #e1e3e6;
    }
    .Item:hover{
        color: #bd3135;
    }

    .q1 {
        display: none;
        position: relative;
    }

    .item1:hover .q1 {
        display: inline-block;
    }

</style>
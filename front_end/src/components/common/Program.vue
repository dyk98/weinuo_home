<template>
    <div class="programme">
        <h2 class="tag" >方案</h2>
        <div class="hr"></div>
        <!--<div class="programme_icon">-->
            <!--<div class="programme_icon_m" style="background-color: #cc8846;">-->
                <!--<img src="/static/img/qiye.png" alt="">-->
                <!--<p>企业应用</p>-->
            <!--</div>-->
            <!--<div class="programme_icon_m" style="background-color: #dad656;">-->
                <!--<img src="/static/img/yidong.png" alt="">-->
                <!--<p>移动应用</p>-->
            <!--</div>-->
            <!--<div class="programme_icon_m" style="background-color: #76d251;">-->
                <!--<img src="/static/img/yunyin.png" alt="">-->
                <!--<p>运营平台</p>-->
            <!--</div>-->
        <!--</div>-->
        <!--<div class="programme_icon">-->
            <!--<div class="programme_icon_m" style="background-color: #5941d0;">-->
                <!--<img src="/static/img/shangwu.png" alt="">-->
                <!--<p>电子商务</p>-->
            <!--</div>-->
            <!--<div class="programme_icon_m" style="background-color: #d2433f;">-->
                <!--<img src="/static/img/kehu.png" alt="">-->
                <!--<p>客户关系</p>-->
            <!--</div>-->
            <!--<div class="programme_icon_m" style="background-color: #437cd2;">-->
                <!--<img src="/static/img/shengchan.png" alt="">-->
                <!--<p>生产管理</p>-->
            <!--</div>-->
        <!--</div>-->
        <table class="myselution-list" width="80%">
            <tbody><tr>
                <td class="mltd mltd1" rowspan="2" colspan="1">
                    <div class="programme_icon_m" style="background-color: #cc8846;">
                        <img src="/static/img/qiye.png" alt="">
                        <p>企业应用</p>
                    </div>
                </td>
                <div class="programme_icon">
                <td class="mltd mltd2" colspan="2" rowspan="1">
                    <div class="programme_icon_m" style="background-color: #dad656;">
                        <img src="/static/img/yidong.png" alt="">
                        <p>移动应用</p>
                    </div>
                </td>
                <td class="mltd mltd3" colspan="2" rowspan="1">
                    <div class="programme_icon_m" style="background-color: #76d251;">
                        <img src="/static/img/yunyin.png" alt="">
                        <p>运营平台</p>
                    </div>
                </td>
                </div>
            </tr>

            <tr>
                <div class="programme_icon">
                <td class="mltd mltd4" rowspan="1" colspan="1">
                    <div class="programme_icon_m" style="background-color: #5941d0;">
                        <img src="/static/img/shangwu.png" alt="">
                        <p>电子商务</p>
                    </div>
                </td>
                <td class="mltd mltd5" colspan="2" rowspan="1">
                    <div class="programme_icon_m" style="background-color: #d2433f;">
                        <img src="/static/img/kehu.png" alt="">
                        <p>客户关系</p>
                    </div>
                </td>
                <td class="mltd mltd6" rowspan="12" colspan="1">
                    <div class="programme_icon_m" style="background-color: #437cd2;">
                        <img src="/static/img/shengchan.png" alt="">
                        <p>生产管理</p>
                    </div>
                </td>
                </div>
            </tr>
            </tbody></table>
    </div>
</template>

<script>
    export default {
        name: "Program"
    }
</script>

<style scoped>
    .programme {
        width: 70%;
        margin: 0 auto;
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

    .programme {
        text-align: center;
        height: 330px;
        padding-top: 45px;
        background-color: #f5f5f5;
    }

    .programme_icon {
        display: flex;
        padding: 0 15px;
        flex-grow: 1;
        justify-content: space-between;
        width: 60%;
    }

    .programme_icon_m {
        margin: 1.5px;
    }

    .programme_icon img {
        width: 50%;
        margin-top: 5px;
    }

    .programme_icon p {
        font-size: 16px;
        margin-top: 0;
        color: #ffffff;
        font-weight: bold;
    }

    table.myselution-list {
        border-collapse: separate;
        border-spacing: 2px;
    }
    table {
        background-color: transparent;
    }
    table {
        border-spacing: 0;
        border-collapse: collapse;
    }
    * {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    table {
        display: table;
        border-collapse: separate;
        border-spacing: 2px;
        border-color: grey;
        text-align: center;
    }
    tr {
        width: 70%;
        flex-grow: 1;
    }
    .myselution-list {
        margin: 0 auto;
    }
</style>
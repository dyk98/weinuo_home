<template>
    <div>
        <div class="mune">
            <h3 class="muneTitle">涉及行业</h3>
            <ul class="muneList1">
                <li class="listItem"><a href="">高科技</a></li>
                <li class="listItem"><a href="">银行</a></li>
                <li class="listItem"><a href="">保险</a></li>
                <li class="listItem"><a href="">证券</a></li>
                <li class="listItem"><a href="">金融其他</a></li>
                <li class="listItem"><a href="">制造</a></li>
            </ul>
            <ul class="muneList2">
                <li class="listItem"><a href="">电信</a></li>
                <li class="listItem"><a href="">互联网</a></li>
                <li class="listItem"><a href="">汽车</a></li>
                <li class="listItem"><a href="">医疗和健康</a></li>
                <li class="listItem"><a href="">旅游交通</a></li>
                <li class="listItem"><a href="">政府和教育</a></li>
            </ul>
            <ul class="muneList3">
                <li class="listItem"><a href="">媒体娱乐</a></li>
                <li class="listItem"><a href="">零售</a></li>
                <li class="listItem"><a href="">人力资源管理</a></li>
                <li class="listItem"><a href="">AI人工智能</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Industry"
    }
</script>

<style scoped>
    .mune{
        display: flex;
    }
    .muneTitle{
        flex-grow: 1;
    }
    .muneList1{
        flex-grow: 2;
    }
    .muneList2{
        flex-grow: 2;
    }
    .muneList3{
        flex-grow: 2;
    }
</style>
<template>
    <div class="body">
        <div>轮播图管理</div>
        <div style="margin-left: 20%; display: flex; justify-content: space-around">
            <div style="width: 40%; height: 100px; background-color: lightpink">动态轮播</div>
            <div style="width: 40%; height: 100px; background-color: aquamarine">案例轮播</div>
        </div>
        <div>案例管理</div>
        <div style="margin-left: 20%; display: flex; justify-content: space-around">
            <div style="width: 30%; height: 100px; background-color: lightpink">服务案例</div>
            <div style="width: 30%; height: 100px; background-color: aquamarine">方案案例</div>
            <div style="width: 30%; height: 100px; background-color: bisque;">行业案例</div>

        </div>
        <div>联系我们</div>
    </div>
</template>

<script>
    export default {
        name: "WeinuoAdmin"
    }
</script>

<style scoped>
    .body {
        background-color: #eff5f8;
        color: #7470e6;
    }
</style>
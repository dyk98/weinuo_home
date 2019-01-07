<template>
    <div id="app">
        <div style="position: fixed; width: 100%">
            <div class="top_bar">
                <h3>维诺智创后台管理系统</h3>
            </div>
            <div class="left_bar">
                <el-collapse-transition>
                    <div v-show="show3">
                        <el-collapse v-model="activeNames" accordion>
                            <el-collapse-item title="轮播图管理" name="1" class="section">
                                <div class="section_list">动态轮播</div>
                                <div class="section_list">案例轮播</div>

                            </el-collapse-item>
                            <el-collapse-item title="案例管理" name="2" class="section">
                                <div class="section_list">服务案例</div>
                                <div class="section_list">方案案例</div>
                                <div class="section_list">行业案例</div>

                            </el-collapse-item>
                            <el-collapse-item title="联系我们" name="3" class="section">
                                <div class="section_list">地址修改</div>
                                <div class="section_list">联系方式修改</div>

                            </el-collapse-item>
                        </el-collapse>

                    </div>
                </el-collapse-transition>

            </div>
        </div>
        <div style="height: 45px;"></div>
        <router-view/>
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
            handleChange(val) {
                console.log(val);
            }
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
        width: 10em;
        background-color: #ffffff;
        float: top;
    }

    .el-collapse-item__header {
        color: #3c3f41;
        font-size: 18px;
        background-color: #ffffff;
    }

    .el-collapse-item__content {
        padding-bottom: 2em;
        color: #3c3f41;
    }

    .el-collapse-item__wrap {
        background-color: #ffffff;
        border: none;
        font-size: 16px;
    }
</style>

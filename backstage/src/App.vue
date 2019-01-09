<template>
  <div id="app">
      <div class="top_bar">
          <h1>维诺智创后台管理系统</h1>
      </div>
      <div class="left_bar">
          <el-collapse-transition>
              <div class="navigation_bar" v-show="show3">
                  <div style="flex: 2; padding: 5px 15px; background-color: #5e5e5e;">
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

                      </el-collapse>
                  </div>
              </div>

          </el-collapse-transition>
      </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
  .top_bar {
      width: auto;
      height: 20%;
      background-color: cornflowerblue;
  }
    .left_bar {
        height: 100%;
        width: 10em;
        background-color: darkslateblue;
    }
</style>

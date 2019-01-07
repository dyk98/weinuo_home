<template>
  <div id="app">
      <div class="top_bar">
          <h1>维诺智创后台管理系统</h1>
      </div>
      <div class="left_bar">
          <div style="height: auto;" class="list">
              <el-collapse-transition>
                  <div v-show="show3">

                          <el-collapse v-model="activeNames" accordion>
                              <el-collapse-item title="网站导航" name="1" class="section">
                                  <div class="section_list">增</div>
                                  <div class="section_list">删</div>
                                  <div class="section_list">改</div>
                                  <div class="section_list">查</div>

                              </el-collapse-item>
                              <el-collapse-item title="网站导航" name="2" class="section">
                                  <div class="section_list">增</div>
                                  <div class="section_list">删</div>
                                  <div class="section_list">改</div>
                                  <div class="section_list">查</div>

                              </el-collapse-item>
                              <el-collapse-item title="轮播图" name="3" class="section">
                                  <div class="section_list">增</div>
                                  <div class="section_list">删</div>
                                  <div class="section_list">改</div>
                                  <div class="section_list">查</div>

                              </el-collapse-item>
                          </el-collapse>

                  </div>
              </el-collapse-transition>
          </div>

      </div>
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
    padding: 0;
    margin: 0;
}
  .top_bar {
      width: auto;
      height: 20%;
      background-color: aquamarine;
  }
    .left_bar {
        height: 100%;
        width: 10em;
        background-color: darkslateblue;
        float: top;
    }
.el-collapse-item__header {
    color: #ffffff;
    font-size: 18px;
    background-color: darkslateblue;
}

.el-collapse-item__content {
    padding-bottom: 2em;
    color: white;
    margin: 1em;
}

.el-collapse-item__wrap {
    background-color: mediumslateblue;
    border: none;
    font-size: 16px;
}
    .list {
        height: 100%;
        background-color: darkslateblue;
    }
    .section {
        margin: 0 auto;
    }
    .section_list {
        margin: 1em auto;
    }
</style>

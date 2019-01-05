<template>
  <div class="body">
    <!--写好一个导航栏在此调用-->
    <div class="head_bar">
<hi>导航</hi>
    </div>
    <!--这里是swiper的滚动图-->
    <div class="header">
      <p>{{msg}}</p>
    </div>
    <!--这里是主题内容-->
    <div class="container">
      <div class="service_area">
        <h1>服务</h1>
      </div>
      <div class="ways_area">
        <h1>方案</h1>
      </div>
      <div class="friend_area">
        <h1>行业</h1>
      </div>
      <div class="cases_area">
        <h1>案例</h1>
      </div>
      <div class="move_area">
        <h1>行业</h1>
      </div>
    </div>
    <!--这里是底部导航栏-->
    <div class="foot">

    </div>
  </div>
</template>

<script scoped>
import Test from "./Test";
export default {
  name: 'HelloWorld',
    components: {Test},
    data () {
    return {
      msg: '这里是swiper的滚动图' ,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
  .body {
    height: 2880px;

  }
  .head_bar {
    height: 65px;
    width: 100%;
    background-color: #2c3e50;
    top: -60px;
    position: relative;
  }
  .header {
    height: 200px;
    background-color: #f8cbcb;
    top: -50px;
    position: relative;
  }
.container {
  width: 100%;
  background-color: whitesmoke;
  height: 1819px;
  position: relative;
  top: -30px;
}
  .service_area {
    height: 252px;
    background-color: #4288ce;
  }
  .ways_area {
    height: 344px;
    background-color: #666600;
  }
  .friend_area {
    height: 318px;
    background-color: #880000;
  }
  .cases_area {
    height: 452px;
    background-color: #008800;
  }
  .move_area {
    height: 453px;
    background-color: aqua;
  }

</style>

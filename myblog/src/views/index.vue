<template>
  <div class="container">
    <Header></Header>
    <div class="main">
      <div class="carousel">
        <el-carousel height="300px">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3 class="small">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="footer">
      <p>Copyright © 2020</p>
      <p>www.pekka.icu All rights reserved. 桂ICP备20005308号-2</p>
    </div>
  </div>
</template>

<script>
import Header from "../components/header";
export default {
  components: { Header },
  data() {
    return {
    };
  }
};
</script>

<style scope>

.container {
  background-color: #bbffaa;
}
.main {
  width: 800px;
  margin: 0 auto;
}
.carousel{
  width: 533px;
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

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.footer {
  height: 50px;
  width: 100%;
  text-align: center;
  margin-top: 50px;
}
</style>
<style>
.el-menu-item,
.el-submenu__title {
  font-size: 20px;
}
</style>
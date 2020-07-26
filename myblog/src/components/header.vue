<template>
  <div class="header">
    <div class="header-bg">
      <div class="header-title">小天地</div>
    </div>
    <div class="menu-wrapper">
      <el-menu
        :default-active="activeIndex"
        mode="horizontal"
        @select="handleSelect"
        background-color="burlywood"
        text-color="#fff"
        active-text-color="#ffd04b"
        class="menu"
      >
        <el-menu-item index="1">首页</el-menu-item>
        <el-submenu index="2">
          <template slot="title">前端</template>
          <el-menu-item index="2-1">Vue</el-menu-item>
          <el-menu-item index="2-2">Elementui</el-menu-item>
          <el-menu-item index="2-3">Vant</el-menu-item>
        </el-submenu>
        <el-menu-item index="3">java</el-menu-item>
        <el-menu-item index="4">心情随想</el-menu-item>
        <el-menu-item index="5">其他</el-menu-item>
        <el-menu-item index="6">归档</el-menu-item>
        <el-menu-item index="7">留言</el-menu-item>
        <el-menu-item index="8">关于</el-menu-item>
        <el-input class="searchInput" placeholder="请输入内容" prefix-icon="el-icon-search" v-model="search"></el-input>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      search:""
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style scope>
.header {
  /* 限制最小宽度，防止手机访问变形，暂不考虑响应式 */
  min-width: 1500px;
}
.header .header-bg {
  /* 头部背景图 */
  background-image: url(../assets/headerBG.jpg);
  height: 250px;
  background-size: 100% 100%;
  position: relative;
}
.header .header-title{
  font-size: 70px;
  /* 垂直水平居中 */
  position:absolute;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 500px;
  height: 200px;
  line-height: 200px;
  text-align: center;
}
/* 导航栏 */
.menu-wrapper {
  padding-left: 360px;
  background-color: burlywood;
  /* 菜单项文字垂直居中 */
  line-height: 60px;
}
/* 修改菜单项默认字体大小 */
.el-menu-item,.el-submenu__title {
  font-size: 20px;
}
/* 搜索框 */
.searchInput{
    width: 200px;
    float: right;
    margin-right: 50px;
}
</style>


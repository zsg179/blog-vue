<template>
  <div class="header">
    <div class="header-bg"></div>
    <div class="menu">
      <el-menu
        :default-active="activeIndex"
        mode="horizontal"
        @select="handleSelect"
        background-color="burlywood"
        text-color="#fff"
        active-text-color="#ffd04b"
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
        <el-menu-item index="5">归档</el-menu-item>
        <el-menu-item index="6">留言</el-menu-item>
        <el-menu-item index="7">关于</el-menu-item>
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

<style>
.header {
  background-color: #bbffaa;
}
.header .header-bg {
  background-image: url(../assets/headerBG.jpg);
  height: 204px;
  background-size: 100% 100%;
}
.menu {
  padding-left: 400px;
  background-color: burlywood;
  font-size: 20px;
  line-height: 60px;
}
.searchInput{
    width: 200px;
    float: right;
    margin-right: 50px;
}
.main {
  border: black 1px solid;
  border-top: 0;
}
.footer {
  border: black 1px solid;
}
</style>

<style>
/* 修改默认样式 */
.el-menu-item,
.el-submenu__title {
  font-size: 20px;
}
</style>
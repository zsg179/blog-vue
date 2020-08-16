<template>
  <div class="header">
    <div class="header-bg">
      <div class="header-title">不在能知，乃在能行</div>
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
        <el-menu-item index="0"><router-link :to="{name:'index',params:{tagId:'0'}}">首页</router-link></el-menu-item>
        <el-menu-item index="1"><router-link :to="{name:'HeadPage',params:{tagId:'1'}}">前端</router-link></el-menu-item>
        <el-menu-item index="2"><router-link :to="{name:'JavaPage',params:{tagId:'2'}}">java</router-link></el-menu-item>
        <el-menu-item index="3"><router-link :to="{name:'EmotionPage',params:{tagId:'3'}}">心情随想</router-link></el-menu-item>
        <el-menu-item index="4"><router-link :to="{name:'OtherPage',params:{tagId:'4'}}">其他</router-link></el-menu-item>
        <el-menu-item index="5"><router-link :to="{name:'FilePage',params:{tagId:'5'}}">归档</router-link></el-menu-item>
        <el-menu-item index="6"><router-link :to="{name:'MessagePage',params:{tagId:'6'}}">留言</router-link></el-menu-item>
        <el-menu-item index="7"><router-link :to="{name:'About',params:{tagId:'7'}}">关于</router-link></el-menu-item>
        <el-input placeholder="请输入内容" v-model="search" class="input-with-select">
          <el-button slot="prepend" icon="el-icon-search"></el-button>
        </el-input>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "0",
      search: "",
    };
  },
  created(){
    //切换导航栏激活状态
    this.activeIndex = this.$route.params.tagId == undefined ? "0" : this.$route.params.tagId;
  }
  ,
  methods: {
    handleSelect(key, keyPath) {},
  },
};
</script>

<style scoped>
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
.header .header-title {
  font-size: 70px;
  /* 垂直水平居中 */
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 700px;
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
.menu >>> .el-menu-item {
  font-size: 20px;
}
.el-menu--horizontal >>> .el-submenu__title {
  font-size: 20px;
}
/* 搜索框 */
.menu >>> .el-input {
  width: 250px;
  margin-left: 150px;
  font-size: 14px;
}
</style>


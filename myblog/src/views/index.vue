<template>
  <div class="container">
    <Header></Header>
    <div class="main">
      Main 待完善
    </div>
    <div class="footer">Footer 待完善</div>
  </div>
</template>

<script>
  import Header from "../components/header";
  export default {
    components:{Header},
    data() {
      return {
        activeIndex: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>
/* .header .header-bg img{
    height: 300px;
    width: 100%;
} */
.container {
  background-color: #bbffaa;
}
.header .header-bg {
  background-image: url(../assets/headerBG.jpg);
  height: 204px;
  background-size: 100% 100%;
}
.menu{
  padding-left: 400px;
  background-color:burlywood;
  font-size: 20px;
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
.el-menu-item,.el-submenu__title{
  font-size: 20px;
}
</style>
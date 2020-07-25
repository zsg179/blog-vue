<template>
  <div class="container">
    <Header></Header>
    <div class="main-wrapper">
      <div class="main">
      <div class="carousel">
        <el-carousel height="300px">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3 class="small">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="recommend-article">
        <h2 class="title">推荐文章</h2> 
        <el-divider></el-divider>
        <div class="articles">
          <div class="article">
            <a href="javascript:;">
              <div class="article-img">
                <img src="../../static/article1.png" alt="ES6的十大特性">
              </div>
              <div class="article-info">
                <p class="article-title">ES6的十大特性</p>
                <span class="article-date">2020-7-23</span>
                <span class="article-hits">200次阅读</span>
              </div>
            </a>
          </div>
          <el-divider></el-divider>
          <div class="article">
            <a href="javascript:;">
              <div class="article-img">
                <img src="../../static/article1.png" alt="文章2">
              </div>
              <div class="article-info">
                <p class="article-title">文章2</p>
                <span class="article-date">2020-7-23</span>
                <span class="article-hits">200次阅读</span>
              </div>
            </a>
          </div>
          <el-divider></el-divider>
          <div class="article">
            <a href="javascript:;">
              <div class="article-img">
                <img src="../../static/article1.png" alt="文章3">
              </div>
              <div class="article-info">
                <p class="article-title">文章3</p>
                <span class="article-date">2020-7-23</span>
                <span class="article-hits">200次阅读</span>
              </div>
            </a>
          </div>
          <el-divider></el-divider>
          <div class="article">
            <a href="javascript:;">
              <div class="article-img">
                <img src="../../static/article1.png" alt="文章4">
              </div>
              <div class="article-info">
                <p class="article-title">文章4</p>
                <span class="article-date">2020-7-23</span>
                <span class="article-hits">200次阅读</span>
              </div>
            </a>
          </div>
          <el-divider></el-divider>
          <div class="article">
            <a href="javascript:;">
              <div class="article-img">
                <img src="../../static/article1.png" alt="文章5">
              </div>
              <div class="article-info">
                <p class="article-title">文章5</p>
                <span class="article-date">2020-7-23</span>
                <span class="article-hits">200次阅读</span>
              </div>
            </a>
          </div>
          <el-divider></el-divider>
          <div class="article">
            <a href="javascript:;">
              <div class="article-img">
                <img src="../../static/article1.png" alt="文章6">
              </div>
              <div class="article-info">
                <p class="article-title">文章6</p>
                <span class="article-date">2020-7-23</span>
                <span class="article-hits">200次阅读</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
    
    <!-- <Footer></Footer> -->
  </div>
</template>

<script>
import Header from "../components/header";
import Footer from "../components/footer";
export default {
  components: { Header ,Footer},
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
/* 主内容区外层 */
.main-wrapper{
  background-color: #FFFBF0;
}
/* 主内容区 */
.main{
  width: 800px;
  margin-left: 360px;
}
/* 清除浮动 */
.main::after{
  content: "";
  display: table;
  clear: both;
}
.carousel{
  /* 轮播图宽度 */
  width: 533px;
  display: inline-block;
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
/* 推荐文章区 */
.recommend-article{
  /* background-color:yellow; */
  width: 267px;
  float: right;
}
/* 推荐文章标题 */
.recommend-article .title{
  font-size: 20px;
  color: #555555;
  padding-top: 10px;
  padding-left: 10px;
  padding-bottom: 10px;
}
/* 分割线 */
.el-divider--horizontal{
  margin: 0;
}
/* 推荐文章 */
.recommend-article .articles{
  height: 469.4px;
}
/* 文章 */
.articles .article{
  padding: 10px 0;
}
.articles .article:hover{
  background-color: #ffffff;
}
/* 文章图片区 */
.article .article-img{
  display: inline-block;
}
/* 文章图片 */
.article .article-img img{
  height: 55px;
}
/* 文章信息区 */
.article .article-info{
  float: right;
  height: 55px;
  width: 186px;
  position: relative;
}
/* 文章标题 */
.article-info .article-title{
  margin-bottom: 10px;
  position:absolute;
  left:10px
}
/* 文章发表日期 */
.article-info .article-date{
  font-size: 13px;
  position:absolute;
  top:42px;
  left: 10px;
}
/* 文章阅读量 */
.article-info .article-hits{
  font-size: 13px;
  position:absolute;
  top: 42px;
  left: 100px
}


</style>

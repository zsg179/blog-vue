<template>
  <div class="container">
    <Header></Header>
    <div class="main-wrapper">
      <div class="main">
        <!-- 轮播图 -->
        <div class="carousel">
          <el-carousel height="400px">
            <el-carousel-item v-for="(cBlog,index) in carouselBlogs" :key="index">
              <router-link :to="{name:'BlogDetail',params:{blogId:cBlog.id}}">
                <img :src="cBlog.img" alt="pekka">
              </router-link> 
            </el-carousel-item>
          </el-carousel>
        </div>
        <Right></Right>
        <!-- 最新文章 -->
        <div class="newest-articles-wrapper ">
            <div class="newest-articles-title">
              最新文章
            </div>
            <div class="newest-articles">
              <div class="newest-article" v-for="(nBlog,index) in newestBlogs" :key="index">
                  <div class="newest-article-img">
                    <router-link target="_blank" :to="{name:'BlogDetail',params:{blogId:nBlog.id}}"><img :src="nBlog.img" alt="pekka"></router-link>
                  </div>
                  <div class="newest-article-info">
                    <router-link target="_blank" :to="{name:'BlogDetail',params:{blogId:nBlog.id}}"><p class="newest-article-title">{{nBlog.title}}</p></router-link>
                    <div class="newest-article-content">
                      {{nBlog.summary}}...<router-link target="_blank" :to="{name:'BlogDetail',params:{blogId:nBlog.id}}">[详细]</router-link>
                    </div>
                    <div class="newest-article-other">
                      <!-- 分类和时间 -->
                      <span class="class-and-date">
                        <i class="fa fa-tag"><span class="tag-text"><a class="a-tag" href="javascript:;">{{nBlog.tagId}}</a></span></i>
                        <i class="fa fa-clock-o"><span class="date-text">{{nBlog.created}}</span></i>                   
                      </span>
                      <!-- 留言，点赞 -->
                      <span class="msg-and-thumbs">
                        <router-link target="_blank" :to="{name:'BlogDetail',params:{blogId:nBlog.id}}"><i class="fa fa-comment-o"><span class="msg-text">{{nBlog.comments}}</span></i></router-link>
                        <i class="fa fa-eye"><span class="eye-text">{{nBlog.views}}</span></i>
                        <a class="a-thumbs" href="javascript:;"><i class="fa fa-thumbs-o-up"><span class="thumbs-text">{{nBlog.likes}}</span></i></a>
                        </span>
                    </div>
                  </div>
              </div>
              
            </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../components/header";
import Footer from "../components/footer";
import Right from "../components/right";
export default {
  components: { Header ,Footer,Right},
  data() {
    return {
      newestBlogs:{},//最新博客
      carouselBlogs:{},//轮播图博客
    };
  },
  created(){
    this.getCBlogs();
    this.getNBlogs();
  },
  methods:{
    getCBlogs(){
      this.$axios({
        method: "get",
        url: "/getCBlogs/"
      }).then(res=>{
        this.carouselBlogs = res.data.carouselBlogs;
      })
    },
    getNBlogs(){
      this.$axios({
        method: "get",
        url: "/getNBlogs/"
      }).then(res=>{
        this.newestBlogs = res.data.newestBlogs;
      })
    }
  }
};
</script>

<style>
  @import "../../static/css/font-awesome.min.css";

/* 改变body的滚动条宽度 */
  body::-webkit-scrollbar{ 
  width: 15px;
}

</style>

<style scoped>

.container {
  background-color: #FFFBF0;
}
/* 主内容区外层 */
.main-wrapper{
  /* background-color: #F1F1F1; */
}
/* 主内容区 */
.main{
  width: 1000px;
  margin: 20px auto;
  /* background-color: #ffffff; */
}
/* 清除浮动 */
.main::after{
  content: "";
  display: table;
  clear: both;
}
/* 轮播图 */
.carousel{
  /* 轮播图宽度 */
  /* width: 533px;高度300px适配 */
  width: 712px;
  display: inline-block;
  /* background-color: yellow; */
}
.el-carousel__item img {
  width: 100%;
  margin: 0;
}

/* 最新文章外层 */
.newest-articles-wrapper{
  /* background-color: yellow; */
  width: 712px;
}
/* 最新文章标题 */
.newest-articles-title{
  padding-top: 25px;
  padding-bottom: 10px;
  border-bottom: #DB6D4C solid 5px;
  font-size: 20px;
  color: #555555;
}
/* 最新文章区 */
.newest-article{
  height: 153px;
  padding: 30px 0;
  border-bottom: 1px #BFAB86 solid;
}
.newest-article:hover{
  background-color: #ffffff;
}
.newest-article .newest-article-img{
  display: inline-block
}
/* 文章图片 */
.newest-article-img img{
  height: 150px;
  max-width: 220px;
}
/* 文章信息区 */
.newest-article .newest-article-info{
  float: right;
  width: 470px
}
/* 文章标题 */
.newest-article-title{
  font-weight: bold;
  color: #474645;
  margin-bottom: 15px;
}
.newest-article-title:hover{
  text-decoration: underline;
}
/* 文章内容 */
.newest-article-content{
  font-size: 12px;
  line-height: 25px;
  margin-bottom: 15px;
}
/* 文章分类，发表时间，留言等信息 */
.newest-article-other{
  font-size: 12px;
}
/* 分类和发表时间 */
.class-and-date{
  float: left;
}
/* 分类图标字体 */
.fa-tag{
  color: #F8A8A8;
  font-size: 14px;
}
.fa-tag::before{
  vertical-align: middle;
}
/* 分类文本颜色不同 */
.tag-text{
  color: #759B08;
  margin-left: 4px;
  font-size: 12px;
  height: 14px;
  line-height: 14px;
  display: inline-block;
}
/* 鼠标移入出现下划线 */
.tag-text .a-tag:hover{
  text-decoration: underline
}
/* 时间，留言，阅读量，点赞文本 */
.date-text,
.msg-text,.eye-text,
.thumbs-text{
  color: #999999;
  margin-left: 4px;
  font-size: 12px;
  height: 14px;
  line-height: 14px;
  display: inline-block;
}
/* 时间图标字体 */
.fa-clock-o{
  color: #69C8E9;
  margin-left: 10px;
  font-size: 14px;
}
/* 时间图标文本于文本垂直对齐 */
.fa-clock-o::before{
  vertical-align: middle;
}
/* 留言，阅读量，点赞 右浮动 */
.msg-and-thumbs{
  float: right;
}
.a-msg:hover i span{
  text-decoration: underline;
}
/* 鼠标移入点赞变色 */
.a-thumbs:hover i{
  color: #84C1E9;
}
.a-thumbs:hover i span{
  color: #84C1E9;
}
/* 留言，阅读量，点赞图标文本 */
.fa-comment-o,.fa-eye,.fa-thumbs-o-up{
  color: #969EA8;
  font-size: 14px;
  margin: 0 5px;
}



</style>


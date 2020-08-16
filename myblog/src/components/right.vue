<template>
    <!-- 推荐文章 -->
    <div class="recommend-article">
        <h2 class="title">推荐文章</h2> 
        <div class="articles">
        <div class="article" v-for="(rBlog,index) in recommendBlogs" :key="index">
            <router-link target="_blank" :to="{name:'BlogDetail',params:{blogId:rBlog.id}}">
            <div class="article-img">
                <img :src="rBlog.img" alt="pekka">
            </div>
            <div class="article-info">
                <p class="article-title">{{rBlog.title}}</p>
                <div class="article-time-views">
                <span class="article-date">{{rBlog.created}}</span>
                <span class="article-views">{{rBlog.views}}次阅读</span>
                </div>
            </div>
            </router-link>
        </div>                    
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      recommendBlogs:{}//推荐博客
    };
  },
  created(){
    this.getRBlogs();
  },
  methods:{
    getRBlogs(){
      this.$axios({
        method: "get",
        url: "/getRBlogs/"
      }).then(res=>{
        this.recommendBlogs = res.data.recommendBlogs;
      })
    }
  }
};
</script>


<style scoped>
/* 推荐文章区 */
.recommend-article{
  /* background-color:yellow; */
  width: 277px;
  float: right;
}
/* 推荐文章标题 */
.recommend-article .title{
  font-size: 20px;
  color: #555555;
  padding-top: 10px;
  padding-bottom: 10px;
}
/* 推荐文章 */
.recommend-article .articles{
  /* height: 469.4px; */
  /* background-color: yellow; */
}
/* 最后一个文章加底部边框 */
.article:last-child{
  border-bottom: 1px #BFAB86 solid;
}
/* 文章 */
.articles .article{
  padding: 10px 0;
  border-top: 1px #BFAB86 solid;
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
  max-width: 80px;
  height: 54px;
  overflow: hidden;
}
/* 文章信息区 */
.article .article-info{
  float: right;
  height: 55px;
  width: 160px;
  position: relative;
  padding-right: 25px;
}
/* 文章标题 */
.article-info .article-title{
  margin-bottom: 5px;
  font-size: 14px;
  float: left;
}
/* 推荐文章时间和浏览量 */
.article-time-views{
  float: left;
}
/* 文章发表日期 */
.article-info .article-date{
  font-size: 13px;
  margin-right: 20px;
}
/* 文章阅读量 */
.article-info .article-views{
  font-size: 13px;
}
</style>

<template>
  <div class="container">
    <Header></Header>
    <div class="main-wrapper">
      <div class="main">
        <Right></Right>
        <!-- 前端 -->
        <div class="head-articles-wrapper">
          <div class="head-articles-title">前端</div>
          <div class="head-articles">
            <div class="head-article" v-for="(hBlog,index) in headBlogs" :key="index">
              <div class="head-article-img">
                <router-link target="_blank" :to="{name:'BlogDetail',params:{blogId:hBlog.id}}">
                  <img :src="hBlog.img" alt="pekka" />
                </router-link>
              </div>
              <div class="head-article-info">
                <router-link target="_blank" :to="{name:'BlogDetail',params:{blogId:hBlog.id}}">
                  <p class="head-article-title">{{hBlog.title}}</p>
                </router-link>
                <div class="head-article-content">
                  {{hBlog.summary}}...
                  <router-link
                    target="_blank"
                    :to="{name:'BlogDetail',params:{blogId:hBlog.id}}"
                  >[详细]</router-link>
                </div>
                <div class="head-article-other">
                  <!-- 分类和时间 -->
                  <span class="class-and-date">
                    <i class="fa fa-tag">
                      <span class="tag-text">
                        <a class="a-tag" href="javascript:;">{{hBlog.tagId}}</a>
                      </span>
                    </i>
                    <i class="fa fa-clock-o">
                      <span class="date-text">{{hBlog.created}}</span>
                    </i>
                  </span>
                  <!-- 留言，点赞 -->
                  <span class="msg-and-thumbs">
                    <router-link target="_blank" :to="{name:'BlogDetail',params:{blogId:hBlog.id}}">
                      <i class="fa fa-comment-o">
                        <span class="msg-text">{{hBlog.comments}}</span>
                      </i>
                    </router-link>
                    <i class="fa fa-eye">
                      <span class="eye-text">{{hBlog.views}}</span>
                    </i>
                    <a class="a-thumbs" href="javascript:;">
                      <i class="fa fa-thumbs-o-up">
                        <span class="thumbs-text">{{hBlog.likes}}</span>
                      </i>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <el-pagination
          class="mpage"
          background
          layout="total,prev, pager, next"
          :total="total"
          :current-page="currentPage"
          :page-size="pageSize"
          @current-change="getHBlogs"
        ></el-pagination>
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
  components: { Header, Footer, Right },
  data() {
    return {
      headBlogs: {}, //前端
      tagId: "", //分类id
      currentPage: 1,
      total: 0,
      pageSize: 5,
    };
  },
  created() {
    this.tagId = this.$route.params.tagId;
    this.getHBlogs(1);
  },
  methods: {
    getHBlogs(currentPage) {
      this.$axios({
        method: "get",
        url: "/getHBlogs?tagId=" + this.tagId+"&currentPage="+currentPage+"&pageSize="+this.pageSize,
      }).then((res) => {
        console.log(res)
        this.headBlogs = res.data.hBlogsData.records;
        this.currentPage = res.data.hBlogsData.current;
        this.total = res.data.hBlogsData.total;
        this.pageSize = res.data.hBlogsData.size;
      });
    },
  },
};
</script>

<style>
@import "../../static/css/font-awesome.min.css";

/* 改变body的滚动条宽度 */
body::-webkit-scrollbar {
  width: 15px;
}
</style>

<style scoped>
.container {
  background-color: #fffbf0;
}
/* 主内容区外层 */
.main-wrapper {
  /* background-color: #F1F1F1; */
}
/* 主内容区 */
.main {
  width: 1000px;
  margin: 20px auto;
  /* background-color: #ffffff; */
}
/* 清除浮动 */
.main::after {
  content: "";
  display: table;
  clear: both;
}
/* 前端文章外层 */
.head-articles-wrapper {
  /* background-color: yellow; */
  width: 712px;
}
/* 前端文章标题 */
.head-articles-title {
  padding-top: 25px;
  padding-bottom: 10px;
  border-bottom: #db6d4c solid 5px;
  font-size: 20px;
  color: #555555;
}
/* 前端文章区 */
.head-article {
  height: 153px;
  padding: 30px 0;
  border-bottom: 1px #bfab86 solid;
}
.head-article:hover {
  background-color: #ffffff;
}
.head-article .head-article-img {
  display: inline-block;
}
/* 文章图片 */
.head-article-img img {
  height: 150px;
  max-width: 220px;
}
/* 文章信息区 */
.head-article .head-article-info {
  float: right;
  width: 470px;
}
/* 文章标题 */
.head-article-title {
  font-weight: bold;
  color: #474645;
  margin-bottom: 15px;
}
.head-article-title:hover {
  text-decoration: underline;
}
/* 文章内容 */
.head-article-content {
  font-size: 12px;
  line-height: 25px;
  margin-bottom: 15px;
}
/* 文章分类，发表时间，留言等信息 */
.head-article-other {
  font-size: 12px;
}
/* 分类和发表时间 */
.class-and-date {
  float: left;
}
/* 分类图标字体 */
.fa-tag {
  color: #f8a8a8;
  font-size: 14px;
}
.fa-tag::before {
  vertical-align: middle;
}
/* 分类文本颜色不同 */
.tag-text {
  color: #759b08;
  margin-left: 4px;
  font-size: 12px;
  height: 14px;
  line-height: 14px;
  display: inline-block;
}
/* 鼠标移入出现下划线 */
.tag-text .a-tag:hover {
  text-decoration: underline;
}
/* 时间，留言，阅读量，点赞文本 */
.date-text,
.msg-text,
.eye-text,
.thumbs-text {
  color: #999999;
  margin-left: 4px;
  font-size: 12px;
  height: 14px;
  line-height: 14px;
  display: inline-block;
}
/* 时间图标字体 */
.fa-clock-o {
  color: #69c8e9;
  margin-left: 10px;
  font-size: 14px;
}
/* 时间图标文本于文本垂直对齐 */
.fa-clock-o::before {
  vertical-align: middle;
}
/* 留言，阅读量，点赞 右浮动 */
.msg-and-thumbs {
  float: right;
}
.a-msg:hover i span {
  text-decoration: underline;
}
/* 鼠标移入点赞变色 */
.a-thumbs:hover i {
  color: #84c1e9;
}
.a-thumbs:hover i span {
  color: #84c1e9;
}
/* 留言，阅读量，点赞图标文本 */
.fa-comment-o,
.fa-eye,
.fa-thumbs-o-up {
  color: #969ea8;
  font-size: 14px;
  margin: 0 5px;
}
.mpage{
  margin-top: 10px;
}
</style>

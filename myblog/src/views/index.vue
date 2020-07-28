<template>
  <div class="container">
    <Header></Header>
    <div class="main-wrapper">
      <div class="main">
        <!-- 轮播图 -->
        <div class="carousel">
          <el-carousel height="400px">
            <el-carousel-item v-for="carousel in carousels" :key="carousel">
              <router-link :to="{name:'BlogDetail',params:{blogId:carousel.blogId}}">
                <img :src="carousel.img" alt="pekka">
              </router-link> 
            </el-carousel-item>
          </el-carousel>
        </div>
        <!-- 推荐文章 -->
        <div class="recommend-article">
          <h2 class="title">推荐文章</h2> 
          <el-divider></el-divider>
          <div class="articles">
            <div class="article" v-for="rBlog in recommendBlogs" :key="rBlog">
              <router-link :to="{name:'BlogDetail',params:{blogId:rBlog.blogId}}">
                <div class="article-img">
                  <img :src="rBlog.img" alt="pekka">
                </div>
                <div class="article-info">
                  <p class="article-title">{{rBlog.title}}</p>
                  <span class="article-date">{{rBlog.createdate}}</span>
                  <span class="article-hits">{{rBlog.hits}}</span>
                </div>
              </router-link>
            </div>
            <el-divider></el-divider>
            <!-- <div class="article">
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
            </div> -->
          </div>
        </div>
        <!-- 最新文章 -->
        <div class="newest-articles-wrapper ">
            <div class="newest-articles-title">
              最新文章
            </div>
            <div class="newest-articles">
              <div class="newest-article">
                  <div class="newest-article-img">
                    <a href="javascript:;"><img src="../../static/article1.png" alt="ES6的十大特性"></a>
                  </div>
                  <div class="newest-article-info">
                    <a href="javascript:;"><p class="newest-article-title">ES6的十大特性</p></a>
                    <div class="newest-article-content">
                      ES6（ECMAScript2015）的出现，无疑给前端开发人员带来了新的惊喜，
                      它包含了一些很棒的新特性，可以更加方便的实现很多复杂的操作，
                      提高开发人员的效率。实际上, 它是一种新的javascript规范...<a href="javascript:;">[详细]</a>
                    </div>
                    <div class="newest-article-other">
                      <!-- 分类和时间 -->
                      <span class="class-and-date">
                        <i class="fa fa-tag"><span class="tag-text"><a class="a-tag" href="javascript:;">Vue</a></span></i>
                        <i class="fa fa-clock-o"><span class="date-text">2020-07-26</span></i>                   
                      </span>
                      <!-- 留言，点赞 -->
                      <span class="msg-and-thumbs">
                        <a class="a-msg" href="javascript:;"><i class="fa fa-comment-o"><span class="msg-text">17</span></i></a>
                        <i class="fa fa-eye"><span class="eye-text">5.1k</span></i>
                        <a class="a-thumbs" href="javascript:;"><i class="fa fa-thumbs-o-up"><span class="thumbs-text">121</span></i></a>
                        </span>
                    </div>
                  </div>
              </div>
              <div class="line"></div>
                <div class="newest-article">
                  <div class="newest-article-img">
                    <a href="javascript:;"><img src="../../static/article1.png" alt="ES6的十大特性"></a>
                  </div>
                  <div class="newest-article-info">
                    <a href="javascript:;"><p class="newest-article-title">ES6的十大特性</p></a>
                    <div class="newest-article-content">
                      ES6（ECMAScript2015）的出现，无疑给前端开发人员带来了新的惊喜，
                      它包含了一些很棒的新特性，可以更加方便的实现很多复杂的操作，
                      提高开发人员的效率。实际上, 它是一种新的javascript规范...<a href="javascript:;">[详细]</a>
                    </div>
                    <div class="newest-article-other">
                      <!-- 分类和时间 -->
                      <span class="class-and-date">
                        <i class="fa fa-tag"><span class="tag-text"><a class="a-tag" href="javascript:;">Vue</a></span></i>
                        <i class="fa fa-clock-o"><span class="date-text">2020-07-26</span></i>                   
                      </span>
                      <!-- 留言，点赞 -->
                      <span class="msg-and-thumbs">
                        <a class="a-msg" href="javascript:;"><i class="fa fa-comment-o"><span class="msg-text">17</span></i></a>
                        <i class="fa fa-eye"><span class="eye-text">5.1k</span></i>
                        <a class="a-thumbs" href="javascript:;"><i class="fa fa-thumbs-o-up"><span class="thumbs-text">121</span></i></a>
                      </span>
                    </div>
                  </div>
              </div>
              <div class="line"></div>
                <div class="newest-article">
                  <div class="newest-article-img">
                    <a href="javascript:;"><img src="../../static/article1.png" alt="ES6的十大特性"></a>
                  </div>
                  <div class="newest-article-info">
                    <a href="javascript:;"><p class="newest-article-title">ES6的十大特性</p></a>
                    <div class="newest-article-content">
                      ES6（ECMAScript2015）的出现，无疑给前端开发人员带来了新的惊喜，
                      它包含了一些很棒的新特性，可以更加方便的实现很多复杂的操作，
                      提高开发人员的效率。实际上, 它是一种新的javascript规范...<a href="javascript:;">[详细]</a>
                    </div>
                    <div class="newest-article-other">
                      <!-- 分类和时间 -->
                      <span class="class-and-date">
                        <i class="fa fa-tag"><span class="tag-text"><a class="a-tag" href="javascript:;">Vue</a></span></i>
                        <i class="fa fa-clock-o"><span class="date-text">2020-07-26</span></i>                   
                      </span>
                      <!-- 留言，点赞 -->
                      <span class="msg-and-thumbs">
                        <a class="a-msg" href="javascript:;"><i class="fa fa-comment-o"><span class="msg-text">17</span></i></a>
                        <i class="fa fa-eye"><span class="eye-text">5.1k</span></i>
                        <a class="a-thumbs" href="javascript:;"><i class="fa fa-thumbs-o-up"><span class="thumbs-text">121</span></i></a>
                        </span>
                    </div>
                  </div>
              </div>
              <div class="line"></div>
              <div class="newest-article">
                  <div class="newest-article-img">
                    <a href="javascript:;"><img src="../../static/article1.png" alt="ES6的十大特性"></a>
                  </div>
                  <div class="newest-article-info">
                    <a href="javascript:;"><p class="newest-article-title">ES6的十大特性</p></a>
                    <div class="newest-article-content">
                      ES6（ECMAScript2015）的出现，无疑给前端开发人员带来了新的惊喜，
                      它包含了一些很棒的新特性，可以更加方便的实现很多复杂的操作，
                      提高开发人员的效率。实际上, 它是一种新的javascript规范...<a href="javascript:;">[详细]</a>
                    </div>
                    <div class="newest-article-other">
                      <!-- 分类和时间 -->
                      <span class="class-and-date">
                        <i class="fa fa-tag"><span class="tag-text"><a class="a-tag" href="javascript:;">Vue</a></span></i>
                        <i class="fa fa-clock-o"><span class="date-text">2020-07-26</span></i>                   
                      </span>
                      <!-- 留言，点赞 -->
                      <span class="msg-and-thumbs">
                        <a class="a-msg" href="javascript:;"><i class="fa fa-comment-o"><span class="msg-text">17</span></i></a>
                        <i class="fa fa-eye"><span class="eye-text">5.1k</span></i>
                        <a class="a-thumbs" href="javascript:;"><i class="fa fa-thumbs-o-up"><span class="thumbs-text">121</span></i></a>
                        </span>
                    </div>
                  </div>
              </div>
              <div class="line"></div>
              <div class="newest-article">
                  <div class="newest-article-img">
                    <a href="javascript:;"><img src="../../static/article1.png" alt="ES6的十大特性"></a>
                  </div>
                  <div class="newest-article-info">
                    <a href="javascript:;"><p class="newest-article-title">ES6的十大特性</p></a>
                    <div class="newest-article-content">
                      ES6（ECMAScript2015）的出现，无疑给前端开发人员带来了新的惊喜，
                      它包含了一些很棒的新特性，可以更加方便的实现很多复杂的操作，
                      提高开发人员的效率。实际上, 它是一种新的javascript规范...<a href="javascript:;">[详细]</a>
                    </div>
                    <div class="newest-article-other">
                      <!-- 分类和时间 -->
                      <span class="class-and-date">
                        <i class="fa fa-tag"><span class="tag-text"><a class="a-tag" href="javascript:;">Vue</a></span></i>
                        <i class="fa fa-clock-o"><span class="date-text">2020-07-26</span></i>                   
                      </span>
                      <!-- 留言，点赞 -->
                      <span class="msg-and-thumbs">
                        <a class="a-msg" href="javascript:;"><i class="fa fa-comment-o"><span class="msg-text">17</span></i></a>
                        <i class="fa fa-eye"><span class="eye-text">5.1k</span></i>
                        <a class="a-thumbs" href="javascript:;"><i class="fa fa-thumbs-o-up"><span class="thumbs-text">121</span></i></a>
                        </span>
                    </div>
                  </div>
              </div>
              <div class="line"></div>
              <div class="newest-article">
                  <div class="newest-article-img">
                    <a href="javascript:;"><img src="../../static/article1.png" alt="ES6的十大特性"></a>
                  </div>
                  <div class="newest-article-info">
                    <a href="javascript:;"><p class="newest-article-title">ES6的十大特性</p></a>
                    <div class="newest-article-content">
                      ES6（ECMAScript2015）的出现，无疑给前端开发人员带来了新的惊喜，
                      它包含了一些很棒的新特性，可以更加方便的实现很多复杂的操作，
                      提高开发人员的效率。实际上, 它是一种新的javascript规范...<a href="javascript:;">[详细]</a>
                    </div>
                    <div class="newest-article-other">
                      <!-- 分类和时间 -->
                      <span class="class-and-date">
                        <i class="fa fa-tag"><span class="tag-text"><a class="a-tag" href="javascript:;">Vue</a></span></i>
                        <i class="fa fa-clock-o"><span class="date-text">2020-07-26</span></i>                   
                      </span>
                      <!-- 留言，点赞 -->
                      <span class="msg-and-thumbs">
                        <a class="a-msg" href="javascript:;"><i class="fa fa-comment-o"><span class="msg-text">17</span></i></a>
                        <i class="fa fa-eye"><span class="eye-text">5.1k</span></i>
                        <a class="a-thumbs" href="javascript:;"><i class="fa fa-thumbs-o-up"><span class="thumbs-text">121</span></i></a>
                        </span>
                    </div>
                  </div>
              </div>
              <div class="line"></div>
              <div class="newest-article">
                  <div class="newest-article-img">
                    <a href="javascript:;"><img src="../../static/article1.png" alt="ES6的十大特性"></a>
                  </div>
                  <div class="newest-article-info">
                    <a href="javascript:;"><p class="newest-article-title">ES6的十大特性</p></a>
                    <div class="newest-article-content">
                      ES6（ECMAScript2015）的出现，无疑给前端开发人员带来了新的惊喜，
                      它包含了一些很棒的新特性，可以更加方便的实现很多复杂的操作，
                      提高开发人员的效率。实际上, 它是一种新的javascript规范...<a href="javascript:;">[详细]</a>
                    </div>
                    <div class="newest-article-other">
                      <!-- 分类和时间 -->
                      <span class="class-and-date">
                        <i class="fa fa-tag"><span class="tag-text"><a class="a-tag" href="javascript:;">Vue</a></span></i>
                        <i class="fa fa-clock-o"><span class="date-text">2020-07-26</span></i>                   
                      </span>
                      <!-- 留言，点赞 -->
                      <span class="msg-and-thumbs">
                        <a class="a-msg" href="javascript:;"><i class="fa fa-comment-o"><span class="msg-text">17</span></i></a>
                        <i class="fa fa-eye"><span class="eye-text">5.1k</span></i>
                        <a class="a-thumbs" href="javascript:;"><i class="fa fa-thumbs-o-up"><span class="thumbs-text">121</span></i></a>
                        </span>
                    </div>
                  </div>
              </div>
              <div class="line"></div>
              <div class="newest-article">
                  <div class="newest-article-img">
                    <a href="javascript:;"><img src="../../static/article1.png" alt="ES6的十大特性"></a>
                  </div>
                  <div class="newest-article-info">
                    <a href="javascript:;"><p class="newest-article-title">ES6的十大特性</p></a>
                    <div class="newest-article-content">
                      ES6（ECMAScript2015）的出现，无疑给前端开发人员带来了新的惊喜，
                      它包含了一些很棒的新特性，可以更加方便的实现很多复杂的操作，
                      提高开发人员的效率。实际上, 它是一种新的javascript规范...<a href="javascript:;">[详细]</a>
                    </div>
                    <div class="newest-article-other">
                      <!-- 分类和时间 -->
                      <span class="class-and-date">
                        <i class="fa fa-tag"><span class="tag-text"><a class="a-tag" href="javascript:;">Vue</a></span></i>
                        <i class="fa fa-clock-o"><span class="date-text">2020-07-26</span></i>                   
                      </span>
                      <!-- 留言，点赞 -->
                      <span class="msg-and-thumbs">
                        <a class="a-msg" href="javascript:;"><i class="fa fa-comment-o"><span class="msg-text">17</span></i></a>
                        <i class="fa fa-eye"><span class="eye-text">5.1k</span></i>
                        <a class="a-thumbs" href="javascript:;"><i class="fa fa-thumbs-o-up"><span class="thumbs-text">121</span></i></a>
                        </span>
                    </div>
                  </div>
              </div>
              <div class="line"></div>
              <div class="newest-article">
                  <div class="newest-article-img">
                    <a href="javascript:;"><img src="../../static/article1.png" alt="ES6的十大特性"></a>
                  </div>
                  <div class="newest-article-info">
                    <a href="javascript:;"><p class="newest-article-title">ES6的十大特性</p></a>
                    <div class="newest-article-content">
                      ES6（ECMAScript2015）的出现，无疑给前端开发人员带来了新的惊喜，
                      它包含了一些很棒的新特性，可以更加方便的实现很多复杂的操作，
                      提高开发人员的效率。实际上, 它是一种新的javascript规范...<a href="javascript:;">[详细]</a>
                    </div>
                    <div class="newest-article-other">
                      <!-- 分类和时间 -->
                      <span class="class-and-date">
                        <i class="fa fa-tag"><span class="tag-text"><a class="a-tag" href="javascript:;">Vue</a></span></i>
                        <i class="fa fa-clock-o"><span class="date-text">2020-07-26</span></i>                   
                      </span>
                      <!-- 留言，点赞 -->
                      <span class="msg-and-thumbs">
                        <a class="a-msg" href="javascript:;"><i class="fa fa-comment-o"><span class="msg-text">17</span></i></a>
                        <i class="fa fa-eye"><span class="eye-text">5.1k</span></i>
                        <a class="a-thumbs" href="javascript:;"><i class="fa fa-thumbs-o-up"><span class="thumbs-text">121</span></i></a>
                        </span>
                    </div>
                  </div>
              </div>
              <div class="line"></div>
              <div class="newest-article">
                  <div class="newest-article-img">
                    <a href="javascript:;"><img src="../../static/article1.png" alt="ES6的十大特性"></a>
                  </div>
                  <div class="newest-article-info">
                    <a href="javascript:;"><p class="newest-article-title">ES6的十大特性</p></a>
                    <div class="newest-article-content">
                      ES6（ECMAScript2015）的出现，无疑给前端开发人员带来了新的惊喜，
                      它包含了一些很棒的新特性，可以更加方便的实现很多复杂的操作，
                      提高开发人员的效率。实际上, 它是一种新的javascript规范...<a href="javascript:;">[详细]</a>
                    </div>
                    <div class="newest-article-other">
                      <!-- 分类和时间 -->
                      <span class="class-and-date">
                        <i class="fa fa-tag"><span class="tag-text"><a class="a-tag" href="javascript:;">Vue</a></span></i>
                        <i class="fa fa-clock-o"><span class="date-text">2020-07-26</span></i>                   
                      </span>
                      <!-- 留言，点赞 -->
                      <span class="msg-and-thumbs">
                        <a class="a-msg" href="javascript:;"><i class="fa fa-comment-o"><span class="msg-text">17</span></i></a>
                        <i class="fa fa-eye"><span class="eye-text">5.1k</span></i>
                        <a class="a-thumbs" href="javascript:;"><i class="fa fa-thumbs-o-up"><span class="thumbs-text">121</span></i></a>
                        </span>
                    </div>
                  </div>
              </div>
              <div class="line"></div>
              <div class="newest-article">
                  <div class="newest-article-img">
                    <a href="javascript:;"><img src="../../static/article1.png" alt="ES6的十大特性"></a>
                  </div>
                  <div class="newest-article-info">
                    <a href="javascript:;"><p class="newest-article-title">ES6的十大特性</p></a>
                    <div class="newest-article-content">
                      ES6（ECMAScript2015）的出现，无疑给前端开发人员带来了新的惊喜，
                      它包含了一些很棒的新特性，可以更加方便的实现很多复杂的操作，
                      提高开发人员的效率。实际上, 它是一种新的javascript规范...<a href="javascript:;">[详细]</a>
                    </div>
                    <div class="newest-article-other">
                      <!-- 分类和时间 -->
                      <span class="class-and-date">
                        <i class="fa fa-tag"><span class="tag-text"><a class="a-tag" href="javascript:;">Vue</a></span></i>
                        <i class="fa fa-clock-o"><span class="date-text">2020-07-26</span></i>                   
                      </span>
                      <!-- 留言，点赞 -->
                      <span class="msg-and-thumbs">
                        <a class="a-msg" href="javascript:;"><i class="fa fa-comment-o"><span class="msg-text">17</span></i></a>
                        <i class="fa fa-eye"><span class="eye-text">5.1k</span></i>
                        <a class="a-thumbs" href="javascript:;"><i class="fa fa-thumbs-o-up"><span class="thumbs-text">121</span></i></a>
                        </span>
                    </div>
                  </div>
              </div>
              <div class="line"></div>
              <div class="newest-article">
                  <div class="newest-article-img">
                    <a href="javascript:;"><img src="../../static/article1.png" alt="ES6的十大特性"></a>
                  </div>
                  <div class="newest-article-info">
                    <a href="javascript:;"><p class="newest-article-title">ES6的十大特性</p></a>
                    <div class="newest-article-content">
                      ES6（ECMAScript2015）的出现，无疑给前端开发人员带来了新的惊喜，
                      它包含了一些很棒的新特性，可以更加方便的实现很多复杂的操作，
                      提高开发人员的效率。实际上, 它是一种新的javascript规范...<a href="javascript:;">[详细]</a>
                    </div>
                    <div class="newest-article-other">
                      <!-- 分类和时间 -->
                      <span class="class-and-date">
                        <i class="fa fa-tag"><span class="tag-text"><a class="a-tag" href="javascript:;">Vue</a></span></i>
                        <i class="fa fa-clock-o"><span class="date-text">2020-07-26</span></i>                   
                      </span>
                      <!-- 留言，点赞 -->
                      <span class="msg-and-thumbs">
                        <a class="a-msg" href="javascript:;"><i class="fa fa-comment-o"><span class="msg-text">17</span></i></a>
                        <i class="fa fa-eye"><span class="eye-text">5.1k</span></i>
                        <a class="a-thumbs" href="javascript:;"><i class="fa fa-thumbs-o-up"><span class="thumbs-text">121</span></i></a>
                        </span>
                    </div>
                  </div>
              </div>
              <div class="line"></div>
              <div class="newest-article">
                  <div class="newest-article-img">
                    <a href="javascript:;"><img src="../../static/article1.png" alt="ES6的十大特性"></a>
                  </div>
                  <div class="newest-article-info">
                    <a href="javascript:;"><p class="newest-article-title">ES6的十大特性</p></a>
                    <div class="newest-article-content">
                      ES6（ECMAScript2015）的出现，无疑给前端开发人员带来了新的惊喜，
                      它包含了一些很棒的新特性，可以更加方便的实现很多复杂的操作，
                      提高开发人员的效率。实际上, 它是一种新的javascript规范...<a href="javascript:;">[详细]</a>
                    </div>
                    <div class="newest-article-other">
                      <!-- 分类和时间 -->
                      <span class="class-and-date">
                        <i class="fa fa-tag"><span class="tag-text"><a class="a-tag" href="javascript:;">Vue</a></span></i>
                        <i class="fa fa-clock-o"><span class="date-text">2020-07-26</span></i>                   
                      </span>
                      <!-- 留言，点赞 -->
                      <span class="msg-and-thumbs">
                        <a class="a-msg" href="javascript:;"><i class="fa fa-comment-o"><span class="msg-text">17</span></i></a>
                        <i class="fa fa-eye"><span class="eye-text">5.1k</span></i>
                        <a class="a-thumbs" href="javascript:;"><i class="fa fa-thumbs-o-up"><span class="thumbs-text">121</span></i></a>
                        </span>
                    </div>
                  </div>
              </div>
              <div class="line"></div>
              <div class="newest-article">
                  <div class="newest-article-img">
                    <a href="javascript:;"><img src="../../static/article1.png" alt="ES6的十大特性"></a>
                  </div>
                  <div class="newest-article-info">
                    <a href="javascript:;"><p class="newest-article-title">ES6的十大特性</p></a>
                    <div class="newest-article-content">
                      ES6（ECMAScript2015）的出现，无疑给前端开发人员带来了新的惊喜，
                      它包含了一些很棒的新特性，可以更加方便的实现很多复杂的操作，
                      提高开发人员的效率。实际上, 它是一种新的javascript规范...<a href="javascript:;">[详细]</a>
                    </div>
                    <div class="newest-article-other">
                      <!-- 分类和时间 -->
                      <span class="class-and-date">
                        <i class="fa fa-tag"><span class="tag-text"><a class="a-tag" href="javascript:;">Vue</a></span></i>
                        <i class="fa fa-clock-o"><span class="date-text">2020-07-26</span></i>                   
                      </span>
                      <!-- 留言，点赞 -->
                      <span class="msg-and-thumbs">
                        <a class="a-msg" href="javascript:;"><i class="fa fa-comment-o"><span class="msg-text">17</span></i></a>
                        <i class="fa fa-eye"><span class="eye-text">5.1k</span></i>
                        <a class="a-thumbs" href="javascript:;"><i class="fa fa-thumbs-o-up"><span class="thumbs-text">121</span></i></a>
                        </span>
                    </div>
                  </div>
              </div>
              <div class="line"></div>
              <div class="newest-article">
                  <div class="newest-article-img">
                    <a href="javascript:;"><img src="../../static/article1.png" alt="ES6的十大特性"></a>
                  </div>
                  <div class="newest-article-info">
                    <a href="javascript:;"><p class="newest-article-title">ES6的十大特性</p></a>
                    <div class="newest-article-content">
                      ES6（ECMAScript2015）的出现，无疑给前端开发人员带来了新的惊喜，
                      它包含了一些很棒的新特性，可以更加方便的实现很多复杂的操作，
                      提高开发人员的效率。实际上, 它是一种新的javascript规范...<a href="javascript:;">[详细]</a>
                    </div>
                    <div class="newest-article-other">
                      <!-- 分类和时间 -->
                      <span class="class-and-date">
                        <i class="fa fa-tag"><span class="tag-text"><a class="a-tag" href="javascript:;">Vue</a></span></i>
                        <i class="fa fa-clock-o"><span class="date-text">2020-07-26</span></i>                   
                      </span>
                      <!-- 留言，点赞 -->
                      <span class="msg-and-thumbs">
                        <a class="a-msg" href="javascript:;"><i class="fa fa-comment-o"><span class="msg-text">17</span></i></a>
                        <i class="fa fa-eye"><span class="eye-text">5.1k</span></i>
                        <a class="a-thumbs" href="javascript:;"><i class="fa fa-thumbs-o-up"><span class="thumbs-text">121</span></i></a>
                        </span>
                    </div>
                  </div>
              </div>
              <div class="line"></div>
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
export default {
  components: { Header ,Footer},
  data() {
    return {
      newestBlogs:{},//最新博客
      carousels:{},//轮播图博客
      recommendBlogs:{}//推荐博客
    };
  },
  created(){
    console.log("首页加载。。。")
    this.getCarousels();
    this.getRBlogs();
  },
  methods:{
    getCarousels(){
      this.$axios({
        method: "get",
        url: "/getCarousels"
      }).then(res=>{
        this.carousels = res.data.data;
      })
    },
    getRBlogs(){
      this.$axios({
        method: "get",
        url: "/getRBlogs"
      }).then(res=>{
        this.recommendBlogs = res.data.data;
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

<style scope>

.container {
  background-color: #FFFBF0;
}
/* 主内容区外层 */
.main-wrapper{
  /* background-color: #FFFBF0; */
}
/* 主内容区 */
.main{
  width: 981px;
  margin-left: 250px;
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
  background-color: yellow;
}
.el-carousel__item img {
  margin: 0;
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
.articles /deep/ .el-divider--horizontal{
  margin: 0 !important;
}
.recommend-article /deep/ .el-divider--horizontal{
  margin: 0 !important;
}
/* 推荐文章 */
.recommend-article .articles{
  height: 469.4px;
  background-color: yellow;
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
  overflow: hidden;
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
  height: 170px;
  padding: 25px 0;
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
/* 分割线 */
.line{
  height: 1px;
  background-color: #BFAB86;
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


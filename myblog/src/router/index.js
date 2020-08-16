import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('@/views/index'),
      meta:{
        title: '拾忆往昔的个人博客网站'
      }
    },
    {
      path: '/HeadPage/:tagId',
      name: 'HeadPage',
      component: () => import('@/views/HeadPage'),
      meta:{
        title: '拾忆往昔的个人博客网站'
      }
    },
    {
      path: '/JavaPage/:tagId',
      name: 'JavaPage',
      component: () => import('@/views/JavaPage'),
      meta:{
        title: '拾忆往昔的个人博客网站'
      }
    },
    {
      path: '/EmotionPage/:tagId',
      name: 'EmotionPage',
      component: () => import('@/views/EmotionPage'),
      meta:{
        title: '拾忆往昔的个人博客网站'
      }
    },
    {
      path: '/OtherPage/:tagId',
      name: 'OtherPage',
      component: () => import('@/views/OtherPage'),
      meta:{
        title: '拾忆往昔的个人博客网站'
      }
    },
    {
      path: '/FilePage/:tagId',
      name: 'FilePage',
      component: () => import('@/views/FilePage'),
      meta:{
        title: '拾忆往昔的个人博客网站'
      }
    },
    {
      path: '/MessagePage/:tagId',
      name: 'MessagePage',
      component: () => import('@/views/MessagePage'),
      meta:{
        title: '拾忆往昔的个人博客网站'
      }
    },
    {
      path: '/About/:tagId',
      name: 'About',
      component: () => import('@/views/About'),
      meta:{
        title: '拾忆往昔的个人博客网站'
      }
    },
    {
      path: '/blog/:blogId',
      name: 'BlogDetail',
      component: () => import('@/views/BlogDetail'),
      meta:{
        title: '拾忆往昔的个人博客网站'
      }
    }
  ]
})

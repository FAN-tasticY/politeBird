import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'
import VueRouter from 'vue-router'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export let constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  // {
  //   path: '/404',
  //   component: () => import('@/views/404'),
  //   hidden: true
  // },

  {
    path: '/',
    component:Layout,
    redirect: '/myitem/interaction1',
  },


  {
    path: '/myitem',
    component: Layout,
    redirect: '/myitem/interaction1',
    name: 'MyItem',
    meta: { title: '互动管理', icon: 'el-icon-video-play' },
    children: [
      {
        path: 'interaction1',
        name: 'Interaction1',
        component: () => import('@/views/myItem/interaction/index'),
        meta: { title: '直播计划' }
      },
      {
        path: 'interaction2',
        name: 'Interaction2',
        component: () => import('@/views/myItem/interaction/interaction2.vue'),
        meta: { title: '直播管理' }
      },
      {
        path: 'interaction3',
        name: 'Interaction3',
        component: () => import('@/views/myItem/interaction/interaction3'),
        meta: { title: '直播历史' }
      }
    ]
  },
  {
    path: '/vipmanager',
    component: Layout,
    redirect: '/vipmanager/vipList',
    name: 'VipManager',
    meta: { title: '会员管理', icon: 'el-icon-video-play' },
    children: [
      {
        path: 'vipList',
        name: 'VipList',
        component: () => import('@/views/myItem/vipManager/vipList.vue'),
        meta: { title: '会员列表' }
      },
      {
        path: 'myvip',
        name: 'Myvip',
        component: () => import('@/views/myItem/vipManager/myVip.vue'),
        meta: { title: '我的会员' }
      }
    ]
  },
  {
    path: '/recoverManager',
    component: Layout,
    redirect: '/recoverManager/recoverCount',
    name: 'recoverManager',
    meta: { title: '康复管理', icon: 'el-icon-video-play' },
    children: [
      {
        path: 'recoverCount',
        name: 'RecoverCount',
        component: () => import('@/views/myItem/recoverManager/recoverCount.vue'),
        meta: { title: '康复评估' }
      },
      {
        path: 'countrecord',
        name: 'Countrecord',
        component: () => import('@/views/myItem/recoverManager/countRecord.vue'),
        meta: { title: '评估记录' }
      }
    ]
  },

  {
    path: '/guidemanager',
    component: Layout,
    redirect: '/guidemanager/guideplan',
    name: 'GuideManager',
    meta: { title: '指导管理', icon: 'el-icon-video-play' },
    children: [
      {
        path: 'guideplan',
        name: 'GuidePlan',
        component: () => import('@/views/myItem/guideManager/guidePlan.vue'),
        meta: { title: '指导计划' }
      },
      {
        path: 'myguide',
        name: 'MyGuide',
        component: () => import('@/views/myItem/guideManager/myGuide.vue'),
        meta: { title: '我的指导' }
      },
      {
        path: 'guiderecord',
        name: 'GuideRecord',
        component: () => import('@/views/myItem/guideManager/guideRecord.vue'),
        meta: { title: '指导记录' }
      }
    ]
  },

  {
    path: '/videoManager',
    component: Layout,
    redirect: '/videoManager/video',
    name: 'VideoManager',
    meta: { title: '视频管理', icon: 'el-icon-video-play' },
    children: [
      {
        path: 'video',
        name: 'Video',
        component: () => import('@/views/myItem/videoManager/video.vue'),
        meta: { title: '训练视频' }
      },
      {
        path: 'aboutus',
        name: 'AboutUs',
        component: () => import('@/views/myItem/aboutUs.vue'),
        meta: { title: '关于我们' }
      }
    ]
  },


  {
    path: '/online',
    component: Layout,
    redirect: '/online/dingtalk',
    name: 'online',
    meta: { title: '线上直播', icon: 'el-icon-video-play' },
    children: [
      {
        path: 'dingtalkManager',
        name: 'dingtalkManager',
        component: () => import('@/views/myItem/onlineLive/dingtalkManager.vue'),
        meta: { title: '直播管理' }
      },

      {
        path: 'dingtalk',
        name: 'dingtalk',
        component: () => import('@/views/myItem/onlineLive/dingtalk.vue'),
        meta: { title: '我的直播' }
      }
    ]
  },

  {
    path: '/doctorPort',
    component: Layout,
    redirect: '/doctorPort/taskPublish',
    name: 'doctorPort',
    meta: { title: '医技端口', icon: 'el-icon-video-play' },
    children: [
      {
        path: 'taskPublish',
        name: 'publish',
        component: () => import('@/views/myItem/doctorPort/taskPublish.vue'),
        meta: { title: '任务发布' }
      },
      {
        path: 'taskExam',
        name: 'exam',
        component: () => import('@/views/myItem/doctorPort/taskExam.vue'),
        meta: { title: '任务考核' }
      },
      {
        path: 'videoUpload',
        name: 'upload',
        component: () => import('@/views/myItem/doctorPort/videoUpload.vue'),
        meta: { title: '视频上传' }
      }
    ]
  },

  // 专家登录
  {
    path: '/professor',
    component: Layout,
    redirect: '/professor/video',
    name: 'VideoManager',
    meta: { title: '专家', icon: 'el-icon-video-play' },
    children: [
      {
        path: 'video',
        name: 'Video',
        component: () => import('@/views/myItem/videoManager/video.vue'),
        meta: { title: '训练视频' }
      },
      {
        path: 'aboutus',
        name: 'AboutUs',
        component: () => import('@/views/myItem/aboutUs.vue'),
        meta: { title: '关于我们' }
      }
    ]
  },
  
  {
    path: '/traineePort',
    component: Layout,
    redirect: '/traineePort/practiceTask',
    name: 'practiceTask',
    meta: { title: '实习任务', icon: 'el-icon-video-play' },
    children: [
      {
        path: 'practiceTask',
        name: 'Video',
        component: () => import('@/views/myItem/traineePort/practiceTask.vue'),
        meta: { title: '任务列表' }
      },
      {
        path: 'randomVisit',
        name: 'AboutUs',
        component: () => import('@/views/myItem/traineePort/randomVisit.vue'),
        meta: { title: '随访记录' }
      }
    ]
  },

  {
    path: '/recoverTrain',
    component: Layout,
    redirect: '/recoverTrain/bodyGuide',
    name: 'practiceTask',
    meta: { title: '康复训练', icon: 'el-icon-video-play' },
    children: [
      {
        path: 'bodyGuide',
        name: 'Video',
        component: () => import('@/views/myItem/recoverTrain/bodyGuide.vue'),
        meta: { title: '生理指导' }
      },
      {
        path: 'uploadVideo',
        name: 'AboutUs',
        component: () => import('@/views/myItem/recoverTrain/uploadVideo.vue'),
        meta: { title: '上传视频' }
      },
      {
        path: 'onlineConsult',
        name: 'AboutUs',
        component: () => import('@/views/myItem/recoverTrain/onlineConsult.vue'),
        meta: { title: '线上咨询' }
      },
      {
        path: 'todoList',
        name: 'AboutUs',
        component: () => import('@/views/myItem/recoverTrain/todoList.vue'),
        meta: { title: '待做任务' }
      },
      {
        path: 'taskList',
        name: 'AboutUs',
        component: () => import('@/views/myItem/recoverTrain/taskList.vue'),
        meta: { title: '任务列表' }
      },
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]




// 创建函数，根据状态决定返回哪一个

export function decideRoutes(state){

  let constantRoutes = [
    {
      path: '/login',
      component: () => import('@/views/login/index'),
      hidden: true
    },
  
    // {
    //   path: '/404',
    //   component: () => import('@/views/404'),
    //   hidden: true
    // },
  
    {
      path: '/',
      component:Layout,
      redirect: '/myitem/interaction1',
    },
  
  
    {
      path: '/myitem',
      component: Layout,
      redirect: '/myitem/interaction1',
      name: 'MyItem',
      meta: { title: '互动管理', icon: 'el-icon-video-play' },
      children: [
        {
          path: 'interaction1',
          name: 'Interaction1',
          component: () => import('@/views/myItem/interaction/index'),
          meta: { title: '直播计划' }
        },
        {
          path: 'interaction2',
          name: 'Interaction2',
          component: () => import('@/views/myItem/interaction/interaction2.vue'),
          meta: { title: '直播管理' }
        },
        {
          path: 'interaction3',
          name: 'Interaction3',
          component: () => import('@/views/myItem/interaction/interaction3'),
          meta: { title: '直播历史' }
        }
      ]
    },
    {
      path: '/vipmanager',
      component: Layout,
      redirect: '/vipmanager/vipList',
      name: 'VipManager',
      meta: { title: '会员管理', icon: 'el-icon-video-play' },
      children: [
        {
          path: 'vipList',
          name: 'VipList',
          component: () => import('@/views/myItem/vipManager/vipList.vue'),
          meta: { title: '会员列表' }
        },
        {
          path: 'myvip',
          name: 'Myvip',
          component: () => import('@/views/myItem/vipManager/myVip.vue'),
          meta: { title: '我的会员' }
        }
      ]
    },
    {
      path: '/recoverManager',
      component: Layout,
      redirect: '/recoverManager/recoverCount',
      name: 'RecoverManager',
      meta: { title: '康复管理', icon: 'el-icon-video-play' },
      children: [
        {
          path: 'recoverCount',
          name: 'RecoverCount',
          component: () => import('@/views/myItem/recoverManager/recoverCount.vue'),
          meta: { title: '康复评估' }
        },
        {
          path: 'countrecord',
          name: 'Countrecord',
          component: () => import('@/views/myItem/recoverManager/countRecord.vue'),
          meta: { title: '评估记录' }
        }
      ]
    },
  
    {
      path: '/guidemanager',
      component: Layout,
      redirect: '/guidemanager/guideplan',
      name: 'GuideManager',
      meta: { title: '指导管理', icon: 'el-icon-video-play' },
      children: [
        {
          path: 'guideplan',
          name: 'GuidePlan',
          component: () => import('@/views/myItem/guideManager/guidePlan.vue'),
          meta: { title: '指导计划' }
        },
        {
          path: 'myguide',
          name: 'MyGuide',
          component: () => import('@/views/myItem/guideManager/myGuide.vue'),
          meta: { title: '我的指导' }
        },
        {
          path: 'guiderecord',
          name: 'GuideRecord',
          component: () => import('@/views/myItem/guideManager/guideRecord.vue'),
          meta: { title: '指导记录' }
        }
      ]
    },
  
  
    {
      path: '/videoManager',
      component: Layout,
      redirect: '/videoManager/video',
      name: 'VideoManager',
      meta: { title: '视频管理', icon: 'el-icon-video-play' },
      children: [
        {
          path: 'video',
          name: 'Video',
          component: () => import('@/views/myItem/videoManager/video.vue'),
          meta: { title: '训练视频' }
        },
        {
          path: 'aboutus',
          name: 'AboutUs',
          component: () => import('@/views/myItem/aboutUs.vue'),
          meta: { title: '关于我们' }
        }
      ]
    },
    

    {
      path: '/traineePort',
      component: Layout,
      redirect: '/traineePort/practiceTask',
      name: 'practiceTask',
      meta: { title: '实习任务', icon: 'el-icon-video-play' },
      children: [
        {
          path: 'video',
          name: 'Video',
          component: () => import('@/views/myItem/traineePort/practiceTask.vue'),
          meta: { title: '任务列表' }
        },
        {
          path: 'aboutus',
          name: 'AboutUs',
          component: () => import('@/views/myItem/traineePort/randomVisit.vue'),
          meta: { title: '随访记录' }
        }
      ]
    },

    // 404 page must be placed at the end !!!
    { path: '*', redirect: '/404', hidden: true }
  ]
  // 医生登录
  if(state === 1){
    return constantRoutes
  }else if(state === 2){
    return []
  }
}





const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  // routes: constantRoutes
  routes:constantRoutes
  
})
const router = createRouter()


// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router

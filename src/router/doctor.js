import Layout from '@/layout'


const routes = [
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
      
      // 404 page must be placed at the end !!!
      { path: '*', redirect: '/404', hidden: true }
]

export default routes
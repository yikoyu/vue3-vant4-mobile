import type { RouteRecordRaw } from 'vue-router'

const Layout = () => import('@/layout/index.vue')

export const MY_ROUTE: RouteRecordRaw = {
  path: '/my',
  name: 'My',
  redirect: '/my/index',
  component: Layout,
  meta: {
    title: '我的',
    icon: 'i-mdi:user',
  },
  children: [
    {
      path: 'index',
      name: 'MyPage',
      meta: {
        keepAlive: false,
        hiddenHeader: true,
      },
      component: () => import('@/views/my/index.vue'),
    },

    {
      path: 'edit-user-info',
      name: 'MyEditUserInfo',
      meta: {
        title: '编辑个人信息',
        innerPage: true,
        hiddenHeader: true,
      },
      component: () => import('@/views/my/edit-user-info/index.vue'),
    },
    {
      path: 'edit-nickname',
      name: 'MyEditNickname',
      meta: {
        title: '修改昵称(该页面已缓存)',
        innerPage: true,
        keepAlive: true,
        hiddenHeader: true,
      },
      component: () => import('@/views/my/edit-nickname/index.vue'),
    },
    {
      path: 'edit-sign',
      name: 'MyEditSign',
      meta: {
        title: '修改签名',
        innerPage: true,
        hiddenHeader: true,
      },
      component: () => import('@/views/my/edit-sign/index.vue'),
    },

    {
      path: 'account-setting',
      name: 'MyAccountSetting',
      meta: {
        title: '账号与安全',
        innerPage: true,
        hiddenHeader: true,
      },
      component: () => import('@/views/my/account-setting/index.vue'),
    },

    {
      path: 'theme-setting',
      name: 'MyThemeSetting',
      meta: {
        title: '主题设置',
        innerPage: true,
        hiddenHeader: true,
      },
      component: () => import('@/views/my/theme-setting/index.vue'),
    },
  ],
}

export default MY_ROUTE

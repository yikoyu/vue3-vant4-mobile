import type { RouteRecordRaw } from 'vue-router'

const Layout = () => import('@/layout/index.vue')

export const DASHBOARD_ROUTE :RouteRecordRaw = {
  path: '/dashboard',
  name: 'Dashboard',
  redirect: '/dashboard/index',
  component: Layout,
  meta: {
    title: '主控台',
    icon: 'i-simple-icons:atlassian',
  },
  children: [
    {
      path: 'index',
      name: 'DashboardPage',
      meta: {
        keepAlive: false,
      },
      component: () => import('@/views/dashboard/index.vue'),
    },
  ],
}

export default DASHBOARD_ROUTE

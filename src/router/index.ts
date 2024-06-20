import type { App } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { createRouterGuards } from './router-guards'
import { basicRoutes, asyncRoutes } from './routes';
import { useRouteStoreWidthOut } from '@/store/modules/route'

const routeStore = useRouteStoreWidthOut()

routeStore.setMenus(asyncRoutes)
routeStore.setRouters(basicRoutes.concat(asyncRoutes))

const router = createRouter({
  history: createWebHashHistory(''),
  routes: basicRoutes.concat(...asyncRoutes),
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

export function setupRouter(app: App) {
  app.use(router)
  // 创建路由守卫
  createRouterGuards(router)
}

export default router

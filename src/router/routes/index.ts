import { RouteRecordRaw } from "vue-router";

import { ErrorPageRoute, RootRoute, LoginRoute } from '@/router/routes/basic';

// import.meta.glob() 直接引入所有的模块 Vite 独有的功能
const modules = import.meta.glob('./modules/**/*.ts', { eager: true });
const routeModuleList: Array<RouteRecordRaw> = [];

// 加入到路由集合中
Object.keys(modules).forEach((key) => {
  const mod = (modules as Recordable)[key].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  routeModuleList.push(...modList);
});

export const asyncRoutes = [...routeModuleList];

// 未经许可的基本路由
export const basicRoutes = [LoginRoute, RootRoute, ErrorPageRoute];

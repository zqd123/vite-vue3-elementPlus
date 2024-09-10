import type { RouteRecordRaw } from "vue-router";
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("../views/menu/Login.vue"),
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import("../views/admin/admin.vue"),
  },
];

export default routes;

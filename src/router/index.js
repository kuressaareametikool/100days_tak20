import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import ui_001 from "../views/UI001.vue";
import ui_002 from "../views/UI002.vue";
import ui_003 from "../views/UI003.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/UI001",
    name: "UI001",
    component: ui_001,
  },
  {
    path: "/UI002",
    name: "UI002",
    component: ui_002,
  },
  {
    path: "/UI003",
    name: "UI003",
    component: ui_003,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
import { createWebHistory, createRouter } from "vue-router";
import Home from "../pages/Home/App.vue";
import About from "../pages/About/App.vue";
import Media from "../pages/MediaTemplate/App.vue";
import Login from "../pages/Login/App.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/media",
    name: "Media",
    component: Media
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
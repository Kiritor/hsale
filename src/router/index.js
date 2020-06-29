import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Person from "../views/person/index"
import About from "../views/About.vue"

Vue.use(VueRouter);
//解决重复点击路由报错的问题
const originalPush = VueRouter.prototype.push
    VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/index",
    name: "Home",
    component: Home,
  },
  {
    path: "/person",
    name: "person",
    component: Person
  },
  {
    path: "/cart",
    name: "About",
    component: About
  },
  {
    path: "/chat",
    name: "About",
    component: About
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
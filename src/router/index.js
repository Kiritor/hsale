import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home/index";
import Person from "../views/person/index"
import Cart from "../views/cart/index"
import Message from "../views/message/index"

Vue.use(VueRouter);
//解决重复点击路由报错的问题
const originalPush = VueRouter.prototype.push
    VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: "",
    name: "Home",
    component: Home,
    meta: {
      title: '首页',
      showNavTabs: true
    }
  },
  {
    path: "/index",
    name: "Home",
    component: Home,
    meta: {
      title: '首页',
      showNavTabs: true
    }
  },
  {
    path: "/person",
    name: "person",
    component: Person,
    meta: {
      title: '个人中心',
      showNavTabs: true
    }
  },
  {
    path: "/person/manager",
    name: "personManager",
    component: () => import('@/views/person/personManager'),
    meta: {
      title: '设置'
    }
  },
  {
    path: "/person/author",
    name: "author",
    component: () => import('@/views/person/author'),
    meta: {
      title: '作者简介'
    }
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
    meta: {
      tilte: '购物车',
      showNavTabs: true
    }
  },
  {
    path: "/message",
    name: "Message",
    component: Message,
    meta: {
      title: '消息中心',
      showNavTabs: true
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
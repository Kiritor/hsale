import Vue from "vue";
import VueCookie from "vue-cookie";
import VueRouter from "vue-router";
import Index from "../views/home/index";
import Person from "../views/person/index"
import Cart from "../views/cart/index"
import Message from "../views/message/index"

Vue.use(VueRouter);
Vue.use(VueCookie);
Vue.prototype.$cookie = VueCookie;
//解决重复点击路由报错的问题
const originalPush = VueRouter.prototype.push
    VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: "/",
    redirect: "/index"
  },
  {
    path: "/index",
    name: "Index",
    component: Index,
    meta: {
      title: '首页',
      showNavTabs: true,
      noNeedAuth: true
    }
  },
  {
    path: "/search",
    name: "search",
    component: () => import('@/views/search/search'),
    meta: {
      title: '搜索',
      noNeedAuth: false
    }
  },
  {
    path: "/goods",
    name: "goods",
    component: () => import('@/views/goods/goodsList'),
    meta: {
      title: '商品列表',
      noNeedAuth: false
    }
  },
  {
    path: "/shop",
    name: "shop",
    component: () => import('@/views/shop/shopList'),
    meta: {
      title: '店铺列表',
      noNeedAuth: false
    }
  },
  {
    path: "/person",
    name: "person",
    component: Person,
    meta: {
      title: '个人中心',
      showNavTabs: true,
      noNeedAuth: false
    }
  },
  {
    path: "/person/manager",
    name: "personManager",
    component: () => import('@/views/person/personManager/index'),
    meta: {
      title: '设置'
    }
  },
  {
    path: "/person/manager/info",
    name: "personInfoManager",
    component: () => import('@/views/person/personManager/personInfo'),
    meta: {
      title: '个人资料'
    }
  },
  {
    path: "/person/manager/address",
    name: "addressInfo",
    component: () => import('@/views/person/personManager/addressList'),
    meta: {
      title: '收货地址'
    }
  },
  {
    path: "/person/manager/address/add",
    name: "addAddress",
    component: () => import('@/views/person/personManager/addressAdd'),
    meta: {
      title: '新增地址'
    }
  },
  {
    path: "/person/manager/address/edit",
    name: "addAddress",
    component: () => import('@/views/person/personManager/addressEdit'),
    meta: {
      title: '编辑地址'
    }
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
    meta: {
      title: '购物车',
      showNavTabs: true,
      noNeedAuth: false
    }
  },
  {
    path: "/message",
    name: "Message",
    component: Message,
    meta: {
      title: '消息中心',
      noNeedAuth: false
    }
  },
  {
    path: "/login",
    name: "Login",
    component: () => import('@/views/login/index'),
    meta: {
      title: '登录'
    }
  }
];




const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

router.beforeEach(async (to,from,next) => {
  // 为页面设置title
  document.title = to.meta.title;
  //if (sessionStorage.getItem("isLogin")==null || sessionStorage.getItem("isLogin")==false) {
  if(VueCookie.get("isLogin")==null || VueCookie.get("isLogin")==false ) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (to.meta.noNeedAuth) {  
      //已经登录了
      next()
    } else {
      if (to.path === '/login') { // 如果是登录页面的话，直接next() -->解决注销后的循环执行bug
        next()
      } else {
        next({
          path: '/login',
          query: { returnUrl: to.fullPath }//把要跳转的地址作为参数传到下一步
        })
      }
    }
  } else {
    next() // 确保一定要调用 next()
  }
})
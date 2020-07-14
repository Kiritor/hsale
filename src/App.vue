<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar v-if="$route.meta.showNavTabs">
      <tab-bar-item path="/index" activeColor="#ff2150">
        <van-icon slot="item-icon" name="wap-home" size="18" />
        <van-icon slot="item-icon-active" name="wap-home" size="18" />
        <p slot="item-text">首页</p>
      </tab-bar-item>

      <tab-bar-item path="/message" activeColor="#ff2150">
        <van-icon slot="item-icon" name="chat" size="18" />
        <van-icon slot="item-icon-active" name="chat" size="18" />
        <p slot="item-text">消息</p>
      </tab-bar-item>

      <tab-bar-item path="/cart" activeColor="#ff2150">
        <van-icon slot="item-icon" name="shopping-cart" size="18" />
        <van-icon slot="item-icon-active" name="shopping-cart" size="18" />
        <p slot="item-text">购物车</p>
      </tab-bar-item>

      <tab-bar-item path="/person" activeColor="#ff2150">
        <van-icon slot="item-icon" name="manager" size="18" />
        <van-icon slot="item-icon-active" name="manager" size="18" />
        <p slot="item-text">我的</p>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "./components/tabbar/tabbar";
import TabBarItem from "./components/tabbar/tabbarItem";

export default {
  components: {
    TabBar,
    TabBarItem
  }
};
</script>

<style lang="less">
* {
  font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue",
    "PingFang SC", "Microsoft YaHei", "Source Han Sans SC", "Noto Sans CJK SC",
    "WenQuanYi Micro Hei", sans-serif;
  margin: 0;
  padding: 0;
}
html {
  /*隐藏滚动条，当IE下溢出，仍然可以滚动*/
  -ms-overflow-style: none;
  /*火狐下隐藏滚动条*/
  scrollbar-width: none;
}
/*Chrome下隐藏滚动条，溢出可以透明滚动*/
html::-webkit-scrollbar {
  width: 0px;
}

html,
body {
  width: 100%;
  height: 100%;
}

body {
  width: 100%;
  max-width: 640px;
  margin: 0 auto;
  color: #666;
  background: #f7f7f7;
  font-size: 12px;
  overflow-x: hidden;
}

ul,
li {
  list-style: none;
}

a {
  text-decoration: none;
  color: #666;
}
i {
  font-style: normal;
}

img {
  margin: 0;
  padding: 0;
  max-width: 100%;
  max-height: 100%;
  border: 0;
}
</style>

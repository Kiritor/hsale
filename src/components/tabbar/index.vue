<template>
<div class="nav-tabs">
  <ul>
    <li>
      <a href="index.html">
        <van-icon name="wap-home" size="18" color="#ff2150"/>
      </a>
       <span>
        <p class="active">首页</p>
        </span>
    </li>

    <li>
      <a href="index.html">
        <van-icon name="chat" size="18"/>
        <p>消息</p>
      </a>
    </li>

    <li>
      <a href="message.html">
        <van-icon name="shopping-cart" size="18"/>
        <p>购物车</p>
      </a>
    </li>
    <li>
      <a href="my.html">
        <van-icon name="manager" size="18"/>
        <p>我的</p>
      </a>
    </li>
  </ul>
</div>
</template>

<style scoped>
.nav-tabs {
  position: fixed;
  width: 100%;
  max-width: 640px;
  bottom: 0;
  background: #fff;
  z-index: 99999;
  padding-top: 4px;
  padding-bottom: 2px;
  border-top: 1px solid #f5f5f5;
  height: 40px;
}

.nav-tabs ul {
  overflow: hidden;
}

.nav-tabs ul li {
  float: left;
  width: 25%;
  text-align: center;
}
.nav-tabs ul li a{
  color: rgb(102, 102, 102);
}

.nav-tabs ul li p {
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', 'PingFang SC', 'Microsoft YaHei', 'Source Han Sans SC', 'Noto Sans CJK SC', 'WenQuanYi Micro Hei', sans-serif;
  font-size: 12px;
  padding-bottom: 4px;
}

.nav-tabs li .active {
  color: #ff2150;
}
</style>

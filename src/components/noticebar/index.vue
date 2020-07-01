<template>
  <div class="notice-bar">
    <!--
    <van-notice-bar scrollable background="#fff" left-icon="volume-o" text="商城开业狂欢,四重大礼等你来拿!" />
    -->
    <van-notice-bar :scrollable="false" background="#fff" left-icon="volume-o">
      <van-swipe class="noticeContent" vertical  :autoplay="3000" :show-indicators="false">
        <van-swipe-item>商城开业狂欢,四重大礼等你来拿!</van-swipe-item>
        <van-swipe-item>Vue.js商城练手项目~</van-swipe-item>
      </van-swipe>
    </van-notice-bar>
  </div>
</template>

<style scoped>
.notice-bar {
  padding: 0.4rem;
  border-top: 1px solid #f5f5f5;
  background: #ffffff;
  border-bottom: 1px solid #f5f5f5;
}

.notice-bar img {
  height: 2rem;
}
.notice-bar .noticeContent {
    height: 40px;
    line-height: 40px;
}
</style>
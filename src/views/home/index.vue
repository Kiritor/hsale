<template>
  <div>
    <div class="search-container">
      <search-bar></search-bar>
    </div>
    <div>
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(banner, index) in banners" :key="index">
          <img v-lazy="banner.img" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="clear"></div>
    <div class="menuContainer">
      <div class="menu">
        <van-grid :column-num="4" square :border="false">
          <van-grid-item v-for="(button,index) in buttons" :key="index">
            <img :src="button.img" />
            <div class="menu-text">{{ button.text }}</div>
          </van-grid-item>
        </van-grid>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBar from "@/components/search/index";
export default {
  components: {
    SearchBar
  },
  data() {
    return {
      banners: [
        {
          title: "1",
          url: "",
          img: require("@/assets/img/banner1.png")
        },
        {
          title: "2",
          url: "",
          img: require("@/assets/img/banner2.png")
        }
      ],
      buttons: [
        {
          text: "今日特惠",
          url: "",
          img: require("@/assets/img/typeicon1.png")
        },
        {
          text: "全球购",
          url: "",
          img: require("@/assets/img/typeicon2.png")
        },
        {
          text: "充值中心",
          url: "",
          img: require("@/assets/img/typeicon3.png")
        },
        {
          text: "我的积分",
          url: "",
          img: require("@/assets/img/typeicon4.png")
        },
        {
          text: "签到",
          url: "",
          img: require("@/assets/img/typeicon5.png")
        },
        {
          text: "优惠券",
          url: "",
          img: require("@/assets/img/typeicon6.png")
        },
        {
          text: "闪电购",
          url: "",
          img: require("@/assets/img/typeicon7.png")
        },
        {
          text: "分类",
          url: "",
          img: require("@/assets/img/typeicon8.png")
        }
      ]
    };
  }
};
</script>

<style scoped>
.search-container {
  padding: 0.3rem 0;
  position: fixed;
  top: 0%;
  width: 100%;
  z-index: 9999;
}

.my-swipe .van-swipe-item {
  color: #fff;
  height: 165px;
  width: 100%;
  text-align: center;
  overflow: hidden;
  position: relative;
}

.my-swipe .van-swipe-item img {
  width: 100%;
  height: 100%;
}
.menuContainer {
  width: 100%;
  background: #fff;
}
.menu {
  padding: 0.8rem 0.2rem;
}
.menu img {
  width: 44px;
  height: 44px;
}
.menu-text {
  margin-top: 0.3rem;
  font-size: 12px;
  text-align: center;
  color: #666;
}
</style>

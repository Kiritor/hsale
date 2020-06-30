<template>
<div>
    <!-- 顶部搜索按钮 -->
    <div class="search-container">
        <search-bar></search-bar>
    </div>
    <!-- 顶部轮播图 -->
    <div>
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="(banner, index) in banners" :key="index">
                <img v-lazy="banner.img" />
            </van-swipe-item>
        </van-swipe>
    </div>
    <div class="clear"></div>
    <!-- 首页工具按钮区 -->
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
    <!-- 通知 -->
    <div>
        <notice-bar></notice-bar>
    </div>
    <div class="kbox"></div>
    <!-- 限时折扣区 -->
    <div>
        <time-cost></time-cost>
    </div>
    <div class="kbox"></div>
    <!-- 胶囊广告 -->
    <div class="caps-ad">
        <img src="@/assets/img/ad.jpg" />
    </div>
    <div class="kbox" style="height: 50px"></div>
</div>
</template>

<script>
import SearchBar from "@/components/search/index";
import NoticeBar from "@/components/noticebar/index";
import TimeCost from "@/views/time-cost/index"
export default {
    components: {
        SearchBar,
        NoticeBar,
        TimeCost
    },
    data() {
        return {
            banners: [{
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
            buttons: [{
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
    padding-top: 0.8rem;
    padding-bottom: 0.6rem;
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
.caps-ad {
    width: 100%;
    display: block;
}
.caps-ad img {
    width: 100%;
    display: block;
}
</style>

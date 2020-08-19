<template>
  <div>
    <div class="search-header">
      <div class="header">
        <div class="left-arrow">
          <img src="@/assets/img/goback.png" @click="goback" />
        </div>
        <div class="search-header-content">
          <div class="e-block">
            <input class="search-header-input" v-model="key" />
          </div>
        </div>
        <div class="right-button" @click="gohome">
          <van-icon name="wap-home-o" size="16"/>
        </div>
      </div>
    </div>
    <div class="clear"></div>
    <!-- 搜索工具按钮区 -->
    <div class="search-toolbar">
      <ul>
        <li class="on">
          <a>综合</a>
        </li>
        <li>
          <a>销量</a>
        </li>
        <li>
          <a>价格</a>
          <span class="asc"></span>
          <span class="desc"></span>
        </li>
        <li>
          <a @click="goToShop">店铺</a>
        </li>
        <li>
          <a class="a_sx">筛选</a>
        </li>
      </ul>
    </div>
    <div class="clear"></div>
    <div class="hbox"></div>
    <!-- 商品列表 -->
    <div class="goods-content">
       <ul>
         <goods-item></goods-item>
         <goods-item></goods-item>
         <goods-item></goods-item>
         <goods-item></goods-item>
         <goods-item></goods-item>
         <goods-item></goods-item>
         <goods-item></goods-item>
         <goods-item></goods-item>
         <goods-item></goods-item>
         <goods-item></goods-item>
         <goods-item></goods-item>
         <goods-item></goods-item>
         <goods-item></goods-item>
         <goods-item></goods-item>
         <goods-item></goods-item>
       </ul>
    </div>
    <top></top>
  </div>
</template>

<script>
import GoodsItem from '@/views/goods/goodsItem.vue';
import Top from '@/components/top/index.vue';

export default {
  components: {
    GoodsItem,Top
  },
  data() {
    return {
      key: "",
    };
  },
  mounted() {
    this.key = decodeURIComponent(this.$route.query.key);
  },
  methods: {
    goback: function () {
      this.$router.go(-1);
    },
    //跳转店铺页面
    goToShop: function() {
      this.$router.push({path: "/shop",query: {key:this.key}});
    },
    gohome: function() {
      this.$router.push("/");
    }
  },
};
</script>

<style scoped>
.search-header {
  width: 100%;
  margin: 0 auto;
  position: fixed;
  z-index: 9999;
}
.search-header .header {
  padding: 0.5rem 0;
  height: 1.8rem;
  width: 100%;
  background: #fff;
  top: 0;
  border-bottom: 1px solid #eee;
}
.search-header .header .left-arrow {
  position: absolute;
  padding-left: 0.6rem;
  top: 0;
  left: 0;
  height: 1.8rem;
}
.left-arrow img {
  border: 0;
  max-width: 100%;
  max-height: 100%;
  height: 1.1rem;
  padding-top: 0.9rem;
}
.search-header .search-header-content {
  width: 80%;
  margin: 0 auto;
  height: 1.8rem;
  line-height: 1.8rem;
  text-align: center;
  background: #f7f7f7;
  border: 1px solid #f7f7f7;
  box-sizing: border-box;
  border-radius: 2px;
}
.search-header-content .search-header-input {
  float: left;
  width: 80%;
  outline: none;
  border: 0;
  height: 1.8rem;
  background: none;
  font-size: 0.8rem;
  color: #999;
  text-indent: 0.5rem;
  line-height: 1.8rem;
}
.search-header-content img {
  float: right;
  border: 0;
  max-width: 100%;
  max-height: 100%;
  height: 1.6rem;
  margin-top: 0.1rem;
}
.search-header .header .right-button {
  position: absolute;
  right: 0;
  top: 0;
  padding-right: 0.6rem;
  height: 2.8rem;
  line-height: 2.8rem;
  margin-top: 0.2rem;
}

.right-button span {
  color: #666;
  font-size: 0.8rem;
}

.search-toolbar {
  width: 100%;
  background: #fff;
  position: fixed;
  z-index: 9999;
  top: 2.9rem;
}
.search-toolbar ul li {
  float: left;
  width: 20%;
  text-align: center;
  z-index: 9999;
}
.search-toolbar ul li.on {
  border-bottom: 2px solid #ff2150;
  box-sizing: border-box;
}
.search-toolbar ul li a {
  height: 100%;
  font-size: 0.9rem;
  text-align: center;
  height: 2.5rem;
  line-height: 2.5rem;
}
.search-toolbar ul li .asc {
    width: 0px;
    height: 0px;
    font-size: 0;
    line-height: 0;
    border-color: #fff #fff #a5a5a5 #fff;
    border-width: 0px 4px 4px;
    display: inline-block;
    border-style: solid;
    position: relative;
    top: -5px;
    left: 5px;
}

.search-toolbar ul li .desc {
    width: 0px;
    height: 0px;
    font-size: 0;
    line-height: 0;
    display: inline-block;
    border-style: solid;
    border-color: #a5a5a5 #fff #fff #fff;
    border-width: 4px 4px 0px;
    position: relative;
    top: 1px;
    left: -3px;
}

.goods-content {
  padding: 0 0.2rem;
  background: #f7f7f7;
}
.hbox {
    width: 100%;
    height: 5.4rem;
    background: #fff;
    overflow: hidden;
}
</style>
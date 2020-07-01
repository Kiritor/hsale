<template>
  <div class="hotContainer">
    <div class="buy-box">
      <p>
        <span>品牌</span>特卖
        <i class="tip">知名品牌,特惠销售</i>
      </p>
      <a class="more"></a>
      <a class="btn">三折起</a>
    </div>
    <div class="hot-M">
      <div class="hot-L"></div>
      <div class="hot-R">
        <van-grid :column-num="2">
          <van-grid-item v-for="(item,index) in brandItems" :key="index">
            <img :src="item.img" />
          </van-grid-item>
        </van-grid>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      brandItems: [
        {
          img: require("@/assets/img/8.png"),
          url: ""
        },
        {
          img: require("@/assets/img/9.png"),
          url: ""
        },
        {
          img: require("@/assets/img/10.png"),
          url: ""
        },
        {
          img: require("@/assets/img/11.png"),
          url: ""
        }
      ]
    };
  }
};
</script>

<style scoped>
.hotContainer {
  width: 100%;
  background: #fff;
}

.hotContainer .buy-box {
  padding: 0.5rem;
  height: 1.8rem;
  border-bottom: 1px solid #f5f5f5;
  overflow: hidden;
  padding-right: 0.2rem;
}

.hotContainer .buy-box p {
  font-size: 0.875rem;
  float: left;
  height: 1.8rem;
  line-height: 1.8rem;
  overflow: hidden;
  color: #333;
}

.hotContainer .buy-box p span {
  color: #ff2150;
}

.hotContainer .buy-box p i.tip {
  font-size: 0.75rem;
  padding-left: 0.5rem;
  height: 1.8rem;
  line-height: 1.8rem;
  color: #666;
}

.hotContainer .buy-box a.more {
  float: right;
  height: 1.5rem;
  width: 1rem;
  margin-top: 0.25rem;
  background-image: url(~@/assets/img/more.png);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
}

.hotContainer .buy-box a.btn {
  display: block;
  float: right;
  padding: 0 0.3rem;
  box-sizing: border-box;
  border: 1px solid #ff2150;
  border-radius: 2px;
  height: 1.6rem;
  line-height: 1.6rem;
  margin-top: 0.1rem;
  margin-right: 0.2rem;
  font-size: 0.75rem;
  color: #ff2150;
}

.hotContainer .hot-M {
  height: 10rem;
  overflow: hidden;
  border-bottom: 1px solid #f5f5f5;
}

.hotContainer .hot-M .hot-L {
  width: 50%;
  height: 10rem;
  float: left;
  background-image: url("~@/assets/img/7.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
}

.hotContainer .hot-M .hot-R {
  width: 50%;
  height: 10rem;
  float: left;
}
.hot-R img {
    width: 50px;
    height: 50px;
}
</style>
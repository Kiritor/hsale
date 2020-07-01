<template>
  <div class="hot-activity-box">
    <div class="buy-box">
      <p>
        <span>热门</span>活动
        <i class="tip">太热门了,要挤爆拉!</i>
      </p>
      <a class="more">更多</a>
    </div>
    <div class="hot-M">
      <div class="hot-M-L"></div>
      <div class="hot-M-R">
        <div class="hot-M-R-item">
          <div class="item1"></div>
        </div>
        <div class="hot-M-R-item">
          <div class="item2 br"></div>
        </div>
        <div class="hot-M-R-item">
          <div class="item3"></div>
        </div>
        <div class="hot-M-R-item">
          <div class="item4 br"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.hot-activity-box {
  border-bottom: 1px solid #f5f5f5;
  background: #fff;
  border-top: 1px solid #f5f5f5;
}

.hot-activity-box .buy-box {
  padding: 0.5rem;
  height: 1.8rem;
  border-bottom: 1px solid #f5f5f5;
  overflow: hidden;
  padding-right: 0.2rem;
}

.hot-activity-box .buy-box p {
  font-size: 0.875rem;
  float: left;
  height: 1.8rem;
  line-height: 1.8rem;
  overflow: hidden;
  color: #333;
}

.hot-activity-box .buy-box p span {
  color: #ff2150;
}

.hot-activity-box .buy-box p i.tip {
  font-size: 0.75rem;
  padding-left: 0.5rem;
  height: 1.8rem;
  line-height: 1.8rem;
  color: #666;
}

.hot-activity-box .buy-box a.more {
  float: right;
  margin-right: 0.1rem;
  padding-right: 1rem;
  height: 1.8rem;
  line-height: 1.8rem;
  background-image: url(~@/assets/img/more.png);
  background-repeat: no-repeat;
  background-position: right center;
  background-size: 40% 70%;
}

.hot-activity-box .buy-box a.btn {
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

.hot-activity-box .hot-M {
  height: 12rem;
  overflow: hidden;
  border-bottom: 1px solid #f5f5f5;
}

.hot-M .hot-M-L {
  float: left;
  width: 50%;
  height: 12rem;
  box-sizing: border-box;
  border-right: 1px solid #f5f5f5;
  background-image: url("~@/assets/img/12.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
}

.hot-M .hot-M-R {
  float: left;
  width: 50%;
  height: 12rem;
  overflow: hidden;
}

.hot-M-R .hot-M-R-item {
  float: left;
  height: 6rem;
  width: 50%;
  box-sizing: border-box;
  border-right: 1px solid #f5f5f5;
}

.hot-M-R-item.br {
  border-right: 0;
}

.hot-M-R-item .item1 {
  background-image: url("~@/assets/img/13.png");
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
}

.hot-M-R-item .item2 {
  width: 100%;
  height: 100%;
  background-image: url("~@/assets/img/14.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
}

.hot-M-R-item .item3 {
  width: 100%;
  height: 100%;
  background-image: url("~@/assets/img/15.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
}

.hot-M-R-item .item4 {
  width: 100%;
  height: 100%;
  background-image: url("~@/assets/img/16.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
}
</style>
<template>
  <div>
    <van-nav-bar :title="cart" left-arrow @click-left="goBack" />
    <div class="kbox"></div>
    <div class="store-box">
      <div class="store-header">
        <div class="checkbox">
          <van-checkbox icon-size="18px" v-model="checked" checked-color="#ff2150"></van-checkbox>
        </div>
        <div class="content">解忧杂货铺</div>
        <div class="right">
          <img src="@/assets/img/quanicon.png" />
        </div>
      </div>
      <ul class="store-content">
        <li class="item" v-for="index in 6" :key="index">
          <div class="checkbox">
            <van-checkbox icon-size="18px" v-model="checked" checked-color="#ff2150"></van-checkbox>
          </div>
          <div class="img-box">
            <img src="@/assets/img/gwc1.png" class="item-img" />
          </div>
          <div class="item-content">
            <div class="item-content-1">
              <p class="p1">2015新款婚纱冬季新娘结婚韩版蕾...</p>
              <p class="p2">￥895.56</p>
            </div>
            <div class="item-content-2">
              <p class="p3">颜色：白色；尺码：XS</p>
              <p class="p4">￥495.9</p>
            </div>
            <div class="item-content-3">
              <div class="stepper">
                <van-stepper v-model="value" input-width="32px" button-size="24px" disable-input />
              </div>
              <div class="del">
                <van-icon name="delete" size="22" color="#999" />
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="kbox" style="height: 42px;clear: both"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cart: "购物车",
      checked: true,
      value: 1
    };
  },
  methods: {
    goBack: function() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.store-box {
  background: #fff;
}
.store-box .store-header {
  padding: 0.8rem 1rem;
  height: 1.2rem;
  line-height: 1.2rem;
  border-bottom: 1px solid #f5f5f5;
}
.checkbox {
  float: left;
  width: 1.2rem;
  height: 1.2rem;
  padding-right: 0.5rem;
}
.store-header .content {
  float: left;
  width: 60%;
  height: 1.2rem;
  overflow: hidden;
  font-size: 0.9rem;
}
.store-header .right {
  float: right;
  padding-right: 0.1rem;
}
.store-header .right img {
  height: 1.2rem;
}
.store-box .store-content {
  background: #fff;
}
.store-content .item {
  width: 100%;
  height: 4.5rem;
  padding: 0.5rem 0;
  border-bottom: 1px solid #f5f5f5;
  overflow: hidden;
}
.item .checkbox {
  height: 4.5rem;
  float: left;
  display: flex;
  box-orient: horizontal;
  box-pack: center;
  padding-left: 1rem;
}
.item .img-box {
  float: left;
  width: 4.5rem;
  height: 4.5rem;
  overflow: hidden;
  padding-right: 0.5rem;
}
.item img.item-img {
  width: 4.5rem;
  height: 4.5rem;
  border: none;
}
.item .item-content {
  flex: 1;
  height: 4.5rem;
}
.item .item-content .item-content-1 {
  height: 1rem;
  overflow: hidden;
}
.item-content-1 p.p1 {
  float: left;
  color: #333;
  font-size: 0.8rem;
  width: 70%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.item-content-1 p.p2 {
  float: right;
  font-size: 0.7rem;
  color: #999;
  text-decoration: line-through;
}
.item-content .item-content-2 {
  height: 1.05rem;
  padding-top: 0.2rem;
  overflow: hidden;
}
.item-content-2 p.p3 {
  float: left;
  color: #999;
  font-size: 0.8rem;
  width: 60%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.item-content-2 p.p4 {
  float: right;
  color: #ff2150;
  font-size: 1rem;
}
.item .item-content-3 {
  height: 1.5rem;
  overflow: hidden;
  padding-top: 0.7rem;
}
.item-content-3 .stepper {
  float: left;
}
.item-content-3 .del {
  float: right;
  padding-right: 1rem;
}
.del img {
  height: 1.1rem;
  margin-top: 0.1rem;
}
</style>
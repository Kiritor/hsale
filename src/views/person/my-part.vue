<template>
  <div class="my-part">
    <ul>
      <li>
        <p class="p1">0</p>
        <p class="p2">我的积分</p>
      </li>
      <li>
        <p class="p1">1</p>
        <p class="p2">优惠券</p>
      </li>
      <li>
        <p class="p1">10</p>
        <p class="p2">订单数量</p>
      </li>
      <li>
        <p class="p1">8</p>
        <p class="p2">支付订单</p>
      </li>
      <li>
        <img src="@/assets/img/cost_history.png" />
        <p class="p3">消费记录</p>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.my-part {
  position: relative;
  margin-top: -2rem;
  padding: 0 0.5rem;
}

.my-part ul {
  overflow: hidden;
  background: #fff;
  padding: 0.8rem;
  border-radius: 2px;
}

.my-part ul li {
  float: left;
  width: 20%;
  text-align: center;
}

.my-part ul li .p1 {
  text-align: center;
  color: #000;
  font-size: 0.8rem;
  line-height: 1.5rem;
}

.my-part ul li:last-child {
  border-left: 1px solid #eee;
  box-sizing: border-box;
}

.my-part ul li .p2 {
  text-align: center;
  color: #000;
  font-size: 0.75rem;
  line-height: 1.5rem;
}

.my-part ul li .p3 {
  text-align: center;
  color: #000;
}

.my-part ul li img {
  height: 1.5rem;
  border: 0;
}
</style>

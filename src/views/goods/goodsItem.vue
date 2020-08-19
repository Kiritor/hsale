<template>
  <li class="good-item">
    <a href="xq.html">
      <div class="listL">
        <img src="@/assets/img/dp3.png" />
      </div>
      <div class="listR">
        <div class="v1">高贵塔夫绸抹胸长拖尾婚纱高贵塔夫绸抹胸长拖尾婚纱</div>
        <div class="v2">
          <span>包邮</span>
        </div>
        <div class="v3">
          <p class="p1">
            ￥899
            <span>￥1600</span>
          </p>
          <p class="p2">364人付款</p>
        </div>
      </div>
    </a>
  </li>
</template>

<script>
export default {};
</script>

<style>
.good-item {
  background: #fff;
  height: 7rem;
  margin: 0.4rem auto;
  border-bottom: 1px solid #eee;
}
.good-item .listL {
  float: left;
  width: 7rem;
  padding-right: 0.8rem;
}
.good-item .listL img {
  width: 7rem;
  height: 7rem;
  border: 0;
}
.good-item .listR {
  flex: 1;
}
.good-item .listR .v1 {
  font-size: 0.75rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 1.2rem;
  color: #333;
  padding: 0.6rem 0.8rem;
  padding-left: 0;
}
.good-item .listR .v2 {
  padding: 0 0.8rem;
}
.good-item .listR .v2 span {
  box-sizing: border-box;
  border: 1px solid #ff2150;
  padding: 0.2rem 0.2rem;
  font-size: 10px;
  border-radius: 2px;
  color: #ff2150;
}
.good-item .listR .v2 img{
  height: 1.2rem;
  border: 0;
  float: right;
}

.good-item .listR .v3 {
  padding: 0 0.8rem;
  padding-top: 0.6rem;
}

.good-item .listR .v3 .p1 {
  float: left;
  font-size: 12px;
  color: #ff2150;
  font-weight: 600;
}
.good-item .listR .v3 .p1 span {
  color: #999;
  font-size: 0.75rem;
  text-decoration: line-through;
  padding-left: 0.5rem;
  font-weight: normal;
}
.good-item .listR .v3 .p2 {
  float: right;
  color: #999;
  font-size: 0.75rem;
}
</style>
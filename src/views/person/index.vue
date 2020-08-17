<template>
  <van-pull-refresh v-model="isLoading" success-text="刷新成功" @refresh="onRefresh">
    <div>
      <div class="page-header">
        <div class="avator-box">
          <div class="avator">
            <img :src="userInfo.image" class="tt" @click="personManager" />
            <div class="btR">
              <p class="p1">{{ userInfo.userName}}</p>
            </div>
          </div>
          <div class="right-box">
            <a @click="personManager">设置</a>
          </div>
          <div class="clear"></div>
        </div>
        <div class="statis">
          <ul>
            <li>
              <a href="javascript:void()">
                <p class="p1">13</p>
                <p class="p2">收藏夹</p>
              </a>
            </li>
            <li>
              <a href="javascript:void()">
                <p class="p1">1</p>
                <p class="p2">关注商品</p>
              </a>
            </li>
            <li>
              <a href="javascript:void()">
                <p class="p1">3</p>
                <p class="p2">浏览记录</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="clear"></div>
      <!-- 积分区 -->
      <my-part></my-part>
      <!-- 订单区 -->
      <my-orders></my-orders>
      <!-- 我的优惠券 -->
      <my-counp></my-counp>
      <!-- 工具按钮区 -->
      <my-tools></my-tools>
      <!-- 图表区 -->
      <charts></charts>
      <!-- 商品推荐区 -->
      <push-goods-list></push-goods-list>
      <div class="box"></div>
    </div>
  </van-pull-refresh>
</template>

<script>
import MyPart from "./my-part";
import MyOrders from "./my-orders";
import MyCounp from "./my-counp";
import MyTools from "./my-tools";
import PushGoodsList from "./my-push";
import pathList from "@/api/pathList";
import charts from "./charts";

export default {
  data() {
    return {
      isLoading: false,
      userInfo: {}
    };
  },
  components: {
    MyPart,
    MyOrders,
    MyCounp,
    MyTools,
    PushGoodsList,
    charts
  },
  mounted() {
    this.$axios.get(pathList.resources.users.getUserInfo.replace('{userId}',this.$cookie.get("userId")))
    .then((res) => {
        if(res.data.code == 200 && res.data.status == 200) {
          console.log(res.data)
          this.userInfo = res.data.data;
        }
    });
  },
  methods: {
    personManager: function() {
      this.$router.push("/person/manager");
    },
    onRefresh() {
      console.log(this.userName);
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
      this.isLoading = true;
    }
  }
};
</script>

<style scoped>
.page-header {
  width: 100%;
  background-size: 100%;
  background: url("~@/assets/img/mybg.jpg") repeat-y;
}

.page-header .avator-box {
  padding: 0.8rem 0.8rem 0.4rem 0.8rem;
}

.avator-box .avator-box .avator {
  float: left;
  width: 80%;
}

.page-header .avator-box .avator img.tt {
  float: left;
  width: 3rem;
  height: 3rem;
  border-radius: 100%;
}

img {
  max-height: 100%;
  max-width: 100%;
  border: 0;
}

.page-header .avator-box .avator .btR {
  float: left;
  padding-left: 1rem;
  height: 48px;
  line-height: 48px;
}

.page-header .avator-box .btR .p1 {
  color: #fff;
  font-size: 1rem;
}

.page-header .right-box {
  float: right;
  width: 20%;
}

.page-header .right-box a {
  display: block;
  color: #fff;
  text-align: right;
  font-size: 0.85rem;
}

.page-header .statis {
  width: 80%;
  margin: 0 auto;
  padding: 0rem 0 2.5rem;
}

.page-header .statis ul {
  overflow: hidden;
}

.page-header .statis ul li {
  float: left;
  width: 33%;
}

.page-header .statis ul li .p1 {
  text-align: center;
  color: #fff;
  font-size: 0.8rem;
  line-height: 1.5rem;
}

.page-header .statis ul li .p2 {
  text-align: center;
  color: #fff;
  font-size: 0.75rem;
}

.clear {
  clear: both;
}
.box {
  height: 4rem;
}
</style>

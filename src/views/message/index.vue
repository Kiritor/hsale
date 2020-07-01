<template>
  <div>
    <van-nav-bar title="消息中心" left-arrow @click-left="goBack" />
    <van-cell-group>
      <van-cell center>
        <template #title>
          <div class="message-box">
            <div class="message-L">
              <img src="@/assets/img/message1.png" />
            </div>
            <div class="message-R">
              <div class="header">
                <p>商城活动</p>
                <span>2020/07/01</span>
              </div>
              <div class="content">年货节超级优惠，全场年货买二送一...</div>
            </div>
          </div>
        </template>
      </van-cell>
      <van-cell center>
        <template #title>
          <div class="message-box">
            <div class="message-L">
              <img src="@/assets/img/message2.png" />
            </div>
            <div class="message-R">
              <div class="header">
                <p>物流通知</p>
                <span>2020/06/01</span>
              </div>
              <div class="content">您的美丽新娘韩版一字肩齐地婚纱已发货</div>
            </div>
          </div>
        </template>
      </van-cell>
      <van-cell center>
        <template #title>
          <div class="message-box">
            <div class="message-L">
              <img src="@/assets/img/message3.png" />
            </div>
            <div class="message-R">
              <div class="header">
                <p>优惠券</p>
                <span>2020/05/01</span>
              </div>
              <div class="content van-ellipsis">您有1张优惠券明日即将到期，优惠额50.0元，快去用掉...</div>
            </div>
          </div>
        </template>
      </van-cell>
      <van-cell center>
        <template #title>
          <div class="message-box">
            <div class="message-L">
              <img src="@/assets/img/message4.png" />
            </div>
            <div class="message-R">
              <div class="header">
                <p>系统通知</p>
                <span>2019/05/01</span>
              </div>
              <div class="content van-ellipsis">感谢您注册本商城，首次注册获得一次抽奖机会，立即去...</div>
            </div>
          </div>
        </template>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.message-box {
  width: 100%;
}

.message-box .message-L {
  float: left;
  width: 3.2rem;
  height: 2.7rem;
  overflow: hidden;
}

.message-box .message-L img {
  width: 2.7rem;
  height: 2.7rem;
  overflow: hidden;
}

.message-box .message-R {
  flex: 1;
  height: 3rem;
}

.message-box .message-R .header {
  color: #999;
  overflow: hidden;
  height: 1.4rem;
  padding-top: 0.2rem;
}

.message-box .message-R .header p {
  color: #333;
  float: left;
  font-size: 0.9rem;
  max-width: 70%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.message-box .message-R .header span {
  display: block;
  float: right;
  font-size: 0.75rem;
}
.message-box .message-R .content {
  color: #999;
  font-size: 0.8rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 14.8rem;
}
</style>


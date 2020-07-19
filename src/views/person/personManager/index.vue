<template>
  <div>
    <van-nav-bar title="设置" left-arrow @click-left="goBack" />
    <van-cell-group title="个人信息">
      <van-cell center is-link to="/person/manager/info">
        <template #title>
          <div class="avator">
            <div class="imgD">
              <van-image
                round
                fill="cover"
                width="3rem"
                height="3rem"
                :src="userInfo.image"
              ></van-image>
            </div>
            <div class="info">
              <p class="title">{{ userInfo.userName }}~</p>
              <span>会员名: {{ userInfo.account }}</span>
            </div>
          </div>
        </template>
      </van-cell>
    </van-cell-group>
    <van-cell-group title>
      <van-cell title="我的收货地址" center is-link to="/person/manager/address" />
    </van-cell-group>
    <van-cell-group title>
      <van-cell title="账户与安全" center is-link />
    </van-cell-group>
    <van-cell-group title="系统设置">
      <van-cell title="系统权限" center is-link />
    </van-cell-group>
    <van-cell-group title>
      <van-cell title="分享APP" center is-link />
    </van-cell-group>
    <van-cell-group title>
      <van-cell title="关于作者" center is-link @click="showAuthor" />
    </van-cell-group>

    <div class="login-button">
      <van-button
        size="large"
        plain
        hairline
        width="100%"
        round
        type="info"
        color="#ff2150"
        @click="logout"
        >退出登录</van-button
      >
    </div>
  </div>
</template>

<script>
import pathList from '@/api/pathList'

export default {
  data() {
    return {
      userInfo: {}
    }
  },
  beforeMount() {
    this.$axios.get(pathList.resources.users.getUserInfo.replace('{userId}',this.$cookie.get("userId")))
    .then((res) => {
        if(res.data.code == 200 && res.data.status == 200) {
          this.userInfo = res.data.data;
        }
    });
  },
  methods: {
    logout: function() {
      this.$cookie.delete('isLogin');
      //this.$cookie.delete('token');
      this.$router.push("/login")
    },
    goBack: function() {
      this.$router.go(-1);
    },
    showAuthor: function() {
      this.$dialog
        .alert({
          messageAlign: "left",
          confirmButtonColor: "#333",
          overlayStyle: {
            opacity: 1,
          },
          message: `一枚成长中的全沾工程师~,联系电话18883251958
        `,
        })
        .then(() => {
          // on close
        });
    },
  },
};
</script>

<style scoped>
.avator {
  position: relative;
}
.avator .imgD {
  float: left;
}
.avator .info {
  margin-left: 4rem;
}
.avator .info .title {
  font-size: 12px;
}
.avator .info span {
  font-size: 10px;
  color: #999;
}

.login-button {
  width: 90%;
  position: fixed;
  left: 5%;
  bottom: 1rem;
}
</style>

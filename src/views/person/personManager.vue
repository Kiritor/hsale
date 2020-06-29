<template>
  <div>
    <van-nav-bar title="设置" left-arrow @click-left="goBack" />
    <van-cell-group title="个人信息">
      <van-cell is-link center>
        <template #title>
          <div class="avator">
            <div class="imgD">
              <van-image
                round
                fill="cover"
                width="3rem"
                height="3rem"
                :src="require('@/assets/img/tx.jpg')"
              ></van-image>
            </div>
            <div class="info">
              <p class="title">小梁~</p>
              <span>会员名: Kiritor</span>
            </div>
          </div>
        </template>
      </van-cell>
    </van-cell-group>
    <van-cell-group title>
      <van-cell title="我的收货地址" center is-link />
    </van-cell-group>
    <van-cell-group title>
      <van-cell title="账户与安全" center is-link />
    </van-cell-group>
    <van-cell-group title>
      <van-cell title="系统权限" center is-link />
    </van-cell-group>
    <van-cell-group title>
      <van-cell title="分享APP" center is-link />
    </van-cell-group>
    <van-cell-group title>
      <!--
      <van-cell title="关于作者" center is-link to="/person/author"/>
      -->
      <van-cell title="关于作者" center is-link @click="showAuthor" />
    </van-cell-group>
  </div>
</template>

<script>
export default {
  methods: {
    goBack: function() {
      this.$router.go(-1);
    },
    showAuthor: function() {
      this.$dialog.alert({
        messageAlign: "left",
        confirmButtonColor: "#333",
        overlayStyle: {
            'opacity': 1
        },
        message: `一枚成长中的全沾工程师~,联系电话18883251958
        `,
      }).then(() => {
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
</style>

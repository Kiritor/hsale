<template>
  <div>
    <div class="header">
      <van-nav-bar
        id="header"
        title="登录"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      >
        <template #right>
          <van-icon name="wap-home-o" size="18" />
        </template>
      </van-nav-bar>
    </div>
    <div class="login-body">
      <div class="login-header">
        <!--<h2>用户密码登录</h2>-->
        <div class="logo">
          <van-icon name="shopping-cart-o" color="#ff2150" size="100" />
        </div>
      </div>
      <div class="login-form">
        <van-form @submit="onSubmit">
          <van-field
            v-model="username"
            name="username"
            placeholder="用户名"
            left-icon="user-circle-o"
          />
          <van-field
            v-model="password"
            type="password"
            name="password"
            placeholder="密码"
            left-icon="passed"
          />
         
          <van-cell center title="勾选7天自动登录" style="font-size: 10px;color: #999;">
            <template #right-icon>
              <van-switch v-model="isRemeber" size="18" active-color="#ff2150"/>
            </template>
          </van-cell>
          <div class="tips">
            <p v-text="loginError"></p>
          </div>
          <div style="margin-top: 2rem;">
            <van-button block round type="default" native-type="submit">登录</van-button>
          </div>
        </van-form>
      </div>
    </div>
  </div>
</template>

<script>
//登录
import LoginService from "@/api/user";
export default {
  data() {
    return {
      username: "",
      password: "",
      loginError: "",
      isRemeber: true
    };
  },
  methods: {
    onClickRight: function() {
      this.$router.push("/");
    },
    onClickLeft: function() {
      this.$router.go(-1);
    },
    async onSubmit(values) {
      const resp = await LoginService.login(this, values);
      if (resp.status == 200 && resp.data.code == 2003) {
        console.info(resp.data.message);
        this.loginError = resp.data.message;
      }
      if (resp.status == 200 && resp.data.code == 2000) {
        // localStorage
        // localStorage.setItem("token",resp.headers.authorization)
        // sessionStorage
        // sessionStorage.setItem("isLogin", true);
        // this.$store.commit("setLogin",true)
        this.$store.commit("setToken", resp.headers.authorization);
        this.$store.commit("setLogin", true);
        this.$store.commit("remeber", this.isRemeber)
        this.$cookie.set('userId',resp.data.data.id)
        this.$cookie.set('userName',resp.data.data.userName)
        //this.$cookie.set("avator",resp.data.data.image)
        if (this.$route.query.returnUrl) {
          this.$router.replace("/index");
        } else {
          this.$router.push("/");
        }
      }
    }
  }
};
</script>

<style scoped>
#header {
  background-color: #f7f7f7 !important;
  color: #fff;
}
.login-body {
  margin-top: 4rem;
  padding: 10px 20px;
}
.login-header {
  padding-left: 0.2rem;
}
.login-header .logo {
  text-align: center;
  padding-bottom: 2rem;
}
.login-header h2 {
  font-weight: 600px;
  color: #333;
  font-size: 0.4rem;
}
.login-body .tips {
  margin-top: 0.5rem;
  padding-left: 1rem;
  height: 0.5rem;
}
.login-body .tips p {
  color: #ff2150;
  font-size: 10px;
}
</style>
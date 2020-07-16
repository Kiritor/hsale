<template>
  <div>
    <van-nav-bar title="设置" left-arrow @click-left="goBack" />
    <van-cell-group>
      <van-cell title="头像:" center is-link>
        <template #right-icon>
          <van-uploader preview-size="44" :after-read="uploadAvator">
            <van-image round width="40" height="40" :src="userInfo.image" />
          </van-uploader>
        </template>
      </van-cell>
      <van-cell title="会员名:" center :value="userInfo.account" is-link></van-cell>
      <van-cell title="昵称:" center :value="userInfo.userName" is-link></van-cell>
      <van-cell title="性别:" center :value="userInfo.gender" is-link @click="showPopup"></van-cell>
      <van-popup v-model="show" position="bottom">
        <van-picker
          show-toolbar
          visible-item-count="2"
          :columns="genderColumns"
          @confirm="onConfirm"
          toolbar-position="top"
        ></van-picker>
    </van-popup>
    </van-cell-group>
  </div>
</template>

<script>
import UserService from '@/api/user'
import pathList from '@/api/pathList'


export default {
  data() {
    return {
      userInfo: {},
      show: false,
      genderColumns: ["男", "女", "保密"]
    };
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
    goBack: function() {
      this.$router.go(-1);
    },
    showPopup: function() {
      this.show = true;
    },
    onConfirm: function(value) {
      this.show = false;
      const params = {
          "id": this.userInfo.id,
          "gender": value
      }
      UserService.updateGender(this,params);
      this.userInfo.gender = value;
    },
    async uploadAvator(file) {
      const resp =  await UserService.updateAvator(this,this.userInfo.id,file.file);
     
      if(resp!=null && resp.data.code == 200 && resp.status == 200) {
          console.log(resp.data)
          this.userInfo.image = resp.data.data;
      }
    }
  }
};
</script>

<style scoped>
#header .van-uploader__input-wrapper {
  width: 100% !important;
}

.van-overlay {
  background-color: rgba(0, 0, 0, 0.9) !important;
}
</style>

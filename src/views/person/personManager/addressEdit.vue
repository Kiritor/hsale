<template>
  <div>
    <van-nav-bar title="编辑地址" left-arrow @click-left="goBack" />
    <van-form @submit="onSubmit">
      <van-field
        v-model="addressItem.receiverName"
        name="receiverName"
        label="收货人"
        placeholder="收货人姓名"
        :rules="[{ required: true, message: '请填写收货人' }]"
      />
      <van-field
        v-model="addressItem.receiverPhone"
        name="receiverPhone"
        label="手机号"
        placeholder="收货人手机号"
        :rules="[{ pattern, message: '请输入正确手机号' }]"
      />
      <van-cell-group>
        <van-cell title="省市区:" value center>
          <template #right-icon>
            <van-icon name="location-o" />
          </template>
        </van-cell>
      </van-cell-group>
      <van-field
        v-model="addressItem.address"
        name="address"
        label="详细地址"
        placeholder="详细地址"
        :rules="[{ required: true, message: '请输入详细地址' }]"
      />
      <van-cell center title="设为默认地址">
        <template #right-icon>
          <van-switch v-model="addressItem.isDefault" size="18" active-color="#ff2150" />
        </template>
      </van-cell>
      <div style="margin: 16px;">
        <van-button round block type="info" color="#ff2150" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import AddressService from "@/api/address";
export default {
  data() {
    return {
      addressItem: {},
      pattern: /\d{11}/,
    };
  },
  mounted() {
      this.init(this.$route.query.id)
  },
  methods: {
    async init(id) {
      const res = await AddressService.getReceiverAddress(this, id);
      if (res.data != null && res.data.status == 200 && res.data.code == 200) {
        this.addressItem = res.data.data;
      }
    },
    async onSubmit() {
      const res = await AddressService.updateReceiverAddress(this, this.addressItem);
      if (res.data != null && res.data.status == 200 && res.data.code == 200) {
        this.$router.push("/person/manager/address");
      }
    },
    goBack: function () {
      this.$router.go(-1);
    },
  },
};
</script>
<!-- 不使用scop就可以覆盖vant样式 -->
<style>
.van-switch--on {
  background-color: #ff2150;
}

.van-address-edit {
  padding: 0;
}
</style>
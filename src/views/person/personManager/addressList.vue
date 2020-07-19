<template>
  <div>
    <van-nav-bar title="收货地址" left-arrow @click-left="goBack" />
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
    />
  </div>
</template>

<script>
import { Toast } from "vant";
import AddressService from '@/api/address'

export default {
  data() {
    return {
      chosenAddressId: 1,
      list: []
    };
  },
  async beforeMount() {
    const res =await AddressService.getReceiverAddressList(this,this.$cookie.get("userId"));
    const dataList  = res.data.data;
    console.log(dataList)
    this.list = dataList;
  },
  methods: {
    onAdd() {
      Toast("新增地址");
    },
    onEdit(item, index) {
      Toast("编辑地址:" + index);
    },
    goBack: function() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.van-address-item {
  border-radius: 0 !important;
}
.van-address-list {
  padding: 10px 10px 100px;
}
</style>
<template>
  <div>
    <van-nav-bar title="管理收货地址" left-arrow 
      right-text="添加"
      @click-left="goBack"
      @click-right="goToAddAddress"
    />
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
      this.$router.push("/person/manager/address/add")
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
  padding: 6px 6px 100px;
}
</style>
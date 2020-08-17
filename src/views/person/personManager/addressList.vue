<template>
  <div>
    <van-nav-bar
      title="管理收货地址"
      left-arrow
      right-text="添加"
      @click-left="goBack"
      @click-right="goToAddAddress"
    />
    <ul>
      <li v-for="item in addressList" :key="item.index">
        <address-item
          :item="item"
          @toggleDefault="toggleDefault(item)"
          @deleteAddress="deleteAddress(item)"
          @goToAddressEdit="goToAddressEdit(item)"
        ></address-item>
      </li>
    </ul>
  </div>
</template>

<script>
import AddressItem from "./addressItem";
import AddressService from "@/api/address";

export default {
  components: {
    AddressItem,
  },
  data() {
    return {
      addressList: [],
    };
  },
  computed: {
    defaultId: function () {
      this.addressList.forEach(function (e) {
        if (e.isDefault === 1) {
          return e.id;
        }
      });
      return "";
    },
  },
  async beforeMount() {
    const res = await AddressService.getReceiverAddressList(
      this,
      this.$cookie.get("userId")
    );
    const dataList = res.data.data;
    console.log(dataList);
    this.addressList = dataList;
  },
  methods: {
    goToAddAddress() {
      this.$router.push("/person/manager/address/add");
    },
    goToAddressEdit(item) {
      this.$router.push({path: "/person/manager/address/edit",query: {id:item.id}});
    },
    goBack: function () {
      this.$router.go(-1);
    },
    // 重置默认地址
    toggleDefault: async function (item) {
      this.addressList.forEach(function (e) {
        e.isDefault = 0;
      });
      item.isDefault = 1;
      // 更新后端数据
      const params = {
        id: item.id,
        userId: this.$cookie.get("userId"),
        receiverName: item.name,
        receiverPhone: item.tel,
        address: item.address,
        isDefault: item.isDefault,
      };
      const res = await AddressService.setDefaultAddress(this, params);
      if (res.data != null && res.data.status == 200 && res.data.code == 200) {
        //this.$router.go(0)
      }
    },
    deleteAddress: async function (item) {
      const res = await AddressService.deleteAddress(this, item.id);
      if (res.data != null && res.data.status == 200 && res.data.code == 200) {
        const list = this.addressList.filter((obj) => {
          return obj.id != item.id;
        });
        this.addressList = list;
      }
    },
  },
};
</script>

<style scoped>
.van-address-item {
  border-radius: 0 !important;
}
</style>
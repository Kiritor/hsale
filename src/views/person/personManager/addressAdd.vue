<template>
  <div>
    <van-nav-bar title="新增地址" left-arrow @click-left="goBack" />
    <van-address-edit
      :area-list="areaList"
      show-set-default
      show-search-result
      :show-postal="false"
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
  </div>
</template>

<script>
import AreaList from '@/utils/area'
import AddressService from '@/api/address'
export default {
  data() {
    return {
      areaList: AreaList,
      searchResult: []
    };
  },
  methods: {
   async onSave(content) {
      const params = {
        "userId": this.$cookie.get("userId"),
        "receiverName": content.name,
        "receiverPhone": content.tel,
        "address": content.addressDetail,
        "isDefault": content.isDefault
      }
      const res = await AddressService.addReceiverAddress(this,params);
      if(res.data!=null && res.data.status == 200 && res.data.code == 200){
        this.$router.push('/person/manager/address')
      }
    },
    onDelete() {

    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: '黄龙万科中心',
            address: '杭州市西湖区',
          },
        ];
      } else {
        this.searchResult = [];
      }
    },
    goBack: function() {
      this.$router.go(-1);
    },
  }
}
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
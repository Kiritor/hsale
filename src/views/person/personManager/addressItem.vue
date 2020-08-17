<template>
  <div class="address-box">
    <div class="address-content">
      <p class="p1">
        收货人：{{ item.name }}
        <span>{{ item.tel }}</span>
      </p>
      <p class="p2">{{ item.address }}</p>
    </div>
    <div class="address-footer">
      <div class="ad1">
        <div class="ad1_1">
          <div class="gwccheck" :class="{on:item.isDefault}" @click="toggleDefault(item)"></div>
        </div>
      </div>
      <div class="ad2" @click="deleteAddress(item)">
        <div class="ad2_1">
          <img src="@/assets/img/del.png" />
        </div>
        <div class="ad2_2">删除</div>
      </div>
      <div class="ad2 mr">
        <a @click="goToAddressEdit(item)">
          <div class="ad2_1">
            <img src="@/assets/img/edit.png" />
          </div>
          <div class="ad2_2">编辑</div>
        </a>
      </div>
    </div>
    <div class="address-footer-line">
      <img src="@/assets/img/addressline.png" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"],
  data() {
    return {};
  },
  methods: {
      toggleDefault: function(item){
          this.$emit('toggleDefault',item);
      },
      deleteAddress: function(item) {
          this.$emit('deleteAddress',item);
      },
      goToAddressEdit: function(item) {
          this.$emit('goToAddressEdit',item);
      }
  }
};
</script>

<style scoped>
.address-box {
  background: #fff;
  border-bottom: 1px solid #eee;
  padding: 0 1rem;
  border-bottom: 1px solid #eee;
  margin-bottom: 0.5rem;
}

.address-box .address-content {
  padding: 0.8rem 0 0.5rem 0;
  border-bottom: 1px solid #eee;
}

.address-content p.p1 {
  color: #000;
  font-size: 0.8rem;
}
.address-content p.p1 span {
  padding-left: 1.2rem;
}

.address-content p.p2 {
  font-size: 0.75rem;
  color: #999;
  line-height: 1.4rem;
  padding-top: 0.1rem;
}

.address-footer {
  height: 1.2rem;
  padding: 0.7rem 0;
}
.address-footer .ad1 {
  float: left;
}
.address-footer .ad1 .ad1_1 {
  width: 1.2rem;
  height: 1.2rem;
  padding-right: 0.2rem;
  float: left;
}
.address-footer .ad2 {
  float: right;
}
.address-footer .ad2 .ad2_1 {
  height: 1.2rem;
  padding-right: 0.2rem;
  float: left;
}
.address-footer .ad2 .ad2_2 {
  color: #999;
  font-size: 0.75rem;
  float: left;
  line-height: 1.2rem;
}
.ad2_1 img {
  height: 0.9rem;
  margin-top: 0.1rem;
}
.address-footer .ad2.mr {
  padding-right: 0.5rem;
}
.addres-footer-line {
  width: 100%;
  display: block;
}
.address-footer-line img {
  display: block;
}

.gwccheck.on {
  background-image: url(~@/assets/img/checkon.png);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
}
.gwccheck {
  width: 100%;
  height: 100%;
  background-image: url(~@/assets/img/checkno.png);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
}
</style>
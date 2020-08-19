<template>
  <div>
    <div class="search-header">
      <div class="header">
        <div class="left-arrow">
          <img src="@/assets/img/goback.png" @click="goback" />
        </div>
        <div class="search-header-content">
          <div class="e-block">
            <input class="search-header-input"  v-model="key"/>
            <img src="@/assets/img/ss.png" @click="goToSearch"/>
          </div>
        </div>
        <div class="right-button">
          <span>取消</span>
        </div>
      </div>
    </div>
    <div class="recent-search-box">
      <img class="img1" src="@/assets/img/search_icon.png" />
      <p class="sstext">最近搜索</p>
      <img class="img2" src="@/assets/img/del.png" />
      <div class="clear"></div>
      <div class="ssbox">
        <a href="shoplist.html">羽绒服</a>
        <a href="shoplist.html">毛呢外套</a>
        <a href="shoplist.html">水杯</a>
        <a href="shoplist.html">打底裤</a>
        <a href="shoplist.html">茶壶</a>
        <a href="shoplist.html">面膜</a>
        <a href="shoplist.html">保温杯</a>
        <a href="shoplist.html">宽松毛衣女</a>
        <a href="shoplist.html">剃须刀</a>
        <a href="shoplist.html">核桃夹子</a>
      </div>
      <div class="line">
        <div class="line0"></div>
      </div>
    </div>
    <div class="recent-search-box">
      <img src="@/assets/img/hot_search.png" class="img1" />
      <p class="sstext">热门搜索</p>
      <div class="clear">
        <div class="ssbox">
          <a href="shoplist.html">羽绒服</a>
          <a href="shoplist.html">毛呢外套</a>
          <a href="shoplist.html">水杯</a>
          <a href="shoplist.html">打底裤</a>
          <a href="shoplist.html">茶壶</a>
          <a href="shoplist.html">面膜</a>
          <a href="shoplist.html">保温杯</a>
          <a href="shoplist.html">宽松毛衣女</a>
          <a href="shoplist.html">剃须刀</a>
          <a href="shoplist.html">核桃夹子</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
      return {
          key: ''
      }
  },
  methods: {
    goback: function() {
      this.$router.go(-1);
    },
    goToSearch: function() {
      this.$router.push({path: "/goods",query: {key: encodeURIComponent(this.key)}});
    }
  },
};
</script>

<style scoped>
.search-header {
  width: 100%;
  margin: 0 auto;
}
.search-header .header {
  padding: 0.5rem 0;
  height: 1.8rem;
  width: 100%;
  background: #fff;
  top: 0;
  border-bottom: 1px solid #eee;
}
.search-header .header .left-arrow {
  position: absolute;
  padding-left: 0.6rem;
  top: 0;
  left: 0;
  height: 1.8rem;
}
.left-arrow img {
  border: 0;
  max-width: 100%;
  max-height: 100%;
  height: 1.1rem;
  padding-top: 0.9rem;
}
.search-header .search-header-content {
  width: 75%;
  margin: 0 auto;
  height: 1.8rem;
  line-height: 1.8rem;
  text-align: center;
  background: #f7f7f7;
  border: 1px solid #f7f7f7;
  box-sizing: border-box;
  border-radius: 2px;
}
.search-header-content .search-header-input {
  float: left;
  width: 80%;
  outline: none;
  border: 0;
  height: 1.8rem;
  background: none;
  font-size: 0.8rem;
  color: #999;
  text-indent: 0.5rem;
  line-height: 1.8rem;
}
.search-header-content img {
  float: right;
  border: 0;
  max-width: 100%;
  max-height: 100%;
  height: 1.6rem;
  margin-top: 0.1rem;
}
.search-header .header .right-button {
  position: absolute;
  right: 0;
  top: 0;
  padding-right: 0.6rem;
  height: 1.8rem;
  line-height: 1.8rem;
  margin-top: 0.5rem;
}

.right-button span {
  color: #666;
  font-size: 0.8rem;
}

.recent-search-box {
  padding: 0 0.6rem;
  background-color: #fff;
}
.recent-search-box .img1 {
  float: left;
  border: 0;
  max-width: 100%;
  max-height: 100%;
  height: 1.2rem;
  margin-top: 0.5rem;
}
.recent-search-box .img2 {
  float: right;
  border: 0;
  max-width: 100%;
  max-height: 100%;
  height: 1.1rem;
  margin-top: 0.5rem;
}
.recent-search-box .sstext {
  height: 2.4rem;
  line-height: 2.4rem;
  float: left;
  margin-left: 0.4rem;
}
.recent-search-box .ssbox {
  overflow: hidden;
}
.ssbox a {
  border: 1px solid #ddd;
  display: block;
  float: left;
  height: 1.4rem;
  line-height: 1.4rem;
  padding: 0 0.5rem;
  font-size: 0.75rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  border-radius: 2px;
}
</style>
<template>
  <li @click="itemClick">
    <a v-if="!isActive"><slot name="item-icon"></slot></a>
    <a :style="activeStyle" v-else><slot name="item-icon-active"></slot></a>
    <p :style="activeStyle"><slot name="item-text"></slot></p>
  </li>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "#ff2150",
    },
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
        return this.isActive ? { color: this.activeColor}: {};
    }
  },
  methods: {
    itemClick() {
      if (!this.isActive) {
        this.$router.replace(this.path);
      }
    }
  }
};
</script>

<style scoped>
.nav-tabs ul li {
  float: left;
  width: 25%;
  text-align: center;
}

.nav-tabs ul li a {
  color: rgb(102, 102, 102);
}

.nav-tabs ul li a img {
  width: 15px;
  height: 15px;
}

.nav-tabs ul li p {
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue",
    "PingFang SC", "Microsoft YaHei", "Source Han Sans SC", "Noto Sans CJK SC",
    "WenQuanYi Micro Hei", sans-serif;
  font-size: 12px;
  padding-bottom: 4px;
}

</style>

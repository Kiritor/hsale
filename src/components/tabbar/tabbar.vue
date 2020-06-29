<template>
  <div class="nav-tabs">
    <ul>
      <slot></slot>
    </ul>
  </div>
</template>
<script>
export default {};
</script>

<style scoped>
.nav-tabs {
  position: fixed;
  width: 100%;
  max-width: 640px;
  bottom: 0;
  background: #fff;
  z-index: 99999;
  padding-top: 4px;
  padding-bottom: 2px;
  border-top: 1px solid #f5f5f5;
  height: 40px;
}

.nav-tabs ul {
  overflow: hidden;
}
</style>

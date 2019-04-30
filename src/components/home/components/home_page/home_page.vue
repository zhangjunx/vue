<template>
  <div class="home_page">
    <loop></loop>
    <list></list>
  </div>
</template>
<script>
import loop from './loop.vue'
import list from './list'
export default {
  components: {
    loop,
    list
  }
}
</script>
<style scoped lang="less">
.home_page {
  padding-top: 88px;
}
</style>

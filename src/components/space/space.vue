<template>
  <div class="space">
    <page></page>
    <banner></banner>
    <tab></tab>
    <router-view></router-view>

  </div>
</template>
<script>
import page from './page'
import banner from './banner'
import tab from './tab'

export default {
  components: {
    page,
    banner,
    tab

  }
}
</script>
<style lang="less" scoped>
.space {
  height: 100%;
  background: #f4f4f4;
}
</style>

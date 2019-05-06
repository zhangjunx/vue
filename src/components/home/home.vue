<template>
  <div class="home">
    <top></top>
    <scroll></scroll>
    <router-view></router-view>
    <foot></foot>
  </div>
</template>

<script>
// import entry from '../comm/entry'

import top from '@/components/comm/top.vue'
import scroll from '@/components/comm/scrollSeach.vue'
import foot from '@/components/comm/footer.vue'

export default {
  components: {

    top,
    scroll,
    foot

  }
}
</script>

<style scoped lang="less">
.home {
  padding-top: 96px;
}
</style>

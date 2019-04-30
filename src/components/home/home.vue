<template>
  <div class="home">
    <top></top>
    <scroll></scroll>
    <!-- <homePage></homePage> -->
    <router-view></router-view>
    <!-- <router-view></router-view> -->
    <foot></foot>
  </div>
</template>

<script>
import top from '@/components/comm/top.vue'
import scroll from '@/components/comm/scrollSeach.vue'
import foot from '@/components/comm/footer.vue'
export default {

  components: {
    top,
    scroll,
    foot
    // homePage
  }
}
</script>
<style scoped lang="less">
</style>

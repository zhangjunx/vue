<template>
  <div id="app">
    <top></top>
    <scroll></scroll>
    <router-view />
  </div>
</template>

<script>
import top from './components/comm/top.vue'
import scroll from './components/comm/scrollSeach.vue'
export default {
  name: 'App',
  components: {
    top,
    scroll
  }
}
</script>

<style scoped lang="less">
#app {
  padding-top: 96px;
}
</style>

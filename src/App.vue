<template>
  <div id="app">
    <top></top>
    <router-view />
  </div>
</template>

<script>
import top from './components/comm/top.vue'
export default {
  name: 'App',
  components: {
    top
  }
}
</script>

<style scoped>
#app {
}
</style>

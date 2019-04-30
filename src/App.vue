<template>
  <div id="app">
    <animation></animation>
    <router-view />
  </div>
</template>

<script>
import animation from './animation/animation'
import './gcss/reset.css'
export default {
  name: 'App',
  components: {
    animation
  }

}
</script>

<style scoped lang="less">
#app {
}
</style>

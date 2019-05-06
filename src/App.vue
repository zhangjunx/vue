<template>
  <div id="app">
    <keep-alive>
      <transition name=fade>
        <router-view v-if="this.$route.meta.cache" />
      </transition>

    </keep-alive>
    <transition name=fade>
      <router-view v-if="!this.$route.meta.cache" />
    </transition>

  </div>
</template>
<script>

import './assets/reset.css'
export default {
  name: 'App',
  component: {

  }
}
</script>

<style scoped lang="less">
#app {
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

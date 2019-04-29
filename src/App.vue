<template>
  <div id="app">
    <top></top>
    <ul class="lia">
      <li v-for="(item, index) in 4"
          :key="index"></li>
    </ul>
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

<style scoped lang="less">
/* #app {
} */
* {
  margin: 0;
  padding: 0;
}
.lia {
  width: 100%;
  height: 100px;
  background-color: red;
  display: flex;
  flex: 1;
  justify-content: space-between;
  li {
    list-style: none;
    height: 100px;
    background-color: blue;
    width: 20%;
  }
}
</style>

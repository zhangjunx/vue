<template>
  <div class="animation">
    <div class="nav">
      <ul>

        <router-link tag="li"
                     to="/tuijian">推荐</router-link>
        <router-link tag="li"
                     to="/MAD">MAD·AMV</router-link>
        <router-link tag="li"
                     to="/MMD">MMD·3D</router-link>
        <router-link tag="li"
                     to="/duanpian">短片·手书·配音</router-link>
        <router-link tag="li"
                     to="/zonghe">综合</router-link>

      </ul>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
.nav {
  overflow-x: auto;

  ul {
    background: #f9f9f9;
    width: 1050px;
    height: 98px;
    li {
      width: 200px;
      height: 100%;
      line-height: 98px;
      text-align: center;
      display: inline-block;
      font-size: 28px;
      color: #757575;
      // &:active {
      //   color: #fb7299;
      // }
    }
    li.router-link-exact-active {
      color: #fb7299
    }
  }
}
</style>

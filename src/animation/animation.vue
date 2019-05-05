<template>
  <div class="animation">
    <div class="nav">
      <ul>

        <router-link tag="li"
                     to="/home/animation/tuijian">推荐</router-link>
        <router-link tag="li"
                     to="/animation/MAD">MAD·AMV</router-link>
        <router-link tag="li"
                     to="/animation/MMD">MMD·3D</router-link>
        <router-link tag="li"
                     to="/animation/duanpian">短片·手书·配音</router-link>
        <router-link tag="li"
                     to="/animation/zonghe">综合</router-link>

      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {

}
</script>

<style scoped lang="less">
.animation{
  padding-top: 88px;
}
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
    }
    li.router-link-exact-active {
      color: #fb7299;
    }
  }
}
::-webkit-scrollbar{
  display: none;
}
</style>

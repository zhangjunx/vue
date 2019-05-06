<template>
  <div class="animation">
    <div class="nav">
      <ul>

        <router-link tag="li"
                     to="/home/chinanav/chinatuijian">推荐</router-link>
        <router-link tag="li"
                     to="/home/chinanav/chinaanimation">国产动画</router-link>
        <router-link tag="li"
                     to="/home/chinanav/yuanchuang">国产原创相关</router-link>
        <router-link tag="li"
                     to="/home/chinanav/budai">布袋戏</router-link>
        <router-link tag="li"
                     to="/home/chinanav/zixun">资讯</router-link>

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
.router-link-exact-active {
  color: #fb7299;
}
.animation {
  padding-top: 80px;
}
.nav {
  width: 100%;
  overflow-x: auto;
  position: fixed;
  z-index: 11;
  ul {
    background: #f9f9f9;
    width: 1050px;
    justify-content: space-between;
    // width: 100%;
    // overflow-x: auto;
    height: 98px;
    border-bottom: 2px solid #ccc;
    display: flex;
    li {
      // width: 200px;
      // width: 100%;
      flex: 1;
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
      color: #fb7299;
    }
  }
}
</style>

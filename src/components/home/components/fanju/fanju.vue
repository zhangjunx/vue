<template>
  <div class="fanju">
    <div class="nav">
      <ul>
        <router-link tag="li"
                     to="/home/fanju/ftuijian">推荐</router-link>
        <router-link tag="li"
                     to="/home/fanju/Serial">连载动画</router-link>
        <router-link tag="li"
                     to="/home/fanju/end">完结动画</router-link>
        <router-link tag="li"
                     to="/home/fanju/consulting">咨询</router-link>
        <router-link tag="li"
                     to="/home/fanju/official">官方延伸</router-link>

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
.fanju {
  padding-top: 80px;
}
.nav {
  position: fixed;
  z-index: 11;
  width: 100%;
  ul {
    display: flex;
    background: #f9f9f9;
    // width: 1050px;
    border-bottom: 2px solid #ccc;

    width: 100%;
    justify-content: space-between;

    height: 98px;
    li {
      flex: 1;
      // width: 200px;
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

      li {
        color: #fb7299;
      }
    }
  }
}
</style>

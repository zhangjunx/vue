<template>
  <div class="dmusci">
    <div class="nav">
      <ul>

        <router-link tag="li"
                     to="/home/dmusic/tmusic">推荐</router-link>
        <router-link tag="li"
                     to="/home/dmusic/ycmusic">原创音乐</router-link>
        <router-link tag="li"
                     to="/home/dmusic/fcmusic">翻唱</router-link>
        <router-link tag="li"
                     to="/home/dmusic/vomusic">VOCALOID·UTAU</router-link>
        <router-link tag="li"
                     to="/home/dmusic/dymusic">电音</router-link>

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
.dmusci {
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

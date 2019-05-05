<template>
  <div class="banner">
    <div class="btn">

      <router-link tag="button"
                   class="btn1"
                   to="/register">注册</router-link>
      <router-link tag="button"
                   class="btn2"
                   to="/ent">登录</router-link>
    </div>
  </div>
</template>
<script>

export default {

}
</script>
<style lang="less" scoped>
.banner {
  width: 100%;
  position: relative;
  height: 260px;
  background: url(http://s1.hdslb.com/bfs/static/mult/images/bannerTop.png);
  margin-top: 88px;
  .btn {
    width: 390px;
    height: 58px;
    position: absolute;
    // top: 150px;
    left: 50%;
    top: 70%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: space-around;
    // margin: 0 auto;

    .btn1 {
      background: #fff;
      color: #fb7299;
    }
    .btn2 {
      background: #fb7299;
      color: #fff;
    }
  }
  button {
    width: 144px;
    height: 100%;
    outline: none;
    border-radius: 10px;
  }
}
</style>

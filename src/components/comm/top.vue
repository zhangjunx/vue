<template>
  <div class="top">
    <a class="logo"
       href=""><img src="./img/logo.png" /></a>
    <a class="seach">
      <img src="./img/seach.png"
           alt="">
      <!-- <span>超人回来了</span> -->
      <router-link to="/search"
                   tag="span">超人回来了</router-link>
    </a>
    <!-- <a href=""
       class="myspace"><img class="gif"
           src="//static.hdslb.com/images/member/noface.gif" /></a> -->
    <router-link to="/space"
                 tag="a"
                 class="myspace"><img class="gif"
           src="//static.hdslb.com/images/member/noface.gif" /></router-link>
    <div class="down">
      <p>下载APP</p>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style scoped lang='less'>
.top {
  padding: 0 20px;
  display: flex;
  flex-direction: row;
  position: fixed;
  z-index: 19;
  top: 0;
  width: 100%;
  height: 88px;
  align-items: center;
  // margin: 14px 0;
  background-color: #fff;
  justify-content: space-between;
  .logo {
    display: inline-block;
    width: 124px;
    img {
      width: 100%;
    }
  }
  .myspace {
    width: 48px;
    height: 48px;
  }
  .seach {
    width: 264px;
    height: 48px;
    margin: 0 30px 0 38px;
    padding: 0 22px;
    line-height: 48px;
    border-radius: 25px;
    background: #f4f4f4;
    img {
      width: 25px;
    }
    span {
      width: 184px;
      height: 48px;
      color: #999;
    }
  }
  .gif {
    display: inline-block;
    width: 48px;
    height: 48px;
    border-radius: 50%;
  }
  .down {
    width: 160px;
    height: 48px;
    background: #f593af;
    text-align: center;
    border-radius: 5px;
    margin-right: 12px;
    p {
      font-size: 26px;
      color: #fff;
      line-height: 48px;
    }
  }
}
</style>

<template>
  <div class="scrollSeach">
    <div class="ul">
      <ul>
        <router-link to="/home/homepage"
                     tag="li">

          <p>首页</p>
        </router-link>

        <router-link to="/home/animation"
                     tag="li"
                     class="donghua">

          <p>动画</p>
        </router-link>

        <router-link to="/home/fanju"
                     tag="li"
                     class="fanju">

          <p>番剧</p>
        </router-link>

        <router-link to="/"
                     tag="li"
                     class="guo">

          <p>国创</p>
        </router-link>

        <router-link to="/"
                     tag="li"
                     class="music">

          <p>音乐</p>
        </router-link>

        <router-link to="/"
                     tag="li"
                     class="wudao">

          <p>舞蹈</p>
        </router-link>

        <router-link to="/"
                     tag="li"
                     class="keji">

          <p>科技</p>
        </router-link>

        <router-link to="/"
                     tag="li"
                     class="shuma">

          <p>数码</p>
        </router-link>

      </ul>
      <!-- <div class="right">
        <img src="./img/bottom.png"
             alt="">
      </div> -->

    </div>
    <!-- <router-view></router-view> -->

  </div>
</template>

<script>

export default {
  mounted () {

  }
}
</script>
<style scoped lang="less">
.router-link-exact-active {
  // color: #fb7299;
  border-bottom: 4px solid #fb7299;
}
.scrollSeach {
  position: fixed;
  z-index: 11;
  top: 88px;
  background: #fff;
  width: 100%;
  height: 88px;
  .ul {
    width: 100%;
    display: flex;
    height: 100%;
    ul {
      overflow-x: auto;
      padding-left: 45px;
      height: 100%;
      // flex: 1;

      white-space: nowrap;
      width: 100%;

      li {
        display: inline-block;
        width: 70px;
        margin-right: 24px;
        margin-top: 10px;
        height: 70px;
        text-align: center;
        line-height: 70px;
        p {
          width: 100%;
          color: #757575;
          height: 100%;
          font-size: 30px;
          border-bottom: 4px;
        }
      }
    }
    .right {
      img {
        width: 26px;
        height: 14px;
        color: #757575;
      }
    }
  }
}
</style>

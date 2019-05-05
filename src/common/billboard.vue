<template>
  <div class="billboard">
    <div class="title">
      <h2>
        <router-link tag="a"
                     to="/home/animation/tuijian">
          <img src="//s1.hdslb.com/bfs/static/mult/images/back.png"
               alt="">
        </router-link>

        排行榜
      </h2>
    </div>
    <div class="nav">
      <ul>

        <router-link tag="li"
                     to="/billboard/quanzhan">全站</router-link>
        <router-link tag="li"
                     to="/billboard/donghua">动画</router-link>
        <router-link tag="li"
                     to="/billboard">番剧</router-link>
        <router-link tag="li"
                     to="/billboard">国创</router-link>
        <router-link tag="li"
                     to="/billboard">音乐</router-link>
        <router-link tag="li"
                     to="/billboard">舞蹈</router-link>
        <router-link tag="li"
                     to="/billboard">科技</router-link>
        <router-link tag="li"
                     to="/billboard">数码</router-link>
        <router-link tag="li"
                     to="/billboard">游戏</router-link>
      </ul>
    </div>
    <router-view>
    </router-view>

  </div>
</template>
<script>
export default {

}
</script>
<style scoped lang="less">
.title {
  height: 90px;

  h2 {
    position: relative;
    font-size: 32px;
    color: #fb7299;
    font-weight: normal;
    text-align: center;
    line-height: 90px;
    > a {
      float: left;
      margin: 30px 0px 8px 20px;
      img {
        display: block;
        height: 32px;
        width: 18px;
      }
    }
  }
}
.nav {
  overflow-x: auto;

  ul {
    margin-left: 20px;
    font-size: 30px;
    width: 1250px;
    li {
      width: 60px;
      line-height: 70px;
      margin-right: 70px;
      height: 70px;
      display: inline-block;
      border-bottom: 2px solid transparent;
    }
  }
}
::-webkit-scrollbar {
  display: none;
}
li.router-link-exact-active {
  color: #fb7299;
  border-bottom: 2px solid #fb7299 !important;
}
</style>

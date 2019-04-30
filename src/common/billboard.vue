<template>
  <div class="billboard">
    <div class="title">
      <h2>
        <a href=""><img src="//s1.hdslb.com/bfs/static/mult/images/back.png" alt=""></a>
        排行榜
      </h2>
    </div>
    <div class="nav">
      <ul>
        <li v-for="(item, index) in 8" :key="index">全站</li>
      </ul>
    </div>
    <div class="content">
      <ul>
        <li>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style scoped lang="less">
*{
  margin: 0;
  padding: 0;
}
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
      img{
        display: block;
        height: 32px;
        width: 18px;
      }
    }
  }
}
.nav{
  overflow-x: auto;
  ul{
    margin-left: 20px;
    font-size: 30px;
    width: 1110px;
    li{
      width: 60px;
      line-height: 70px;
      margin-right: 70px;
      height: 70px;
      display: inline-block;
      border-bottom: 2px solid transparent;
      &:active{
        color: #fb7299;
        border-bottom: 2px solid #fb7299
      };
      &:first-of-type{
        color: #fb7299;
        border-bottom: 2px solid #fb7299
      }
    }
  }
}
</style>

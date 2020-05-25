<template>
  <div class="pinglun">
    <p class="shou">收藏</p>
    <p class="huan">缓存</p>
    <p class="fen">分享</p>
    <a href="#pinglun">13096评论</a>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
.pinglun {
  padding: 0 3.33%;
  height: 90px;
  line-height: 90px;
  p {
    margin-right: 40px;
    color: #999;
    padding-left: 36px;
    display: inline-block;
  }
  .shou {
    background: url("./vido/五角星.png") no-repeat left center;
    background-size: 36px 36px;
  }
  .huan {
    background: url("./vido/下载.png") no-repeat left center;
    background-size: 34px 34px;
  }
  .fen {
    background: url("./vido/分享.png") no-repeat left center;
    background-size: 36px 36px;
  }
  a {
    margin-left: 146px;
    background: url("./vido/评论.png") no-repeat left center;
    background-size: 30px 30px;
    padding-left: 36px;
    color: #999;
  }
}
</style>

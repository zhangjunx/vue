<template>
  <div class="multiple">
    <div class="title">
      <p>本周热议电影：复仇者联盟4</p>
    </div>
    <img src="http://i0.hdslb.com/bfs/article/4adb9255ada5b97061e610b682b8636764fe50ed.png"
         alt="">
    <div class="img">
      <img src="http://i0.hdslb.com/bfs/article/c47e283d3994c395502e0d952af0dbd6e73f666f.png@686w_780h.webp"
           alt="">
    </div>
    <p>
      <span>↓↓ 如果你已经买票或者看过电影，想快速了解之
        前的内容，请点击 ↓↓</span>
    </p>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
.multiple {
  > img {
    display: block;
    width: 454px;
    height: 32px;

    margin: 0 auto 40px;
  }
  .title {
    width: 686px;
    height: 76px;
    margin: 20px auto;
    line-height: 76px;
    text-align: center;
    p {
      font-size: 44px;
      color: #ef5fa8;
    }
  }
  .img {
    width: 100%;
    height: 780xp;
    margin-bottom: 40px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  > p {
    margin-bottom: 40px;
    padding: 0 3.33%;
    span {
      color: #ef5fa8;
      text-align: center;
      font-weight: 400;
      font-size: 32px;
      letter-spacing: 0;
      line-height: 1.8;
    }
  }
}
</style>

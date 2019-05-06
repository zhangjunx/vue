<template>
  <div class="next">
    <img src="http://i0.hdslb.com/bfs/article/71bf2cd56882a2e97f8b3477c9256f8b09f361d3.png"
         alt="">
    <div class="next_1">
      <p>接下来</p>
      <p>不赶时间的童鞋，我们就坐下来喝口茶，慢慢回顾一下复联21部已上映电影的历史吧~</p>
      <h1><span>【01】</span>钢铁侠</h1>
      <div class="jian">
        <span>上映时间：2008年5月2日</span>
        <p>钢铁侠，漫威电影宇宙的重要基石，初代复仇者，发明家兼斯塔克工业公司总裁。</p>
        <p class="jian_1">漫威影业在破产危机下放手一搏，在转折了多个演员后，最终选择唐尼作为钢铁侠一角，成就了日后的漫威电影宇宙，改变超级英雄的影史地位。</p>
      </div>
      <div class="video">
        <div class="left">
          <img src="http://i1.hdslb.com/bfs/archive/266a0622d5003c79b39cee992046532048a69083.jpg"
               alt="">
        </div>
        <div class="right">
          <p>【木鱼微剧场】《钢铁侠》漫威电影系列</p>
          <p>
            <span>67.9万</span>
            <span>阅读数：3732</span>
          </p>
          <div class="right_bot">
            <span>视频</span>
            <span>木鱼人心</span>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
.next {
  padding: 0 3.33%;
  .video {
    margin: 0 auto;
    border-radius: 5px;
    overflow: hidden;
    width: 686px;
    margin-bottom: 40px;
    height: 188px;
    display: flex;
    justify-content: space-between;
    .left {
      img {
        width: 300px;
        height: 188px;
      }
    }
    .right {
      padding-left: 20px;
      > p {
        font-size: 28px;
        max-height: 80px;
        margin-bottom: 16px;
        text-align: left;
        color: #222;
        line-height: 1.4;
        span {
          color: #999;
        }
      }
      .right_bot {
        span {
          color: #999;
          &:nth-child(1) {
            color: #fb7299;
            display: inline-block;
            width: 56px;
            height: 30px;
            border: 1px solid #fb7299;
            line-height: 30px;
            text-align: center;
          }
        }
      }
    }
  }
  .jian {
    padding-top: 40px;
    text-align: center;
    .jian_1 {
      font-size: 32px;
      color: #222;
    }
    p {
      font-size: 32px;
      text-align: center;
      color: #222;
    }
    span {
      color: #222;
      font-size: 32px;
    }
  }
  .next_1 {
    p {
      // height: 56px;
      font-size: 36px;
      text-align: center;
      color: #999;
      line-height: 1.8;
      margin-bottom: 40px;
    }
  }
  > img {
    display: block;
    width: 514px;
    height: 6px;
    margin: 0 auto 40px;
  }
  h1 {
    font-size: 44px;
    text-align: center;
    span {
      color: #ef5fa8;
    }
  }
}
</style>

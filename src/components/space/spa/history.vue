<template>
  <div class="history">
    <p>更早</p>
    <ul>
      <li>
        <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=90075292,3532655244&fm=27&gp=0.jpg"
             alt="">
        <div class="right">
          <p>前方高能！让世界感受这场视觉盛宴吧！</p>
          <span>2019-04-30 17:22</span>
        </div>
        <div class="clear"></div>
      </li>
      <li>
        <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=159719878,1892367092&fm=27&gp=0.jpg"
             alt="">
        <div class="right">
          <p>前方高能！让世界感受这场视觉盛宴吧！</p>
          <span>2019-04-30 17:22</span>
        </div>
        <div class="clear"></div>

      </li>
      <li>
        <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1774556519,3621874805&fm=27&gp=0.jpg"
             alt="">
        <div class="right">
          <p>前方高能！让世界感受这场视觉盛宴吧！</p>
          <span>2019-04-30 17:22</span>
        </div>
        <div class="clear"></div>

      </li>
      <li>
        <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=90075292,3532655244&fm=27&gp=0.jpg"
             alt="">
        <div class="right">
          <p>前方高能！让世界感受这场视觉盛宴吧！</p>
          <span>2019-04-30 17:22</span>
        </div>
        <div class="clear"></div>

      </li>
    </ul>
    <foot></foot>
  </div>
</template>
<script>
import foot from '../../comm/footer'
export default {
  components: {
    foot
  }
}
</script>
<style lang="less" scoped>
.clear {
  clear: both;
}
.history {
  width: 100%;

  > p {
    width: 702px;
    margin: 0 auto;
    color: #999;
    font-size: 32px;
    height: 66px;
    line-height: 66px;
  }
  ul {
    width: 702px;
    margin: 0 auto;

    li {
      width: 100%;
      margin-bottom: 40px;
      img {
        float: left;
        width: 234px;
        height: 146px;
        border-radius: 10px;
      }

      .right {
        margin-left: 20px;
        float: left;
        > p {
          color: #212121;
          width: 444px;
          font-size: 28px;
        }
        > span {
          display: inline-block;
          margin-top: 35px;
          color: #999;
        }
      }
    }
  }
}
</style>

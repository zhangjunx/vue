<template>
  <transition>

    <div class="content">
      <div class="top">
        <p>热门</p>
        <span>这动画也太骚了吧！2019四月新番吐槽大
          <br>
          盘点！（第三弹）
        </span>
        <a href="javascript:;"
           @click="btn"><img src="./vido/箭头 下.png"
               alt=""
               id="abtn"></a>
      </div>
      <div class="con1">
        <a href="javascript:;">LexBurner</a>
        <span>209.4万观看</span>
        <span>3万弹幕</span>
        <span>5-3</span>

      </div>
      <div class="con2">
        <span>未经作者授权禁止转载</span>
        <div class="con2_sp">
          <p>
            <span>
              喜欢的观众请点个关注，并长按视频下方的大拇指一键三连支持下up主！拜托啦！这对我真的很重要！五一高产不易啊！另外感谢明日方舟的供电，这游戏实在是太好玩啦！
              <br>往期地址：<br>
              四月新番吐槽第一弹：av48719020 <br>
              四月新番吐槽第二弹：av49025020
            </span>
          </p>
        </div>
        <div class="con2_sp1">
          <a href="">主页</a>
          >
          <a href="">动画</a>
          >
          <a href="">综合</a>
          >
          av51284558
        </div>
      </div>
      <div class="con3">
        <ul>
          <li>
            <p>动漫杂谈</p>
          </li>
          <li>
            <p>lexburner</p>
          </li>
          <li>
            <p>lex</p>
          </li>
          <li>
            <p>明日方舟</p>
          </li>
          <li>
            <p>鬼灭之刃</p>
          </li>
          <li>
            <p>新番</p>
          </li>
          <li>
            <p>新番吐槽</p>
          </li>
          <li>
            <p>新番导视</p>
          </li>
        </ul>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  methods: {
    btn () {
      var con = document.getElementsByClassName('content')[0]
      // console.log(con.getAttribute('class'))
      var a = document.getElementById('abtn')
      if (con.getAttribute('class') === 'content') {
        a.style.transform = 'rotateY(180deg)'
        con.classList.add('content1')
      } else {
        a.style.transform = 'rotateX(180deg)'
        con.classList.remove('content1')
      }
    }
  }
}
</script>
<style lang="less" scoped>
.content {
  padding: 0 3.33%;
  height: 150px;
  overflow: hidden;
  transition: all 0.5s ease;
}
.content1 {
  height: 600px !important;
}
.top {
  margin-bottom: 16px;
  display: flex;
  p {
    padding-left: 40px;
    line-height: 48px;
    width: 104px;
    border-radius: 25%;
    height: 48px;
    background: #f4f4f4 url("./vido/hot.png") left center no-repeat;
    background-size: 32px 32px;
  }
  span {
    color: #212121;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    flex: 1;
    font-size: 32px;
  }
  a {
    img {
      transform: rotate(180deg);
      width: 36px;
      height: 36px;
    }
  }
}
.con1 {
  a {
    color: #212121;
    margin-right: 36px;
  }
  span {
    color: #999;
    margin-right: 16px;
    font-size: 24px;
  }
}
.con2 {
  height: 325px;
  > span {
    height: 62px;
    line-height: 62px;
  }
  .con2_sp {
    p {
      height: 212px;

      > span {
        color: #999;
        font-size: 24px;
      }
    }
  }
  .con2_sp1 {
    font-size: 24px;
    color: #999;
    a {
      color: #fb7299;
    }
  }
}
.con3 {
  width: 100%;
  ul {
    width: 100%;
    flex-wrap: wrap;
    display: flex;
    li {
      padding: 0 15px;
      height: 64px;
      line-height: 64px;
      background: #f4f4f4;
      color: #505050;
      border-radius: 25px;
      margin: 0 20px 12px 0;
      p {
        font-size: 24px;
      }
    }
  }
}
</style>

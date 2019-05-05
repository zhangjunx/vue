<template>
  <div class="search">
    <div class="top">
      <div class="search_box">
        <img src="../comm/img/seach.png"
             alt="">
        <input type="text"
               placeholder="和珅和大人，哪有先鬼畜再饶舌的？">
      </div>
      <div class="right">
        <a href="javascript:;"
           @click="back">取消</a>
      </div>
    </div>
    <div class="search_hot">
      <p>大家都在搜</p>
      <ul>
        <li>PRODUCE X 101</li>
        <li>RUNNINGMAN</li>
        <li>我只喜欢你</li>
        <li>老番茄</li>
        <li>复仇者联盟4</li>
      </ul>
    </div>
    <div class="search_hisroty">
      <p>历史搜索</p>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    back () {
      window.history.back()
    }
  }
}
</script>
<style lang="less" scoped>
.top {
  height: 60px;
  width: 100%;
  margin-top: 15px;
  position: relative;

  padding: 0 3.33%;
  .search_box {
    width: 88%;
    box-sizing: border-box;
    height: 100%;
    border-radius: 20px;
    background: #f5f4f4;
    img {
      width: 44px;
      position: absolute;
      top: 10px;
      left: 40px;
      height: 44px;
    }
    input {
      outline: none;
      background: #f5f4f4;

      padding: 0 90px 0 100px;
      width: 100%;
      height: 100%;
    }
  }
  .right {
    top: 15px;
    position: absolute;
    width: 60px;
    right: 10px;
    height: 26px;
    a {
      color: #fb7299;
      font-size: 24px;
    }
  }
}
.search_hot {
  padding: 0 3.33%;
  margin-top: 32px;
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      // flex: 1;
      margin: 24px 16px 0 0;
      height: 66px;
      color: #505050;
      padding: 0 24px;
      border: 1px solid #ccc;
      border-radius: 25px;
      line-height: 66px;
      text-align: center;
    }
  }
}
.search_hisroty {
  padding: 0 3.33%;
  height: 110px;
  margin-top: 56px;
  padding-top: 45px;
  border-top: 20px solid #f4f4f4;
  p {
    font-size: 32px;
    color: #999;
  }
}
</style>

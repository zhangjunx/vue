<template>
  <div class="entry">
    <h2>登录bilibili</h2>
    <ul>
      <li>
        <label for="">账号</label><input type="text"
               placeholder="你的手机号/邮箱" />
      </li>
      <li>
        <label for="">密码</label><input type="text"
               placeholder="请输入密码" />
      </li>
    </ul>
    <span>忘记密码？</span>
    <div style="clear:both"></div>
    <div class="btn">
      <router-link tag="button"
                   to="/register"
                   class="btn1">注册</router-link>

      <button class="btn2">登录</button>
    </div>
    <div class="other">
      <p>其他登录方式</p>
      <div class="entry_btn">
        <p class="qq">QQ</p>
        <p class="weixin">微信</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
.entry {
  width: 100%;
  height: 100%;
  background: rgb(247, 247, 247);
  position: absolute;
  z-index: 99;
  h2 {
    height: 90px;
    text-align: center;
    line-height: 90px;
    font-weight: 400;
  }
  ul {
    padding: 32px 0 0;
    li {
      width: 100%;
      height: 86px;
      border-bottom: 1px solid #ccc;
      border-top: 1px solid #ccc;
      line-height: 86px;
      margin: 10px 0;
      background: #fff;
      label {
        display: inline-block;
        width: 152px;
        font-size: 32px;
        margin-left: 20px;
      }
      input {
        outline: none;
        border: 0;
        box-sizing: border-box;
        font-family: PingFangSC-Regular;
        height: 60px;
        padding: 24px 0;
      }
    }
  }
  span {
    float: right;
    color: red;
  }
  .btn {
    margin-top: 20px;
    width: 100%;
    height: 86px;
    display: flex;
    justify-content: space-between;
    padding: 0 24px;
    button {
      width: 338px;
      outline: none;
      border-radius: 10px;
      font-size: 32px;
      background: #fff;
    }
    .btn1 {
      border: 2px solid #fb7299;
      color: #fb7299;
    }
    .btn2 {
      border: 2px solid #fb7299;
      background: #fb7299;
      color: #fff;
    }
  }
  .other {
    margin-top: 420px;
    text-align: center;
    font-size: 32px;
    color: rgb(158, 157, 157);
    .entry_btn {
      margin-top: 48px;
      height: 48px;
      line-height: 48px;
      p {
        margin-top: 40px 0 0;
        width: 64px;
        margin: 0 30px;
        // height: 150px;
        padding-top: 50px;
        font-size: 26px;
        display: inline-block;
      }
      .qq {
        background: url("./img/qq.png") no-repeat center top;
        background-size: 40px;
      }
      .weixin {
        background: url("./img/weixin.png") no-repeat center top;
        background-size: 54px;
      }
    }
  }
}
</style>

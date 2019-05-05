<template>
  <div class="register">
    <div class="title">
      <h1>注册bilibili</h1>
    </div>
    <div class="select">
      <select name="country_code">
        <option value="1">中国大陆</option>
        <option value="2">中国香港特别行政区</option>
        <option value="3">中国澳门特别行政区</option>
        <option value="4">中国台湾</option>
        <option value="5">美国</option>
        <option value="6">比利时</option>
        <option value="7">澳大利亚</option>
        <option value="8">法国</option>
        <option value="9">加拿大</option>
        <option value="10">日本</option>
        <option value="11">新加坡</option>
        <option value="12">韩国</option>
        <option value="13">马来西亚</option>
        <option value="14">英国</option>
        <option value="15">意大利</option>
        <option value="16">德国</option>
        <option value="17">俄罗斯</option>
        <option value="18">新西兰</option>
      </select>
    </div>
    <div class="phone">
      <ul>
        <li>
          <span>+86</span>
          <input type="text"
                 placeholder="请输入常用手机号">
          <button>获取验证码</button>
        </li>
        <li>
          <span>验证码</span>
          <input type="text"
                 placeholder="请输入验证码">
        </li>
      </ul>
    </div>
    <div class="pwd">
      <span>密码</span>
      <input type="password"
             maxlength="20"
             placeholder="6~16个字符，区分大小写">
    </div>
    <div class="btn-box">
      <a href="#">登录</a>
      <div class="zc">同意并注册</div>
    </div>
    <div class="desc">
      <p>点击“获取验证码”按钮，即表示同意
        <a href="https://www.bilibili.com/blackboard/account-useragreement.html">注册协议</a>
      </p>

    </div>
  </div>
</template>
<script>
export default {

}
</script>

<style scoped lang="less">
.register {
  background-color: #f4f4f4;
  width: 750px;
  height: 1334px;
}
.title {
  background: #fff;
  border-bottom: 1px solid #e7e7e7;
  border-top: 1px solid #e7e7e7;
}
.title h1 {
  font-size: 32px;
  color: #212121;
  padding: 24px 0px;
  text-align: center;
  line-height: 40px;
  font-weight: normal;
}
.select {
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #e7e7e7;
  border-top: 1px solid #e7e7e7;
  margin-top: 40px;
}
.select select {
  padding: 0 24px;
  border: none;
  outline: none;
  line-height: 40px;
  font-size: 28px;
  width: 100%;
  height: 90px;

  background: none;
}
.phone {
}
.phone ul {
  border-bottom: 1px solid #e7e7e7;
  margin-top: 40px;
}
.phone ul li {
  background: #fff;
  border-top: 1px solid #e7e7e7;
  padding: 0 24px;
}
.phone ul li span {
  font-size: 28px;
  color: #212121;
  line-height: 90px;
  width: 152px;
  display: inline-block;
}
.phone ul li input {
  padding: 24px 0;
  margin-left: 40px;
  font-size: 28px;
  outline: none;
}
.phone ul li input::placeholder {
  color: #ccc;
}
.phone ul li button {
  border-left: 1px solid #e7e7e7;

  color: #c0c0c0;
  font-size: 28px;
  background: #fff;
  margin: 18px 0 0;
  padding: 0 0 0 24px;
  outline: none;
}
.pwd {
  border-top: 1px solid #e7e7e7;
  border-bottom: 1px solid #e7e7e7;
  background: #fff;
  padding: 0 24px;
  margin-top: 40px;
}
.pwd span {
  width: 152px;
  line-height: 88px;
  display: inline-block;
  font-size: 28px;
}
.pwd input {
  margin-left: 40px;
  font-size: 28px;
  width: 350px;
  outline: none;
}
.pwd input::placeholder {
  color: #ccc;
}
.btn-box {
  margin-top: 40px;
  display: flex;
  justify-content: space-around;
}
.btn-box a {
  width: 340px;
  height: 88px;
  display: inline-block;
  padding: 0 10px;
  font-size: 28px;
  color: #fb7299;
  background: transparent;
  border: 1px solid #fb7299;
  text-align: center;
  line-height: 88px;
  cursor: pointer;
  border-radius: 10px;
  margin-right: 40px;
}
.btn-box .zc {
  display: inline-block;
  width: 340px;
  height: 88px;
  padding: 0 10px;
  font-size: 28px;
  background: #fb7299;
  color: #fff;
  text-align: center;
  line-height: 88px;
  border-radius: 10px;
}
.desc {
  margin-top: 40px;
}
.desc p {
  color: #757575;
  font-size: 24px;
  text-align: center;
}
.desc p a {
  color: #fb7299;
}
</style>

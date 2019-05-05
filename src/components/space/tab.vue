<template>
  <div class="tab">
    <ul>
      <router-link tag="li"
                   to="/history">
        <p>历史记录</p>
      </router-link>

      <router-link tag="li"
                   to="/mine">
        <p>我的投稿</p>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
.router-link-exact-active {
  p {
    border-bottom: 4px solid #fb7299;
    color: #fb7299;
  }
}
.tab {
  width: 100%;
  height: 76px;
  background: #fff;
  border-bottom: 2px solid #979797;
  padding-bottom: 3px;
  ul {
    width: 100%;
    display: flex;

    li {
      flex: 1;
      text-align: center;
      line-height: 76px;
      font-size: 30px;
      color: #666;
      p {
        width: 120px;
        margin: 0 auto;
      }
    }
  }
}
</style>

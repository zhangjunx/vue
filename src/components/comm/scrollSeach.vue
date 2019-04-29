<template>
  <div class="scrollSeach">
    <ul>
      <li>
        <p>首页</p>
      </li>
      <li>
        <p>动画</p>
      </li>
      <li>
        <p>番剧</p>
      </li>
      <li>
        <p>国创</p>
      </li>
      <li>
        <p>音乐</p>
      </li>
      <li>
        <p>科技</p>
      </li>
      <li>
        <p>数码</p>
      </li>
      <li>
        <p>数码</p>
      </li>
      <li>
        <p>数码</p>
      </li>
      <li>
        <p>数码</p>
      </li>
    </ul>
  </div>
</template>

<script>
// import { getscrollSeach } from '@/api'
export default {
  data () {
    return {
      acrollarr: []
    }
  },
  async created () {
    // this.acrollarr = await getscrollSeach()
    console.log(this.acrollarr)
  }
}
</script>
<style scoped lang="less">
::-webkit-scrollbar {
  display: none;
}
.scrollSeach {
  width: 100%;
  height: 88px;
  ul {
    overflow-x: auto;

    padding-left: 45px;
    height: 100%;
    white-space: nowrap;
    width: 100%;
    li {
      display: inline-block;
      width: 70px;

      margin-right: 24px;
      height: 70px;
      text-align: center;
      line-height: 70px;
      p {
        width: 100%;
        color: #757575;
        height: 100%;
        font-size: 30px;
        border-bottom: 4px;
      }
    }
  }
}
</style>

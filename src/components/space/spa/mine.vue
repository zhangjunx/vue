<template>
  <div class="history">
    <p>加载中...</p>
    <foot></foot>
  </div>
</template>
<script>
import foot from '@/components/comm/footer'
export default {
  components: {
    foot
  }
}
</script>
<style lang="less" scoped>
.history {
  height: 166px;
  width: 100%;
  padding-top: 100px;
  background: #fff;
  > p {
    color: #999;
    font-size: 32px;
    text-align: center;
  }
}
</style>

<template>
  <div class="play">
    <top></top>
    <vido></vido>
    <conent></conent>
    <pinglun></pinglun>
    <itemWrap></itemWrap>
    <pl></pl>
  </div>
</template>
<script>
import top from '@/components/comm/top'
import vido from './vido'
import conent from './content'
import pinglun from './pinglun'
import itemWrap from './itemWrap'
import pl from './pl'
export default {
  components: {
    top,
    vido,
    conent,
    pinglun,
    itemWrap,
    pl
  }
}
</script>
<style lang="less" scoped>
</style>

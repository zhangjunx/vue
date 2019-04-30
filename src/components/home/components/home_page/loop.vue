<template>
  <div class="loop">
    <Swiper class="swiper">
      <Slide v-for="(item,index) in loopList"
             :key="index">
        <img :src="item" />
      </Slide>
    </Swiper>

  </div>
</template>
<script>
// import { getloop } from '@/api/index'
import { Swiper, Slide } from 'vue-swiper-component'
export default {
  data () {
    return {
      loopList: []
    }
  },
  components: {
    Swiper,
    Slide
  },
  created () {
    this.$http.get('../../static/home.json')
      .then((res) => {
        // console.log(res.data.loop[0])
        this.loopList = res.data.loop[0]
      })
  }
}
</script>
<style lang="less" scoped>
.loop {
  height: 100%;
  margin: auto;
  border-radius: 10px;
  overflow: hidden;
  width: 700px;
  .swiper {
    width: 100%;
    img {
      width: 100%;
    }
  }
}
</style>

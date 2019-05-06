<template>
  <div class="loop">
    <Swiper class="swiper">
      <Slide v-for="(item,index) in loopList"
             :key="index">
        <router-link tag="li"
                     to="/Ironman">
          <img :src="item" />

        </router-link>
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
li {
  list-style: none;
}
.loop {
  height: 220px;
  margin: auto;
  border-radius: 10px;
  overflow: hidden;
  width: 700px;
  .swiper {
    width: 100%;
    img {
      width: 100%;
      height: 220px;
    }
  }
}
</style>

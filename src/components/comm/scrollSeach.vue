<template>
  <transition>

    <div class="scrollSeach"
         ref="box">
      <div class="ul">
        <ul ref="box2">
          <router-link to="/home/homepage"
                       tag="li"
                       ref="li">

            首页
          </router-link>

          <router-link to="/home/animation"
                       tag="li"
                       class="donghua">

            动画
          </router-link>

          <router-link to="/home/fanju"
                       tag="li"
                       class="fanju">

            番剧
          </router-link>

          <router-link to="/home/chinanav"
                       tag="li"
                       class="guo" >

            国创
          </router-link>

          <router-link to="/"
                       tag="li"
                       class="music"
                       exact>

            音乐
          </router-link>

          <router-link to="/"
                       tag="li"
                       class="wudao"
                       exact>

            舞蹈
          </router-link>

          <router-link to="/"
                       tag="li"
                       class="keji"
                       exact>

            科技
          </router-link>

          <router-link to="/"
                       tag="li"
                       class="shuma"
                       exact>

            数码
          </router-link>
          <router-link to="/"
                       tag="li"
                       class="shuma"
                       exact>

            游戏
          </router-link>
          <router-link to="/"
                       tag="li"
                       class="shuma"
                       exact>

            娱乐
          </router-link>
          <router-link to="/"
                       tag="li"
                       class="shuma"
                       exact>

            鬼畜
          </router-link>
          <router-link to="/"
                       tag="li"
                       class="shuma"
                       exact>

            电影
          </router-link>
          <router-link to="/"
                       tag="li"
                       class="shuma"
                       exact>

            电视剧
          </router-link>
          <router-link to="/"
                       tag="li"
                       class="shuma"
                       exact>

            纪录片
          </router-link>
          <router-link to="/"
                       tag="li"
                       class="shuma"
                       exact>

            影视
          </router-link>
          <router-link to="/"
                       tag="li"
                       class="shuma"
                       exact>

            时尚
          </router-link>
        </ul>
        <span @click="change"
              ref="xiala"></span>

      </div>

    </div>
  </transition>
</template>

<script>

export default {
  // mounted () {
  //   console.log(window.location.hash)
  //   var str = 'homePage'
  //   var s = window.location.hash
  //   // console.log(s.indexOf(str))
  //   // console.log(this.$refs.li.$el)
  //   if (s.indexOf(str) !== -1) {
  //     this.$refs.li.$el.className = 'router-link-active'
  //   }
  // }
  methods: {
    change () {
      console.log(this.$refs.box.className)
      var str = this.$refs.box.className
      var s = 'box1'
      if (str.indexOf(s) !== -1) {
        this.$refs.box.classList.remove('box1')
        this.$refs.box2.classList.remove('box3')
        this.$refs.xiala.classList.remove('box4')
      } else {
        this.$refs.box.classList.add('box1')
        this.$refs.box2.classList.add('box3')
        this.$refs.xiala.classList.add('box4')
      }
    }
  }

}
</script>
<style scoped lang="less">
.router-link-active {
  color: #fb7299;
  border-bottom: 4px solid #fb7299;
}

.scrollSeach {
  position: fixed;
  z-index: 1000;
  top: 88px;
  background: #fff;
  width: 100%;
  height: 88px;
  transition: all 0.5s ease;

  .ul {
    width: 100%;
    display: flex;
    height: 100%;
    position: relative;
    ul {
      overflow-x: auto;
      padding-left: 45px;
      height: 100%;

      // display: flex;
      // flex-wrap: wrap;
      white-space: nowrap;
      width: 100%;

      li {
        display: inline-block;
        width: 64px;
        margin-right: 50px;
        margin-top: 10px;
        height: 70px;
        text-align: center;
        line-height: 70px;
        font-size: 30px;
      }
    }
    .right {
      img {
        width: 26px;
        height: 14px;
        color: #757575;
      }
    }
  }
}
span {
  width: 80px;
  height: 80px;
  background: url("../../../static/xiala.png") no-repeat center;
  display: inline-block;
  margin-right: 20px;
}

.box1 {
  height: 300px;
}
.box3 {
  overflow-x: none;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
}
.box4 {
  position: absolute;
  top: 240px;
  left: 340px;
}
</style>

<template>
  <div class="quanzhan">
    <ul>
      <li v-for="(item,index) in list.billboard"
          :key="index">
        <img :src="item.img"
             alt="">
        <div class="con">
          <img :src="item.imgs"
               alt="">
          <h2>{{item.title}}</h2>
          <div class="conlist">
            <img src="../../../static/ico_up.png"
                 alt="">
            <p>猫店</p>
          </div>
          <div class="conlist2">
            <img src="../../../static/ico_play.png"
                 alt="">
            <p>159.3万</p>
          </div>
          <div class="conlist3">
            <img src="../../../static/ico_danmu.png"
                 alt="">
            <p>7095</p>
          </div>
        </div>

      </li>
    </ul>

  </div>
</template>
<script>
export default {
  data () {
    return {
      list: []
    }
  },
  mounted () {
    this.$http.get('../../../static/home.json').then(res => {
      console.log(res.data)
      this.list = res.data
    })
  }

}
</script>

<style scoped lang="less">
.quanzhan {
  background-color: #f4f4f4;
  width: 100%;
  overflow-y: auto;
  height: 1174px;
}
.quanzhan > ul > li {
  width: 100%;
  overflow: hidden;
  position: relative;
  margin-top: 40px;
  display: flex;
  align-items: center;
}
.quanzhan > ul > li > img {
  width: 38px;
  height: 62px;
  margin-left: 35px;
  margin-right: 35px;
}
.quanzhan > ul > li > div > img {
  width: 234px;
  height: 146px;
  border-radius: 10px;
  vertical-align: top;
  // float: left;
}
.con {
  position: relative;
}
div {
  display: inline-block;
}
.quanzhan > ul > li > div > h2 {
  font-size: 28px;
  color: #212121;
  font-weight: normal;
  word-break: break-all;
  line-height: 35px;
  display: inline-block;
  width: 366px;
  margin-left: 20px;
}

.conlist {
  display: block;
  margin-left: 20px;
  position: absolute;
  top: 70px;
  left: 240px;
}
.conlist > img {
  width: 28px;
  height: 24px;
}
.conlist2 {
  position: absolute;
  top: 110px;
  left: 260px;
}
.conlist2 > img {
  width: 28px;
  height: 24px;
}
.conlist3 {
  position: absolute;
  left: 450px;
  top: 110px;
}
.conlist3 > img {
  width: 28px;
  height: 24px;
}
p {
  display: inline-block;
}
</style>

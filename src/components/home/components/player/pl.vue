<template>
  <div class="pl">
    <h3 id="pinglun">评论(4671)</h3>
    <div class="pd">
      <img src="../../../../../static/noface.gif"
           alt="">
      <input type="input"
             placeholder="说点什么吧"
             class="comment"
             v-model="msg"
             ref="ipt">
      <div class="pw">

        <button class="send"
                @click="send"
                disabled
                ref="btn">发布</button>
      </div>

      <ul class="list">
        <li v-for="(item,index)
            in
            list"
            :key="index">
          <span>{{time}}</span>
          <p>
            {{item}}
          </p>
          <i @click="del(index)">删除</i>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import time from '../../../../utils/time.js'
export default {
  data () {
    return {
      msg: '',
      list: [],
      time: ''

    }
  },

  methods: {

    send () {
      this.list.push(this.$refs.ipt.value)
      this.time = time()
    },
    del (index) {
      this.list.splice(index, 1)
    }
  },
  watch: {
    msg: function () {
      console.log(this.msg)

      if (this.$refs.ipt.value.length > 0) {
        this.$refs.btn.disabled = false
      } else {
        (
          this.$refs.btn.disabled = true
        )
      }
    }

  }

}
</script>

<style lang="less" scoped>
.pd {
  height: 60px;
}
.comment {
  outline: none;
  background: #f4f4f4;
  border-radius: 40px;
  width: 600px;
  height: 60px;
  margin-left: 30px;
  padding-left: 10px;
}
h3 {
  margin-top: 40px;
  margin-bottom: 30px;
  padding-left: 30px;
}
img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-left: 30px;
}
.send {
  background: #fb7299;
  color: #fff;
  width: 120px;
  height: 60px;
  border-radius: 15px;
  outline: none;
}
.pw {
  text-align: center;
  padding-right: 30px;
  padding-top: 20px;
}
li {
  width: 100%;
  border-bottom: 1px solid #ccc;
  position: relative;
  padding-left: 30px;
  padding-top: 40px;
}
span {
  display: block;
  // position: absolute;
  // top: 0;
  // right: 30px;
  text-align: right;
  padding-right: 30px;
}
i {
  font-style: normal;
  display: inline-block;
  margin-left: 640px;
}
</style>

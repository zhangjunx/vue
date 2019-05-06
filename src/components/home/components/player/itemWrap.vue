<template>
  <div class="list searchBar"
       id="searchBar">
    <ul>
      <router-link v-for="(item,index) in list.list"
                   :key="index"
                   to="/play"
                   tag="li">
        <div class="img_box">
          <img :src="item.img"
               alt="">
          <span><i><img src="../../img/start.png" /></i>20.1万</span>
        </div>

        <p>{{item.msg}}</p>
        <span>App内打开</span>
      </router-link>
    </ul>
    <a href="
       javascript:;"
       @click="goTop"
       ref="btn"><img src="./vido/返回顶部.png"
           alt=""></a>
  </div>
</template>

<script>
// import { getList } from '@/api/index'
// import axios from 'axios'
export default {
  data () {
    return {
      list: [],
      isTop: true,
      timer: null
    }
  },
  created () {
    // axios.get('@/static/home.json').then(response => {
    //   console.log(response.data)
    // }, response => {
    //   console.log('error')
    // })
    this.$http.get('../../static/home.json')
      .then((res) => {
        // console.log(res.data.list)
        this.list = res.data
      })
  },
  mounted () {

  },
  methods: {

    goTop () {
      let self = this
      self.timer = setInterval(function () {
        let osTop = document.documentElement.scrollTop || document.body.scrollTop
        let ispeed = Math.floor(-osTop / 5)
        document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed
        self.isTop = true
        if (osTop === 0) {
          clearInterval(self.timer)
        }
      }, 30)
    }
  }
}
</script>

<style lang="less" scoped>
.list {
  width: 700px;
  height: 100%;
  position: relative;
  margin: auto;
  a {
    width: 72px;
    display: block;
    height: 72px;
    position: fixed;
    bottom: 50px;
    right: 40px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  ul {
    margin-top: 10px;
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-between;
    li {
      overflow: hidden;
      width: 339px;
      margin-bottom: 20px;
      padding-bottom: 5px;
      .img_box {
        width: 100%;
        height: 210px;
        position: relative;

        > span {
          display: inline-block;
          width: 120px;
          position: absolute;
          z-index: 11;
          bottom: 10px;
          height: 32px;
          line-height: 32px;
          color: #fff;
          i {
            display: inline-block;
            width: 32px;
            height: 32px;
            img {
              width: 100%;
              height: 100%;
            }
          }
        }
        img {
          width: 100%;
          height: 210px;
          border-radius: 10px;
        }
      }

      p {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        margin-bottom: 10px;
      }
      > span {
        border: 1px solid #fb7299;
        color: #fb7299;
        border-radius: 5px;
        padding: 4px 8px;
      }
    }
  }
}
</style>

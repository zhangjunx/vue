<template>
  <div class="list">
    <ul>
      <li v-for="(item,index) in list.list"
          :key="index">
        <img :src="item.img"
             alt="">
        <p>{{item.msg}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
// import { getList } from '@/api/index'
// import axios from 'axios'
export default {
  data () {
    return {
      list: []
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
  }
}
</script>

<style lang="less" scoped>
.list {
  width: 700px;
  height: 100%;
  margin: auto;

  ul {
    margin-top: 10px;
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-between;
    li {
      overflow: hidden;
      width: 339px;

      img {
        width: 100%;
        height: 210px;
        border-radius: 10px;
      }
      p {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        margin-bottom: 10px;
      }
    }
  }
}
</style>

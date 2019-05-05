<template>
  <div class="tui">

    <div class="tuijian">
      <p>{{list[0].title}}</p>
      <a href="javascript:">
        <img src="./img/排行.png"
             alt="">
        <p>排行榜</p>
        <img src="./img/paihang2.png"
             alt="">
      </a>
      <ul>
        <li v-for="(item,index) in list"
            :key="index"><img :src="item.img"
               alt="">
          <p>{{item.ps}}</p>
        </li>
      </ul>
    </div>

    <div class="tuijian"
         v-for="(it,id) in plist"
         :key="id">
      <p>{{it.title}}</p>
      <a href="javascript:">

        <p>查看更多</p>
        <img src="./img/paihang2.png"
             alt="">
      </a>
      <ul>
        <li v-for="(item,index) in plist"
            :key="index"><img :src="item.img"
               alt="">
          <p>{{item.ps}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      list: [
        {
          title: '热门推荐',
          img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=503611284,163679532&fm=27&gp=0.jpg',
          ps:
            '前方高能！让世界感受这场视觉盛宴吧！'
        },
        {

          img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2283475866,99613932&fm=27&gp=0.jpg',
          ps:
            '《火影忍者博人传》沙动画极限2000幅，沙子绘制的动画效果炸裂堪比原作！'
        },
        {

          img: 'http://img0.imgtn.bdimg.com/it/u=3117472094,2250172310&fm=26&gp=0.jpg',
          ps:
            'B站宝贝'
        },
        {

          img: 'http://img0.imgtn.bdimg.com/it/u=982076089,2180960435&fm=11&gp=0.jpg',
          ps:
            '【3D东方】Brambly Boundaries'
        }
      ],
      plist: [

        {
          title: 'MAD·AMV',
          img: 'http://i2.hdslb.com/bfs/archive/e998d555c4e5f6c703420c9b014932a8377eb5bb.jpg',
          ps:
            '前方高能！让世界感受这场视觉盛宴吧！'
        },
        {
          title: 'MMD·3D',
          img: 'http://i0.hdslb.com/bfs/archive/11c89c8137221e3feadab54d6339ad7ad4159a45.jpg',
          ps:
            '《火影忍者博人传》沙动画极限2000幅，沙子绘制的动画效果炸裂堪比原作！'
        },
        {
          title: '短片·手书·配音',
          img: 'http://i1.hdslb.com/bfs/archive/677602a3919e75a64abdb8b2763636eaa3f0b9af.jpg',
          ps:
            'B站宝贝'
        },
        {
          title: '综合',
          img: 'http://i0.hdslb.com/bfs/archive/864439db4cf5d6504de091a3085f36a1dd0d4b43.jpg',
          ps:
            '【3D东方】Brambly Boundaries'
        }

      ]
    }
  },
  mounted () {
    // console.log(this.list[0].img)
  }
}
</script>

<style scoped lang="less">
.tui {
  background: #f9f9f9;
  width: 100%;
  border-top: 2px solid #ccc;
  padding-top: 96px;
}
.tuijian {
  width: 100%;
  height: 740px;
  position: relative;
}
.tui .tuijian > p {
  display: inline-block;
  font-size: 32px;
  color: #212121;
  padding-left: 20px;
  height: 100px;
  line-height: 100px;
}
.tui .tuijian ul {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.tui .tuijian ul li {
  width: 339px;
  margin-bottom: 20px;
}
.tui .tuijian ul li p {
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.tui .tuijian ul li img {
  width: 100%;
  height: 220px;

  border-radius: 15px;
}
.tui .tuijian a {
  display: inline-block;
  position: absolute;
  top: 25px;
  right: 20px;
}
.tui .tuijian a img {
  vertical-align: middle;
}
.tui .tuijian a p {
  display: inline-block;
  color: #ffa726;
}
</style>

<template>
  <div class="play">

    <video-player class="video-player vjs-custom-skin"
                  ref="videoPlayer"
                  :playsinline="true"
                  :options="playerOptions"></video-player>
    <div class="title">
      <img src="./vido/App.png"
           alt="">
    </div>
  </div>

</template>
<script>

import 'videojs-flash'
export default {
  name: 'BusImg',
  data () {
    return {
      // 视频播放
      playerOptions: {
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        autoplay: false,
        muted: false,
        loop: false,
        preload: 'auto',
        language: 'zh-CN',
        aspectRatio: '16:9',
        fluid: true,
        sources: [{
          type: '',
          src: '@/../static/video/90189456-1-6.mp4'// url地址

        }],
        poster: '',

        notSupportedMessage: '此视频暂无法播放，请稍后再试',
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true // 全屏按钮
        }
      }
    }
  }
}
</script>
<style lang="less" scoped>
.video-js .vjs-icon-placeholder {
  width: 100%;
  height: 100%;
  display: block;
}
.video-player {
  padding-top: 88px;
}
.title {
  img {
    margin: 0 auto;
    display: block;
  }
}
</style>

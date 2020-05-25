// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible/flexible'
import axios from 'axios'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import VueLazyLoad from 'vue-lazyload'
import VideoPlayer from 'vue-video-player'
import FastClick from 'fastclick'
// import 'babel-polyfill'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
Vue.use(VideoPlayer)

FastClick.attach(document.body)

// 路由守卫函数
// 路由全局前置函数
router.beforeEach((to, from, next) => {
  console.log(to.meta)
  document.title = to.meta.title
  next()
})

Vue.use(VueLazyLoad, {
  preLoad: 1.3,
  error: 'static/error.png',
  loading: 'static/loading.gif',
  attempt: 1
})

Vue.prototype.$http = axios

Vue.use(MintUI)

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})

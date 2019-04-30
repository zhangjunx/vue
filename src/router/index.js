import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home.vue'
import homePage from '@/components/home/components/home_page/home_page.vue'
// import animation from '@/components/home/components/animation/animation.vue'
// import tuijian from '@/components/home/components/animation/tuijian.vue'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: home
  }, {
    path: '/home',
    component: home,
    children: [{
      path: 'homePage',
      component: homePage
    }]
  }]
})

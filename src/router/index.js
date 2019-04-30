import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
import tuijian from '../animation/tuijian.vue'
import duanpian from '../animation/duanpian.vue'
import MAD from '../animation/MAD.vue'
import MMD from '../animation/MMD.vue'
import zonghe from '../animation/zonghe.vue'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/tuijian'
  },
  {
    path: '/tuijian',
    component: tuijian
  },
  {
    path: '/duanpian',
    component: duanpian
  },
  {
    path: '/MAD',
    component: MAD
  },
  {
    path: '/MMD',
    component: MMD
  },
  {
    path: '/zonghe',
    component: zonghe
  },
  {
    path: '*',
    redirect: '/tuijian'
  }

=======
import billboard from '@/common/billboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/'
    },
    {
      path: '/billboard',
      component: billboard
    }
>>>>>>> 3a3d416e436b20c6c42c8a59e4a2704051f2923c
  ]
})

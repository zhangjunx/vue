import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home.vue'
import homePage from '@/components/home/components/home_page/home_page.vue'
import animation from '../animation/animation.vue'
// import tuijian from '@/components/home/components/animation/tuijian.vue'
import billboard from '@/common/billboard'
// import animation from '../animation/animation.vue'
import tuijian from '../animation/tuijian.vue'
import MAD from '../animation/MAD.vue'
import quanzhan from '@/components/billboard/quanzhan.vue'
// import MMD from '../animation/MMD.vue'
// import duanpian from '../animation/duanpian.vue'
// import zonghe from '../animation/zonghe.vue'
import donghua from '@/components/billboard/donghua.vue'
import register from '@/components/register/register.vue'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: home
  }, {
    path: '/home',
    component: home,
    redirect: '/home/homePage',
    children: [{
      path: 'homePage',
      component: homePage
    },
    {
      path: 'animation',
      component: animation,
      redirect: '/home/animation/tuijian',
      children: [

        {
          path: 'tuijian',
          component: tuijian
        },
        {
          path: 'MAD',
          component: MAD
        }

      ]
    }
    ]

  },
  {
    path: '/billboard',
    component: billboard,
    redirect: '/billboard/quanzhan',
    children: [{
      path: 'quanzhan',
      component: quanzhan
    },
    {
      path: 'donghua',
      component: donghua
    }
    ]
  },
  {
    path: '/register',
    component: register
  }

  ]

})

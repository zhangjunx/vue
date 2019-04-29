import Vue from 'vue'
import Router from 'vue-router'
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
  ]
})

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router=new Router({
  routes:[
    {
      path:'/',
      redirect:'/energy'
    },
    {
      path:'/energy',
      component: resolve => require(['../components/Layout.vue'], resolve),
      children:[
        {
      path:'/energy',
      component: resolve => require(['../components/echats/energy.vue'], resolve)
        },
        {
       path:'/aqi',
       component: resolve => require(['../components/echats/aqi.vue'], resolve)
        },
        {
      path:'/tranmap',
      component: resolve => require(['../components/bmap/tranmap.vue'], resolve)
        },
        {
       path:'/hostmap',
       component: resolve => require(['../components/echats/hostmap.vue'], resolve)
        },
        {
       path:'/map',
       component: resolve => require(['../components/bmap/map.vue'], resolve)
        }
      ]
    },
  ]
})


export default router

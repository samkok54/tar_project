import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import tar from '@/components/tar'
import customer from '@/components/customer'
import routers from '@/components/routers'
import procera from '@/components/procera'
import showcus from '@/components/showcus'
import signup from '@/components/signup'
import addcustomer from '@/components/addcustomer'
import test from '@/components/test'
import highchart from '@/components/highchart'
import monitor from '@/components/monitor'
import monitoroneService from '@/components/monitoroneService'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Hello },
    { path: '/tar', component: tar },
    { path: '/customer', component: customer, meta: {requiresLogin: false} },
    { path: '/router', component: routers },
    { path: '/procera', component: procera },
    { path: '/showcus', component: showcus },
    { path: '/signup', component: signup },
    { path: '/addcustomer', component: addcustomer },
    { path: '/test', component: test, meta: {requiresAuth: true} },
    { path: '*', redirect: '/test' },
    { path: '/highchart', component: highchart },
    { path: '/monitor', component: monitor },
    { path: '/monitoroneService', component: monitoroneService }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((x) => x.meta.requiresAuth)) {
    if (localStorage.getItem('status') !== 'T' || localStorage.getItem('status') === null) {
      next({ path: '/customer' })
    } else {
      next()
    }
    return
  }
  next()
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((x) => x.meta.requiresLogin)) {
    if (localStorage.getItem('status') === 'T') {
      next({ path: '/test' })
    } else {
      next({ path: '/customer' })
    }
    return
  }
  next()
})

export default router


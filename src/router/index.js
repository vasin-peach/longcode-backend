import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Body from '@/components/Layout/Body'
import Header from '@/components/Layout/Header'

import Landing from '@/components/Layout/Landing'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      components: {
        header: Header,
        body: Body
      },
      children: [
        { path: '/', redirect: '/landing'},
        { path: '/landing', component: Landing, name: 'Landing'}
      ]
    }
  ]
})

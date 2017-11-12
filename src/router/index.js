// System
import Vue from 'vue'
import Router from 'vue-router'

// Layout
import Body from '@/components/Layout/Body'
import Header from '@/components/Layout/Header'

// Body
import Index from '@/components/Body/Index'
import Scoreboard from '@/components/Body/Scoreboard'
import Mytask from '@/components/Body/Mytask'

import { mapState, mapMutations } from 'vuex'
import firebase from 'firebase'

Vue.use(Router)
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      components: {
        header: Header,
        body: Body
      },
      children: [
        { path: '/', component: Index, name:'index' },
        { path: '/scoreboard', component: Scoreboard, name: 'scoreboard' },
        { path: '/mytask', component: Mytask, name: 'mytask', meta: { requiresAuth: true} }
      ],
    }
  ],
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    firebase.auth().onAuthStateChanged( function(user) {
      if (user) {
        next()
      } else {
        next({
          path: '/'
        })
      }
    })  
  } else {
    next()
  }
})

// router.beforeEach((to, from, next) => {
//   mapMutations(['auth'])
//   next()
// })
export default router
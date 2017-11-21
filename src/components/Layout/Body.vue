<template>
  <div class="container-fluid">
    <transition :name="routeChange">
      <router-view class="child-view"></router-view>
    </transition>
  </div>
  
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
    name: 'body',
    data() {
      return {
        routeChange: 'slide-left'
      }
    },
    beforeRouteUpdate (to, from, next) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.routeChange = toDepth < fromDepth ? 'slide-right' : 'slide-left'
      next()
    },
    computed: {
      ...mapState(['userAuth', 'userData'])
    },
    methods: {
      ...mapMutations(['auth']),
    },
}
</script>

<style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s ease;
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
  .child-view {
    transition: all .3s ease;
  }
  .slide-left-enter, .slide-right-leave-active {
    opacity: 0;
  }
  .slide-left-leave-active, .slide-right-enter {
    opacity: 0;
  }
</style>

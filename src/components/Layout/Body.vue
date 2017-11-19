<template>
  <div class="container-fluid">
      <router-view></router-view>
  </div>
  
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
    name: 'body',
    computed: {
      ...mapState(['userAuth', 'userData'])
    },
    methods: {
      ...mapMutations(['auth']),
    },
}
</script>

<style>
</style>

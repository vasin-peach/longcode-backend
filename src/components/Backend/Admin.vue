<template>
  <div>
      <div class="row" v-if="userAuth && userData && userData.permission > 2">
        <div class="admin col-lg-9 col-md-11 col-sm-11 col-xs-11 mx-auto">
          Admin Panel
        </div>
      </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
    name: 'admin',
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
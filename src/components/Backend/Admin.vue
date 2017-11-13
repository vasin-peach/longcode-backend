<template>
  <div>
      Admin Page
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

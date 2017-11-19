<template>
  <div>
    [Admin] User Manager
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import firebase from 'firebase'
export default {
  name: 'adminUser',
  computed: {
    ...mapState(['userAuth', 'userCred'])
  },
  methods: {
    ...mapMutations(['fbLogin', 'gitLogin', 'logout']),
  }
}
</script>

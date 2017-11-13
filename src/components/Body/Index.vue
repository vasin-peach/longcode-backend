<template>
  <div>
    Index Page
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import firebase from 'firebase'
export default {
  name: 'index',
  computed: {
    ...mapState(['userAuth', 'userCred'])
  },
  methods: {
    ...mapMutations(['fbLogin', 'gitLogin', 'logout']),
    signin() {
      swal({
          title: "Log In to Continue",
          html: '<input id="swal-input1" class="swal2-input">' + '<input id="swal-input2" class="swal2-input">'
      });
    }
  }
}
</script>

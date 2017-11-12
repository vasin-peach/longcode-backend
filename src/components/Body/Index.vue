<template>
  <div>
      Index page
      <button class="btn btn-primary btn-lg" @click="fbLogin">Sign in FB</button>
      <button class="btn btn-primary btn-lg" @click="gitLogin">Sign in GIT</button>
      <button class="btn btn-primary btn-lg" @click="logout">Sign Out</button>

      <!-- <button class="btn btn-success btn-lg" @click="signin()">Signin</button> -->
      Hi
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

<template>
  <div id="app">
    <router-view name="header"></router-view>
    <router-view name="body"></router-view>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'app',
  computed: {
    ...mapState(['userAuth']),
  },
  created() {
    // Auth autoload
    this.authLoad()
  },
  methods: {
    authLoad() {
      this.$store.commit('auth');
    }
  }
}

</script>

<style>
body, html {
  min-height: 100%;
  background: #4ABDAC;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 85px;
  
}
.ghost-button {
  cursor: pointer;
  background: none;
  border-radius: 2px;
  border: 1px solid #f2f2f2;
  color: #f2f2f2;
  -webkit-transition: background 0.1s;
  -moz-transition: background 0.1s;
  transition: background 0.1s;
}
.ghost-button:hover {
  background: rgba(242, 242, 242, 0.5);
}
.ghost-button:focus {
  background: rgba(242, 242, 242, 0.5);
  box-shadow: none;
}

</style>

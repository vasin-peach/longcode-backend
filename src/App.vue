<template>
  <div id="app">
    <transition name="loading-transition">
      <div class="">
        <router-view name="header"></router-view>
        <router-view name="body"></router-view>
      </div>
    </transition>
    <transition name="loading-transition">
      <div class="page-loading" v-if="userAuth && !userData">
        <div class="page-loading-fade">
        </div>
        <div class="page-loading-icon">
          <img src="./assets/icon/icon.png">
        </div>
        <div class="page-loading-spiner">
          <i class="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i><br>
        </div>
        <div class="page-loading-label">
          Loading...
        </div>
      </div>
    </transition>
    
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'app',
  computed: {
    ...mapState(['userAuth', 'userData']),
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
/* App css edit */
.full-height {
  min-height: 100%;
  background: #444;
}
* {
  font-family: 'Mitr', 'FontAwesome', sans-serif !important;
}
a {
  text-decoration: none !important;
}
.button {
  cursor: pointer;
  border: none;
  border-radius: 3px;
  padding: 10px 13px;
  background: #D94B3F;
  color: #f2f2f2;
  -webkit-transition: box-shadow 0.3s;
  -moz-transition: box-shadow 0.3s;
  transition: box-shadow 0.3s;
}
  .button:hover {
    box-shadow: 0 0 1px 1px #18121E;
  }
  .button:focus {
    outline: none;
  }
input, textarea, button {
  border-radius: 3px !important;
}
  input:focus, textarea:focus {
    border-color: #EAC67A !important;
    box-shadow: none !important;
    outline: none !important;
  }
  button:focus {
    border-color: none !important;
    box-shadow: none !important;
    outline: none !important;
  }
  button:hover {
    opacity: 0.9;
  }





body, html {
  min-height: 100%;
  color: #DFDCE3;
  background: #f2f2f2;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 85px;
  
}
@media only screen and (min-width: 767px) {
  #app {
    padding-top: 95px;
  }
}
@media (max-width:992px) and (min-width:767px) {
  #app {
    padding-top: 120px;
  }
}​
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

.page-loading {
  min-height: 100%;
}
  .page-loading-spiner {
    -ms-transform: translate(-50%, -50%); /* IE 9 */
    -webkit-transform: translate(-50%, -50%); /* Safari */
    transform: translate(-50%, -50%);
    position: absolute;
    top: 50%;
    left: 50%;
  }
    .page-loading .fa-spin {
      font-size: 100px;
      color:  #ccc;
      height: 100%;
      width: 100%;
      box-shadow: 0 0 1px 3px #984B43;
      border-radius: 50%;
    }
    .page-loading span {
      color: #DFDCE3;
    }
    .fa-spin {
      -webkit-animation: fa-spin 1s infinite ease;
      animation: fa-spin 1s infinite ease;
    }

  .page-loading-icon {
    -ms-transform: translate(-50%, -50%); /* IE 9 */
    -webkit-transform: translate(-50%, -50%); /* Safari */
    transform: translate(-50%, -50%);
    position: absolute;
    top: 50%;
    left: 50%;
    background: #DFDCE3;
    border-radius: 50%;
    padding: 10px;
  }
    .page-loading-icon img{
      width: 60px;
    }

  .page-loading-label {
    -ms-transform: translate(-50%, -50%); /* IE 9 */
    -webkit-transform: translate(-50%, -50%); /* Safari */
    transform: translate(-50%, -50%);
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: 70px;
    color: #DFDCE3;
  }
  .page-loading-fade {
    position: absolute;
    top: 0; bottom: 0;
    left: 0; right: 0;
    background: rgba(24, 18, 30, 0.9);
  }


/* Color */
.salmon-1 {
  color: #D94B3F !important;
}
.salmon-2 {
  color: #ea9c95 !important;
}
.pointer {
  cursor: pointer !important; 
}

/* Bg */
.bg-salmon-1 {
  background: #D94B3F !important;
}
.bg-salmon-2 {
  background: #ea9c95 !important;
}

/* Hr */
.hr-sm {
  border: 0.7px solid #e0e9eb !important;
  box-shadow: 0 0.2px 0 0 #b1c7ce;
}


/* Transition */
.loading-transition-enter-active {
  transition: all 0.2s ease;
}
.loading-transition-leave-active {
  transition: all 0.5s ease;
}
.loading-transition-enter, .loading-transition-leave-to {
  opacity: 0;
}
</style>

<template>
  <div>
    <nav class="navbar navbar-expand-md fixed-top">
      <router-link to="/" class="navbar-brand"><img src="../../assets/icon/brand.png" style="height: 40px;"></router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fa fa-bars" aria-hidden="true"></i>
      </button>
  
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <!-- Mobile menu -->
          <li class="nav-item sm" >
            <div class="nav-profile" style="border-radius: 2px; margin-top: 5px; color: #DFDCE3; font-size: 22px;" v-if="userData">
              <strong>{{ userAuth.displayName }}</strong>
            </div>
          </li>
          <li class="nav-item sm">
            <div class="nav-point" style="border-radius: 2px; margin-top: 5px;" v-if="userData">
              <span><img src="../../assets/icon/point.png" style="width: 25px; border-radius: 50%; padding-bottom: 4px;"> <strong>{{userData.point}}</strong></span>
            </div>
            <hr>
          </li>

          <!-- Pc menu -->
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'scoreboard'}"><strong :class="{ 'disabled': !userAuth }"><i class="fa fa-star" aria-hidden="true"></i> SCORE BOARD</strong></router-link>
          </li>
          <!-- <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'mytask'}"><strong :class="{ 'disabled': !userAuth }"><i class="fa fa-code" aria-hidden="true"></i> MY TASK</strong></router-link>
          </li> -->

          <!-- Mobile menu -->
          <li class="nav-item sm">
            <router-link class="nav-link" :to="{ name: 'index'}"><strong :class="{ 'disabled': !userAuth }"> OPTION</strong></router-link>
          </li>
          <li class="nav-item sm" v-if="userData && userData.permission > 2">
            <router-link class="nav-link" :to="{ name: 'adminTask'}"><strong><i class="fa fa-star" aria-hidden="true"></i> ADMIN</strong></router-link>
          </li>
          <li class="nav-item sm" v-if="userData">
            <hr>
            <a class="nav-link" style="cursor:pointer" @click="logout"><strong>SIGN OUT</strong></a>
          </li>
          <li class="nav-item sm" v-else>
            <hr>
            <a class="nav-link" style="cursor:pointer" @click="fbLogin"><strong>SIGN IN</strong></a>
          </li>



        </ul>
        
        <!-- Loggedin -->
        <ul class="form-inline my-2 my-lg-0"  v-if="userData">

          <!-- Point -->
          <li class="nav-item md">
            <a class="nav-link">
              <div class="nav-point">
                <img src="../../assets/icon/point.png" style="width: 38px; border-radius: 50%;">
                <span>{{userData.point}}</span>
              </div>
            </a>
          </li>

          <!-- Profile -->
          <li class="nav-item dropdown md">
            <a class="nav-link" href="#" id="profile-dropdown" data-toggle="dropdown" aria-haspopup="false" aria-expanded="false">
              <div class="nav-profile">
                <img :src="userData.image" style="width: 38px; border-radius: 50%;">
                <i class="fa fa-chevron-down" aria-hidden="true"></i>
              </div>
            </a>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="profile-dropdown" >
              <span class="dropdown-header"><strong> {{ userAuth.displayName }} </strong></span>
              <div class="dropdown-divider"></div>
              <span class="dropdown-item">
                <div class="nav-point">
                  <span><img src="../../assets/icon/point.png" style="width: 25px; border-radius: 50%; padding-bottom: 4px;"> <strong>{{userData.point}}</strong></span>
                </div>
              </span> 
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">OPTION</a>
              <router-link class="dropdown-item" :to="{ name: 'adminTask'}" v-if="userData.permission > 2">ADMIN</router-link>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" style="cursor:pointer" @click="logout">SIGN OUT</a>
            </div>
          </li>

        </ul>
         <!-- Not login -->
        <ul class="form-inline my-2 my-lg-0 md" v-else>

          <!-- Point -->
          <li class="nav-item disabled">
            <a class="nav-link">
              <div class="nav-point">
                <img src="../../assets/icon/point.png" style="width: 38px; border-radius: 50%;">
                <span>0</span>
              </div>
            </a>
          </li>

         <!-- Profile -->
          <li class="nav-item dropdown">
            <a class="nav-link" id="profile-dropdown" data-toggle="dropdown" aria-haspopup="false" aria-expanded="false">
              <div class="nav-profile">
                <img src="../../assets/icon/user.png" style="width: 38px; border-radius: 50%;">
                <i class="fa fa-chevron-down" aria-hidden="true"></i>
              </div>
            </a>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="profile-dropdown" >
              <a class="dropdown-item" style="cursor:pointer" @click="fbLogin">SIGN IN FB</a>
              <a class="dropdown-item" style="cursor:pointer" @click="gitLogin">SIGN IN GIT</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
    name: 'header',
    mounted() {
      $('.nav-link').on('click', function() {
        $('.navbar-collapse').collapse('hide');
      })
    },
    created() {
      // console.log(this.userAuth)
    },
    computed: {
      ...mapState(['userAuth', 'userData'])
    },
    methods: {
      ...mapMutations(['logout', 'fbLogin', 'gitLogin']),
    }
}

</script>

<style>
.sm {
  display: none;
}
hr {
  background: #f2f2f2;
  border: 1px solid #f2f2f2;
}
.navbar {
  background: #18121E;
}
.navbar li {
  list-style-type: none;
}
.nav-link > strong {
  color: #DFDCE3;
}

/* Nav profile */
.nav-profile {
  cursor: pointer;
}
.nav-profile, .nav-point {
  background: #233237;
  padding: 2px 10px 2px 2px;
  border-radius: 20px;
  -webkit-transition: opacity 0.3s;
  -moz-transition: opacity 0.3s;
  transition: opacity 0.3s;
}
  .nav-profile i {
    color: #DFDCE3;
    position: relative;
    top: 1px; left: 1px;
  }
  .nav-profile:hover{
    opacity: 0.7;
  }
  .nav-profile:active i {
    opacity: 0.5;
    color: #ccc;
  }

/* Nav point */
.nav-point span {
    color: #DFDCE3;
    position: relative;
    top: 2px; left: 1px;
    font-weight: bold;
}

/* Navbar dropdown */
.dropdown-menu-right {
  right: 0;
  left: auto;
  border-radius: 2px;
  border: none;
  box-shadow: 0 0 2px 0 #18121E;
}

/* Navbar toggler */
.navbar-toggler {
  cursor: pointer;
  border-radius: 2px;
  border: 1px solid #dfdce3;
  color: #dfdce3;
  font-size: 25px;
}
  .navbar-toggler:focus {
    outline: none;
  }



/* Mobile */
@media only screen and (max-width: 767px) {
  .navbar {
    text-align: right;
  }
  .md {
    display: none;
  }
  .sm {
    display: block;
  }
}

.disabled {
  color: #ccc !important;
  opacity: 0.5;
}
</style>

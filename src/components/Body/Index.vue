<template>
  <!-- Logged in -->
  <div v-if="userAuth && userData">
    <div class="row justify-content-center">
      <div class="index-landing col-md-11 col-lg-9">
        <div class="row">

          <!-- Pratice -->
          <div class="col-lg-6">
            <router-link :to="{name: 'practice'}">
              <div class="card card-practice">
                <div class="card-block">
                  <div class="card-block-header card-block-practice-header">
                    Practice
                  </div>
                  <div class="card-block-body card-block-practice-body">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    <hr style="border-color: #EAC67A">
                    <div class="text-right">
                      <strong class="btn">View</strong>
                    </div>
                  </div>
                </div>
              </div>
            </router-link>
          </div>

          <!-- Challenges -->
          <div class="col-lg-6">
            <div class="card card-challenges">
              <div class="card-block">
                <div class="card-block-header card-block-challenges-header">
                  Challenges
                </div>
                <div class="card-block-body card-block-challenges-body">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  <hr style="border-color: #EAC67A">
                  <div class="text-right">
                    <strong class="btn">View</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <!-- Tournaments -->
          <div class="col-lg-6">
            <div class="card card-tournaments">
              <div class="card-block">
                <div class="card-block-header card-block-tournaments-header">
                  Tournaments
                </div>
                <div class="card-block-body card-block-tournaments-body">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  <hr style="border-color: #EAC67A">
                  <div class="text-right">
                    <strong class="btn">View</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <!-- Arcade -->
          <div class="col-lg-6">
            <div class="card card-arcade">
              <div class="card-block">
                <div class="card-block-header card-block-arcade-header">
                  Arcade
                </div>
                <div class="card-block-body card-block-arcade-body">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  <hr style="border-color: #EAC67A">
                  <div class="text-right">
                    <strong class="btn">View</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  </div>





  <!-- Not login -->
  <div v-else>
  <div class="row">
    <div class="index-login col-10 col-sm-8 col-md-6 col-lg-4">

      <!-- Header -->
      <div class="index-login-header">
        <img src="../../assets/icon/brand.png">
        <div class="index-login-brand"><strong>มา LONGCODE กัน</strong></div>
      </div>

      <!-- Body -->
      <div class="index-login-body">
        <form v-on:submit.prevent="signIn">
          <!-- Form input -->
          <div class="from-group">
            <input v-model="signinEmail" type="email" class="form-contorl" placeholder="Email" required>
          </div>
          <div class="from-group">
            <input v-model="signinPassword" type="password" class="form-contorl" placeholder="Password" required>
          </div>
          <div class="form-group">
            <button type="submit" class="btn btn-danger pointer bg-salmon-1" style="width: 100%;">SIGN IN</button>
          </div>
        </form>

        <!-- Login -->
        <div class="form-group row">
          <div class="col">
            <div class="login-icon-facebook" @click="fbLogin">
              <span><i class="fa fa-facebook-square" aria-hidden="true"></i></span>
            </div> 
          </div>
          <div class="col">
            <div class="login-icon-github" @click="gitLogin">
              <span><i class="fa fa-github" aria-hidden="true"></i></span>
            </div>
          </div>
        </div>
        <hr class="hr-sm">

        <!-- Signup -->
        <div>
          <div class="form-group">
            <label class="pointer sign-up" data-toggle="modal" data-target="#index-sign-up" aria-expanded="false" aria-controls="#index-sign-up">Create and Account</label>
          </div>
        </div>

        <!-- Br -->
        <hr class="hr-sm">
      </div>

    </div>
  </div>

  <!-- Signup form -->
  <div class="modal fade" id="index-sign-up">
    <div class="modal-dialog modal-sm" role="document">
      <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle"><strong>SIGN UP</strong></h5>
            <button type="button pointer" class="close" data-dismiss="modal" aria-label="Close">
              <span class="pointer" aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
          <form v-on:submit.prevent="signUp" class="text-left">
            <div class="form-group">
              <!-- <label for="index-sign-up">Email</label> -->
              <input v-model="signupEmail" pattern=".{6,}" name="taskName" type="email" class="form-control" placeholder="Email" required>
            </div>
            <div class="form-group">
              <!-- <label for="index-sign-up">Password</label> -->
              <input v-model="signupPassword" pattern=".{6,}" name="taskName" type="password" class="form-control" placeholder="Password" required>
            </div>
            <div class="form-group">
              <!-- <label for="index-sign-up">Retype password</label> -->
              <input v-model="signupRePassword" pattern=".{6,}" name="taskName" type="password" class="form-control" placeholder="Retype password" required>
            </div>
            <div class="text-center">
              <button type="submit" class="btn btn-danger pointer bg-salmon-1"><i class="fa fa-plus" aria-hidden="true"></i> SIGN UP</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import firebase from 'firebase'
export default {
  name: 'index',
  data() {
    return {
      signupEmail: null,
      signupPassword: null,
      signupRePassword: null,
      signinEmail: null,
      signinPassword: null,
    }
  },
  computed: {
    ...mapState(['userAuth', 'userData', 'userCred'])
  },
  methods: {
    ...mapMutations(['fbLogin', 'gitLogin', 'logout']),
    signIn() {
      if (!this.userAuth) {
        firebase.auth().signInWithEmailAndPassword(this.signinEmail, this.signinPassword).then(function() {
          swal("Signed in", "คุณเข้าสู่ระบบด้วย email", "success");
        }).catch (function(error) {
          if (error.code == 'auth/wrong-password') {
            swal("SIGN IN", "รหัสผ่านไม่ถูกต้อง", "error");
          }
          console.log(error)
        })
      }
    },
    signUp() {
      if (this.signupPassword != this.signupRePassword) {
        swal({title: 'Password', text: 'กรุณายืนยันรหัสผ่านให้ถูกต้อง', icon: 'warning'})
        return false
      }
      firebase.auth().createUserWithEmailAndPassword(this.signupEmail, this.signupPassword).then(function() {
        swal("SIGN UP.", "สมัครสมาชิกเสร็จสิ้น", "success");
      }).catch (function(error) {
        if (error.code == 'auth/email-already-in-use') {
          swal("SIGN UP", "อีเมลนี้ไม่สามารถใช้ได้", "error");
          return false
        }
      })
    }
  }
}
</script>

<style>
  /* Logged in */
  @media only screen and (min-width: 992px) {
   .index-landing {
    position: absolute;
    margin-top: 30px;
    margin-bottom: 60px;
    left: 50%; top: 50%;
    -ms-transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    }
  }
  .index-landing {
    /* position: absolute; */
    /* margin-top: 30px; */
    /* left: 50%; top: 50%;
    -ms-transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%); */
  }
  .index-landing .card{
    margin-bottom: 3%;
    border-radius: 3px;
    box-shadow: 0 1px 1px 0 #18121E;
    -webkit-transition: transform 0.3s ease, box-shadow 0.3s ease;
    -moz-transition: transform 0.3s ease, box-shadow 0.3s ease;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border: none !important;
    color: #18121E;
  }
    .index-landing .card:hover {
      -ms-transform: translateY(-2%);
      -webkit-transform: translateY(-2%);
      transform: translateY(-2%);
      box-shadow: 0 2px 2px 0 #18121E;
    }

    .card-block-header {
      padding: 15px;
      font-size: 30px;
      color: #f2f2f2;
    }
      .card-block-practice-header {
        background: -webkit-linear-gradient(to top, #18121E, #009999);
        background: -o-linear-gradient(to top, #18121E, #009999);  
        background: -moz-linear-gradient(to top, #18121E, #009999);
        background: linear-gradient(to top, #18121E, #009999);
      }
      .card-block-challenges-header {
        background: -webkit-linear-gradient(to top, #d5382a , #EAC67A);
        background: -o-linear-gradient(to top, #d5382a , #EAC67A);  
        background: -moz-linear-gradient(to top, #d5382a , #EAC67A);
        background: linear-gradient(to top, #d5382a , #EAC67A);
      }
      .card-block-tournaments-header {
        background: -webkit-linear-gradient(to top, #ff3385, #ff8080);
        background: -o-linear-gradient(to top, #ff3385, #ff8080);  
        background: -moz-linear-gradient(to top, #ff3385, #ff8080);
        background: linear-gradient(to top, #ff3385, #ff8080);
      }
      .card-block-arcade-header {
        background: -webkit-linear-gradient(to top, #3366ff, #aa80ff);
        background: -o-linear-gradient(to top, #3366ff, #aa80ff);  
        background: -moz-linear-gradient(to top, #3366ff, #aa80ff);
        background: linear-gradient(to top, #3366ff, #aa80ff);
      }
    .card-block-body {
      padding: 15px;
      text-align: left;
    }



  /* Not login */
  .index-login {
    border-radius: 3px;
    position: absolute;
    top: 49%; left: 50%;
    -ms-transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    box-shadow: 0 1px 1px 0 #18121E;
    padding: 0;
  }
  .index-login-header {
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    background: #233237;
    padding: 20px 30px;
  }
    .index-login-header img {
      width: 150px;
    }
    .index-login-brand {
      font-size: 15px;
      color: #DFDCE3;
    }
  .index-login-body {
    /* background: #EAC67A; */
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
    padding: 20px 30px;
  }
    .index-login-body input {
      color: #737373;
      border: none;
      border-radius: 3px !important;
      padding: 5px 10px;
      margin-top: 10px;
      margin-bottom: 10px;
      width: 100%;
      box-shadow: 0 0 1px 0 #233237;
    }
    .index-login-body input:focus {
      box-shadow: 0 0 1px 0 #18121E  !important;
    }
      .login-icon-facebook {
        background: #47589c;
      }
      .login-icon-github {
        background: #171616;
      }
      .login-icon i:hover{
        opacity: 0.9;
      }
      .login-icon-facebook, .login-icon-github {
        border-radius: 3px;
        font-size: 20px;
        color: #f2f2f2;
        padding: 5px;
        cursor: pointer;
      }
        .login-icon-facebook:hover, 
        .login-icon-github:hover, 
        .sign-up:hover {
          opacity: 0.9;
        }

  #index-sign-up input {
    border-width: 2px;
    border-radius: 0px !important;
    border-style: none none solid none;
  }
</style>

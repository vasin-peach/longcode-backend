<template>
  <div>
      <div class="row" v-if="userAuth && userData && userData.permission > 2">
        <div class="admin col-lg-9 col-md-11 col-sm-11 col-xs-11 mx-auto">
          <div class="admin-panel text-left">
            <span><strong style="color: #233237;">ADMIN PANEL</strong></span>
            <hr>
            <div class="row text-center">
              <router-link class="col-md-6 mb-1" :to="{ name: 'adminUser'}" style="color: #DFDCE3; text-decoration: none;">
                <div class="card admin-button" style="background: #233237;">
                  <div class="card-header">
                    <strong style="text-decoration: none"><i class="fa fa-users" aria-hidden="true"></i> User Mangement</strong>
                  </div>
                </div>
              </router-link>
              <router-link class="col-md-6 mb-1" :to="{ name: 'adminTask'}" style="color: #233237; text-decoration: none;">
                <div class="card admin-button" style="background: #EAC67A">
                  <div class="card-header">
                    <strong><i class="fa fa-code" aria-hidden="true"></i> Task Mangement</strong>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
          <hr>
          <div class="admin-manage text-left">
            <div class="admin-manage-box">
              <router-view></router-view>
            </div>
          </div>
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
    .admin hr {
        border: 1px solid #737373;
    }
    .admin-button {
      -webkit-transition: box-shadow 0.3s;
      -moz-transition: box-shadow 0.3s;
      transition: box-shadow 0.3s;
    }
    .admin-button:hover {
      box-shadow: 0 0 1px 1px #984B43;
    }

</style>
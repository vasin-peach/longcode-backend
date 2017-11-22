<template>
<div class="admin-user">
    <table class="table" style="clear:both;">
      <thead>
        <tr>
          <th width="10%">#</th>
          <th width="75%">NAME</th>
          <th width="15%" class="text-center">DELETE</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, num, num2) in allUsers">
          <td width="10%">{{num2+1}}</td>
          <td width="75%" style="cursor: pointer;" data-toggle="collapse" :data-target="'#' + user.createdAt" aria-expanded="false" aria-controls="#admin-task-view">
            <div><strong>{{user.name}}</strong></div>
            <div class="collapse" :id="user.createdAt">
              <!-- <div class="fa-1x mt-1" style="color: #595959">{{task.detail}}</div> -->
              <hr style="border: 0.5px solid #ccc; margin: 10px 0;">
              <span class="mt-1" style="color: #595959">Email: </span><span>{{user.email}}</span><br>
              <span class="mt-1" style="color: #595959">Permission: </span><span>{{user.permission}}</span><br>
              <span class="mt-1" style="color: #595959">Created At: </span><span>{{user.createdAt}}</span><br>
              <hr style="border: 0.5px solid #ccc; margin: 10px 0;">
            </div>
          </td>
          <td width="15%" class="text-center">
            <a style="color:#D94B3F; cursor: pointer;" @click="userRemove(user.createdAt)"><i class="fa fa-2x fa-times" aria-hidden="true"></i></a>
          </td>
        </tr>
      </tbody>
    </table>
    <br>
    <hr>
    <br>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import firebase from 'firebase'
import swal from 'sweetalert2'
export default {
  data() {
    return {
      allUsers: null
    }
  },
  name: 'adminUser',
  computed: {
    ...mapState(['userAuth', 'userCred'])
  },
  created() {
    this.loadUsers()
  },
  methods: {
    ...mapMutations(['fbLogin', 'gitLogin', 'logout']),
    loadUsers() {
      const this_ = this
      firebase.database().ref('users/').once('value').then(function(snapshot) {
        // for (var i in snapshot.val()) {
          this_.allUsers = snapshot.val()
        // }
      })
    },
    userRemove(id) {
      const this_ = this
      swal({
        title: 'Remove User',
        text: 'คุณต้องการลบผู้ใช้นี้จริงๆหรือไม่?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes!'
      }).then(function(result) {
        if (result.value) {
          firebase.database().ref('/users').orderByChild('createdAt').equalTo(id).once('value').then(function(snapshot) {
            snapshot.forEach(function(childSnapshot) {
              firebase.database().ref('/users').child(childSnapshot.key).remove().then(function() {
                swal("Remove Task", "คุณได้ลบ User", "success")
                this_.loadUsers()
              })
            })
          })
        }
      })
    }
  }
}
</script>

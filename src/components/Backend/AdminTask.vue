<template>
  <div class="admin-task">
    <!-- <router-link :to="{ name: 'taskAdd'}"><strong style="color: #D94B3F;"><i class="fa fa-plus" aria-hidden="true"></i> Add task</strong></router-link> -->
    <strong style="color: #D94B3F; cursor:pointer;" data-toggle="collapse" data-target="#admin-task-add" aria-expanded="false" aria-controls="#admin-task-add"><i class="fa fa-plus" aria-hidden="true"></i> Add task</strong>
    <br><br>
    <!-- <router-view></router-view> -->

    <div class="admin-task-add collapse" id="admin-task-add">
      <form v-on:submit.prevent="taskAdd">
          <div class="form-group">
              <label for="taskAddForm">Title:</label>
              <input v-model="taskName" name="taskName" type="text" class="form-control" placeholder="ex: ลองกรอกสิ."  >
          </div>
          <div class="form-group">
              <label>Detail:</label>
              <textarea  v-model="taskDetail" name="taskDetail" class="form-control" rows="3" placeholder="ex: แสดงผลข้อมูลจากผลรวมที่ผู้ใช้กรอกไปสี่ครั้ง."  ></textarea>
          </div>
          <div class="row">
              <div class="col-sm-6">
                  <div class="form-group">
                      <label>Input:</label>
                      <input  v-model="taskInput" name="taskInput" type="text" class="form-control" placeholder="ex: 1, 2, 3, 4 | ถ้ามี input หลายตัวให้คั่นด้วย ','"  >
                  </div>
              </div>
              <div class="col-sm-6">
                  <div class="form-group">
                      <label>Output:</label>
                      <input  v-model="taskOutput" name="taskOutput" type="text" class="form-control" placeholder="ex: 11"  >
                  </div>
              </div>
          </div>
          <button type="submit" class="button">Add task</button>
          <br><br><hr>
      </form>
      <br><br>
    </div>


    <table class="table" style="clear:both;">
      <thead>
        <tr>
          <th width="10%">#</th>
          <th width="75%">NAME</th>
          <th width="15%" class="text-center">DELETE</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(task, num) in tasks">
          <td width="10%">{{num+1}}</td>
          <td width="75%">{{task.name}}</td>
          <td width="15%" class="text-center">
            <a style="color:#D94B3F; cursor: pointer;" @click="taskRemove(task.createdAt)"><i class="fa fa-times" aria-hidden="true"></i></a>
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
export default {
  name: 'adminTask',
  data() {
    return {
      tasks: null,
      taskName: null,
      taskDetail: null,
      taskInput: null,
      taskOutput: null
    }
  },
  computed: {
    ...mapState(['userAuth', 'userCred'])
  },
  created() {
    this.taskLoad()
  },
  methods: {
    ...mapMutations(['fbLogin', 'gitLogin', 'logout']),
    taskLoad() {
      const this_ = this
      var allTask = []
      // this_.tasks = null
      firebase.database().ref('tasks/').once('value', function(snapshot) {
        snapshot.forEach((currentTask) => {
          const taskPush = currentTask.val()
          allTask.push(taskPush)
        })
        this_.tasks = allTask
      })
    },
    taskRemove(id) {
      const this_ = this
      var allTask = []
      // this.tasks = null
      swal({
        title: 'Remove Task',
        text: 'คุณต้องการลบ Task นี้หรือไม่?',
        icon: 'warning',
        buttons: true,
        dangerMode: true
      }).then((willDelete) => {
        if (willDelete) {
          firebase.database().ref('/tasks').orderByChild('createdAt').equalTo(id).once('value').then(function(snapshot) {
            snapshot.forEach(function(childSnapshot) {
              firebase.database().ref('/tasks').child(childSnapshot.key).remove().then(function() {
                swal("Remove Task", "คุณได้ลบ Task", "success")
                this_.taskLoad()
              })
            })
          })
        }
      })
    },
    taskAdd() {
        // Input split and filter
        this.taskInput = this.taskInput.split(',')
        var taskInputFilter = []
        for (var i in this.taskInput) {
            taskInputFilter.push(this.taskInput[i].replace(/^\s+|\s+$/g, ""))
        }
        this.taskInput = taskInputFilter

        var addTaskData = {
            'name': this.taskName,
            'detail': this.taskDetail,
            'input': this.taskInput,
            'output': this.taskOutput,
            'send:': 0,
            'pass': 0,
            'createdAt': firebase.database.ServerValue.TIMESTAMP,
            'status': 'enable'
        }
        firebase.database().ref('/tasks').push(addTaskData)
        swal("Added", "เพิ่ม Task เข้าสู่ระบบ", "success")
        this.taskLoad()
        this.taskName = null,
        this.taskDetail = null,
        this.taskInput = null,
        this.taskOutput = null
        $('#admin-task-add').collapse('hide')
    }
  }
}
</script>

<style>
  .admin-task th {
    background: #e6e6e6;
    color: #737373;
    font-size: 18px;
  }
  .admin-task tr:nth-child(even) {
    background: #ececec;
  }
</style>

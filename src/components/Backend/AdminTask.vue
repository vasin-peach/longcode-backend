<template>
  <div class="admin-task">
    <!-- <router-link :to="{ name: 'taskAdd'}"><strong style="color: #D94B3F;"><i class="fa fa-plus" aria-hidden="true"></i> </strong></router-link> -->
    <strong style="color: #D94B3F; cursor:pointer;" data-toggle="collapse" data-target="#admin-task-add" aria-expanded="false" aria-controls="#admin-task-add"><i class="fa fa-plus" aria-hidden="true"></i> Add task</strong>
    <br><br>
    <!-- <router-view></router-view> -->

    <div class="admin-task-add collapse" id="admin-task-add">
      <form v-on:submit.prevent="taskAdd">
          <div class="form-group">
              <label for="taskAddForm">Title:</label>
              <input v-model="taskName" name="taskName" type="text" class="form-control" placeholder="ex: ลองกรอกสิ."  required>
          </div>
          <div class="form-group">
              <label>Detail:</label>
              <textarea  v-model="taskDetail" name="taskDetail" class="form-control" rows="3" placeholder="ex: แสดงผลข้อมูลจากผลรวมที่ผู้ใช้กรอกไปสี่ครั้ง."  required></textarea>
          </div>


          <strong style="color: #D94B3F; cursor:pointer;" @click="addCase"><i class="fa fa-plus" aria-hidden="true"></i> Add testcase</strong>
          <div v-for="count in testcase">

            <div class="card card-header add-testcase-header">
              <div class="row">
                <div class="col">
                  Case {{count}}
                </div>
                <div class="col text-right">
                  <i class="fa fa-times btn-delete" aria-hidden="true" @click="removeCase" v-if="count != 1"></i>
                </div>
              </div>
            </div>
            <div class="add-testcase-body">
              <div class="row">
                <div class="col-sm-6" >
                    <div class="form-group">
                        <label>Input:</label>
                        <input v-model="taskInput[count]" name="taskInput" type="text" class="form-control" placeholder="ex: 1, 2, 3, 4 | ถ้ามี input หลายตัวให้คั่นด้วย ','"  required>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="form-group">
                        <label>Output:</label>
                        <input v-model="taskOutput[count]" name="taskOutput" type="text" class="form-control" placeholder="ex: 11"  required>
                    </div>
                </div>
              </div>
            </div>

          </div>

          <br><button type="submit" class="button">Add task</button><br><br><hr>
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
          <td width="75%" style="cursor: pointer;" data-toggle="collapse" :data-target="'#' + task.createdAt" aria-expanded="false" aria-controls="#admin-task-view">
            <div><strong>{{task.name}}</strong></div>
            <div class="collapse" :id="task.createdAt">
              <div class="fa-1x mt-1" style="color: #595959">{{task.detail}}</div>
              <hr style="border: 0.5px solid #ccc; margin: 10px 0;">
              <div class="row" v-for="(currentCase, numCase) in task.testcase">
                <div class="col">
                  <div class="card card-header view-testcase-header">Case {{numCase}}</div>
                  <div class="view-testcase-body">
                    <div class="row">
                      <div class="col-9">
                        Input: {{currentCase.input}}
                        
                      </div>
                      <div class="col-3 text-right pr-4">
                        Output: {{currentCase.output}}
                      </div>
                    </div>
                    
                  </div>
                </div>
                
                <!-- <div class="col-md-6">
                  <div class="fa-1x mt-1">Input: <span style="color: #595959">{{task.input}}</span></div>
                </div>
                <div class="col-md-6">
                  <div class="fa-1x mt-1">Output: <span style="color: #595959">{{task.output}}</span></div>
                </div> -->
              </div>
              <br>
            </div>
          </td>
          <td width="15%" class="text-center">
            <a style="color:#D94B3F; cursor: pointer;" @click="taskRemove(task.createdAt)"><i class="fa fa-2x fa-times" aria-hidden="true"></i></a>
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
      taskInput: {},
      taskOutput: {},
      testcase: 1,
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
    addCase() {
      if (this.testcase < 10) {
        this.testcase ++;
      }
    },
    removeCase() {
      if (this.testcase > 1) {
         this.testcase --;
      }
    },

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
      var taskInput = this.taskInput
      var taskOutput = this.taskOutput
      var testcase = []
      for (var input in taskInput) {
        var currentInput = taskInput[input].split(',')
        var currentCaseInput = []
        for (var i in currentInput) {
          var currentI = currentInput[i].replace(/^\s+|\s+$/g, "")
          if (currentI.startsWith('"') && currentI.endsWith('"')) {
            currentI = String(currentI).replace(/['"]+/g, '')
          } else if(!isNaN(currentI)) {
            currentI = parseFloat(currentI)
          }
          currentCaseInput.push(currentI)
        }

        var currentOutput = taskOutput[input].replace(/^\s+|\s+$/g, "")
        if (currentOutput.startsWith('"') && currentOutput.endsWith('"')) {
          currentOutput = String(currentOutput).replace(/['"]+/g, '')
        } else if(!isNaN(currentOutput)) {
           currentOutput = parseFloat(currentOutput)
        }
        testcase.push({'input': currentCaseInput, 'output': currentOutput})
      }
        var addTaskData = {
            'name': this.taskName,
            'detail': this.taskDetail,
            'testcase': testcase,
            'send': 0,
            'pass': 0,
            'createdAt': firebase.database.ServerValue.TIMESTAMP,
            'status': 'enable'
        }
        firebase.database().ref('/tasks').push(addTaskData)
        swal("Added", "เพิ่ม Task เข้าสู่ระบบ", "success")
        this.taskLoad()
        this.taskName = null,
        this.taskDetail = null,
        this.testcase = 1,
        this.taskInput = {},
        this.taskOutput = {}
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

  .add-testcase-header, .view-testcase-header {
    font-size: 20px;
    background: #3c555d;
    color: #DFDCE3;
    margin: 5px 0;
  }
  .view-testcase-header {
    background: #5a7f8c;
    font-size: 16px;
    padding: 5px;
  }
  .add-testcase-body {
    padding: 0 5px;
    margin-bottom: 5px;
    border-radius: 3px;
  }

  .btn-delete {
    cursor: pointer;
    font-size: 20px;
    color: #D94B3F;
    -webkit-transition: color 0.3s;
    -moz-transition: color 0.3s;
    transition: color 0.3s;
  }
  .btn-delete:hover {
    color: #6a1c15;
  }
</style>

<template>
  <div class="admin-task">
    <button type="button" class="btn-sm btn-danger pointer mb-3 bg-salmon-1" data-toggle="modal" data-target="#admin-task-add-modal"><i class="fa fa-plus" aria-hidden="true"></i> ADD TASK</button>
    <br>
    <div class="modal fade" id="admin-task-add-modal" tabindex="-1" role="dialog">
      <div class="modal-dialog modal-lg" role="document" >
        <div class="modal-content" style="border-radius: 3px;">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle"><strong style="color: #D94B3F">ADD TASK</strong></h5>
            <button type="button pointer" class="close" data-dismiss="modal" aria-label="Close">
              <span class="pointer" aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form v-on:submit.prevent="taskAdd">
              <div class="form-group">
                  <label for="taskAddForm">Task name<Task Name</label>
                  <input v-model="taskName" name="taskName" type="text" class="form-control" required>
              </div>
              <div class="form-group">
                  <label>Description</label>
                  <textarea  v-model="taskDetail" name="taskDetail" class="form-control" rows="3" required></textarea>
              </div>
              <div class="form-group">
                <label>Function Name</label>
                <input v-model="taskFunciton" name="taskFunction" type="text" class="form-control" required>
              </div>

              <hr class="hr-sm">
              <div class="mb-2"><strong class="pointer salmon-1" style="font-size: 15px;" @click="addCase"><i class="fa fa-plus" aria-hidden="true"></i> ADD TESTCASE</strong></div>
              <div v-for="count in testcase" class="add-testcase">
                <div class="add-testcase-header">
                  <div class="row">
                    <div class="col">
                      CASE {{count}}
                    </div>
                    <div class="col text-right">
                      <i class="fa fa-times btn-delete" aria-hidden="true" @click="removeCase" v-if="count != 1" style="font-size:18px"></i>
                    </div>
                  </div>
                </div>
                <div class="add-testcase-body pt-1">
                  <div class="row" v-for="currentInput in input">
                    <div class="col">
                      <div class="form-group">
                        <div class="mb-2" style="box-shadow: 0 2px 0 0 #D94B3F">
                          <div class="row">
                            <div class="col"><label class="m-0">Input{{currentInput}}</label></div>
                            <div class="col text-right" ><i class="fa fa-trash salmon-1 pointer" aria-hidden="true" v-if="currentInput != 1" @click="removeInput"></i></div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-sm-4">
                            <input v-model="taskInputName[count +'-'+ currentInput]" class="form-control" placeholder="input name" required>
                          </div>
                          <div class="col-sm-8">
                             <input v-model="taskInputValue[count +'-'+ currentInput]" class="form-control" placeholder="value" required>
                          </div>
                        </div>
                      </div>
                      <hr class="hr-sm">
                    </div>
                  </div>
                  <div class="row">
                    <div class="col text-center pointer" @click="addInput">
                      <div  style="padding: 5px 10px; border: 1px dashed #D94B3F; border-radius: 3px;">
                        <strong class="salmon-2">ADD INPUT</strong>
                      </div>
                    </div>
                  </div>

                  <hr>
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Output</label>
                        <input v-model="taskOutput[count]" name="taskOutput" type="text" class="form-control" required>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr class="hr-sm">
              <div class="text-center">
                <button type="submit" class="btn-lg btn-danger pointer bg-salmon-1"><i class="fa fa-plus" aria-hidden="true"></i> ADD TASK</button>
              </div>
          </form>
          </div>
        </div>
      </div>
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
                    <div>                 
                      Input:
                      <div v-for="currentInput in currentCase.input">
                        {{ currentInput }}
                      </div>
                      <hr class="hr-sm">
                      Output: {{currentCase.output}} <br><br>
                    </div>
                  </div>
                </div>
              </div>
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
import swal from 'sweetalert2'
export default {
  name: 'adminTask',
  data() {
    return {
      tasks: null,
      taskName: null,
      taskDetail: null,
      taskFunciton: null,
      taskInput: {},
      taskInputName: {},
      taskInputValue: {},
      taskOutput: {},
      testcase: 1,
      input: 1,
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
    addInput() {
      if (this.input < 10) {
        this.input ++
      }
    },
    removeInput() {
      if (this.input > 1) {
        this.input --
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
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes!',
      }).then((result) => {
        if (result.value) {
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
      var testcase = []
      for (var x=1; x<this.testcase + 1; x++) { // all testcase
        var allInput = []
        for (var input in this.taskInputValue) { // all input
          var dictInput = []
          if (input.split('-')[0] == x) { // select input in this testcase.
            var inputValue = this.taskInputValue[input]
            var inputName = this.taskInputName[input].toString()
            var filterValue = []
            if (inputValue.startsWith('"') && inputValue.endsWith('"')) {
              inputValue = String(inputValue).replace(/['"]+/g, '')
            } else if(!isNaN(inputValue)) {
              inputValue = parseFloat(inputValue)
            } else {
              if (inputValue.startsWith('[') && inputValue.endsWith(']')) {
                inputValue = JSON.parse(inputValue)
              }
            }
            var inputValueList = []
            inputValueList.push(inputValue)

            dictInput[inputName] = inputValueList
            allInput.push(dictInput)
          }
        }
        testcase.push({'input': allInput, 'output': this.taskOutput[x]})
      }

      var taskKey = firebase.database().ref('users').push().key
      var updates = {}

      var addTaskData = { // created data array
        'taskId': taskKey,
        'name': this.taskName,
        'detail': this.taskDetail,
        'testcase': testcase,
        'send': 1,
        'pass': 1,
        'functionName': this.taskFunciton,
        'createdAt': firebase.database.ServerValue.TIMESTAMP,
        'status': 'enable'
      }
      firebase.database().ref('/tasks/' + taskKey).set(addTaskData)
      swal("Added", "เพิ่ม Task เข้าสู่ระบบ", "success")
      this.taskLoad() //refresh task
      this.taskName = null, // remove all data
      this.taskDetail = null,
      this.testcase = 1,
      this.input = 1,
      this.taskInput = {},
      this.taskOutput = {}
      this.taskInputName = {},
      this.taskInputValue = {}
      $('#admin-task-add-modal').modal('hide');
    }
  }
}
</script>

<style>
  label {
    color: #5d8189;
    font-size: 15px;
  }
  .admin-task th {
    background: #e6e6e6;
    color: #737373;
    font-size: 18px;
  }
  .admin-task tr:nth-child(even) {
    background: #ececec;
  }

  .view-testcase-header {
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

  .add-testcase {
    border-radius: 3px;
  }
    .add-testcase-header {
      color: #f2f2f2;
      background: #233237;
      padding: 2px 5px;
      border-top-left-radius: 3px;
      border-top-right-radius: 3px;
    }
    .add-testcase-body {
      /* padding: 5px 5px; */
      padding: 5px 10px;
      margin-bottom: 5px;
      border: 1px #233237;
      border-style: none dashed dashed dashed;
      border-bottom-left-radius: 3px;
      border-bottom-right-radius: 3px;
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

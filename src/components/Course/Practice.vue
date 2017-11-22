<template>
  <div v-if="userAuth && userData">
    <div class="row justify-content-center">
      <div class="practice col-md-11 col-lg-9">
        <div class="text-left"><strong style="color: #233237;">PRACTICE TASKS</strong></div>
        <hr style="border-color: #EAC67A">
        <div class="row" v-for="task in practiceList">
          <div class="col">
            <router-link :to="'/practice/' + task.createdAt">
            <div class="card task-practice" :class="{'taskPass': userEnroll.indexOf(task.createdAt + '') >= 0}">
              <div class="card-header">
                <div class="row">
                  <div class="col col-lg-8 text-left">
                    <strong>{{ task.name }} <i style="color: #009933" class="fa fa-check" aria-hidden="true" v-if="userEnroll.indexOf(task.createdAt + '') >= 0"></i></strong>
                  </div>
                  <div class="col col-lg-4 text-right">
                    {{ Math.round((task.send / task.pass * 60) / 10) * 10 }} <img src="../../assets/icon/point.png" style="width: 25px; border-radius: 50%;">
                  </div>
                </div>
              </div>
            </div>
            </router-link>
          </div>
        </div>
        <br><br><hr style="border-color: #D94B3F">
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import firebase from 'firebase'
export default {
  name: 'practice',
  data() {
    return {
      userEnroll: []
    }
  },
  computed: {
    ...mapState(['userAuth', 'userData', 'practiceList'])
  },
  created() {
    const this_ = this
    this.practiceLoad()

    // If user enroll
    var userHasEnroll = []
    if (this.userData.enroll) {
      var userEnroll = this.userData.enroll
      for (var i in userEnroll) {
        for (var x in userEnroll[i]) {
          if (userEnroll[i][x].status == 'finish') {
            this_.userEnroll.push(x)
          }
        }
      }
    }

  },
  methods: {
    practiceLoad() {
      this.$store.commit('practiceLoad');
    }
  }
}
</script>

<style>
  .task-practice {
    color: #18121E;
    margin-bottom: 10px;
    -webkit-transition: transform 0.3s, box-shadow 0.3s;
    -moz-transition: transform 0.3s, box-shadow 0.3s;
    transition: transform 0.3s, box-shadow 0.3s;
  }
    .task-practice:hover {
      -ms-transform: translateY(-2%);
      -webkit-transform: translateY(-2%);
      transform: translateY(-2%);
      box-shadow: 0 2px 2px 0 #18121E;
    }
  .taskPass {
    background: #f2f2f2;
  }
</style>

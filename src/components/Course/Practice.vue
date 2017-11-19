<template>
  <div v-if="userAuth && userData">
    <div class="row justify-content-center">
      <div class="practice col-md-11 col-lg-9">
        <div class="text-left"><strong style="color: #233237;">PRACTICE TASKS</strong></div>
        <hr>
        <div class="row" v-for="task in practiceList">
          <div class="col">
            <router-link :to="'/practice/' + task.createdAt">
            <div class="card task-practice">
              <div class="card-header">
                <div class="row">
                  <div class="col col-lg-8 text-left">
                    <strong>{{ task.name }}</strong>
                  </div>
                  <div class="col col-lg-2 text-right">
                    Easy
                  </div>
                  <div class="col col-lg-2 text-right">
                    10 <img src="../../assets/icon/point.png" style="width: 25px; border-radius: 50%;">
                  </div>
                </div>
              </div>
            </div>
            </router-link>
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
  name: 'practice',
  data() {
    return {
    }
  },
  computed: {
    ...mapState(['userAuth', 'userData', 'practiceList'])
  },
  created() {
    this.practiceLoad()
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
</style>

<template>
    <div class="row" v-if="userAuth && userData && scoreBest.length > 0">
        <div class="scoreboard col-lg-9 col-md-11 col-sm-11 col-xs-11 mx-auto">
            <div class="scoreboard-best text-left">
                <span><strong style="color: #233237;">TOP 3 USER</strong></span>
                <hr>
                <div class="row text-center">
                    <transition name="leader-box1-load">
                        <div class="col-md-4">
                            <div class="card scoreboard-box-first">
                                <div class="card-header">
                                    <strong>1st PLACE <span style="color:#EAC67A"><i class="fa fa-trophy" aria-hidden="true"></i></span></strong>
                                </div>
                                <div class="card-block">
                                    <div style="padding: 10px;"><img :src="scoreBest[0].image" style="width: 30%; border-radius: 50%; border: 5px solid #18121E;"></div>
                                    <div><strong>TOTAL POINT :</strong> <strong style="color: #EAC67A">{{ scoreBest[0].point }}</strong></div>
                                    <hr style="border-color: #f2f2f2">
                                    <div style="padding-bottom: 10px;"><strong style="color: #DFDCE3; font-size: 15px;">{{ scoreBest[0].name }}</strong></div>
                                </div>
                            </div>
                        </div>
                    </transition>
                    <div class="col-md-4">
                        <div class="card scoreboard-box-second">
                            <div class="card-header">
                                <strong>2st PLACE</strong>
                            </div>
                            <div class="card-block">
                                <div style="padding: 10px;"><img :src="scoreBest[1].image" style="width: 30%; border-radius: 50%; border: 5px solid #18121E;"></div>
                                <div><strong>TOTAL POINT :</strong> <strong style="color: #EAC67A">{{ scoreBest[1].point }}</strong></div>
                                <hr style="border-color: #f2f2f2">
                                <div style="padding-bottom: 10px;"><strong style="color: #DFDCE3; font-size: 15px;">{{ scoreBest[1].name }}</strong></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card scoreboard-box-third">
                            <div class="card-header">
                                <strong>3st PLACE</strong>
                            </div>
                            <div class="card-block">
                                <div style="padding: 10px;"><img :src="scoreBest[2].image" style="width: 30%; border-radius: 50%; border: 5px solid #18121E;"></div>
                                <div><strong>TOTAL POINT :</strong> <strong style="color: #EAC67A">{{ scoreBest[2].point }}</strong></div>
                                <hr style="border-color: #f2f2f2">
                                <div style="padding-bottom: 10px;"><strong style="color: #DFDCE3; font-size: 15px;">{{ scoreBest[2].name }}</strong></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr>
            <div class="scoreboard-table text-left">
                <span><strong style="color: #233237;">LEADER BOARD</strong></span><br><br>
                <table class="table">
                    <thead>
                        <tr>
                            <th width="10%">#</th>
                            <th width="80%">User</th>
                            <th width="10%">Point</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(score, key) in scoreBest">
                            <td width="10%">{{key+1}}</td>
                            <td width="80%"><img :src="score.image" style="width: 40px; border-radius: 50%; padding-right: 5px;"> {{score.name}}</td>
                            <td width="10%" class="text-center">{{score.point}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <hr><br>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import firebase from 'firebase'
export default {
    name: 'scoreboard',
    data() {
        return {
            scoreBest: []
        }
    },
    computed: {
      ...mapState(['userAuth', 'userData']),
    },
    created() {
        this.scoreboardBest()
    },
    methods: {
        scoreboardBest() {
            const this_ = this
            var allScore = []
            firebase.database().ref('users/').orderByChild('point').limitToLast(30).on('value', function(snapshot, error) {
                snapshot.forEach((resScore) => {
                    const score = resScore.val()
                    allScore.push(score)
                })
                this_.scoreBest = allScore.reverse()
            })
        }
    },
}
</script>

<style>
    .scoreboard hr {
        border: 1px solid #737373;
    }
    .scoreboard .card {
        border: none;
        box-shadow: 0 0 2px 0 #000;
    }
        @media only screen and (max-width: 767px) {
            .scoreboard .card {
                margin-bottom: 10px;
            }
            .scoreboard .card-block img {
                width: 15% !important;
            }
        }
    .scoreboard-best, .scoreboard-table {
        padding: 5px;
    }
        .scoreboard strong, scoreboard span{
            color: #f2f2f2;
        }
        .scoreboard .card-header, .scoreboard .card-block {
            padding: 5px;
            border-radius: 2px;
        }
        .scoreboard .card-header {
            border-bottom-left-radius: 0px;
            border-bottom-right-radius: 0px;
        }
        .scoreboard .card-block {
            border-top-left-radius: 0px;
            border-top-right-radius: 0px;
        }
        .scoreboard-box-first .card-header {
            background: #347c79;
            box-shadow: 0 0 1px 3px #EAC67A;
        }
        .scoreboard-box-first .card-block {
            background: #3eae9d;
             box-shadow: 0 0 1px 3px #EAC67A;
        }
        .scoreboard-box-second .card-header {
            background: #233237;
        }
        .scoreboard-box-second .card-block {
            background: #46626d;
        }

        .scoreboard-box-third .card-header {
            background: #aa2d22;
        }
        .scoreboard-box-third .card-block {
            background: #D94B3F;
        }
    
    .scoreboard-table table{
        box-shadow: 0 0 1px 1px #737373;
    }
    .scoreboard-table th {
        background: #e6e6e6;
        color: #737373;
        font-size: 18px;
    }
    .scoreboard-table tr:nth-child(even) {
        background: #ececec;
    }



    /* Vue */
    .leader-box1-load-enter-active {
        animation: leader-loadin 0.5s;
    }
    .bounce-leave-active {
        animation: leader-loadin 0.5s reverse;
    }
    @keyframes leader-loadin {
        0% {
            opacity: 0;
            /* transform: scale(0); */
        }
        50% {
            opacity: 0.5;
        }
        100% {
            opacity: 0.2;
        }
    }
</style>

import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'
import { firebaseConfig } from '../../config/firebase-config.js'

import swal from 'sweetalert'


Vue.use(Vuex)
firebase.initializeApp(firebaseConfig);  


// Tutorial
const state = {
    userAuth: null,
    userData: null,
    practiceList: null
}
const mutations = {
    // Firebase auth state
    auth(state) {
        firebase.auth().onAuthStateChanged( function(user) {
            if (user) {
                state.userAuth = user
                firebase.database().ref('/users').orderByChild('email').equalTo(user.email).once('value').then(function(snapshot) {
                    if (!snapshot.val()) {
                        if (!user.photoURL) {
                            user.photoURL = 'https://applech2.com/wp-content/uploads/2017/10/macOS-Guest-user-logo-icon.jpg'
                        }
                        if (!user.displayName) {
                            user.displayName = user.email
                        }
                        console.log(user)
                        // Create user data in firebase
                        const userData = {
                            name: user.displayName,
                            email: user.email,
                            image: user.photoURL,
                            uid: user.uid,
                            point: 0,
                            permission: 1,
                            createdAt: firebase.database.ServerValue.TIMESTAMP
                        }
                        firebase.database().ref('/users').push(userData)
                        firebase.database().ref('/users').orderByChild('email').equalTo(user.email).once('value').then(function(snapshot) {
                            for (var i in snapshot.val()) {
                                state.userData = snapshot.val()[i]
                            }
                        })
                    } else {
                        for (var i in snapshot.val()) {
                            state.userData = snapshot.val()[i]
                        }
                    }
                })
            }
        })
    },

    fbLogin(state) {
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION).then( function() {
            var provider = new firebase.auth.FacebookAuthProvider();
            return firebase.auth().signInWithPopup(provider).then(function() {
                swal("Signed in", "คุณเข้าสู่ระบบด้วยบัญชี facebook", "success");
            })
        }).catch (function(error) {
            firebase.auth().fetchProvidersForEmail(error.email).then(providers => {
                if (providers == 'github.com') {
                    swal("Login failed.", "กรุณาเข้าสู่ระบบด้วยบัญชี github", "error");
                }
            })
        })
    },
    gitLogin(state) {
        if (!state.userAuth) {
            firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION).then( function() {
                var provider = new firebase.auth.GithubAuthProvider();
                return firebase.auth().signInWithPopup(provider).then(function() {
                    swal("Signed in", "คุณเข้าสู่ระบบด้วยบัญชี github", "success");
                })
            }).catch (function(error) {
                firebase.auth().fetchProvidersForEmail(error.email).then(providers => {
                    if (providers == 'facebook.com') {
                        swal("Login failed", "กรุณาเข้าสู่ระบบด้วยบัญชี facebook", "error");
                    }
                })
            })
        }
    },
    logout(state) {
        if (state.userAuth) {
            firebase.auth().signOut().then(function () {
                swal("Logged out", "คุณได้ออกจากระบบแล้ว", "info");
            }).catch (function(error) { 
                console.log(error);
            })
            state.userAuth = null;
            state.userData = null;
        }
    },
    practiceLoad(state) {
        firebase.database().ref('/tasks').orderByChild('createdAt').once('value').then(function(snapshot) {
            state.practiceList = snapshot.val()
        })
    }
}







const store = new Vuex.Store({
    state,
    mutations
})



export default store;

/*global Vue*/

/* weex initialized here, please do not move this line */
const router = require('./router');
const App = require('@/App.vue');
// const store = require('./store');

// import fontawesome from '@fortawesome/fontawesome'
// import {
//   faUser
// } from '@fortawesome/fontawesome-free-solid'

import Vuex from 'vuex'
import axios from 'axios'
import VueJWT from 'vuejs-jwt'

Vue.use(Vuex)
Vue.use(VueJWT)
const storage = weex.requireModule('storage')

const store = new Vuex.Store({
    state: {
        count: 0,
        user: storage.getItem('user',function ( e ) {console.log(e)}),
        userInfo: storage.getItem('userInfo',function ( e ) {console.log(e)})
    },
    mutations: {
        increment(state) {
            state.count++
        },
        update_object(state, [objectName, data]) {
            Vue.set(state, objectName, data)
        },
        logout(state) {
            // state.user = null
            // delete axios.defaults.headers.common['Authorization']
        },
    },
    actions: {
        login({commit, state, getters}, payload) {
            // let userData = global.Vue.$jwt.decode(payload.userData.token)
            // commit('update_object', ['userInfo', userData])
            // commit('update_object', ['user', payload['userData']])
            // storage.setItem('userInfo', event => {
            //     store.state.user = JSON.stringify(userData)
            //     console.log(JSON.stringify(userData))
            // })
            // storage.setItem('user', event => {
            //     store.state.user = payload['userData']
            //     console.log(payload['userData'])
            // })
            // axios.defaults.headers.common['Authorization'] = `JWT ${state.user.token}`
        },
        logout({commit}) {
            // delete axios.defaults.headers.common['Authorization']
            storage.removeItem('user', function ( e ) {console.log(e)})
            // commit('logout')
            router.go()
            router.push('/')
        }
    },
    getters: {
        token: state => {
            if (state.user) {
                return state.user.token
            } else {
                return null
            }
        },
        user: state => {
            if (state.user) {
                return state.user.user
            } else {
                return null
            }
        },
        userInfo: state => {
            if (state.user) {
                return state.user.userInfo
            } else {
                return null
            }
        },
    },
    strict: false
})
export default store
/* eslint-disable no-new */
new Vue(Vue.util.extend({el: '#root', store, router}, App));
router.push('/');


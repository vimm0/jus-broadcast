/*global Vue*/

/* weex initialized here, please do not move this line */
const router = require('./router');
const App = require('@/App.vue');
// const store = require('./store');

import fontawesome from '@fortawesome/fontawesome'
import {
    faUser
} from '@fortawesome/fontawesome-free-solid'

import Vuex from 'vuex'
import axios from 'axios'
import VueJWT from 'vuejs-jwt'
// import alias from 'weex-component-alias'

// Vue.use(alias)
// if (WXEnvironment.platform !== 'Web') {
Vue.use(Vuex)
// }
Vue.use(VueJWT)
const storage = weex.requireModule('storage')
const stream = weex.requireModule('stream')
console.log('run entry')
const store = new Vuex.Store({
    state: {
        user: null,
        userInfo: null
    },
    mutations: {
        update_object(state, [objectName, data]) {
            Vue.set(state, objectName, data)
        },
        logout(state) {
            state.user = null
            // delete axios.defaults.headers.common['Authorization']
        },
    },
    actions: {
        login({commit, state, getters}, payload) {
            let userData = global.Vue.$jwt.decode(payload.userData.token)
            commit('update_object', ['userInfo', userData])
            commit('update_object', ['user', payload['userData']])
            // storage.setItem('userInfo', userData)
            storage.setItem('userInfo', JSON.stringify(userData), event => {
                // this.state = 'set success'
                console.log('set success')
            })
            storage.setItem('user', JSON.stringify(payload['userData']), event => {
                // this.state = 'set success'
                console.log('set success')
            })
            // storage.setItem('user', payload['userData'])
            // router.go()
            // router.push('/')
            // axios.defaults.headers.common['Authorization'] = `JWT ${state.user.token}`
        },
        logout({commit}) {
            // delete axios.defaults.headers.common['Authorization']
            storage.removeItem('user', function (e) {
                console.log(e)
            })
            commit('logout')
            router.go()
            router.push('/')
        },
        getAll() {
            storage.getAllKeys(event => {
                // modal.toast({message: event.result})
                console.log(event)
                if (event.result === 'success') {
                    console.log(event.result)
                    // modal.toast({
                    //     message: 'props: ' + event.data.join(', ')
                    // })
                }
            })
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
        }
    },
    strict: false
})
export default store
console.log('set state')
console.log(store.state.userInfo)
if (store.state.user === null && store.state.userInfo === null) {
    storage.getItem('user', event => {
        if (event.result === "success" && event.data) {
            // store.state.user = JSON.parse(event.data);
            store.state.user = event.data
        }
    })
    storage.getItem('userInfo', event => {
        if (event.result === "success" && event.data) {
            // store.state.userInfo = JSON.parse(event.data);
            // store.state.userInfo = event.data
        }
    })
}
// router.beforeEach((to, from, next) => {
//     // let token = this.$store.getters.token
//     // console.log(token)
//     // console.log(this)
//     console.log(to)
//     console.log(from)
//     console.log(next)
// })
/* eslint-disable no-new */
new Vue(Vue.util.extend({el: '#root', router, store}, App));
router.push('/');


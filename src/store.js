// import Vuex from 'vuex'
// import axios from 'axios'
// Vue.use(Vuex)
// const store = new Vuex.Store({
//     state: {
//         count: 0,
//         user: JSON.parse(storage.getItem('user')),
//     },
//     mutations: {
//         increment(state) {
//             state.count++
//         },
//         update_object(state, [objectName, data]) {
//             Vue.set(state, objectName, data)
//         }
//     },
//     actions: {
//         login({commit, state, getters}, payload) {
//             let userData = global.Vue.$jwt.decode(payload.userData.token)
//             commit('update_object', ['userInfo', userData])
//             commit('update_object', ['user', payload['userData']])
//             storage.setItem('userInfo', JSON.stringify(userData))
//             storage.setItem('user', JSON.stringify(payload['userData']))
//             axios.defaults.headers.common['Authorization'] = `JWT ${state.user.token}`
//         },
//         logout({commit}) {
//             delete axios.defaults.headers.common['Authorization']
//             commit('logout')
//             router.go()
//             router.push('/')
//         }
//     },
//     getters: {
//         token: state => {
//             if (state.user) {
//                 return state.user.token
//             } else {
//                 return null
//             }
//         },
//         user: state => {
//             if (state.user) {
//                 return state.user.user
//             } else {
//                 return null
//             }
//         },
//         userInfo: state => {
//             if (state.user) {
//                 return state.user.userInfo
//             } else {
//                 return null
//             }
//         },
//     },
//     strict: false
// })
// export default store
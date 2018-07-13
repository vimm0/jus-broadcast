import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'
import router from './router'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    'blocking': false,
    'loading': false,
    'signUpStatus': JSON.parse(localStorage.getItem('signUpStatus')),
    'tabStatus': 0,
    'isComponentModalActive': false,
    'modalGreet': '',
    'user': JSON.parse(localStorage.getItem('user')),
    'userInfo': JSON.parse(localStorage.getItem('userInfo')),
    'subscription': JSON.parse(localStorage.getItem('subscription')),
    'subscriptionLog': JSON.parse(localStorage.getItem('subscriptionLog')),
    'invoice': JSON.parse(localStorage.getItem('invoice')),
    'invoiceLog': JSON.parse(localStorage.getItem('invoiceLog')),
    'card': JSON.parse(localStorage.getItem('card')),
    'plan': JSON.parse(localStorage.getItem('plan')),
    'rememberMe': false
  },
  mutations: {
    loading (state, bool) {
      state.loading = bool
    },
    blocking (state, bool) {
      state.blocking = bool
    },
    create_collection (state, collectionName) {
      if (!state[collectionName]) {
        Vue.set(state, collectionName, [])
      }
    },
    update_collection (state, payload) {
      let collectionName = payload[0]
      let data = payload[1]
      Vue.set(state, collectionName, data)
    },
    update_collection_item (state, payload) {
      let collection = state[payload[0]]
      let data = payload[1]
      if (collection && data.id) {
        const {results} = collection
        let index = results.findIndex(x => x.id === data.id)
        results[index] = data
      }
    },
    remove_collection_item (state, payload) {
      let collection = state[payload[0]]
      if (collection.results === 'undefined') {
        collection.results.splice(payload[1], 1)
      } else {
        collection.results.splice(payload[1], 1)
      }
      Vue.set(state, payload[0], collection)
    },
    create_option_collection (state, collectionName) {
      if (!state[collectionName]) {
        Vue.set(state.options_collection, collectionName, [])
      }
    },
    update_option_collection (state, payload) {
      let collectionName = payload[0]
      let data = payload[1]
      Vue.set(state.options_collection, collectionName, data)
    },
    add_option_collection (state, payload) {
      let collectionName = payload[0]
      let data = payload[1]
      state.options_collection[collectionName].push(data)
    },
    clear_user (state) {
      state.user = null
    },
    notify (state, obj) {
      state.notifications.push(obj)
    },
    deactivate_notification (state, index) {
      state.notifications[index - 1].active = false
    },
    update_object (state, [objectName, data]) {
      Vue.set(state, objectName, data)
    },
    updateUser (state, [objectName, data]) {
      Vue.set(state, objectName, data)
    },
    getSubscription (state, [objectName, data]) {
      Vue.set(state, objectName, data)
    },
    getSubscriptionLog (state, [objectName, data]) {
      Vue.set(state, objectName, data)
    },
    getPlan (state, [objectName, data]) {
      Vue.set(state, objectName, data)
    },
    getCard (state, [objectName, data]) {
      Vue.set(state, objectName, data)
    },
    getInvoice (state, [objectName, data]) {
      Vue.set(state, objectName, data)
    },
    getInvoiceLog (state, [objectName, data]) {
      Vue.set(state, objectName, data)
    },
    logout (state) {
      state.user = null
      delete axios.defaults.headers.common['Authorization']
    },
    getSignUpStatus (state, [objectName, data]) {
      Vue.set(state, objectName, data)
    },
    openModal (state) {
      state.isComponentModalActive = !state.isComponentModalActive
    },
    greetInModal (state, [objectName, data]) {
      Vue.set(state, objectName, data)
    }
  },
  actions: {
    login ({commit, state, getters}, payload) {
      console.log(payload.userData.token)
      let userData = global.Vue.$jwt.decode(payload.userData.token)
      console.log(userData)
      commit('update_object', ['userInfo', userData])
      commit('update_object', ['user', payload['userData']])
      localStorage.setItem('userInfo', JSON.stringify(userData))
      localStorage.setItem('user', JSON.stringify(payload['userData']))
      axios.defaults.headers.common['Authorization'] = `JWT ${state.user.token}`
      store.dispatch('getPlan')
      store.dispatch('getCard')
      store.dispatch('getSubscription')
      store.dispatch('getInvoice')
      store.dispatch('getSubscriptionLog')
      store.dispatch('getInvoiceLog')
      setTimeout(getUserTimeOut => {
        console.log('refresh api from storejs')
        global.axios.post('jwt/refresh/', {'token': state.user.token}).then(
          ({data}) => {
            // console.log(data)
            store.dispatch('login', {
              userData: data
            })
          }
        )
      }, store.getters.refreshBefore * 1000) // python provide time in seconds and jscript aspect time in milliseconds
    },

    getSubscription ({commit}) {
      global.axios.get('subscription/').then(
        ({data}) => {
          commit('getSubscription', ['subscription', data])
          localStorage.setItem('subscription', JSON.stringify(data))
        }
      )
    },
    getInvoice ({commit}) {
      global.axios.get('invoice/').then(
        ({data}) => {
          commit('getInvoice', ['invoice', data])
          localStorage.setItem('invoice', JSON.stringify(data))
        }
      )
    },
    getSubscriptionLog ({commit}) {
      global.axios.get('subscription-log').then(
        ({data}) => {
          commit('getSubscriptionLog', ['subscription', data])
          localStorage.setItem('subscriptionLog', JSON.stringify(data))
        }
      )
    },
    getInvoiceLog ({commit}) {
      global.axios.get('invoice-log/').then(
        ({data}) => {
          commit('getInvoiceLog', ['subscription', data])
          localStorage.setItem('invoiceLog', JSON.stringify(data))
        }
      )
    },
    getCard ({commit}) {
      global.axios.get('card/').then(
        ({data}) => {
          commit('getCard', ['card', data])
          localStorage.setItem('card', JSON.stringify(data))
          // console.log(data)
        }
      )
    },
    getPlan ({commit}) {
      global.axios.get('plan/').then(
        ({data}) => {
          commit('getPlan', ['plan', data])
          localStorage.setItem('plan', JSON.stringify(data))
          // console.log(data)
        }
      )
      global.axios.get('customer/').then(
        ({data}) => {
          console.log(data)
        }
      )
    },
    getSignUpStatus ({commit}, payload) {
      commit('getSignUpStatus', ['signUpStatus', payload])
      commit('getSignUpStatus', ['tabStatus', payload[1]])
      localStorage.setItem('tabStatus', JSON.stringify(payload[1]))
    },
    openModal ({commit}, payload) {
      commit('openModal')
      // console.log('trigger')
      console.log(payload)
      commit('greetInModal', ['modalGreet', payload])
      localStorage.setItem('modalGreet', JSON.stringify(payload))
    },
    logout ({commit}) {
      localStorage.removeItem('user')
      localStorage.removeItem('userInfo')
      localStorage.removeItem('modalGreet')
      localStorage.removeItem('invoice')
      localStorage.removeItem('credentials')
      localStorage.removeItem('plan')
      localStorage.removeItem('card')
      localStorage.removeItem('subscription')
      localStorage.removeItem('tabStatus')
      localStorage.removeItem('subscriptionLog')
      localStorage.removeItem('invoiceLog')
      delete axios.defaults.headers.common['Authorization']
      commit('logout')
      router.go()
      router.push('/')
    },
    updateUser ({commit}) {
      commit('up')
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
    exp: state => {
      if (state.user) {
        return state.user.exp
      } else {
        return null
      }
    },
    refreshBefore: state => {
      if (state.user) {
        return state.user.refresh_before
      } else {
        return null
      }
    },
    refreshUntil: state => {
      if (state.user) {
        return state.user.refresh_until
      } else {
        return null
      }
    },
    getSubscription: state => {
      if (state.subscription) {
        return state.subscription
      } else {
        return null
      }
    },
    getSubscriptionLog: state => {
      if (state.subscriptionLog) {
        return state.subscriptionLog
      } else {
        return null
      }
    },
    getInvoice: state => {
      if (state.user) {
        return state.invoice
      } else {
        return null
      }
    },
    getInvoiceLog: state => {
      if (state.user) {
        return state.invoiceLog
      } else {
        return null
      }
    },
    getPlan: state => {
      if (state.user) {
        return state.plan
      } else {
        return null
      }
    },
    getCard: state => {
      if (state.user) {
        return state.card
      } else {
        return null
      }
    },

    userSignUpStatus: state => {
      return state.signUpStatus
    },
    tabStatus: state => {
      return state.tabStatus
    },
    loading: state => {
      return state.loading
    },
    modalStatus: state => {
      return state.isComponentModalActive
    },
    getRememberMeStatus: state => {
      return state.rememberMe
    },
    modalGreet: state => {
      return state.modalGreet
    }
  },
  strict: false
  // strict: process.env.NODE_ENV !== 'production'

})

export default store

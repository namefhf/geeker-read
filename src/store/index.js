import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: JSON.parse(localStorage.getItem('USER')),
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload
    },
  },
  actions: {},
  modules: {},
})

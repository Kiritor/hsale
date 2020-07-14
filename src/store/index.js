import Vue from 'vue'
import Vuex from 'vuex'
import VueCookie from 'vue-cookie'

Vue.use(Vuex)
Vue.use(VueCookie)

export default new Vuex.Store({
  state: {
    token: VueCookie.get('token'),
    isLogin: VueCookie.get('isLogin'),
    remeber: VueCookie.get('remember'),
    userInfo: null
  },
  mutations: {
    setToken(state,token) {
      state.token = token;
      VueCookie.set('token',token,state.remeber==true?7:1)
    },
    setLogin(state,flag) {
      state.isLogin = flag;
      VueCookie.set('isLogin',flag,state.remeber==true?7:1)
    },
    remeber(state,flag) {
      state.remeber = flag;
      VueCookie.set('remeber',flag)
    }
  },
  actions: {
  },
  modules: {
  }
})

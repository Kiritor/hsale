import Vue from 'vue'
import Vuex from 'vuex'
import VueCookie from 'vue-cookie'

Vue.use(Vuex)
Vue.use(VueCookie)
Vue.prototype.$cookie = VueCookie;

export default new Vuex.Store({
  state: {
    token: VueCookie.get('token'),
    isLogin: VueCookie.get('isLogin'),
    remeber: VueCookie.get('remember')
  },
  mutations: {
    setToken(state,token) {
      state.token = token;
      VueCookie.set('token',token,state.remeber==true?7:1)
      /*
      const millisecond = new Date().getTime();
      var expiresTime = new Date(millisecond + 10*1000 ) //10秒失效
      VueCookie.set('token',token,{
        expires: expiresTime
      })
      */
    },
    setLogin(state,flag) {
      state.isLogin = flag;
      VueCookie.set('isLogin',flag,state.remeber==true?7:1)
      /*
      const millisecond = new Date().getTime();
      var expiresTime = new Date(millisecond + 10*1000 ) //10秒失效
      VueCookie.set('isLogin',flag,{
        expires: expiresTime
      })
      */
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

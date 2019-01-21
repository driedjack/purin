import Vue from 'vue-native-core';
import Vuex from 'vuex';

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user_id: '',
  },
  mutations: {
    login(state, id) {
      state.user_id = id
    }
  }
});

export default store;

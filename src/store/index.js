import Vue from "vue";
import Vuex from "vuex";

import goal from './modules/goal';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    goal,
  },
});

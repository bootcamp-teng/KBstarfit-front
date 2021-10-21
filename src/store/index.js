import Vue from "vue";
import Vuex from "vuex";
import exerciseStore from './modules/exercise';

import goal from './modules/goal';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    exerciseStore: exerciseStore,
    goal,
  },
});

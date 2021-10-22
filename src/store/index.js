import Vue from "vue";
import Vuex from "vuex";
import exerciseStore from "./exercise";

import setGoal from "./modules/setGoal";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    exerciseStore: exerciseStore,
    setGoal,
  },
});

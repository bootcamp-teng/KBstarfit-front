import Vue from "vue";
import Vuex from "vuex";
import exerciseStore from './modules/exercise';

import setGoal from "./modules/setGoal";
import goal from './modules/goal';
import homeStore from './modules/home';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    exerciseStore: exerciseStore,
    setGoal,
    goal,
    homeStore: homeStore
  },
});

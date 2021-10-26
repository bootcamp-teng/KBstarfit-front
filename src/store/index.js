import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import exerciseStore from './modules/exercise';
import authStore from './modules/auth';

import setGoal from "./modules/setGoal";
import homeStore from './modules/home';
import rank from './modules/rank';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    exerciseStore: exerciseStore,
    setGoal,
    homeStore: homeStore,
    rank,
    authStore: authStore
  },
  plugins: [createPersistedState({
    paths: ['authStore']
  })]
});

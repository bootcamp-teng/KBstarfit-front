import Vue from "vue";
import Vuex from "vuex";
import exerciseStore from './modules/exercise';

import setGoal from "./modules/setGoal";
import homeStore from './modules/home';
import pointStore from './modules/point';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    exerciseStore: exerciseStore,
    setGoal,
    homeStore: homeStore,
    pointStore: pointStore
  },
});

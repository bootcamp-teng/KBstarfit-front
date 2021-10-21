import Vue from "vue";
import Vuex from "vuex";
import exerciseStore from './exercise';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {exerciseStore: exerciseStore},
});

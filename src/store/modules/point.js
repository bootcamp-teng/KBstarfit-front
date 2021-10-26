import Vue from "vue";
import axios from "axios";
import VueCookies from "vue-cookies";

Vue.use(VueCookies);
const pointStore = {
  state: {
      pointList: []
  },
  getters: {
    pointList(state) {
      return state.pointList;
    },
  },
  mutations: {
      GET_USER_POINT_LIST(state, pointList) {
          state.pointList = pointList;
      },
  },
  actions: {
      getUserPointList ({commit}, id) {
        axios.get('http://teng.169.56.174.139.nip.io/starfitpoint/v1/point/history/' + id)
        .then((res) => {
            console.log(res);
            commit('GET_USER_POINT_LIST', res);
        })
        .catch((err) => {
            console.log(err);
        })
      
    }
  },
  modules: {},
};

export default pointStore;

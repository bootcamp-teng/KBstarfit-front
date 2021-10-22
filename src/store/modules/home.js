import Vue from "vue";
import axios from "axios";
import VueCookies from "vue-cookies";

Vue.use(VueCookies);
const homeStore = {
  state: {
      goalList: [],
      point: 10000
  },
  getters: {
    goalList(state) {
      return state.goalList;
    },
    point(state) {
        return state.point;
    }
  },
  mutations: {
      GET_USER_GOAL_LIST({state}, goalList) {
          state.goalList = goalList;
      },
      GET_USER_POINT({state}, point) {
          state.point = point;
      }
  },
  actions: {
      getUserGoalList ({commit}, id) {
          axios.get('http://teng.169.56.174.139.nip.io/starfitexercise/v1/exerciselist/' + id)
          .then((res) => {
              console.log(res);
              commit('GET_USER_GOAL_LIST', res);
          })
          .catch((err) => {
              console.log(err);
          })
      },
      getUserPoint ({commit}, id) {
          axios.get('http://teng.169.56.174.139.nip.io/starfitpoint/v1/current/' + id)
          .then((res) => {
              console.log(res);
              commit('GET_USER_POINT', res.currentPoint);
          })
      }
  },
  modules: {},
};

export default homeStore;

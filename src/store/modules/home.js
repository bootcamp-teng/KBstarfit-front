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
      GET_USER_GOAL_LIST(state, goalList) {
          state.goalList = goalList;
      },
      GET_USER_POINT(state, currentPoint) {
          console.log(currentPoint);
          state.point = currentPoint;
      }
  },
  actions: {
      getUserGoalList ({commit}, id) {
          axios.get('http://teng.169.56.174.139.nip.io/starfitgoal/v1/usergoalsbyid/' + id)
          .then(({data}) => {
              console.log(data);
              commit('GET_USER_GOAL_LIST', data);
          })
          .catch((err) => {
              console.log(err);
          })
      },
      getUserPoint ({commit}, id) {
          axios.get('http://teng.169.56.174.139.nip.io/starfitpoint/v1/current/' + id)
          .then(({data}) => {
              console.log(data);
              console.log(data[0].currentPoint)
              commit('GET_USER_POINT', data[0].currentPoint);
          })
      },
  },
  modules: {},
};

export default homeStore;

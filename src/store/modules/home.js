import Vue from "vue";
import axios from "axios";
import VueCookies from "vue-cookies";

Vue.use(VueCookies);
const homeStore = {
  state: {
      goalList: [],
      point: 0
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
              var goalList = [];
              var goal = 10000;
              if(data.length != 0)  {goalList = data;
                goal = goalList[0].dayExerAmt;
              }
              console.log(goal)
              commit('GET_USER_GOAL_LIST', goalList);
              commit('SET_GOAL_AMOUNT', goal);
          })
          .catch((err) => {
              console.log(err);
          })
      },
      getUserPoint ({commit}, id) {
          axios.get('http://teng.169.56.174.139.nip.io/starfitpoint/v1/current/' + id)
          .then(({data}) => {
              console.log(data);
              var currentPoint = 0;
              if(data.length != 0)  currentPoint = data[0].currentPoint;
              commit('GET_USER_POINT', currentPoint);
          })
      },
  },
  modules: {},
};

export default homeStore;

import Vue from "vue";
import axios from "axios";
import VueCookies from "vue-cookies";

Vue.use(VueCookies);
const homeStore = {
  state: {
      goalList: [],
      point: 0,
    character: [
        ['https://routingstar.s3.ap-northeast-2.amazonaws.com/coli1.png', 'https://routingstar.s3.ap-northeast-2.amazonaws.com/coli2.png', 'https://routingstar.s3.ap-northeast-2.amazonaws.com/coli3.png', 'https://routingstar.s3.ap-northeast-2.amazonaws.com/coli4.png'],
        ['https://routingstar.s3.ap-northeast-2.amazonaws.com/bibi1.png', 'https://routingstar.s3.ap-northeast-2.amazonaws.com/bibi2.png', 'https://routingstar.s3.ap-northeast-2.amazonaws.com/bibi3.png', 'https://routingstar.s3.ap-northeast-2.amazonaws.com/bibi4.png'],
        ['https://routingstar.s3.ap-northeast-2.amazonaws.com/agur1.png', 'https://routingstar.s3.ap-northeast-2.amazonaws.com/agur2.png', 'https://routingstar.s3.ap-northeast-2.amazonaws.com/agur3.png', 'https://routingstar.s3.ap-northeast-2.amazonaws.com/agur4.png'],
        ['https://routingstar.s3.ap-northeast-2.amazonaws.com/lamu1.png', 'https://routingstar.s3.ap-northeast-2.amazonaws.com/lamu2.png', 'https://routingstar.s3.ap-northeast-2.amazonaws.com/lamu3.png', 'https://routingstar.s3.ap-northeast-2.amazonaws.com/lamu4.png'],
        ['https://routingstar.s3.ap-northeast-2.amazonaws.com/kiki1.png', 'https://routingstar.s3.ap-northeast-2.amazonaws.com/kiki2.png', 'https://routingstar.s3.ap-northeast-2.amazonaws.com/kiki3.png', 'https://routingstar.s3.ap-northeast-2.amazonaws.com/kiki4.png']
    ]
  },
  getters: {
    goalList(state) {
      return state.goalList;
    },
    point(state) {
        return state.point;
    },
    character(state) {
        return state.character;
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
              if(data.length != 0)  {
                goalList = data;
                if(data[0].statusCode == 0)
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

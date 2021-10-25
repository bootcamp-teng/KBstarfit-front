import Vue from "vue";
import axios from "axios";
import VueCookies from "vue-cookies";

Vue.use(VueCookies);
const pointStore = {
  state: {
      pointList: [],
      point: 0
  },
  getters: {
    pointList(state) {
      return state.pointList;
    },
    point(state) {
        return state.point;
    }
  },
  mutations: {
      GET_USER_POINT_LIST(state, pointList) {
          state.pointList = pointList;
      },
      GET_USER_POINT(state, currentPoint) {
          console.log(currentPoint);
          state.point = currentPoint;
      }
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
      },
      getUserPoint ({commit}, id) {
          axios.get('http://teng.169.56.174.139.nip.io/starfitpoint/v1/current/' + id)
          .then(({data}) => {
              console.log(data);
              console.log(data[0].currentPoint)
              commit('GET_USER_POINT', data[0].currentPoint);
          })
      }
  },
  modules: {},
};

export default pointStore;

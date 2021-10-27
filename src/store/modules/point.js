/* eslint-disable no-unused-vars */

import Vue from "vue";
import axios from "axios";
import VueCookies from "vue-cookies";
import router from "../../router";

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
      getUserPointList ({commit, rootState}, id) {
          const userId = rootState.authStore.user.id;
        axios.get('http://teng.169.56.174.139.nip.io/starfitpoint/v1/point/history/' + userId)
        .then((res) => {
            console.log(res);
            commit('GET_USER_POINT_LIST', res);
        })
        .catch((err) => {
            console.log(err);
        })
      
    },
    addPointHistory({commit}, pointInfo){
        axios
        .post(
            "http://teng.169.56.174.139.nip.io/starfitpoint/v1/point",
            pointInfo
            )
        .then(({ data }) => {
            console.log(data);
            alert(pointInfo.pointry+" 포인트 구매에 성공했습니다. 현금처럼 사용해보세요");
            router.go();
        })
        .catch((err) => {
            /*
            에러 알림창
            */
            console.log(err);
        });
        
    }
  },
  modules: {},
};

export default pointStore;

/* eslint-disable no-unused-vars */
import Vue from "vue";
import axios from "../../http/axios";
import VueCookies from "vue-cookies";

Vue.use(VueCookies);
const exerciseStore = {
  state: {
    goal: 0,
    current: 0,
    ratio: 0,
    exerciseHistory: [],
  },
  getters: {
    current(state) {
      return state.current;
    },
    ratio(state) {
      return state.ratio;
    },
    goal(state) {
      return state.goal;
    },
    exerciseHistory(state) {
      return state.exerciseHistory;
    }
  },
  mutations: {
    SET_CURRENT_AMOUNT(state, amount) {
      state.current = amount;

      if (state.current >= state.goal) state.ratio = 100;
      else state.ratio = Math.floor((state.current / state.goal) * 100);

      console.log(state.ratio);
    },
    'SET_GOAL_AMOUNT': function(state, goal) {
      state.goal = goal;
    },
    'GET_EXERCISE_HISTORY': function(state, goal) {
      state.exerciseHistory = goal;
    }
  },
  actions: {
    getCurrentAmount({ commit, dispatch }) {
      var current = Date.now();
      var start = `${
        new Date().getMonth() + 1
      }/${new Date().getDate()}/${new Date().getFullYear()} 00:00:00`;

      var startDate = new Date(start).getTime();
      var access = window.$cookies.get("fit-access");

      var body = {
        aggregateBy: [
          {
            dataTypeName: "com.google.step_count.delta",
            dataSourceId:
              "derived:com.google.step_count.delta:com.google.android.gms:estimated_steps",
          },
        ],
        bucketByTime: { durationMillis: 86400000 },
        startTimeMillis: `${startDate}`,
        endTimeMillis: `${current}`,
      };

      const config = {
        headers: {
          Authorization: `Bearer ${access}`,
        },
      };

      axios
        .post(
          "https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate",
          body,
          config
        )
        .then(async ({ data }) => {
          console.log(data);

          const amountArray = data.bucket[0].dataset[0].point;
          var amount = 0;
          if (amountArray.length != 0) amount = amountArray[0].value[0].intVal;

          console.log(amount);

          await commit("SET_CURRENT_AMOUNT", amount);
          await dispatch("updateAmount", amount);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    updateAmount({ commit, rootState }, exerAmt) {
      const userId = rootState.authStore.user.id;
      console.log(userId + " ??? ????????? " + exerAmt + "????????????.");

      const payload = {
        exerAmt,
        userId,
      };
      axios
        .post(
          "http://teng.169.56.174.139.nip.io/starfitexercise/v1/exercise",
          payload
        )
        .then(({ data }) => {
          console.log(data);
          /*
          ???????????? ?????? ???????????? ????????????, ????????? x
        */
          if (data === "???????????? ????????? ????????????")
            throw new Error("???????????? ????????? ????????????");
          else if (data === "?????? ????????? ????????? ?????????????????????") {
            console.log("?????? ????????? ????????? ?????????????????????");
            alert('?????? ????????? ????????? ?????????????????????');
          }
          else if (data === "??????????????? ?????????????????????") {
            alert("??????????????? ?????????????????????");
            console.log("??????????????? ?????????????????????");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getExerciseHistory({commit}, goalId) {
      axios
      .get("http://teng.169.56.174.139.nip.io/starfitexercise/v1/exercisebygoal/"+ goalId)
      .then(({data}) => {
        console.log(data);
        commit('GET_EXERCISE_HISTORY', data);
      })
      .catch(err => {
        console.log(err);
      });
    }
  },
  modules: {},
};

export default exerciseStore;

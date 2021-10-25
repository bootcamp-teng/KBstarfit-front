import Vue from "vue";
import axios from "../../http/axios";
import VueCookies from "vue-cookies";

Vue.use(VueCookies);
const exerciseStore = {
  state: {
    goal: 6000,
    current: 5832,
    ratio: 97,
  },
  getters: {
    current(state) {
      return state.current;
    },
    ratio(state) {
      return state.ratio;
    },
  },
  mutations: {
    SET_CURRENT_AMOUNT(state, amount) {
      state.current = amount;

      if (state.current >= state.goal) state.ratio = 100;
      else state.ratio = Math.floor((state.current / state.goal) * 100);

      console.log(state.ratio);
    },
  },
  actions: {
    getCurrentAmount({ commit }) {
      var current = Date.now();
      var start = `${new Date().getMonth() + 1}/${new Date().getDate()}/${new Date().getFullYear()} 00:00:00`;

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
        .then(({ data }) => {
          console.log(data);

          const amountArray = data.bucket[0].dataset[0].point;
          var amount = 0;
          if(amountArray.length != 0) amount = amountArray[0].value[0].intVal

          console.log(amount);

          commit("SET_CURRENT_AMOUNT", amount);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // updateAmount({commit}, exerAmt) {
    //   const userId = 1;

    //   const payload = {
    //     exerAmt,
    //     userId
    //   }
    //   axios.put('http://teng.169.56.174.139.nip.io/starfitexercise/v1/exercise', payload)
    //   .then(({data}) => {
    //     console.log(data);
    //     /*
    //       포인트를 지금 받았으면 알려주기, 아니면 x
    //     */
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   })
    // }
  },
  modules: {},
};

export default exerciseStore;

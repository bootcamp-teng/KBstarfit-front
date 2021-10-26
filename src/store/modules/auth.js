/* eslint-disable no-unused-vars */
import Vue from "vue";
import axios from "../../http/axios";
import VueCookies from "vue-cookies";
import router from "../../router";

Vue.use(VueCookies);
const authStore = {
  state: {
    isLoggedIn: false,
    user: "",
    access: null,
  },
  getters: {
    isLoggedIn: function (state) {
      return state.isLoggedIn;
    },
    user: function (state) {
      return state.user;
    },
    access: function (state) {
      return state.access;
    },
  },
  mutations: {
    LOGIN_USER: function (state, token) {
      //   document.cookie = `access-token=${token}`;
      //   console.log(router);
      console.log(token);
      state.access = token;
      state.isLoggedIn = true;
      router.push({ name: "Home" });
    },
    LOGOUT_USER: function (state) {
      state.isLoggedIn = false;
      state.user = "";
      state.access = null;
      router.push({ name: "Login" });
    },
    SAVE_USER_INFO: function (state, user) {
      state.user = user;
    },
  },
  actions: {
    addUser({ commit }, userInfo) {
      console.log(userInfo);
      axios
        .post(
          "http://user30.mvp-sample-login.169.56.174.138.nip.io/api/users",
          userInfo
        )
        .then(({ data }) => {
          console.log(data);
          /*
                성공 알림창
            */
        })
        .then(() => {
          const loginUser = {
            loginId: userInfo.username,
            name: userInfo.name,
            password: userInfo.password,
            characterId: userInfo.characterId,
          };

          axios.post(
            "http://teng.169.56.174.139.nip.io/starfituser/v1/user",
            loginUser
          );
        })
        .catch((err) => {
          /*
                에러 알림창
            */
          console.log(err);
        });
    },
    async loginUser({ commit }, userInfo) {
      await axios
        .post(
          "http://user30.mvp-sample-login.169.56.174.138.nip.io/api/auth/login",
          userInfo
        )
        .then( async ({ data }) => {
          const token = data["data"];
          console.log(token);

          const loginInfo = {
            loginId: userInfo.username,
            password: userInfo.password,
          };
          await axios.post(
            "http://teng.169.56.174.139.nip.io/starfituser/v1/login",
            loginInfo
          )
          .then(({data}) => {
              if (data === null) throw new Error("없는 사용자");
              else {
                commit("SAVE_USER_INFO", data);
                commit("LOGIN_USER", token);
              }
          })

        })
        .catch((err) => {
          console.log(err);
        });
    },
    logoutUser({ commit }) {
      commit("LOGOUT_USER");
    },
  },
  modules: {},
};

function getCookie(name) {
  return document.cookie.split(";").some((c) => {
    return c.trim().startsWith(name + "=");
  });
}

function deleteCookie(name, path, domain) {
  if (getCookie(name)) {
    document.cookie =
      name +
      "=" +
      (path ? ";path=" + path : "") +
      (domain ? ";domain=" + domain : "") +
      ";expires=Thu, 01 Jan 1970 00:00:01 GMT";
  }
}
export default authStore;

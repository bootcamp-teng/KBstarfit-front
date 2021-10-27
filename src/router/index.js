import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Point from "../views/Point.vue";
import SetGoal from "../views/SetGoal.vue";
import PointUsage from "../views/PointUsage.vue";
import ExerciseRoute from "./exercise";
import AuthRoute from "./auth";
import Rank from "./rank";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/point",
    name: "Point",
    component: Point,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/setGoal",
    name: "SetGoal",
    component: SetGoal,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/pointUsage",
    name: "PointUsage",
    component: PointUsage,
    meta: {
      requiresAuth: true
    }
  },
  ...ExerciseRoute,
  ...AuthRoute,
  ...Rank
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {

  if(to.matched.some(record => record.meta.requiresAuth)) {
    if(!store.getters.isLoggedIn) {
      next({name: 'Login'});
    } else {
      next();
    }
  } else {
    next();
  }

  if(store.getters.isLoggedIn && (to.name === 'Login' || to.name === 'Join')) {
    next({name: 'Home'});
  }
})

export default router;

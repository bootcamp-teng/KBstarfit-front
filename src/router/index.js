import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Point from "../views/Point.vue";
import SetGoal from "../views/SetGoal.vue";
import PointUsage from "../views/PointUsage.vue";
import ExerciseRoute from "./exercise";
import AuthRoute from "./auth";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
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
  },
    path: "/setGoal",
    name: "SetGoal",
    component: SetGoal,
  },
  {
    path: "/pointUsage",
    name: "PointUsage",
    component: PointUsage,
  },
  ...ExerciseRoute,
  ...AuthRoute
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

import Login from "../views/Login.vue";
import Join from "../views/Join.vue";
import GoogleFitness from "../views/GoogleFitness.vue";

export default [
  {
    path: "/auth/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/auth/join",
    name: "Join",
    component: Join,
  },
  {
    path: "/auth/google/callback",
    name: "GoogleFit",
    component: GoogleFitness,
  },
];

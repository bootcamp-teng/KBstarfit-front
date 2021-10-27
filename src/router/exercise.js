import ExerciseRecord from "../views/ExerciseRecord.vue";
export default [
  {
    path: "/exercise/:id",
    name: "ExerciseRecord",
    component: ExerciseRecord,
    meta: {
      requiresAuth: true,
    },
  },
];

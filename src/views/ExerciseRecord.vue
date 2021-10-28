<template>
  <div class="container">
    <current-goal-card></current-goal-card>
    <span class=" ml-5 mb-0" style="font-size: small">활동 🔥 </span>
    

    <exercise-chart></exercise-chart>
        <span class=" ml-5 mb-0 mt-5" style="font-size: small">

      {{ user.name }}님의 운동 기록 🏃‍♀️
    </span>
    <exercise-history-card></exercise-history-card>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import ExerciseChart from "../components/exercise/ExerciseChart.vue";
import CurrentGoalCard from "../components/exercise/CurrentGoalCard.vue";
import ExerciseHistoryCard from "../components/exercise/ExerciseHistoryCard.vue";

export default {
  name: "ExerciseHistory",

  components: {
    CurrentGoalCard,
    ExerciseHistoryCard,
    ExerciseChart
  },
  computed: {
    ...mapGetters(['user'])
  }
};
</script>

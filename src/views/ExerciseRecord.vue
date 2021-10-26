<template>
  <div class="about">
      <current-goal-card></current-goal-card>
  <exercise-history-card></exercise-history-card>
  </div>
</template>

<script>
import CurrentGoalCard from '../components/exercise/CurrentGoalCard.vue';
import ExerciseHistoryCard from '../components/exercise/ExerciseHistoryCard.vue';

export default {
  name: "ExerciseHistory",

  components: {
    CurrentGoalCard,
    ExerciseHistoryCard,
  },
};
</script>
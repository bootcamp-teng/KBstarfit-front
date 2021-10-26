<template>
<div>
  <name-card></name-card>
  <home-goal-status></home-goal-status>
  <google-fitness></google-fitness>
  <home-goal-card-list></home-goal-card-list>
  <home-point-card></home-point-card>
  <goal-floating-button></goal-floating-button>
</div>
</template>

<script>
import GoogleFitness from '../components/auth/GoogleFitness.vue';
import NameCard from '../components/home/NameCard.vue';
import HomeGoalStatus from '../components/home/HomeGoalStatus.vue';
import HomeGoalCardList from '../components/home/HomeGoalCardList.vue';
import HomePointCard from '../components/home/HomePointCard.vue';
import GoalFloatingButton from '../components/home/GoalFloatingButton.vue';

export default {
  name: "Home",
  components: {
    NameCard,
    HomeGoalStatus,
    HomeGoalCardList,
    HomePointCard,
    GoalFloatingButton,
    GoogleFitness
  },
};
</script>

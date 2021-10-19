<template>
<div>
  <name-card></name-card>
  <home-goal-status></home-goal-status>
  <home-goal-card-list></home-goal-card-list>
  <home-goal-card></home-goal-card>
  <home-point-card></home-point-card>
</div>
</template>

<script>
import NameCard from '../components/home/NameCard.vue';
import HomeGoalCard from '../components/home/HomeGoalCard.vue';
import HomeGoalStatus from '../components/home/HomeGoalStatus.vue';
import HomeGoalCardList from '../components/home/HomeGoalCardList.vue';
import HomePointCard from '../components/home/HomePointCard.vue';

export default {
  name: "Home",

  components: {
    NameCard,
    HomeGoalCard,
    HomeGoalStatus,
    HomeGoalCardList,
    HomePointCard
  },
};
</script>

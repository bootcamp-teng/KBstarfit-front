<template>
<div>
  <name-card></name-card>
  <home-goal-status></home-goal-status>
  <home-goal-card-list></home-goal-card-list>
  <home-point-card></home-point-card>
</div>
</template>

<script>
import NameCard from '../components/home/NameCard.vue';
import HomeGoalStatus from '../components/home/HomeGoalStatus.vue';
import HomeGoalCardList from '../components/home/HomeGoalCardList.vue';
import HomePointCard from '../components/home/HomePointCard.vue';

export default {
  name: "Home",
  components: {
    NameCard,
    HomeGoalStatus,
    HomeGoalCardList,
    HomePointCard
  },
};
</script>

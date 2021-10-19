<template>
<div>
  <name-card></name-card>
  <home-goal-card></home-goal-card>
</div>
</template>

<script>
import NameCard from '../components/home/NameCard.vue';
import HomeGoalCard from '../components/home/HomeGoalCard.vue';

export default {
  name: "Home",

  components: {
    NameCard,
    HomeGoalCard
  },
};
</script>

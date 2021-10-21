<template>
  <div class="mt-2">
    <span class="body-2 ml-5 mb-0">나의 목표 🚩</span>
      <v-slide-group
        center-active
      >
        <v-slide-item v-for="goal in goals" :key="goal.id">
            <home-goal-card :goal=goal></home-goal-card>
        </v-slide-item>
      </v-slide-group>
  </div>
</template>

<script>
import HomeGoalCard from "./HomeGoalCard.vue";

export default {
  data() {
    return {
      goals: [
        {
          id: 1,
          title: "하루 6000 걸음 걸어서 돈 벌자!",
          startdate: "2021.09.10",
          enddate: "2021.10.19",
          status: "진행중",
        },
        {
          id: 2,
          title: "자전거 하루에 2km 타기!",
          startdate: "2021.07.10",
          enddate: "2021.8.10",
          status: "완료",
        },
        {
          id: 3,
          title: "건강하게 돈벌장",
          startdate: "2021.02.14",
          enddate: "2021.3.19",
          status: "실패",
        },
      ],
    };
  },
  components: {
    HomeGoalCard,
  },
};
</script>

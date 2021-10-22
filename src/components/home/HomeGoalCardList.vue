<template>
  <div class="mt-2">
    <span class="body-2 ml-5 mb-0">나의 목표 🚩</span>
    <v-slide-group center-active>
      <v-slide-item v-for="goal in goalList" :key="goal.id">
        <home-goal-card :goal="goal"></home-goal-card>
      </v-slide-item>
    </v-slide-group>
    <no-goal-card v-if="goalList.length == 0"></no-goal-card>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import HomeGoalCard from "./HomeGoalCard.vue";
import NoGoalCard from "./NoGoalCard.vue";

export default {
  data() {
    return {
      goals: [
        {
          benefitCode: "0",
          endDate: "2021.10.20",
          goalId: 1,
          id: 1,
          period: 10,
          startdate: "2021.10.30",
          statusCode: "0",
          title: "하루 6000 걸음 걸어서 돈 벌자!",
          userId: 1,

        },
        {
          benefitCode: "0",
          endDate: "2021.09.17",
          goalId: 1,
          id: 2,
          period: 7,
          startdate: "2021.09.10",
          statusCode: "2",
          title: "하루 6000 걸음 걸어서 돈 벌자!",
          userId: 1,
        },
        {
          benefitCode: "-",
          endDate: "2021.09.8",
          goalId: 1,
          id: 3,
          period: 7,
          startdate: "2021.09.1",
          statusCode: "1",
          title: "하루 6000 걸음 걸어서 돈 벌자!",
          userId: 1,
        },
      ],
    };
  },
  components: {
    HomeGoalCard,
    NoGoalCard,
  },
  methods: {
    ...mapActions(["getUserGoalList"]),
  },
  computed: {
    ...mapGetters(["goalList"]),
  },
  created: function () {
    this.getUserGoalList(1);
  },
};
</script>

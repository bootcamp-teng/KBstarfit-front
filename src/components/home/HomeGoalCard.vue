<template>
  <v-card
    hover
    elevation="5"
    class="pl-3 ml-5 mr-5 mt-2 rounded-card"
    :color="colorInfo[goal['statusCode']]"
    @click="record(goal.id)"
    height="200"
    :disabled="goal['statusCode'] == 2 ? true : false"
  >
    <div align="right" class="pr-3">
      <v-btn class="mt-2" fab x-small elevation="0">
        <span class="text-h5 pa-4">{{ goalInfo[goal["goalId"]] }}</span>
      </v-btn>
    </div>
    <div>
      <v-card-title class=""> {{ goal.title }} </v-card-title>
      <v-card-subtitle class="body-2 pb-0 mb-0">
        <p class="caption">
          📆 {{ goal["startDate"].split("T")[0] }} ~
          {{ goal["endDate"].split("T")[0] }}
        </p>
        <v-chip
          :color="chipColorInfo[goal['statusCode']]"
          text-color="white"
          class="caption font-weight-black mb-3"
          small
        >
          {{ statusInfo[goal["statusCode"]] }}
        </v-chip>
      </v-card-subtitle>
    </div>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      statusInfo: ["진행중🔥", "완료👍", "중도포기💧"],
      goalInfo: ["", "🚴‍♀️", "🏃‍♀️"],
      colorInfo: ["#E3F2FD", "#D2EEE8", "#FCE4E4"],
      chipColorInfo: ["#6782D4", "#4B8B90", "#AD1457"],
    };
  },
  props: {
    goal: Object,
  },
  methods: {
    record: function (id) {
      console.log(id);
      this.$router.push({ name: "ExerciseRecord", params: { id: id } });
    },
  }
};
</script>

<style scoped>
.rounded-card {
  border-radius: 20px;
}
</style>
<template>
  <v-card
    hover
    elevation="5"
    class="pl-3 ml-5 mr-5 mt-2"
    color="#FCE4E4"
    @click="record(goal.id)"
    height="200"
  >
    <div align="right" class="pr-3">
      <v-btn class="mt-2" fab x-small elevation="0">
        <span class="text-h5 pa-4">{{ goalInfo[goal["goalId"]] }}</span>
      </v-btn>
    </div>
    <div>
      <v-card-title class="text-h6"> {{ goal.title }} </v-card-title>
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
      statusInfo: ["진행중🔥", "완료👍", "중도포기😱"],
      goalInfo: ["", "🏃‍♀️", "🚴‍♀️"],
      colorInfo: ["#FCE4E4", "#D2EEE8", "#E3F2FD"],
      chipColorInfo: ["#AD1457", "#4B8B90", "#2979FF"],
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

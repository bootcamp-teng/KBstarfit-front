<template>
<div class="ma-4 shadow" style=" border-radius:30px; background:white">
    <v-sparkline 
      :value="value"
      :gradient="gradient"
      :smooth="radius || false"
      :padding="padding"
      :line-width="width"
      :stroke-linecap="lineCap"
      :gradient-direction="gradientDirection"
      :fill="fill"
      :type="type"
      :auto-line-width="autoLineWidth"
      :labels="labels"
      label-size="5"
      auto-draw
      class="ma-4"
    ></v-sparkline>
</div>
</template>

<script>
import { mapGetters } from "vuex";
const gradients = [
  ["#222"],
  ["#42b3f4"],
  ["red", "orange", "yellow"],
  ["purple", "violet"],
  ["#00c6ff", "#F0F", "#FF0"],
  ["#f72047", "#ffd200", "#1feaea"],
];

export default {
  data: () => ({
    width: 2,
    radius: 10,
    padding: 8,
    lineCap: "round",
    gradient: gradients[5],
    gradientDirection: "top",
    gradients,
    fill: false,
    type: "trend",
    autoLineWidth: false,
  }),
  computed: {
    ...mapGetters(["exerciseHistory"]),
    value: function () {
      return this.exerciseHistory.map((x) => x.exerAmt);
    },
    labels: function() {
        return this.exerciseHistory.map((x) => x.date.substring(5, 10).replaceAll('-', '/'));
    }
  },
};
</script>

<style scoped>
.shadow {
  box-shadow: 10px 10px 10px lightgray;
}
</style>
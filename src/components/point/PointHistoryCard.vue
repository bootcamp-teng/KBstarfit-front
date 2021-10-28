<template>
  <div class="container">
    <p class="pt-3 ml-3" style="font-size: small">핏포인트 기록</p>
    <v-card scrollable class="rounded-card shadow">
      <v-row
        no-gutters
        v-for="point in pointList.data"
        :key="point.id"
        class="text-center mt-2"
      >
        <v-col
          cols="2"
          align-self="center"
          v-text="point.date.substring(5, 10).replaceAll('-', '/')"
        >
        </v-col>
        <v-col cols="5" v-text="point.description"> </v-col>
        <v-col
          class="font-weight-black text-end mr-3"
          style="color: #6782d4"
          v-if="point.point > 0"
          v-text="'+ ' + calPoint(point.point) + ' P'"
        >
        </v-col>
        <v-col
          class="font-weight-black text-end mr-3"
          style="color: #ef7880"
          v-else
          v-text="calPoint(point.point) + ' P'"
        >
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data: () => ({}),
  computed: {
    ...mapGetters(["pointList"]),
  },
  methods: {
    goBenefitPage() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
    ...mapActions(["getUserPointList"]),
    calPoint: function (point) {
      var num = new Number(point);
      return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,");
    },
  },
  created: function () {
    this.getUserPointList(1);
  },
};
</script>

<style scoped>
.rounded-card {
  border-radius: 20px;
}

.shadow {
  box-shadow: 10px 10px 10px lightgray;
}
</style>


<template>
  <div class="ma-4">
    <v-card
      hover
      elevation="5"
      class="rounded-card"
      :color="colorInfo[status]"
      :disabled="status == 2 ? true : false"
    >
      <div align="right" class="pr-3">
        <v-btn class="mt-1" fab x-small elevation="0">
          <span class="text-h5 pa-4">🏃‍♀️</span>
        </v-btn>
      </div>
      <div>
        <v-row no-gutters justify="center">
        <v-card-title class="pa-0 ml-3"> <v-icon>mdi-format-quote-open</v-icon> <span class="pt-2"> {{ title }} </span><v-icon>mdi-format-quote-close</v-icon> </v-card-title>
        </v-row>
        <div class="ml-3 text-center">
          <p class="ma-0">전체 목표 걸음: {{ total_amount | walkAmt }}</p>
          <p>진행 걸음: {{ current_amount | walkAmt }}</p>
        </div>
        <v-card-subtitle class="body-2 pb-0 mb-0">
          <v-chip
            :color="chipColorInfo[status]"
            text-color="white"
            class="caption font-weight-black mb-3 mt-0"
            small
          >
            {{ statusInfo[status] }}
          </v-chip>
        </v-card-subtitle>
      </div>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";
import {mapGetters} from "vuex";

export default {
  data() {
    return {
      title: "",
      pageNum: this.$route.params.id,
      total_amount: 0,
      current_amount: 0,
      status: 2,
      current_run: 0,
      statusInfo: ["진행중🔥", "완료👍", "중도포기💧"],
      goalInfo: ["", "🚴‍♀️", "🏃‍♀️"],
      colorInfo: ["#E3F2FD", "#D2EEE8", "#FCE4E4"],
      chipColorInfo: ["#6782D4", "#4B8B90", "#AD1457"],
    };
  },
  methods: {
    fetchData(pageNum) {
      axios
        .get(
          "http://teng.169.56.174.139.nip.io/starfitgoal/v1/usergoal/" + pageNum
        )
        .then((res) => {
          this.title = res.data.title;
          this.total_amount = res.data.dayExerAmt * res.data.period;
          this.status = res.data.statusCode;
        })
        .catch((err) => {
          console.log(err);
        });
      axios
        .get(
          "http://teng.169.56.174.139.nip.io/starfitexercise/v1/exercisebygoal/" +
            pageNum
        )
        .then((res) => {
          console.log(res.data);
          var item;
          for (item = 0; item < res.data.length; item++) {
            this.current_amount += res.data[item].exerAmt;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.fetchData(this.pageNum);
  },
  filters: {
    walkAmt: function (exerAmt) {
      var num = new Number(exerAmt);
      return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,");
    },
  },
  computed: {
    ...mapGetters(['user', 'character'])
  }
};
</script>

<style scoped>
.rounded-card {
  border-radius: 20px;
}
</style>

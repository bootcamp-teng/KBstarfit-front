<template>
  <div class="ma-4">
    <v-card class="rounded-card" style="background: #efb775">
      <v-row justify="center">
        <v-icon>mdi-format-quote-open</v-icon
        ><span class="mt-3">{{ this.title }}</span
        ><v-icon>mdi-format-quote-close</v-icon>
      </v-row>
      <v-row >
        <v-col class="ml-3" align-self="center">
          <span style="font-size: small"
            >최종 목표: {{ this.total_amount | walkAmt }} 걸음</span
          >
        </v-col>
      </v-row>
      <v-col class="pt-0">
        <span style="font-size: small"
          >현재 걸음 수: {{ this.current_amount | walkAmt }} 걸음</span
        >
      </v-col>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      title: "",
      pageNum: this.$route.params.id,
      total_amount: 0,
      current_amount: 0,
      status: 2,
      current_run: 0,
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
};
</script>

<style scoped>
.rounded-card {
  border-radius: 20px;
}
</style>

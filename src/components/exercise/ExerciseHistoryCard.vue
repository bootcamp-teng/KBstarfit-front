<template>
  <div class="shadow ma-4">
    <v-card elevation="2" style="border-radius: 30px; background: white">
      <v-row
        v-for="item in this.exerciseHistory.slice().reverse()"
        :key="item.id"
        class="text-center"
      >
        <v-col cols="3">
          <v-icon v-if="daily_amount <= item.exerAmt"
            >mdi-heart-multiple</v-icon
          >
          <v-icon v-else>mdi-heart-multiple-outline</v-icon>
        </v-col>
        <v-col
          cols="3"
          v-text="item.date.substring(5, 10).replaceAll('-', '/')"
        >
        </v-col>
        <v-col>{{ item.exerAmt | walkAmt }} 걸음 </v-col>
      </v-row>
    </v-card>
  </div>
</template>
<script>
import axios from "axios";
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      pageNum: this.$route.params.id,
      daily_amount: 0,
      current_run: 0,
    };
  },
  computed: {
    ...mapGetters(["user", "exerciseHistory"]),
  },
  methods: {
    onClickRedirect: function () {
      history.back();
    },
    ...mapActions(["getExerciseHistory"]),
    fetchData(pageNum) {
      axios
        .get(
          "http://teng.169.56.174.139.nip.io/starfitgoal/v1/usergoal/" + pageNum
        )
        .then((res) => {
          this.title = res.data.title;
          this.daily_amount = res.data.dayExerAmt;
          this.status = res.data.statusCode;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getExerciseHistory(this.pageNum);
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
.shadow {
  box-shadow: 10px 10px 10px lightgray;
  border-radius: 30px;
}
</style>
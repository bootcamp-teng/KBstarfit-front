<template>
  <div class="container" style="text-align: center">
    <div class="inline-block-div">
      <v-btn class="ma-5" depressed @click="goHome()">취소</v-btn>
    </div>
    <v-btn class="ma-5" id="submitBtn" color="primary" @click.stop="dialog = true">
      등록
    </v-btn>

    <v-dialog v-model="dialog" max-width="290">
      <v-card>
        <v-card-title class="text-h5"> 등록하시겠습니까? </v-card-title>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="darken-1" text @click="dialog = false"> 취소 </v-btn>

          <v-btn color="darken-1" text @click="submitGoal()"> 확인 </v-btn>

          <v-dialog v-model="dialog2" max-width="290">
            <v-card>
              <v-card-title v-if="success === true" class="text-h5">
                등록 완료
              </v-card-title>
              <v-card-title v-if="success === false" class="text-h5">
                등록 실패
              </v-card-title>
              <v-card-text>
                {{ errorMsg }}
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="darken-1" text @click="goHome()"> 닫기 </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import $ from "jquery";

export default {
  data: () => ({
    dialog: false,
    dialog2: false,
  }),
  mounted: function () {
    if (this.steps === null || this.title === "")
      $("#submitBtn").addClass("v-btn--disabled");
  },
  computed: {
    ...mapGetters("setGoal", [
      "GE_SELECT_ALL_YN",
      "GE_STEPS",
      "GE_TITLE",
      "GE_SUCCESS",
      "GE_ERROR_MSG",
    ]),
    selectAllYn() {
      return this.GE_SELECT_ALL_YN;
    },
    steps() {
      return this.GE_STEPS;
    },
    title() {
      return this.GE_TITLE;
    },
    success() {
      return this.GE_SUCCESS;
    },
    errorMsg() {
      return this.GE_ERROR_MSG;
    },
  },
  methods: {
    ...mapActions("setGoal", ["AC_SET_TITLE", "AC_SUBMIT_GOAL"]),
    submitGoal() {
      this.AC_SET_TITLE(this.title);
      this.AC_SUBMIT_GOAL();
      this.dialog2 = true;
    },
    goHome() {
      this.$router.push("/");
    },
  },
  watch: {
    steps: function (newVal) {
      if (newVal !== null && this.title !== "")
        $("#submitBtn").removeClass("v-btn--disabled");
      else $("#submitBtn").addClass("v-btn--disabled");
    },
    title: function (newVal) {
      if (newVal !== "" && this.steps !== null)
        $("#submitBtn").removeClass("v-btn--disabled");
      else $("#submitBtn").addClass("v-btn--disabled");
    },
    dialog2: function (newVal) {
      if (newVal === false) this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.inline-block-div {
  display: inline-block;
}
</style>

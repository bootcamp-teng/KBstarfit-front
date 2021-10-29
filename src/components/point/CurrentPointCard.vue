<style scoped>
.rounded-card {
  border-radius: 20px;
}
</style>

<template>
  <div class="container">
    <home-point-card></home-point-card>
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <div style="width: 100%">
          <v-btn
            color="#4B8B90 "
            dark
            class="mt-2 float-right mr-5 pr-2"
            v-bind="attrs"
            v-on="on"
            style="border-radius: 20px;"
          >
            핏포인트 사용하기 💰
          </v-btn>
          <br />
        </div>
      </template>
      <v-card color="#FFFAF6" c>
        <v-toolbar dark color="#4B8B90">
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title class="text-center"
            >핏포인트 사용하기</v-toolbar-title
          >
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-card class="ma-5 pa-5 rounded-card">
          <v-row no-gutters>
            <v-col cols="7"> <v-icon>mdi-ticket</v-icon> 잔여 핏포인트</v-col>
            <v-col class="text-end pr-0 pl-0"> {{ point | userPoint }} F</v-col>
          </v-row>
          <v-row no-gutters class="mt-3">
            <v-col cols="7">
              <v-icon>mdi-alpha-p-circle-outline</v-icon> 구매 가능 포인트리
            </v-col>
            <v-col class="text-end pr-0 pl-0">
              {{ Math.floor(point / 100) | userPoint }} P</v-col
            >
          </v-row>
        </v-card>
        
        <div class="ma-6">
          구매할 포인트리
          <v-row no-gutters class="ma-2" justify="center">
            <v-col align-self="center">
              <v-btn
                rounded
                color="white"
                @click="clickPointBtn(1000)"
              >
                +1,000P
              </v-btn>
            </v-col>
            <v-col >
              <v-btn
                rounded
                color="white"
                @click="clickPointBtn(500)"
              >
                +500P
              </v-btn>
            </v-col>

            <v-col >
              <v-btn
                rounded
                color="white"
                @click="clickPointBtn(100)"
              >
                +100P
              </v-btn>
            </v-col>

            <v-col>
              <v-btn
                rounded
                color="white"
                @click="clickPointBtn(10)"
              >
                +10P
              </v-btn>
            </v-col>
          </v-row>

          <div class="mt-5">
            <v-text-field
              label="구매할 포인트리 입력"
              :rules="rules"
              hide-details="auto"
              append-icon="mdi-alpha-p"
              v-model="pointryInput"
              class="text-h5"
              @input="changePointInput($event)"
            >
            </v-text-field>
            <v-input class="d-flex text-h4" ref="fitPointInput">
              = {{ usingFitPo }} F
            </v-input>
          </div>
          <div class="text-right">
            <v-btn
              rounded
              color="#4B8B90"
              dark
              :disabled="pointryInput === 0"
              @click="useFitPoint"
            >
              포인트리 구매하기
            </v-btn>
          </div>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import HomePointCard from "../home/HomePointCard.vue";

export default {
  data: () => ({
    pointryInput: 0,
    dialog: false,
    widgets: false,
    rules: [
      (value) => {
        const pattern = /[^0-9]/g;
        return !pattern.test(value) || "숫자만입력하세요";
      },
      (value) => !!value || "Required.",
    ],
    usingFitPo: 0,
  }),
  computed: {
    ...mapGetters(["point", "user"]),
  },
  methods: {
    goBenefitPage() {
      this.loading = true;
      setTimeout(() => (this.loading = false), 2000);
    },
    ...mapActions(["getUserPoint", "addPointHistory"]),
    changePointInput(pointryVal) {
      const pattern = /[^0-9]/g;
      if (pattern.test(pointryVal)) {
        this.usingFitPo = 0;
        this.pointryInput = 0;
        return;
      }

      let pointry = pointryVal * 1;
      this.pointryInput = pointry;
      this.usingFitPo = pointry * 100;
      if (this.usingFitPo > this.point) {
        alert("핏포가 부족합니다.");
        this.usingFitPo = 0;
        this.pointryInput = 0;
      }
    },
    clickPointBtn: function (pointry) {
      this.pointryInput += pointry;
      this.changePointInput(this.pointryInput);
    },
    // getPossibleFitPoint(pointry){
    //   let poPointry = 0;
    //   if(pointry<=49){
    //     poPointry = pointry;
    //   }else if(pointry<=99){
    //     poPointry = pointry-Math.round(pointry/100*1);
    //   }else if(pointry<=149){
    //     poPointry = pointry-Math.round(pointry/100*2);
    //   }else if(pointry<=199){
    //     poPointry = pointry-Math.round(pointry/100*3);
    //   }else if(pointry<=399){
    //     poPointry = pointry-Math.round(pointry/100*5);
    //   }else if(pointry<=499){
    //     poPointry = pointry-Math.round(pointry/100*7);
    //   }else if(pointry<=599){
    //     poPointry = pointry-Math.round(pointry/100*9);
    //   }else if(pointry<=699){
    //     poPointry = pointry-Math.round(pointry/100*10);
    //   }else{
    //     poPointry = pointry-Math.round(pointry/100*12);
    //   }
    //   return poPointry;
    // },
    useFitPoint() {
      let pointInfo = {
        description: "포인트리 구매",
        point: this.usingFitPo * -1,
        userId: this.user.id,
        pointry: this.pointryInput,
      };

      // 포인트리 구매하는 로직 필요

      this.addPointHistory(pointInfo);
    },
  },
  filters: {
    userPoint: function (point) {
      var num = new Number(point);
      return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,");
    },
  },
  created: function () {
    this.getUserPoint(this.user.id);
  },
  components: {
    HomePointCard,
  },
};
</script>

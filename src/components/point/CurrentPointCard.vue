<template>
  <div class="spacing-playground ma-4">
    <v-card  color="#EF7880" dark>
      <v-card-title class="spacing-playground pb-1">
        <p class="text-h6 spacing-playground mb-1">마안재님의 현재 잔여 핏포인트: </p>
        <p class="text-h4 spacing-playground mb-0">{{point | userPoint}} F</p>
      </v-card-title>
      <v-card-actions>
        
      </v-card-actions>
    </v-card>
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
     <template v-slot:activator="{ on, attrs }">
       <div style="width:100%">
          <v-btn
            color="#6782D4 "
            dark
            class="mt-2 float-right"
            v-bind="attrs"
            v-on="on"
            
          >
          핏포인트로 혜택 받기 💰
        </v-btn>
        <br/>
       </div>
    </template>
     <v-card  color="#FFFAF6" >
        <v-toolbar
          dark
          color="#60584C"
        >
          <v-btn
            icon
            dark
            @click="dialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title class="text-center mr-10" style="width:100%" >핏포인트 사용하기</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <div style="background-color: #EAEAEA" class="ma-8 pa-5 font-weight-black">
          <v-row>
            <v-col 
              cols="7"
            >
            <v-icon>mdi-ticket</v-icon> 잔여 핏포인트</v-col> 
            <v-col class="text-end pr-0 pl-0 text-h5 font-weight-bold" cols="3"> {{point | userPoint}}</v-col> <v-col>F</v-col>
          </v-row>
          <v-row >
              <v-col 
                cols="7"
              >
                <v-icon>mdi-alpha-p-circle-outline</v-icon> 구매 가능 포인트리 
              </v-col>
              <v-col class="text-end pr-0 pl-0 text-h5 font-weight-bold" cols="3"> {{Math.floor(point/100)| userPoint}}</v-col> <v-col>P</v-col>
            </v-row>
        </div>  
        <div class="ma-9 font-weight-bold">
          구매할 포인트리
          <div class="font-weight-bold mt-1">
            <v-btn
              rounded
              dark
              class="ma-1 pa-2"
              color="secondary"
              outlined
              @click="clickPointBtn(1000)"
            >
              + 1,000 P
            </v-btn>
            <v-btn
              rounded
              dark
              class="ma-1 pa-2"
              color="secondary"
              outlined
              @click="clickPointBtn(500)"
            >
              + 500 P
              </v-btn>
            <v-btn
              rounded
              dark
              class="ma-1 pa-2"
              color="secondary"
              outlined
              @click="clickPointBtn(100)"
            >
              + 100 P
            </v-btn>
            <v-btn
              rounded
              dark
              class="ma-1 pa-2"
              color="secondary"
              outlined
              @click="clickPointBtn(10)"
            >
              + 10 P
            </v-btn>
          </div>
          <div class="mt-4">
            <v-text-field
              label="구매할 포인트리 입력"
              :rules="rules"
              hide-details="auto"
              append-icon="mdi-alpha-p"
              v-model="pointryInput"
              @input="changePointInput($event)"
            >
            </v-text-field>
            <v-input class="d-flex text-h4 font-weight-bold" ref="fitPointInput"
            >
              = {{usingFitPo}} F
            </v-input>
          </div>
          <div class="text-right">
            <v-btn
              rounded
              color="#EFB775"
              class="font-weight-bold "
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
  import {mapGetters, mapActions} from "vuex";

  export default {
    data: () => ({
      pointryInput: 0,
      dialog: false,
      widgets: false,
       rules: [
         value => {
          const pattern = /[^0-9]/g;
          return !pattern.test(value) || '숫자만입력하세요'
        },
        value => !!value || 'Required.',
      ],
      usingFitPo: 0,
    }),
    computed: {
      ...mapGetters(['point']),
    },
    methods: {
      goBenefitPage () {
        this.loading = true
        setTimeout(() => (this.loading = false), 2000)
      },
      ...mapActions(['getUserPoint','addPointHistory']),
      changePointInput(pointryVal){
        const pattern = /[^0-9]/g;
        if(pattern.test(pointryVal)){
          this.usingFitPo = 0;
          this.pointryInput = 0;
          return;
        }
        
        let pointry = pointryVal*1;
        this.pointryInput = pointry;
        this.usingFitPo = pointry*100;
        if (this.usingFitPo>this.point){
          alert("핏포가 부족합니다.");
          this.usingFitPo = 0;
          this.pointryInput = 0;
        }
      },
      clickPointBtn: function(pointry){
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
      useFitPoint(){
        let pointInfo = {
          "description": "포인트리 구매",
          "point": this.usingFitPo*-1,
          "userId":1,
          "pointry":this.pointryInput
        };

        // 포인트리 구매하는 로직 필요

        this.addPointHistory(pointInfo);
      }
    },
    filters: {
        userPoint: function(point) {
            var num = new Number(point);
            return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,")
        }
    },
    created: function(){
        this.getUserPoint(1);
    }
  }

</script>

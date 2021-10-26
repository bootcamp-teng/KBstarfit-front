<template>
  <div class="spacing-playground ma-4">
    <p class="text-h5 font-weight-black pt-3 ">포인트 내역</p>
    <v-card
      color="rgb(252, 228, 228)"
    >
      <div>
        <v-row
          v-for="(point, i) in pointList.data"
          :key="point.id"
          class="text-center"
        >
          <v-col 
            cols="3"
             class="font-weight-black" 
             v-text="pointDate(point.date,i, pointList)">
          </v-col>
          <v-col 
            cols="4"
             v-text="point.description">
          </v-col>
          <v-col 
            cols="2" 
            v-if="point.point>0">
            적립
          </v-col>
          <v-col 
            cols="2" 
            v-else>
            사용
          </v-col>
          <v-col 
            cols="3" 
            class="font-weight-black" 
            style="color: #6782D4" 
            v-if="point.point>0" 
            v-text="'+ '+calPoint(point.point)+' P'">
          </v-col>
          <v-col 
            cols="3" 
            class="font-weight-black" 
            style="color: #EF7880" 
            v-else 
            v-text="calPoint(point.point)+' P'">
          </v-col>
        </v-row>
      </div>  
    </v-card>
  </div>
</template>
<script>
   import {mapGetters, mapActions} from "vuex";

  export default {
    data: () => ({
    }),
    computed: {
      ...mapGetters(['pointList']),
      
    },
    methods: {
      goBenefitPage () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
      ...mapActions(['getUserPointList']),
      pointDate: function(pDate, i, pointList){
        if(i===1)return "";
        if(i>=0 || pDate.substring(2,10)!=pointList.data[i-1].date.substring(2,10)){
          return pDate.substring(2,10);
        } 
        return "";
      },
      calPoint: function(point) {
          var num = new Number(point);
          return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,")
      }
    },
    created: function(){
        this.getUserPointList(1);
    }
  }
  
</script>
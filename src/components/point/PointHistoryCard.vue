<template>
  <div class="spacing-playground ma-4">
    <p class="text-h5 font-weight-black pt-3 " style="color:#17252A">핏포인트 기록</p>
    <v-card
      scrollable
    >
        <v-row
          v-for="(point) in pointList.data"
          :key="point.id"
          class="text-center"
        >
          <v-col 
            cols="2"
             class="ml-4" 
             v-text="point.date.substring(5,10).replaceAll('-','/')">
          </v-col>
          <v-col 
            cols="6"
             v-text="point.description">
          </v-col>
          <v-col 
            class="font-weight-black text-end mr-3" 
            style="color: #6782D4" 
            v-if="point.point>0" 
            v-text="'+ '+calPoint(point.point)+' P'">
          </v-col>
          <v-col 
            class="font-weight-black text-end mr-3" 
            style="color: #EF7880" 
            v-else 
            v-text="calPoint(point.point)+' P'">
          </v-col>
        </v-row>
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
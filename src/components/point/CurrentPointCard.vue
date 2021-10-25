<template>
  <div class="spacing-playground ma-4">
    <v-card  color="#EF7880"  dark>
      <v-card-title class="spacing-playground pb-1">
        <p class="text-h6 spacing-playground mb-1">마안재님의 현재 잔여 핏포: </p>
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
        <v-btn
          color="primary"
          dark
          class="mt-2"
          v-bind="attrs"
          v-on="on"
        >
        포인트로 혜택 받기 💰
      </v-btn>
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
          <v-toolbar-title class="text-center mr-10" style="width:100%" >포인트 사용하기</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <div style="background-color: #EAEAEA" class="ma-8 pa-5 font-weight-black">
          <v-row>
            <v-col 
              cols="7"
            >
            <v-icon>mdi-walk</v-icon> 잔여 핏포</v-col> 
            <v-col class="text-end pr-0 pl-0 text-h5 font-weight-bold" cols="3"> {{point | userPoint}}</v-col> <v-col>F</v-col>
          </v-row>
          <v-row >
              <v-col 
                cols="7"
              >
                <v-icon>mdi-alpha-p-circle-outline</v-icon> 누적 적립 포인트리 
              </v-col>
              <v-col class="text-end pr-0 pl-0 text-h5 font-weight-bold" cols="3"> 153</v-col> <v-col>P</v-col>
            </v-row>
        </div>  
      </v-card>
    </v-dialog>
  </div>
</template> 

<script>
  import {mapGetters, mapActions} from "vuex";

  export default {
    data: () => ({
      loading: false,
      selection: 1,
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
    }),
    computed: {
      ...mapGetters(['point','pointList']),
    },
    methods: {
      goBenefitPage () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
      ...mapActions(['getUserPoint','getUserPointList'])
    },
    filters: {
        userPoint: function(point) {
            var num = new Number(point);
            return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,")
        }
    },
    created: function(){
        this.getUserPoint(1);
        this.getUserPointList(1);
    }
  }

</script>

<template>
  <div class="mt-2">
    <span class="body-2 ml-5 mb-0">나의 포인트 💸</span>
    <v-card elevation="5" class="pl-3 ml-5 mr-5 mt-2" color="#6782D4" dark>
      <v-row no-gutters>
        <v-col cols="6" align-self="center" align="center">
          <img width="50%" src="../../assets/물아거.png" alt="캐릭터" />
        </v-col>
        <v-col cols="6" align-self="center">
          <v-card-title class="text-h6 justify-left pl-0">
            <span class="text-h6 font-weight-black">{{point | userPoint}}</span><span class="body-1"> P</span>
          </v-card-title>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex";

export default {
    data() {
        return {
        }
    },
    computed: {
        ...mapGetters(['point'])
    },
    methods: {
        ...mapActions(['getUserPoint'])
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


 
<template>
<div>
  <div class="spacing-playground ma-4">
    <v-card>
      <v-card-title v-if="this.status==0" class="spacing-playground pb-1" style="background-color:#6782D4; color:white">
        <p class="text-h6 spacing-playground mb-1">{{this.title}}</p>
      </v-card-title>
      <v-card-title v-else-if="this.status==1" class="spacing-playground pb-1" style="background-color:#4B8B90; color:white">
        <p class="text-h6 spacing-playground mb-1">{{this.title}}</p>
      </v-card-title>
      <v-card-title v-else class="spacing-playground pb-1" style="background-color:#EF7880; color:white">
        <p class="text-h6 spacing-playground mb-1">{{this.title}}</p>
      </v-card-title>
        <div class="d-flex align-baseline justify-center pa-4">
          <p class="text-h4 spacing-playground mb-0">{{this.current_amount}}/</p>
          <p class="text-h5 spacing-playground mb-0">{{this.total_amount}} </p>
        </div>
    </v-card>
  </div>
</div>
</template>

<script>
import axios from "axios";

  export default {
    data (){
      
      return {
      title : "",
      pageNum: this.$route.params.id,
      total_amount :0,
      current_amount: 0,
      status:2,
      current_run : 0,
    };
  },
  methods: {
    fetchData(pageNum) {
      axios
        .get("http://teng.169.56.174.139.nip.io/starfitgoal/v1/usergoal/" + pageNum)
        .then(res => {
          this.title= res.data.title;
          this.total_amount = res.data.dayExerAmt * res.data.period;
          this.status = res.data.statusCode;
        })
        .catch(err => {
          console.log(err);
        });
      axios
        .get("http://teng.169.56.174.139.nip.io/starfitexercise/v1/exercisebygoal/" +pageNum )
        .then(res => {
          console.log(res.data);
          var item;
          for (item =0; item<res.data.length; item++){
            this.current_amount += res.data[item].exerAmt;
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.fetchData(this.pageNum);
  }}
</script>

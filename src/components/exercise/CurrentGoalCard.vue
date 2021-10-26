<template>
  <div class="spacing-playground ma-4">
    <v-card  color="#DEB887"  dark>
      <v-card-title class="spacing-playground pb-1">
        <p class="text-h6 spacing-playground mb-1">마안재님의 선택 목표:</p>
        <p class="text-h4 spacing-playground mb-0">{{this.title}}</p>
      </v-card-title>
      <v-card-actions>        
      </v-card-actions>
    </v-card>
 
  <v-card v-if="this.status==0" color="#EF7880"  dark>
      <v-card-title class="spacing-playground pb-1">
        <p class="text-h6 spacing-playground mb-1">목표 운동량: </p>
        <p class="text-h4 spacing-playground mb-0">{{this.total_amount}}보</p>
        <p class="text-h6 spacing-playground mb-1">현재 운동량: </p>
        <p class="text-h4 spacing-playground mb-0">{{this.current_amount}}보 </p>
        <p class="text-h4 spacing-playground mb-0">진행중!</p>
      </v-card-title>
      <v-card-actions>
      </v-card-actions>
    </v-card>
  <v-card v-else-if="this.status==1" color="#1E90FF"  dark>
      <v-card-title class="spacing-playground pb-1">
        <p class="text-h6 spacing-playground mb-1">목표 운동량: </p>
        <p class="text-h4 spacing-playground mb-0">{{this.total_amount}}보</p>
        <p class="text-h6 spacing-playground mb-1">현재 운동량: </p>
        <p class="text-h4 spacing-playground mb-0">{{this.current_amount}}보 </p>
        <p class="text-h4 spacing-playground mb-0">달성!</p>
      </v-card-title>
      <v-card-actions>
      </v-card-actions>
    </v-card>
    <v-card v-else color="#696969"  dark>
      <v-card-title class="spacing-playground pb-1">
        <p class="text-h6 spacing-playground mb-1">목표 운동량: </p>
        <p class="text-h4 spacing-playground mb-0">{{this.total_amount}}보</p>
        <p class="text-h6 spacing-playground mb-1">현재 운동량: </p>
        <p class="text-h4 spacing-playground mb-0">{{this.current_amount}}보 </p>
        <p class="text-h4 spacing-playground mb-0">포기...</p>

      </v-card-title>
      <v-card-actions>
      </v-card-actions>
    </v-card>
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

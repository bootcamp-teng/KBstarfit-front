<template>
  <div class="spacing-playground ma-4">
    <p class="text-h5 font-weight-black pt-3 mb-5" style="color:#17252A">{{user.name}}님의 운동 기록 🏃‍♀️</p>
    <v-card
      class="mt-5"
    >
        <v-row
          v-for="(item) in this.items.slice().reverse()"
          :key="item.id"
          class="text-center"
        >
          <v-col 
            cols="4"
            class="ml-4 font-weight-black" 
            v-text="item.date.substring(5,10).replaceAll('-','/')">
          </v-col>
          <v-col 
            style="color: #6782D4"
            class="font-weight-black" 
            v-text="item.exerAmt+' 걸음' ">
          </v-col>
        </v-row>
    </v-card>
  </div>
</template>
<script>
import axios from "axios";
import {mapGetters} from "vuex";

  export default {
    data ()
    {return{
      pageNum: this.$route.params.id,
      items: [
      ],
      daily_amount :0,
      current_run : 0,
    }},
    computed: {
      ...mapGetters(['user']),
    },
    methods :{
      onClickRedirect: function () {   
          history.back();
      },
      fetchData(pageNum) {
        axios
          .get("http://teng.169.56.174.139.nip.io/starfitexercise/v1/exercisebygoal/"+ pageNum )
          .then(res => {
            console.log(res.data);
            this.items = res.data;
          })
          .catch(err => {
            console.log(err);
          });
        axios
        .get("http://teng.169.56.174.139.nip.io/starfitgoal/v1/usergoal/" + pageNum)
        .then(res => {
          this.title= res.data.title;
          this.daily_amount = res.data.dayExerAmt;
          this.status = res.data.statusCode;
        })
        .catch(err => {
          console.log(err);
        });
      }
    },
    mounted() {
    this.fetchData(this.pageNum);
  }

  }
</script>
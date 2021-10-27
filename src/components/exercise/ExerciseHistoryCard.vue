<template>
  <div class="spacing-playground ma-4">
    <p class="text-h5 font-weight-black pt-3">운동 내역🎫</p>
    <v-card
      color="#98FB98"
    >
      <table>
        <tr 
          v-for="(item, i) in this.items.slice().reverse()"
          :key="i"
        >
          <td class="font-weight-black" v-show="i>=0 || item.date!=items[i-1].date" v-text="item.date.slice(0,10)">
          </td>
          <td class="font-weight-black" style="color: #6782D4" v-if="item.exerAmt>0" v-text="'+'+item.exerAmt+' 보' ">
          </td>
          <td class="font-weight-black" style="color: #EF7880" v-else v-text=" ''+ item.exerAmt+' 보'" >
          </td>
        </tr>
      </table>  
    </v-card>
        <v-btn
      color="primary"
      class="mt-2"
      dark
      @click=onClickRedirect()
    >
      뒤로가기
    </v-btn>
  </div>
</template>
<script>
import axios from "axios";
  export default {
    data ()
    {return{
      pageNum: this.$route.params.id,
      items: [
      ],
      current_run : 0,
    }},
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
      }
    },
    mounted() {
    this.fetchData(this.pageNum);
  }

  }
</script>
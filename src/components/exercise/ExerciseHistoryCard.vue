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
          <td class="font-weight-black" v-show="i>=0 || item.date!=items[i-1].date" v-text="item.date">
          </td>
          <td v-text="item.desc">
          </td>
          <td v-if="item.point>0">
          </td>
          <td v-else>
            
          </td>
          <td class="font-weight-black" style="color: #6782D4" v-if="item.point>0" v-text="' + '+item.point+' 보' ">
          </td>
          <td class="font-weight-black" style="color: #EF7880" v-else v-text="item.point+' 보'" >
          </td>
          <td class="font-weight-black" style="color: #000000" v-text="'달성 운동량 : ' +(current_run+=item.point)+ ' 보'">
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
  export default {
    data ()
    {return{
      pageNum: this.$route.params.id,
      items: [
        {
          date: '10.20',
          desc: '걷기',
          point: 8000
        },
        {
          date: '10.19',
          desc: '걷기',
          point: 8000
        },{
          date: '10.18',
          desc: '걷기',
          point: 8000
        },{
          date: '10.16',
          desc: '미션 시작',
          point: 0
        },
      ],
      current_run : 0,
    }},
    methods :{
      onClickRedirect: function () {   
          history.back();
      }
    }
  }
</script>
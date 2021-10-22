<template>
  <div class="spacing-playground ma-4">
    <p class="text-h5 font-weight-black pt-3">포인트 내역🎫</p>
    <v-card
      color="rgb(252, 228, 228)"
    >
      <table>
        <tr 
          v-for="(item, i) in items"
          :key="i"
        >
          <td class="font-weight-black" v-show="i>=0 || item.date!=items[i-1].date" v-text="item.date">
          </td>
          <td v-text="item.desc">
          </td>
          <td v-if="item.point>0">
            적립
          </td>
          <td v-else>
            사용
          </td>
          <td class="font-weight-black" style="color: #6782D4" v-if="item.point>0" v-text="'+ '+item.point+' P'">
          </td>
          <td class="font-weight-black" style="color: #EF7880" v-else v-text="item.point+' P'">
          </td>
        </tr>
      </table>  
    </v-card>
  </div>
</template>
<script>
  export default {
    data: () => ({
      items: [
        {
          date: '10.20',
          desc: '목표포인트',
          point: 80
        },
        {
          date: '10.19',
          desc: '목표포인트',
          point: 80
        },{
          date: '10.19',
          desc: '포인트리 교환',
          point: -100
        },{
          date: '10.18',
          desc: '목표포인트',
          point: 80
        },{
          date: '10.16',
          desc: '데일리미션 달성',
          point: 1
        },
      ],
    }),
  }
</script>
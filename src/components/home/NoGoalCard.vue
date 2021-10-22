<template>
  <v-card hover elevation="5" class="pl-3 ml-5 mr-5 mt-2" color="#EF7880" dark @click="pushSetGoal">
    <v-card-title class="body-1"> 현재 등록된 목표가 없습니다!😭</v-card-title>
    <v-card-subtitle class="body-2 pb-2">
      <p class="body-2">목표를 등록해서 돈도 벌고 건강도 챙기세요!</p>
    </v-card-subtitle>
  </v-card>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
        pushSetGoal: function() {
            this.$router.push({name: 'SetGoal'});
        }
    }
}
</script>
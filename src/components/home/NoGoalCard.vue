<template>
  <v-card elevation="5" class="rounded-card pl-3 ml-5 mr-5 mt-2" style="background: rgba(51, 170, 51, .1)" @click="pushSetGoal">
    <v-card-title> 현재 등록된 목표가 없습니다!😭</v-card-title>
    <v-card-subtitle class="body-2 pb-2">
      <p style="font-size:xsmall; font-weight: light">목표를 등록해서 돈도 벌고 건강도 챙기세요!</p>
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

<style scoped>
.rounded-card {
  border-radius: 20px;
}
</style>

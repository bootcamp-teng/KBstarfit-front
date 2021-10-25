<template>
  <v-card hover elevation="5" class="pl-3 ml-5 mr-5 mt-2" color="#FCE4E4" @click="record(goal.id)">
    <v-card-title class="body-1"> {{goal.title}} </v-card-title>
    <v-card-subtitle class="body-2 pb-2">
      <p class="body-2">📆: 시작일 ~ 끝일</p>
    </v-card-subtitle>
  </v-card>
</template>

<script>
export default {
    data() {
        return {
            statusInfo: [
              '진행중', '완료', '중도포기'
            ],
            goalInfo: [
              '🏃‍♀️', '🚴‍♀️'
            ],
            colorInfo: [
              '#FCE4E4', '#D2EEE8', '#DCEDC8'
            ]
        }
    },
    props: {
        goal: Object
    },
    methods: {
        record: function(id) {
            console.log(id);
            this.$router.push({name: 'ExerciseRecord', params: {id: id}})
        }
    }
}
</script>

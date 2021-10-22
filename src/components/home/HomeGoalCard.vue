<template>
  <v-card hover elevation="5" class="pl-3 ml-5 mr-5 mt-2" color="#EF7880" dark @click="record(goal.id)">
    <v-card-title class="body-1"> {{goal.title}} </v-card-title>
    <v-card-subtitle class="body-2 pb-2">
      <p class="body-2">📆: 2021.09.10 ~ 2021.10.19</p>
    </v-card-subtitle>
  </v-card>
</template>

<script>
export default {
    data() {
        return {
            
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

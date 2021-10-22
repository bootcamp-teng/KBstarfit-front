<template>
  <v-fab-transition>
    <v-btn color="pink" dark absolute bottom right fab @click="pushSetGoal">
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </v-fab-transition>
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
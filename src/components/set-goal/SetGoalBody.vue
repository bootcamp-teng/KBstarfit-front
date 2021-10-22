<template>
    <div class="container">
        <span class="m-text">나도 </span>
        <v-text-field align="center" class="text-field" :value="period" @click="showListBox(1)" readonly></v-text-field> <span class="m-text">일 동안</span> <br />
        <v-text-field class="text-field" :value="type" @click="showListBox(3)" readonly></v-text-field><span class="m-text">운동을 </span>
        <span class="m-text">하루에</span><v-text-field class="text-field" :value="steps" @click="showListBox(2)" readonly></v-text-field> <span class="m-text">씩</span>
         <span class="m-text">매일 할 수 있다!</span>
    </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';

  export default {
    mounted: function() {
      this.$store.dispatch('setGoal/AC_GET_GOALS');
    },
    computed: {
      ...mapGetters('setGoal', [
        'GE_PERIOD',
        'GE_STEPS',
        'GE_TYPE',
        'GE_GOALS'
      ]),
      period() {
        return this.GE_PERIOD;
      },
      steps() {
        return this.GE_STEPS;
      },
      type() {
        return this.GE_TYPE;
      },
      goals() {
        return this.GE_GOALS;
      }
    },
    methods: {
      ...mapActions('setGoal', [
        'AC_SET_LIST_BOX_TYPE'
      ]),
      showListBox(type) {
        this.AC_SET_LIST_BOX_TYPE(type);
      }
    }
  }
</script>

<style scoped>
  .text-field {
    width: 100px;
    display: inline-block;
    font-size: 1.7rem;
  }

  .text-field >>> input {
    text-align: center;
  }

  .m-text {
    font-size: 1.3rem;
  }
</style>
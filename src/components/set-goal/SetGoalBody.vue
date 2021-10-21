<template>
    <div class="container">
        <span class="m-text">나도 </span>
        <v-text-field align="center" class="text-field" :value="period" @click="showListBox(1)" readonly></v-text-field> <span class="m-text">일 동안</span> <br />
        <span class="m-text">하루에</span><v-text-field class="text-field" :value="s" @click="showListBox(2)" readonly></v-text-field> <span class="m-text">씩</span>
        <v-text-field class="text-field" :value="k" @click="showListBox(3)" readonly></v-text-field> <span class="m-text">운동을<br /> 매일 할 수 있다!</span>
    </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';

  export default {
    computed: {
      ...mapGetters('setGoal', [
        'GE_PERIOD',
        'GE_STEPS',
        'GE_KINDS'
      ]),
      period() {
        return this.GE_PERIOD;
      },
      s() {
        return this.GE_STEPS;
      },
      k() {
        return this.GE_KINDS;
      },
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
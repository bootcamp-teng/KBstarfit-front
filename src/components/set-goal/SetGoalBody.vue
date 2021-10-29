<template>
    <div class="container" style="text-align: center">
      <v-row no-gutters>

        <span class="m-text">제목: </span>
        <v-text-field  v-model="vtitle" align="center" class="text-h6"></v-text-field><br>
      </v-row>
      <v-row no-gutters>

        <span class="m-text">나도 </span>
        <v-text-field  align="center" class="text-field text-h6" style="width:100px" :value="period" @click="showListBox(1)" readonly></v-text-field>
        <span class="m-text">일 동안</span><br>
      </v-row>
        <v-text-field align="center" class="text-field text-h6" :value="type" @click="showListBox(3)" readonly></v-text-field>
        <span class="m-text">운동을 </span><br>
        <span class="m-text">하루에</span><v-text-field align="center" class="text-field text-h6"  :value="steps" @click="showListBox(2)" readonly></v-text-field>
        <span class="m-text">{{ unit }}</span>
        <span class="m-text"> 씩</span><br>
        <span class="m-text">매일 할 수 있다!</span>
    </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';

  export default {
    data: () => ({
        vtitle: ''
    }),
    mounted: function() {
      this.vtitle = this.title;
      this.$store.dispatch('setGoal/AC_GET_GOALS');
    },
    computed: {
      ...mapGetters('setGoal', [
        'GE_PERIOD',
        'GE_STEPS',
        'GE_TYPE',
        'GE_GOALS',
        'GE_UNIT',
        'GE_TITLE',
      ]),
      period() { return this.GE_PERIOD; },
      steps() { return this.GE_STEPS; },
      type() { return this.GE_TYPE; },
      goals() { return this.GE_GOALS; },
      unit() { return this.GE_UNIT; },
      title() { return this.GE_TITLE; }
    },
    methods: {
      ...mapActions('setGoal', [
        'AC_SET_LIST_BOX_TYPE',
        'AC_SET_TITLE',
      ]),
      showListBox(type) {
        this.AC_SET_LIST_BOX_TYPE(type);
      }
    },
    watch: {
      vtitle: function(newVal) {
        this.AC_SET_TITLE(newVal);
      }
    }
  }
</script>

<style scoped>
  .text-field {
    width: 100px;
    display: inline-block;
  }

  .text-field >>> input {
    text-align: center;
  }

  .m-text {
    font-size: 1.3rem;
  }
</style>
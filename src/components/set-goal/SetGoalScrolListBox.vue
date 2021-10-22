<template>
    <div class="container">
        <div v-if="listBoxType === 1" style="padding-left: 120px;">
            <select size="10" class="form-control" style="height: 200px; width: 100px;">
                <option class="option-text m-text" :key="i" :value="d" @click="selected(d, i)" v-for="(d, i) in period">{{ d }}</option>
            </select>
        </div>

        <div v-if="listBoxType === 2" style="padding-left: 120px;">
            <select size="10" class="form-control" style="height: 200px; width: 100px;">
                <option class="option-text m-text" :key="i" :value="d" @click="selected(d, i)" v-for="(d, i) in stepList">{{ d }}</option>
            </select>
        </div>

        <div v-if="listBoxType === 3" style="padding-left: 120px;">
            <select size="10" class="form-control" style="height: 200px; width: 100px;">
                <option class="option-text m-text" :key="i" :value="d" @click="selected(d, i)" v-for="(d, i) in typeList">{{ d }}</option>
            </select>
        </div>
    </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
//   import $ from "jquery";

  export default {
    data: () => ({
        period: Array.from({ length: 91 }, (v, i) => i+10),
    }),
    computed: {
      ...mapGetters('setGoal', [
        'GE_LIST_BOX_TYPE',
        'GE_GOALS',
        'GE_TYPE_LIST',
        'GE_STEP_LIST',
      ]),
      listBoxType() {
        return this.GE_LIST_BOX_TYPE;
      },
      goals() {
        return this.GE_GOALS;
      },
      typeList() {
        return this.GE_TYPE_LIST;
      },
      stepList() {
        return this.GE_STEP_LIST;
      }
    },
    methods: {
        ...mapActions('setGoal', [
          'AC_SET_PERIOD',
          'AC_SET_STEPS',
          'AC_SET_TYPE',
          'AC_SET_TYPE_LIST',
          'AC_SET_STEP_LIST',
          'AC_SET_GOAL_ID',
          'AC_SET_POINT',
        ]),
        selected(d, i) {
            if (this.GE_LIST_BOX_TYPE === 1) {
              this.AC_SET_PERIOD(d);
              this.AC_SET_TYPE_LIST();
            }
            if (this.GE_LIST_BOX_TYPE === 2) {
              this.AC_SET_STEPS(d);
              this.AC_SET_POINT(d);
            }
            if (this.GE_LIST_BOX_TYPE === 3) {
              this.AC_SET_TYPE(d);
              this.AC_SET_GOAL_ID(i + 1);
              this.AC_SET_STEP_LIST(this.goals);
            }
        }
    }
  }
</script>

<style scoped>
    select {
        padding-top: 100px;
    }

    select option:checked {
        font-weight: bold;
        font-size: 1.5rem;
    }

    .option-text{
        text-align: center;
    }

    .m-text {
        font-size: 1.3rem;
    }
</style>
<template>
    <div class="container">
        <div v-if="listBoxType === 1" style="padding-left: 120px;">
            <select size="10" class="form-control" style="height: 200px; width: 100px;">
                <option class="option-text m-text" :key="i" :value="d" @click="selected(d)" v-for="(d, i) in period">{{ d }}</option>
            </select>
        </div>

        <div v-if="listBoxType === 2" style="padding-left: 120px;">
            <select size="10" class="form-control" style="height: 200px; width: 100px;">
                <option class="option-text m-text" :key="i" :value="d" @click="selected(d)" v-for="(d, i) in steps">{{ d }}</option>
            </select>
        </div>

        <div v-if="listBoxType === 3" style="padding-left: 120px;">
            <select size="10" class="form-control" style="height: 200px; width: 100px;">
                <option class="option-text m-text" :key="i" :value="d" @click="selected(d)" v-for="(d, i) in kinds">{{ d }}</option>
            </select>
        </div>
    </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
//   import $ from "jquery";

  export default {
    data: () => ({
        period: Array.from({length: 30}, (v, i) => i+1),
        steps: Array.from({ length: 30 }, (v, i) => 10000 * (i + 1)),
        kinds: ["걷기", "뛰기"],
    }),
    computed: {
      ...mapGetters('setGoal', [
        'GE_LIST_BOX_TYPE'
      ]),
      listBoxType() {
        return this.GE_LIST_BOX_TYPE;
      },
    },
    methods: {
        ...mapActions('setGoal', [
          'AC_SET_PERIOD',
          'AC_SET_STEPS',
          'AC_SET_KINDS'
        ]),
        selected(d) {
            if (this.GE_LIST_BOX_TYPE === 1) this.AC_SET_PERIOD(d);
            if (this.GE_LIST_BOX_TYPE === 2) this.AC_SET_STEPS(d);
            if (this.GE_LIST_BOX_TYPE === 3) this.AC_SET_KINDS(d);
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
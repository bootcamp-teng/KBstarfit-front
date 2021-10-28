<template>
    <div class="container" style="text-align: center">
        <div>
            <span style="font-size: 0.7rem;">끝까지 목표를 완성하면 총 
            <span style="text-decoration: underline; color: red;">{{ point }}</span>
            포인트 <v-icon style="color: red;" @click="goPointUsage()">error_outline</v-icon>
            를 받을 수 있어요!</span>
        </div>
    </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    computed: {
      ...mapGetters('setGoal', [
        'GE_POINT',
      ]),
      point() {
        return this.GE_POINT;
      },
    },
    methods: {
      goPointUsage() {
        this.$router.push('/pointUsage');
      }
    }
  }
</script>
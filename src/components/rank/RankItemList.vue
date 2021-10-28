<template>
  <div class="container">
    <rank-item v-for="user in users" :key="user.id" :user="user"></rank-item>
    <div class="container caption" v-if="users.length == 0">현재 랭킹이 없어요🥲 운동을 시작해서 1등을 노려보세요!</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import RankItem from './RankItem.vue';

export default {
    mounted: function() {
      this.$store.dispatch('rank/AC_GET_USERS_AND_ME');
    },
    computed: {
        ...mapGetters('rank', [
            'GE_USERS',
        ]),
        users() { return this.GE_USERS; },
    },
    components: {
        RankItem,
    }
}
</script>
